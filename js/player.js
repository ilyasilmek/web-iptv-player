/**
 * Video Player Engine using HLS.js
 * Handles HLS stream playback, custom controls, stream metrics, PiP, screenshot capture
 */

export class IPTVPlayer {
  constructor(videoElement, containerElement, options = {}) {
    this.video = videoElement;
    this.container = containerElement;
    this.options = options;
    this.hls = null;
    this.currentChannel = null;
    this.statsInterval = null;

    this.onStateChange = options.onStateChange || (() => {});
    this.onStatsUpdate = options.onStatsUpdate || (() => {});
    this.onError = options.onError || (() => {});

    this.initEvents();
  }

  initEvents() {
    this.video.addEventListener(play, () => this.triggerState(playing));
    this.video.addEventListener(pause, () => this.triggerState(paused));
    this.video.addEventListener(waiting, () => this.triggerState(buffering));
    this.video.addEventListener(playing, () => this.triggerState(playing));
    this.video.addEventListener(volumechange, () => {
      this.triggerState(volumechange, {
        volume: this.video.volume,
        muted: this.video.muted
      });
    });

    this.video.addEventListener(loadedmetadata, () => {
      this.triggerState(loadedmetadata, {
        videoWidth: this.video.videoWidth,
        videoHeight: this.video.videoHeight,
        duration: this.video.duration
      });
    });

    this.video.addEventListener(error, (e) => {
      console.error(Video Error Event:, this.video.error);
      this.onError({
        type: video_error,
        message: Video oynatılamadı. Akış çevrimdışı veya CORS kısıtlamalı olabilir.,
        error: this.video.error
      });
    });

    // Start stats loop
    this.statsInterval = setInterval(() => this.collectStats(), 1000);
  }

  triggerState(status, extra = {}) {
    this.onStateChange({
      status,
      currentTime: this.video.currentTime,
      duration: this.video.duration,
      paused: this.video.paused,
      muted: this.video.muted,
      volume: this.video.volume,
      ...extra
    });
  }

  playChannel(channel) {
    if (!channel || !channel.url) return;
    this.currentChannel = channel;

    const streamUrl = channel.url.trim();

    // Clean up previous Hls instance
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }

    this.triggerState(loading, { channel });

    // Check Hls.js support
    if (window.Hls && window.Hls.isSupported()) {
      const config = {
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 60,
        maxBufferLength: 30,
        maxMaxBufferLength: 600,
        maxBufferSize: 60 * 1000 * 1000,
        fragLoadingTimeOut: 20000,
        manifestLoadingTimeOut: 20000,
        levelLoadingTimeOut: 20000
      };

      this.hls = new window.Hls(config);

      this.hls.loadSource(streamUrl);
      this.hls.attachMedia(this.video);

      this.hls.on(window.Hls.Events.MANIFEST_PARSED, (event, data) => {
        const levels = data.levels.map((lvl, index) => ({
          index,
          bitrate: lvl.bitrate,
          height: lvl.height,
          name: lvl.height ? ${lvl.height}p : ${Math.round(lvl.bitrate / 1000)} kbps
        }));

        this.triggerState(manifest_parsed, { levels });

        this.video.play().catch(err => {
          console.warn(Autoplay blocked or waiting for user interaction:, err);
          this.triggerState(paused);
        });
      });

      this.hls.on(window.Hls.Events.ERROR, (event, data) => {
        console.warn(HLS.js Warning/Error:, data);
        if (data.fatal) {
          switch (data.type) {
            case window.Hls.ErrorTypes.NETWORK_ERROR:
              console.error(Fatal network error encountered, trying to recover...);
              this.hls.startLoad();
              break;
            case window.Hls.ErrorTypes.MEDIA_ERROR:
              console.error(Fatal media error encountered, trying to recover...);
              this.hls.recoverMediaError();
              break;
            default:
              console.error(Fatal unrecoverable error, destroying player...);
              this.hls.destroy();
              this.onError({
                type: fatal_hls_error,
                message: Yayın bağlantısı kurulamadı. Sunucu erişilemez veya format uyumsuz.,
                details: data
              });
              break;
          }
        }
      });

    } else if (this.video.canPlayType(application/vnd.apple.mpegurl)) {
      // Native Safari / iOS HLS
      this.video.src = streamUrl;
      this.video.play().catch(err => {
        console.warn(Autoplay blocked:, err);
      });
    } else {
      // Direct mp4 / fallback
      this.video.src = streamUrl;
      this.video.play().catch(err => {
        this.onError({
          type: unsupported,
          message: Tarayıcınız HLS (.m3u8) formatını desteklemiyor.
        });
      });
    }
  }

  togglePlay() {
    if (this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  setVolume(volume) {
    this.video.volume = Math.max(0, Math.min(1, volume));
    if (this.video.volume > 0) {
      this.video.muted = false;
    }
  }

  toggleMute() {
    this.video.muted = !this.video.muted;
  }

  setQuality(levelIndex) {
    if (this.hls) {
      this.hls.currentLevel = levelIndex; // -1 for auto
    }
  }

  getQualityLevels() {
    if (this.hls && this.hls.levels) {
      return this.hls.levels;
    }
    return [];
  }

  setAspectRatio(ratio) {
    // ratio: contain, cover, 16/9, 4/3, fill
    this.video.style.objectFit = ";
 this.video.style.aspectRatio = ;

 if (ratio === cover || ratio === contain || ratio === fill) {
 this.video.style.objectFit = ratio;
 } else if (ratio === 16/9) {
 this.video.style.objectFit = cover;
 this.video.style.aspectRatio = 16/9;
 } else if (ratio === 4/3) {
 this.video.style.objectFit = cover;
 this.video.style.aspectRatio = 4/3;
 }
 }

 async togglePiP() {
 try {
 if (document.pictureInPictureElement) {
 await document.exitPictureInPicture();
 } else if (document.pictureInPictureEnabled && this.video.readyState >= 1) {
 await this.video.requestPictureInPicture();
 }
 } catch (e) {
 console.warn(PiP Error:, e);
 }
 }

 toggleFullscreen() {
 if (!document.fullscreenElement) {
 this.container.requestFullscreen().catch(err => {
 console.warn(Fullscreen request error:, err);
 });
 } else {
 document.exitFullscreen();
 }
 }

 captureScreenshot() {
 try {
 if (!this.video.videoWidth || !this.video.videoHeight) {
 alert(Ekran görüntüsü almak için video oynatılıyor olmalıdır.);
 return;
 }

 const canvas = document.createElement(canvas);
 canvas.width = this.video.videoWidth;
 canvas.height = this.video.videoHeight;
 const ctx = canvas.getContext(2d);
 ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);

 const timestamp = new Date().toISOString().replace(/[:.]/g, -);
 const channelName = (this.currentChannel?.name || iptv-stream).replace(/[^a-zA-Z0-9_-]/g, _);
 const fileName = ${channelName}_.png;

 const link = document.createElement(a);
 link.download = fileName;
 link.href = canvas.toDataURL(image/png);
 link.click();
 } catch (e) {
 console.error(Screenshot error (often due to CORS cross-origin canvas protection):, e);
 alert(Bu kanal CORS kısıtlaması nedeniyle ekran görüntüsü alımına izin vermiyor.);
 }
 }

 collectStats() {
 if (!this.video || this.video.paused) return;

 let bitrate = 0;
 let bufferLength = 0;
 let droppedFrames = 0;

 if (this.hls) {
 const currentLevel = this.hls.levels[this.hls.currentLevel] || this.hls.levels[this.hls.autoLevel];
 if (currentLevel) {
 bitrate = Math.round(currentLevel.bitrate / 1000);
 }
 }

 if (this.video.buffered.length > 0) {
 const currentTime = this.video.currentTime;
 for (let i = 0; i < this.video.buffered.length; i++) {
 if (this.video.buffered.start(i) <= currentTime && currentTime <= this.video.buffered.end(i)) {
 bufferLength = (this.video.buffered.end(i) - currentTime).toFixed(1);
 break;
 }
 }
 }

 if (this.video.getVideoPlaybackQuality) {
 const quality = this.video.getVideoPlaybackQuality();
 droppedFrames = quality.droppedVideoFrames;
 }

 this.onStatsUpdate({
 resolution: ${this.video.videoWidth || 0}x,
 bitrate: bitrate > 0 ? ${bitrate} kbps : Canlı Akış,
 bufferLength: ${bufferLength} s,
 droppedFrames,
 volume: ${Math.round(this.video.volume * 100)}%
 });
 }

 destroy() {
 if (this.statsInterval) clearInterval(this.statsInterval);
 if (this.hls) {
 this.hls.destroy();
 this.hls = null;
 }
 }
}

import json

with open('germany_channels.json', 'r', encoding='utf-8') as f:
    germany_channels = json.load(f)

print(f"Embedding {len(germany_channels)} channels into bundle.js with Category Dropdown & Clear List feature...")

germany_json_str = json.dumps(germany_channels, ensure_ascii=False)

bundle_template = f"""(function() {{
  'use strict';

  console.log("🚀 IPTV Web Hub başlatılıyor...");

  // ================= 1. DATA: GERMANY IPTV CHANNELS (EMBEDDED 549 CHANNELS) =================
  const GERMANY_CHANNELS = {germany_json_str};

  // ================= 2. DATA: DEFAULT FREE CHANNELS =================
  const DEFAULT_FREE_CHANNELS = [
    // --- TÜRKİYE - HABER & GENEL ---
    {{
      id: "trt-1",
      name: "TRT 1 HD",
      group: "Türkiye - Ulusal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TRT_1_logo_2021.svg/320px-TRT_1_logo_2021.svg.png",
      url: "https://tv-trt1.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    }},
    {{
      id: "trt-haber",
      name: "TRT Haber HD",
      group: "Türkiye - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/TRT_Haber_logo_2021.svg/320px-TRT_Haber_logo_2021.svg.png",
      url: "https://tv-trthaber.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    }},
    {{
      id: "trt-spor",
      name: "TRT Spor HD",
      group: "Türkiye - Spor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/TRT_Spor_logo_2021.svg/320px-TRT_Spor_logo_2021.svg.png",
      url: "https://tv-trtspor1.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    }},
    {{
      id: "trt-belgesel",
      name: "TRT Belgesel HD",
      group: "Türkiye - Belgesel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/TRT_Belgesel_logo_2021.svg/320px-TRT_Belgesel_logo_2021.svg.png",
      url: "https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    }},
    {{
      id: "trt-muzik",
      name: "TRT Müzik HD",
      group: "Türkiye - Müzik",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/TRT_M%C3%BCzik_logo_2021.svg/320px-TRT_M%C3%BCzik_logo_2021.svg.png",
      url: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "HD"
    }},
    {{
      id: "trt-cocuk",
      name: "TRT Çocuk HD",
      group: "Türkiye - Çocuk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/TRT_%C3%87ocuk_logo_2021.svg/320px-TRT_%C3%87ocuk_logo_2021.svg.png",
      url: "https://tv-trtcocuk.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    }},
    {{
      id: "trt-world",
      name: "TRT World HD (English)",
      group: "Türkiye - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/TRT_World_logo_2021.svg/320px-TRT_World_logo_2021.svg.png",
      url: "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    }},

    // --- DÜNYA HABER & BİLGİ ---
    {{
      id: "euronews-en",
      name: "Euronews (English)",
      group: "Dünya - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Euronews_2016_logo.svg/320px-Euronews_2016_logo.svg.png",
      url: "https://euronews-euronews-news-world-1-us.samsung.wurl.tv/playlist.m3u8",
      country: "EU",
      resolution: "HD"
    }},
    {{
      id: "dw-english",
      name: "Deutsche Welle (English)",
      group: "Dünya - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Deutsche_Welle_logo.svg/320px-Deutsche_Welle_logo.svg.png",
      url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8",
      country: "DE",
      resolution: "FHD"
    }},
    {{
      id: "france24-en",
      name: "France 24 HD (English)",
      group: "Dünya - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/France_24_logo_2013.svg/320px-France_24_logo_2013.svg.png",
      url: "https://f24hls-i.akamaihd.net/hls/live/221193/F24_EN_LO_HLS/master.m3u8",
      country: "FR",
      resolution: "HD"
    }},
    {{
      id: "aljazeera-en",
      name: "Al Jazeera English HD",
      group: "Dünya - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Al_Jazeera_English_logo.svg/320px-Al_Jazeera_English_logo.svg.png",
      url: "https://live-hls-web-aje.getaj.net/AJE/03.m3u8",
      country: "QA",
      resolution: "FHD"
    }},

    // --- BİLİM, UZAY & SPOR ---
    {{
      id: "nasa-tv",
      name: "NASA TV HD (Public)",
      group: "Bilim & Belgesel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/320px-NASA_logo.svg.png",
      url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8",
      country: "US",
      resolution: "FHD"
    }},
    {{
      id: "redbull-tv",
      name: "Red Bull TV",
      group: "Spor & Macera",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Red_Bull_TV_logo.svg/320px-Red_Bull_TV_logo.svg.png",
      url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
      country: "AT",
      resolution: "FHD"
    }},
    {{
      id: "clubland-tv",
      name: "Clubland TV HD",
      group: "Müzik & Eğlence",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Clubland_TV_Logo.png/320px-Clubland_TV_Logo.png",
      url: "https://m7.distro.tv/live/eds/clubland/hls_video/index.m3u8",
      country: "UK",
      resolution: "HD"
    }},
    {{
      id: "big-buck-bunny",
      name: "Big Buck Bunny (4K Test)",
      group: "Test & VOD",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/320px-Big_buck_bunny_poster_big.jpg",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      country: "NL",
      resolution: "4K"
    }}
  ];

  const PRESET_PLAYLISTS = [
    {{
      id: "preset-user-germany",
      name: "⚡ Özel Almanya IPTV (ilyasilmek) [549 Kanal]",
      url: "local_germany",
      description: "Tüm Türk Ulusal, Spor, Sinema, Belgesel ve Çocuk kanalları."
    }},
    {{
      id: "preset-default",
      name: "Varsayılan Halka Açık Kanallar (TR & Dünya)",
      url: "local_default",
      description: "TRT Kanalları, Uluslararası Haberler, NASA TV, RedBull ve Müzik kanalları."
    }},
    {{
      id: "preset-iptv-tr",
      name: "IPTV-ORG Türkiye Kanalları (GitHub)",
      url: "https://iptv-org.github.io/iptv/countries/tr.m3u",
      description: "GitHub iptv-org topluluğunun güncel Türkiye listesi."
    }},
    {{
      id: "preset-iptv-news",
      name: "IPTV-ORG Dünya Haber Kanalları (News)",
      url: "https://iptv-org.github.io/iptv/categories/news.m3u",
      description: "Tüm dünyadan 24/7 canlı haber yayınları."
    }}
  ];

  // ================= 3. STORAGE MANAGER =================
  const STORAGE_KEYS = {{
    FAVORITES: "iptv_favorites_v1",
    PLAYLISTS: "iptv_custom_playlists_v1",
    HISTORY: "iptv_history_v1",
    SETTINGS: "iptv_settings_v1"
  }};

  const Storage = {{
    getFavorites() {{
      try {{
        const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return data ? JSON.parse(data) : [];
      }} catch (e) {{
        return [];
      }}
    }},

    isFavorite(channelId) {{
      const favs = this.getFavorites();
      return favs.some(ch => ch.id === channelId || ch.url === channelId);
    }},

    toggleFavorite(channel) {{
      let favs = this.getFavorites();
      const index = favs.findIndex(ch => ch.id === channel.id || (ch.url && ch.url === channel.url));
      let isAdded = false;

      if (index > -1) {{
        favs.splice(index, 1);
        isAdded = false;
      }} else {{
        favs.unshift(channel);
        isAdded = true;
      }}

      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
      return {{ isAdded, favorites: favs }};
    }},

    getCustomPlaylists() {{
      try {{
        const data = localStorage.getItem(STORAGE_KEYS.PLAYLISTS);
        return data ? JSON.parse(data) : [];
      }} catch (e) {{
        return [];
      }}
    }},

    saveCustomPlaylist(playlist) {{
      const playlists = this.getCustomPlaylists();
      const exists = playlists.find(p => p.id === playlist.id || p.name === playlist.name);
      if (!exists) {{
        playlists.unshift(playlist);
      }} else {{
        const idx = playlists.indexOf(exists);
        playlists[idx] = playlist;
      }}
      localStorage.setItem(STORAGE_KEYS.PLAYLISTS, JSON.stringify(playlists));
      return playlists;
    }},

    deleteCustomPlaylist(playlistId) {{
      let playlists = this.getCustomPlaylists();
      playlists = playlists.filter(p => p.id !== playlistId);
      localStorage.setItem(STORAGE_KEYS.PLAYLISTS, JSON.stringify(playlists));
      return playlists;
    }},

    clearAllCustomPlaylists() {{
      localStorage.removeItem(STORAGE_KEYS.PLAYLISTS);
    }},

    getHistory() {{
      try {{
        const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
        return data ? JSON.parse(data) : [];
      }} catch (e) {{
        return [];
      }}
    }},

    addToHistory(channel) {{
      if (!channel) return;
      let history = this.getHistory();
      history = history.filter(item => item.url !== channel.url);
      history.unshift({{
        ...channel,
        watchedAt: new Date().toISOString()
      }});
      if (history.length > 30) history = history.slice(0, 30);
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    }},

    clearHistory() {{
      localStorage.removeItem(STORAGE_KEYS.HISTORY);
    }},

    getSettings() {{
      try {{
        const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
        return data ? JSON.parse(data) : {{ volume: 0.9, aspectRatio: "contain" }};
      }} catch (e) {{
        return {{ volume: 0.9, aspectRatio: "contain" }};
      }}
    }},

    saveSettings(settings) {{
      try {{
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
      }} catch (e) {{}}
    }}
  }};

  // ================= 4. M3U PARSER =================
  function parseM3U(content) {{
    if (!content || typeof content !== "string") {{
      return {{ channels: [], groups: [] }};
    }}

    const lines = content.split(/\\r?\\n/);
    const channels = [];
    const groupsSet = new Set();
    let currentChannel = null;

    for (let i = 0; i < lines.length; i++) {{
      const line = lines[i].trim();
      if (!line) continue;

      if (line.startsWith("#EXTINF:")) {{
        currentChannel = extractExtInfData(line);
      }} else if (line.startsWith("#EXTGRP:") && currentChannel) {{
        const grp = line.replace("#EXTGRP:", "").trim();
        if (grp) currentChannel.group = grp;
      }} else if (!line.startsWith("#")) {{
        if (currentChannel) {{
          currentChannel.url = line;
          if (!currentChannel.group) currentChannel.group = "Genel";
          if (!currentChannel.resolution) currentChannel.resolution = detectResolution(currentChannel.name);
          groupsSet.add(currentChannel.group);
          channels.push(currentChannel);
          currentChannel = null;
        }} else if (line.startsWith("http://") || line.startsWith("https://")) {{
          const title = line.split("/").pop().split("?")[0] || "Kanal " + (channels.length + 1);
          channels.push({{
            id: "ch-" + Math.random().toString(36).substr(2, 9),
            name: title,
            group: "Genel",
            logo: "",
            url: line,
            resolution: detectResolution(title)
          }});
          groupsSet.add("Genel");
        }}
      }}
    }}

    return {{
      channels,
      groups: Array.from(groupsSet).sort()
    }};
  }}

  function extractExtInfData(line) {{
    const channel = {{
      id: "ch-" + Math.random().toString(36).substr(2, 9),
      name: "İsimsiz Kanal",
      group: "Genel",
      logo: "",
      url: "",
      resolution: "HD"
    }};

    const tvgIdMatch = line.match(/tvg-id="([^"]*)"/i);
    if (tvgIdMatch && tvgIdMatch[1]) channel.tvgId = tvgIdMatch[1];

    const tvgNameMatch = line.match(/tvg-name="([^"]*)"/i);
    if (tvgNameMatch && tvgNameMatch[1]) channel.tvgName = tvgNameMatch[1];

    const logoMatch = line.match(/tvg-logo="([^"]*)"/i);
    if (logoMatch && logoMatch[1]) channel.logo = logoMatch[1];

    const groupMatch = line.match(/group-title="([^"]*)"/i);
    if (groupMatch && groupMatch[1]) channel.group = groupMatch[1];

    const countryMatch = line.match(/tvg-country="([^"]*)"/i);
    if (countryMatch && countryMatch[1]) channel.country = countryMatch[1];

    const commaIndex = line.lastIndexOf(",");
    if (commaIndex !== -1 && commaIndex < line.length - 1) {{
      const rawTitle = line.substring(commaIndex + 1).trim();
      if (rawTitle) channel.name = rawTitle;
    }} else if (channel.tvgName) {{
      channel.name = channel.tvgName;
    }}

    return channel;
  }}

  function detectResolution(title) {{
    if (!title) return "HD";
    const upper = title.toUpperCase();
    if (upper.includes("4K") || upper.includes("UHD") || upper.includes("2160P")) return "4K";
    if (upper.includes("FHD") || upper.includes("1080P") || upper.includes("1080I")) return "FHD";
    if (upper.includes("HD") || upper.includes("720P")) return "HD";
    if (upper.includes("SD") || upper.includes("576P") || upper.includes("480P")) return "SD";
    return "HD";
  }}

  // ================= 5. VIDEO PLAYER ENGINE =================
  class IPTVPlayer {{
    constructor(videoElement, containerElement, options = {{}}) {{
      this.video = videoElement;
      this.container = containerElement;
      this.options = options;
      this.hls = null;
      this.currentChannel = null;
      this.statsInterval = null;

      this.onStateChange = options.onStateChange || (() => {{}});
      this.onStatsUpdate = options.onStatsUpdate || (() => {{}});
      this.onError = options.onError || (() => {{}});

      this.initEvents();
    }}

    initEvents() {{
      this.video.addEventListener("play", () => this.triggerState("playing"));
      this.video.addEventListener("pause", () => this.triggerState("paused"));
      this.video.addEventListener("waiting", () => this.triggerState("buffering"));
      this.video.addEventListener("playing", () => this.triggerState("playing"));
      this.video.addEventListener("volumechange", () => {{
        this.triggerState("volumechange", {{
          volume: this.video.volume,
          muted: this.video.muted
        }});
      }});

      this.video.addEventListener("loadedmetadata", () => {{
        this.triggerState("loadedmetadata", {{
          videoWidth: this.video.videoWidth,
          videoHeight: this.video.videoHeight,
          duration: this.video.duration
        }});
      }});

      this.video.addEventListener("error", (e) => {{
        console.warn("Video Error:", this.video.error);
        this.triggerState("error", {{ error: this.video.error }});
      }});

      this.statsInterval = setInterval(() => this.collectStats(), 1000);
    }}

    triggerState(status, extra = {{}}) {{
      this.onStateChange({{
        status,
        currentTime: this.video.currentTime,
        duration: this.video.duration,
        paused: this.video.paused,
        muted: this.video.muted,
        volume: this.video.volume,
        ...extra
      }});
    }}

    playChannel(channel) {{
      if (!channel || !channel.url) return;
      this.currentChannel = channel;
      let streamUrl = channel.url.trim();

      if (streamUrl.endsWith(".ts")) {{
        streamUrl = streamUrl.replace(/\\.ts$/, ".m3u8");
      }}

      console.log("▶ Oynatılıyor:", channel.name, "URL:", streamUrl);

      if (this.hls) {{
        this.hls.destroy();
        this.hls = null;
      }}

      this.triggerState("loading", {{ channel }});

      if (window.Hls && window.Hls.isSupported()) {{
        const hls = new window.Hls({{
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 30,
          maxBufferLength: 20
        }});
        this.hls = hls;

        hls.loadSource(streamUrl);
        hls.attachMedia(this.video);

        hls.on(window.Hls.Events.MANIFEST_PARSED, (event, data) => {{
          const levels = (data.levels || []).map((lvl, index) => ({{
            index,
            bitrate: lvl.bitrate,
            height: lvl.height,
            name: lvl.height ? `${{lvl.height}}p` : `${{Math.round(lvl.bitrate / 1000)}}k`
          }}));

          this.triggerState("manifest_parsed", {{ levels }});

          const playPromise = this.video.play();
          if (playPromise !== undefined) {{
            playPromise.catch(err => {{
              console.warn("Autoplay engellendi:", err);
              this.triggerState("autoplay_blocked");
            }});
          }}
        }});

        hls.on(window.Hls.Events.ERROR, (event, data) => {{
          if (data.fatal) {{
            console.warn("HLS Fatal Error:", data);
            switch (data.type) {{
              case window.Hls.ErrorTypes.NETWORK_ERROR:
                console.warn("Ağ hatası, sunucu bağlantısı kurulamadı...");
                hls.destroy();
                this.triggerState("error", {{ details: data, message: "Yayın sunucusu bağlantıyı reddetti (CORS veya eşzamanlı bağlantı sınırı (2/2) dolu)." }});
                break;
              case window.Hls.ErrorTypes.MEDIA_ERROR:
                console.warn("Medya format hatası...");
                hls.recoverMediaError();
                break;
              default:
                hls.destroy();
                this.triggerState("error", {{ details: data, message: "Yayın oynatılamadı. Sunucu çevrimdışı olabilir." }});
                break;
            }}
          }}
        }});

      }} else if (this.video.canPlayType("application/vnd.apple.mpegurl")) {{
        this.video.src = streamUrl;
        this.video.play().catch(() => this.triggerState("autoplay_blocked"));
      }} else {{
        this.video.src = streamUrl;
        this.video.play().catch(() => this.triggerState("autoplay_blocked"));
      }}
    }}

    stop() {{
      if (this.hls) {{
        this.hls.destroy();
        this.hls = null;
      }}
      this.video.pause();
      this.video.removeAttribute("src");
      this.video.load();
      this.currentChannel = null;
    }}

    togglePlay() {{
      if (this.video.paused) {{
        this.video.play().catch(e => console.warn(e));
      }} else {{
        this.video.pause();
      }}
    }}

    setVolume(volume) {{
      this.video.volume = Math.max(0, Math.min(1, volume));
      if (this.video.volume > 0) this.video.muted = false;
    }}

    toggleMute() {{
      this.video.muted = !this.video.muted;
    }}

    setQuality(levelIndex) {{
      if (this.hls) {{
        this.hls.currentLevel = levelIndex;
      }}
    }}

    setAspectRatio(ratio) {{
      this.video.style.objectFit = "";
      this.video.style.aspectRatio = "";
      if (ratio === "cover" || ratio === "contain" || ratio === "fill") {{
        this.video.style.objectFit = ratio;
      }} else if (ratio === "16/9") {{
        this.video.style.objectFit = "cover";
        this.video.style.aspectRatio = "16/9";
      }} else if (ratio === "4/3") {{
        this.video.style.objectFit = "cover";
        this.video.style.aspectRatio = "4/3";
      }}
    }}

    async togglePiP() {{
      try {{
        if (document.pictureInPictureElement) {{
          await document.exitPictureInPicture();
        }} else if (document.pictureInPictureEnabled && this.video.readyState >= 1) {{
          await this.video.requestPictureInPicture();
        }}
      }} catch (e) {{
        console.warn("PiP Hatası:", e);
      }}
    }}

    toggleFullscreen() {{
      if (!document.fullscreenElement) {{
        this.container.requestFullscreen().catch(e => console.warn(e));
      }} else {{
        document.exitFullscreen();
      }}
    }}

    captureScreenshot() {{
      try {{
        if (!this.video.videoWidth || !this.video.videoHeight) {{
          alert("Ekran görüntüsü almak için yayın açık olmalıdır.");
          return;
        }}
        const canvas = document.createElement("canvas");
        canvas.width = this.video.videoWidth;
        canvas.height = this.video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);

        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const channelName = (this.currentChannel?.name || "iptv-stream").replace(/[^a-zA-Z0-9_-]/g, "_");
        const link = document.createElement("a");
        link.download = `${{channelName}}_${{timestamp}}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      }} catch (e) {{
        alert("Bu yayın CORS güvenlik koruması nedeniyle ekran görüntüsü alımını kısıtlıyor.");
      }}
    }}

    collectStats() {{
      if (!this.video || this.video.paused) return;
      let bitrate = 0;
      let bufferLength = 0;
      let droppedFrames = 0;

      if (this.hls && this.hls.levels) {{
        const lvl = this.hls.levels[this.hls.currentLevel] || this.hls.levels[this.hls.autoLevel];
        if (lvl) bitrate = Math.round(lvl.bitrate / 1000);
      }}

      if (this.video.buffered && this.video.buffered.length > 0) {{
        const cur = this.video.currentTime;
        for (let i = 0; i < this.video.buffered.length; i++) {{
          if (this.video.buffered.start(i) <= cur && cur <= this.video.buffered.end(i)) {{
            bufferLength = (this.video.buffered.end(i) - cur).toFixed(1);
            break;
          }}
        }}
      }}

      if (this.video.getVideoPlaybackQuality) {{
        droppedFrames = this.video.getVideoPlaybackQuality().droppedVideoFrames;
      }}

      this.onStatsUpdate({{
        resolution: `${{this.video.videoWidth || 0}}x${{this.video.videoHeight || 0}}`,
        bitrate: bitrate > 0 ? `${{bitrate}} kbps` : "Canlı Akış",
        bufferLength: `${{bufferLength}} s`,
        droppedFrames
      }});
    }}
  }}

  // ================= 6. MAIN APP CONTROLLER =================
  class IPTVApp {{
    constructor() {{
      // Start with user's Germany IPTV playlist by default!
      this.channels = [...GERMANY_CHANNELS];
      this.currentPlaylistName = "⚡ Özel Almanya IPTV (ilyasilmek)";
      this.currentCategory = "all";
      this.searchQuery = "";
      this.currentChannelIndex = 0;
      this.viewMode = "list";
      this.showStats = false;
      this.isSidebarOpen = true;

      // DOM Elements
      this.videoEl = document.getElementById("video-element");
      this.playerContainer = document.getElementById("player-container");
      this.autoplayOverlay = document.getElementById("autoplay-overlay");
      this.playerErrorOverlay = document.getElementById("player-error-overlay");
      this.playerErrorMessage = document.getElementById("player-error-message");
      this.btnPlayerRetry = document.getElementById("btn-player-retry");
      this.btnPlayerSwitchFree = document.getElementById("btn-player-switch-free");
      this.channelsContainer = document.getElementById("channels-container");
      this.categorySelect = document.getElementById("select-category");
      this.activeCategoryBadge = document.getElementById("active-category-badge");
      this.btnClearChannels = document.getElementById("btn-clear-channels");
      this.btnModalClearAll = document.getElementById("btn-modal-clear-all");
      this.channelCountEl = document.getElementById("channel-count");
      this.currentChannelTitleEl = document.getElementById("current-channel-title");
      this.currentChannelGroupEl = document.getElementById("current-channel-group");
      this.currentChannelLogoEl = document.getElementById("current-channel-logo");
      this.currentChannelLogoPlaceholder = document.getElementById("current-channel-logo-placeholder");
      this.currentChannelBadgeEl = document.getElementById("current-channel-badge");
      this.searchInput = document.getElementById("search-input");
      this.playPauseBtn = document.getElementById("btn-play-pause");
      this.playPauseIcon = document.getElementById("icon-play-pause");
      this.volumeSlider = document.getElementById("volume-slider");
      this.volumeBtn = document.getElementById("btn-volume");
      this.volumeIcon = document.getElementById("icon-volume");
      this.fullscreenBtn = document.getElementById("btn-fullscreen");
      this.pipBtn = document.getElementById("btn-pip");
      this.screenshotBtn = document.getElementById("btn-screenshot");
      this.statsToggleBtn = document.getElementById("btn-stats-toggle");
      this.statsOverlay = document.getElementById("stats-overlay");
      this.prevChannelBtn = document.getElementById("btn-prev-channel");
      this.nextChannelBtn = document.getElementById("btn-next-channel");
      this.aspectRatioSelect = document.getElementById("select-aspect-ratio");
      this.qualitySelect = document.getElementById("select-quality");
      this.channelFavoriteBtn = document.getElementById("btn-channel-favorite");
      this.playlistTitleBadge = document.getElementById("playlist-title-badge");

      // Modals
      this.playlistModal = document.getElementById("modal-playlist");
      this.directUrlModal = document.getElementById("modal-direct-url");
      this.shortcutsModal = document.getElementById("modal-shortcuts");

      // Initialize Player Engine
      this.player = new IPTVPlayer(this.videoEl, this.playerContainer, {{
        onStateChange: (state) => this.handlePlayerStateChange(state),
        onStatsUpdate: (stats) => this.handleStatsUpdate(stats),
        onError: (err) => console.warn("Player Error:", err)
      }});

      this.init();
    }}

    init() {{
      console.log("IPTVApp başlatıldı. Kanal sayısı:", this.channels.length);
      this.loadInitialData();
      this.bindEvents();
      this.setupKeyboardShortcuts();
      this.renderCategories();
      this.renderChannels();
      this.renderPlaylistsMenu();

      // Start first channel
      if (this.channels.length > 0) {{
        this.playChannelByIndex(0);
      }}
    }}

    loadInitialData() {{
      const settings = Storage.getSettings();
      if (settings.volume !== undefined && this.volumeSlider) {{
        this.player.setVolume(settings.volume);
        this.volumeSlider.value = settings.volume * 100;
      }}
    }}

    bindEvents() {{
      // Search
      this.searchInput?.addEventListener("input", (e) => {{
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderChannels();
      }});

      document.getElementById("btn-clear-search")?.addEventListener("click", () => {{
        if (this.searchInput) this.searchInput.value = "";
        this.searchQuery = "";
        this.renderChannels();
      }});

      // Category Dropdown Change (Açılır Liste)
      this.categorySelect?.addEventListener("change", (e) => {{
        this.currentCategory = e.target.value;
        if (this.activeCategoryBadge) {{
          const selText = this.categorySelect.options[this.categorySelect.selectedIndex]?.text || "Tümü";
          const cleanName = selText.replace(/^[\\p{{Emoji}}\\s]+/u, '').split('(')[0].trim();
          this.activeCategoryBadge.textContent = cleanName || "Tümü";
        }}
        this.renderChannels();
      }});

      // Clear Playlists & Channels (Listeleri Temizle)
      this.btnClearChannels?.addEventListener("click", () => this.clearAllChannels());
      this.btnModalClearAll?.addEventListener("click", () => {{
        this.clearAllChannels();
        this.closeAllModals();
      }});

      // Autoplay overlay click
      this.autoplayOverlay?.addEventListener("click", () => {{
        this.autoplayOverlay.classList.add("hidden");
        this.player.togglePlay();
      }});

      // Error overlay buttons
      this.btnPlayerRetry?.addEventListener("click", () => {{
        this.playerErrorOverlay?.classList.add("hidden");
        const current = this.channels[this.currentChannelIndex];
        if (current) this.player.playChannel(current);
      }});

      this.btnPlayerSwitchFree?.addEventListener("click", () => {{
        this.playerErrorOverlay?.classList.add("hidden");
        this.channels = [...DEFAULT_FREE_CHANNELS];
        this.currentPlaylistName = "Varsayılan Halka Açık Kanallar";
        this.updatePlaylistUI();
      }});

      // Player controls
      this.playPauseBtn?.addEventListener("click", () => {{
        this.autoplayOverlay?.classList.add("hidden");
        this.player.togglePlay();
      }});

      this.volumeBtn?.addEventListener("click", () => this.player.toggleMute());
      
      this.volumeSlider?.addEventListener("input", (e) => {{
        const val = parseFloat(e.target.value) / 100;
        this.player.setVolume(val);
        Storage.saveSettings({{ ...Storage.getSettings(), volume: val }});
      }});

      this.fullscreenBtn?.addEventListener("click", () => this.player.toggleFullscreen());
      this.pipBtn?.addEventListener("click", () => this.player.togglePiP());
      this.screenshotBtn?.addEventListener("click", () => this.player.captureScreenshot());
      this.statsToggleBtn?.addEventListener("click", () => this.toggleStatsHUD());

      this.prevChannelBtn?.addEventListener("click", () => this.playPreviousChannel());
      this.nextChannelBtn?.addEventListener("click", () => this.playNextChannel());

      this.aspectRatioSelect?.addEventListener("change", (e) => {{
        this.player.setAspectRatio(e.target.value);
      }});

      this.qualitySelect?.addEventListener("change", (e) => {{
        this.player.setQuality(parseInt(e.target.value));
      }});

      this.channelFavoriteBtn?.addEventListener("click", () => {{
        const current = this.channels[this.currentChannelIndex];
        if (current) {{
          const res = Storage.toggleFavorite(current);
          this.updateFavoriteButtonState(res.isAdded);
          this.renderCategories();
          if (this.currentCategory === "favorites") {{
            this.renderChannels();
          }}
        }}
      }});

      // View mode toggle
      document.getElementById("btn-view-list")?.addEventListener("click", () => {{
        this.viewMode = "list";
        this.updateViewModeButtons();
        this.renderChannels();
      }});

      document.getElementById("btn-view-grid")?.addEventListener("click", () => {{
        this.viewMode = "grid";
        this.updateViewModeButtons();
        this.renderChannels();
      }});

      // Sidebar mobile toggle
      document.getElementById("btn-toggle-sidebar")?.addEventListener("click", () => {{
        this.toggleSidebar();
      }});

      // Modals
      document.getElementById("btn-open-playlist-modal")?.addEventListener("click", () => this.openModal(this.playlistModal));
      document.getElementById("btn-open-direct-url-modal")?.addEventListener("click", () => this.openModal(this.directUrlModal));
      document.getElementById("btn-open-shortcuts-modal")?.addEventListener("click", () => this.openModal(this.shortcutsModal));

      document.querySelectorAll(".modal-close-btn").forEach(btn => {{
        btn.addEventListener("click", () => this.closeAllModals());
      }});

      [this.playlistModal, this.directUrlModal, this.shortcutsModal].forEach(modal => {{
        if (modal) {{
          modal.addEventListener("click", (e) => {{
            if (e.target === modal) this.closeAllModals();
          }});
        }}
      }});

      // Direct URL Form
      document.getElementById("form-direct-url")?.addEventListener("submit", (e) => {{
        e.preventDefault();
        const urlInput = document.getElementById("input-direct-url");
        const nameInput = document.getElementById("input-direct-name");
        const url = urlInput?.value.trim();
        const name = nameInput?.value.trim() || "Özel Canlı Akış";

        if (url) {{
          const customChannel = {{
            id: "custom-" + Date.now(),
            name,
            group: "Özel Akışlar",
            url,
            logo: "",
            resolution: "HD"
          }};
          this.channels.unshift(customChannel);
          this.renderCategories();
          this.renderChannels();
          this.playChannelByIndex(0);
          this.closeAllModals();
          if (urlInput) urlInput.value = "";
          if (nameInput) nameInput.value = "";
        }}
      }});

      // M3U URL Button
      document.getElementById("btn-load-m3u-url")?.addEventListener("click", () => {{
        const urlInput = document.getElementById("input-m3u-url");
        const url = urlInput?.value.trim();
        if (url) {{
          this.loadM3UFromUrl(url);
        }}
      }});

      // File upload
      const fileInput = document.getElementById("input-m3u-file");
      fileInput?.addEventListener("change", (e) => {{
        const file = e.target.files[0];
        if (file) {{
          this.loadM3UFromFile(file);
        }}
      }});

      // Drag & Drop
      const dropZone = document.getElementById("m3u-drop-zone");
      if (dropZone) {{
        dropZone.addEventListener("dragover", (e) => {{
          e.preventDefault();
          dropZone.classList.add("border-sky-500", "bg-sky-500/10");
        }});
        dropZone.addEventListener("dragleave", () => {{
          dropZone.classList.remove("border-sky-500", "bg-sky-500/10");
        }});
        dropZone.addEventListener("drop", (e) => {{
          e.preventDefault();
          dropZone.classList.remove("border-sky-500", "bg-sky-500/10");
          if (e.dataTransfer.files.length > 0) {{
            this.loadM3UFromFile(e.dataTransfer.files[0]);
          }}
        }});
      }}
    }}

    setupKeyboardShortcuts() {{
      window.addEventListener("keydown", (e) => {{
        if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;

        switch (e.code) {{
          case "Space":
            e.preventDefault();
            this.player.togglePlay();
            break;
          case "ArrowUp":
            e.preventDefault();
            this.playPreviousChannel();
            break;
          case "ArrowDown":
            e.preventDefault();
            this.playNextChannel();
            break;
          case "ArrowRight":
            e.preventDefault();
            this.adjustVolume(0.05);
            break;
          case "ArrowLeft":
            e.preventDefault();
            this.adjustVolume(-0.05);
            break;
          case "KeyF":
            e.preventDefault();
            this.player.toggleFullscreen();
            break;
          case "KeyM":
            e.preventDefault();
            this.player.toggleMute();
            break;
          case "KeyP":
            e.preventDefault();
            this.player.togglePiP();
            break;
          case "KeyS":
            e.preventDefault();
            this.player.captureScreenshot();
            break;
          case "KeyI":
            e.preventDefault();
            this.toggleStatsHUD();
            break;
          case "Escape":
            this.closeAllModals();
            break;
        }}
      }});
    }}

    adjustVolume(delta) {{
      if (!this.videoEl) return;
      const newVol = Math.max(0, Math.min(1, this.videoEl.volume + delta));
      this.player.setVolume(newVol);
      if (this.volumeSlider) this.volumeSlider.value = newVol * 100;
    }}

    playChannelByIndex(index) {{
      const filtered = this.getFilteredChannels();
      if (index >= 0 && index < filtered.length) {{
        const channel = filtered[index];
        this.currentChannelIndex = this.channels.findIndex(ch => ch.url === channel.url);
        if (this.currentChannelIndex === -1) this.currentChannelIndex = index;

        this.playerErrorOverlay?.classList.add("hidden");
        this.updateActiveChannelDisplay(channel);
        this.player.playChannel(channel);
        Storage.addToHistory(channel);
        this.highlightActiveChannelItem();
      }}
    }}

    playNextChannel() {{
      const filtered = this.getFilteredChannels();
      if (filtered.length === 0) return;
      const current = this.channels[this.currentChannelIndex];
      let currentIndexInFiltered = filtered.findIndex(c => c.url === current?.url);
      let nextIndex = (currentIndexInFiltered + 1) % filtered.length;
      this.playChannelByIndex(nextIndex);
    }}

    playPreviousChannel() {{
      const filtered = this.getFilteredChannels();
      if (filtered.length === 0) return;
      const current = this.channels[this.currentChannelIndex];
      let currentIndexInFiltered = filtered.findIndex(c => c.url === current?.url);
      let prevIndex = (currentIndexInFiltered - 1 + filtered.length) % filtered.length;
      this.playChannelByIndex(prevIndex);
    }}

    updateActiveChannelDisplay(channel) {{
      if (!channel) {{
        if (this.currentChannelTitleEl) this.currentChannelTitleEl.textContent = "Kanal Seçilmedi";
        if (this.currentChannelGroupEl) this.currentChannelGroupEl.textContent = "Liste Boş";
        if (this.currentChannelBadgeEl) this.currentChannelBadgeEl.textContent = "-";
        if (this.currentChannelLogoEl) this.currentChannelLogoEl.classList.add("hidden");
        if (this.currentChannelLogoPlaceholder) {{
          this.currentChannelLogoPlaceholder.textContent = "TV";
          this.currentChannelLogoPlaceholder.classList.remove("hidden");
        }}
        return;
      }}

      if (this.currentChannelTitleEl) this.currentChannelTitleEl.textContent = channel.name;
      if (this.currentChannelGroupEl) this.currentChannelGroupEl.textContent = channel.group || "Canlı Yayın";
      if (this.currentChannelBadgeEl) this.currentChannelBadgeEl.textContent = channel.resolution || "HD";

      if (channel.logo && this.currentChannelLogoEl) {{
        this.currentChannelLogoEl.src = channel.logo;
        this.currentChannelLogoEl.classList.remove("hidden");
        if (this.currentChannelLogoPlaceholder) this.currentChannelLogoPlaceholder.classList.add("hidden");
        
        this.currentChannelLogoEl.onerror = () => {{
          this.currentChannelLogoEl.classList.add("hidden");
          if (this.currentChannelLogoPlaceholder) {{
            this.currentChannelLogoPlaceholder.textContent = channel.name.substring(0, 2).toUpperCase();
            this.currentChannelLogoPlaceholder.classList.remove("hidden");
          }}
        }};
      }} else {{
        if (this.currentChannelLogoEl) this.currentChannelLogoEl.classList.add("hidden");
        if (this.currentChannelLogoPlaceholder) {{
          this.currentChannelLogoPlaceholder.textContent = channel.name.substring(0, 2).toUpperCase();
          this.currentChannelLogoPlaceholder.classList.remove("hidden");
        }}
      }}

      const isFav = Storage.isFavorite(channel.id || channel.url);
      this.updateFavoriteButtonState(isFav);
    }}

    updateFavoriteButtonState(isFavorite) {{
      if (!this.channelFavoriteBtn) return;
      if (isFavorite) {{
        this.channelFavoriteBtn.classList.add("text-rose-500", "bg-rose-500/20", "border-rose-500/40");
        this.channelFavoriteBtn.classList.remove("text-slate-400", "bg-slate-800/80", "border-slate-700");
        this.channelFavoriteBtn.innerHTML = `<svg class="w-5 h-5 fill-rose-500" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> <span>Favori</span>`;
      }} else {{
        this.channelFavoriteBtn.classList.remove("text-rose-500", "bg-rose-500/20", "border-rose-500/40");
        this.channelFavoriteBtn.classList.add("text-slate-400", "bg-slate-800/80", "border-slate-700");
        this.channelFavoriteBtn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg> <span>Favori</span>`;
      }}
    }}

    getFilteredChannels() {{
      let result = [...this.channels];

      if (this.currentCategory === "favorites") {{
        const favs = Storage.getFavorites();
        result = result.filter(ch => favs.some(f => f.id === ch.id || f.url === ch.url));
      }} else if (this.currentCategory === "history") {{
        result = Storage.getHistory();
      }} else if (this.currentCategory !== "all") {{
        result = result.filter(ch => ch.group === this.currentCategory);
      }}

      if (this.searchQuery) {{
        result = result.filter(ch =>
          ch.name.toLowerCase().includes(this.searchQuery) ||
          (ch.group && ch.group.toLowerCase().includes(this.searchQuery))
        );
      }}

      return result;
    }}

    renderCategories() {{
      if (!this.categorySelect) return;
      const groups = new Set();
      this.channels.forEach(ch => {{
        if (ch.group) groups.add(ch.group);
      }});

      const categoryList = Array.from(groups).sort();
      const favsCount = Storage.getFavorites().length;
      const historyCount = Storage.getHistory().length;

      let optionsHtml = `
        <option value="all" ${{this.currentCategory === "all" ? "selected" : ""}}>📂 Tüm Kanallar (${{this.channels.length}})</option>
        <option value="favorites" ${{this.currentCategory === "favorites" ? "selected" : ""}}>⭐ Favoriler (${{favsCount}})</option>
        <option value="history" ${{this.currentCategory === "history" ? "selected" : ""}}>🕒 Son İzlenenler (${{historyCount}})</option>
      `;

      categoryList.forEach(cat => {{
        const count = this.channels.filter(c => c.group === cat).length;
        const isSelected = this.currentCategory === cat;
        
        let icon = "📺";
        const upper = cat.toUpperCase();
        if (upper.includes("SPOR")) icon = "⚽";
        else if (upper.includes("SİNEMA") || upper.includes("SINEMA") || upper.includes("FILM")) icon = "🎬";
        else if (upper.includes("HABER")) icon = "📰";
        else if (upper.includes("BELGESEL")) icon = "🦁";
        else if (upper.includes("ÇOCUK") || upper.includes("COCUK")) icon = "👶";
        else if (upper.includes("MÜZİK") || upper.includes("MUZIK")) icon = "🎵";
        else if (upper.includes("YEREL")) icon = "📍";
        else if (upper.includes("UHD") || upper.includes("4K")) icon = "💎";

        optionsHtml += `
          <option value="${{cat}}" ${{isSelected ? "selected" : ""}}>
            ${{icon}} ${{cat}} (${{count}})
          </option>
        `;
      }});

      this.categorySelect.innerHTML = optionsHtml;

      if (this.activeCategoryBadge) {{
        if (this.currentCategory === "all") this.activeCategoryBadge.textContent = `Tümü (${{this.channels.length}})`;
        else if (this.currentCategory === "favorites") this.activeCategoryBadge.textContent = `Favoriler (${{favsCount}})`;
        else if (this.currentCategory === "history") this.activeCategoryBadge.textContent = `Geçmiş (${{historyCount}})`;
        else this.activeCategoryBadge.textContent = this.currentCategory;
      }}
    }}

    renderChannels() {{
      if (!this.channelsContainer) return;
      const filtered = this.getFilteredChannels();
      if (this.channelCountEl) this.channelCountEl.textContent = `${{filtered.length}} kanal listelendi`;

      if (this.channels.length === 0) {{
        this.channelsContainer.innerHTML = `
          <div class="p-8 text-center text-slate-400 flex flex-col items-center justify-center h-64">
            <div class="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
              <svg class="w-7 h-7 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <p class="font-bold text-sm text-slate-200">Kanal Listesi Boş</p>
            <p class="text-xs text-slate-400 mt-1 max-w-[220px]">Listeler temizlendi. Aşağıdaki butonlardan bir liste yükleyebilirsiniz.</p>
            <div class="flex flex-col gap-2 mt-4 w-full max-w-[240px]">
              <button id="btn-quick-load-germany" class="w-full py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-all">
                ⚡ Özel Almanya IPTV'yi Yükle
              </button>
              <button id="btn-quick-load-free" class="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 font-semibold text-xs transition-all">
                Varsayılan Kanalları Yükle
              </button>
            </div>
          </div>
        `;

        document.getElementById("btn-quick-load-germany")?.addEventListener("click", () => {{
          this.channels = [...GERMANY_CHANNELS];
          this.currentPlaylistName = "⚡ Özel Almanya IPTV (ilyasilmek)";
          this.updatePlaylistUI();
        }});

        document.getElementById("btn-quick-load-free")?.addEventListener("click", () => {{
          this.channels = [...DEFAULT_FREE_CHANNELS];
          this.currentPlaylistName = "Varsayılan Halka Açık Kanallar";
          this.updatePlaylistUI();
        }});

        return;
      }}

      if (filtered.length === 0) {{
        this.channelsContainer.innerHTML = `
          <div class="p-8 text-center text-slate-400 flex flex-col items-center justify-center">
            <svg class="w-12 h-12 mb-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="font-medium text-sm text-slate-300">Kanal bulunamadı</p>
            <p class="text-xs text-slate-500 mt-1">Arama kelimenizi veya filtreyi değiştirmeyi deneyin.</p>
          </div>
        `;
        return;
      }}

      const current = this.channels[this.currentChannelIndex];

      if (this.viewMode === "grid") {{
        this.channelsContainer.className = "flex-1 min-h-0 overflow-y-auto p-3 grid grid-cols-2 gap-2.5";
        this.channelsContainer.innerHTML = filtered.map((ch, idx) => {{
          const isActive = current && current.url === ch.url;
          const isFav = Storage.isFavorite(ch.id || ch.url);
          return `
            <div data-index="${{idx}}" class="channel-card cursor-pointer p-3 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800/80 flex flex-col items-center text-center relative group ${{isActive ? "active" : ""}}">
              <button data-fav-url="${{ch.url}}" class="btn-item-fav absolute top-2 right-2 p-1 text-slate-500 hover:text-rose-500 transition-colors">
                <svg class="w-4 h-4 ${{isFav ? "fill-rose-500 text-rose-500" : "fill-none stroke-current"}}" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </button>
              <div class="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-2 overflow-hidden p-1 border border-slate-700/50">
                ${{ch.logo ? `<img src="${{ch.logo}}" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none" class="text-xs font-bold text-sky-400">${{ch.name.substring(0, 2).toUpperCase()}}</span>` : `<span class="text-xs font-bold text-sky-400">${{ch.name.substring(0, 2).toUpperCase()}}</span>`}}
              </div>
              <h4 class="text-xs font-semibold text-slate-200 line-clamp-1 w-full">${{ch.name}}</h4>
              <div class="flex items-center gap-1.5 mt-1">
                <span class="text-[10px] text-slate-400 truncate max-w-[80px]">${{ch.group || "Genel"}}</span>
                <span class="text-[9px] px-1 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">${{ch.resolution || "HD"}}</span>
              </div>
            </div>
          `;
        }}).join("");
      }} else {{
        this.channelsContainer.className = "flex-1 min-h-0 overflow-y-auto p-2 flex flex-col gap-1.5";
        this.channelsContainer.innerHTML = filtered.map((ch, idx) => {{
          const isActive = current && current.url === ch.url;
          const isFav = Storage.isFavorite(ch.id || ch.url);
          return `
            <div data-index="${{idx}}" class="channel-card cursor-pointer px-3 py-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 hover:bg-slate-800/70 flex items-center justify-between gap-3 ${{isActive ? "active" : ""}}">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-9 h-9 rounded-lg bg-slate-800 flex-shrink-0 flex items-center justify-center overflow-hidden p-1 border border-slate-700/50">
                  ${{ch.logo ? `<img src="${{ch.logo}}" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none" class="text-xs font-bold text-sky-400">${{ch.name.substring(0, 2).toUpperCase()}}</span>` : `<span class="text-xs font-bold text-sky-400">${{ch.name.substring(0, 2).toUpperCase()}}</span>`}}
                </div>
                <div class="min-w-0">
                  <h4 class="text-xs font-semibold text-slate-100 truncate">${{ch.name}}</h4>
                  <div class="flex items-center gap-2 mt-0.5">
                    <span class="text-[11px] text-slate-400 truncate">${{ch.group || "Genel"}}</span>
                    <span class="text-[9px] px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 font-mono">${{ch.resolution || "HD"}}</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-1">
                ${{isActive ? `<span class="flex h-2 w-2 relative mr-1"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>` : ""}}
                <button data-fav-url="${{ch.url}}" class="btn-item-fav p-1.5 text-slate-500 hover:text-rose-500 transition-colors">
                  <svg class="w-4 h-4 ${{isFav ? "fill-rose-500 text-rose-500" : "fill-none stroke-current"}}" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </button>
              </div>
            </div>
          `;
        }}).join("");
      }}

      // Attach card clicks
      this.channelsContainer.querySelectorAll(".channel-card").forEach(card => {{
        card.addEventListener("click", (e) => {{
          if (e.target.closest(".btn-item-fav")) return;
          const idx = parseInt(card.getAttribute("data-index"));
          this.playChannelByIndex(idx);
        }});
      }});

      // Attach favorite toggle clicks
      this.channelsContainer.querySelectorAll(".btn-item-fav").forEach(btn => {{
        btn.addEventListener("click", (e) => {{
          e.stopPropagation();
          const url = btn.getAttribute("data-fav-url");
          const ch = this.channels.find(c => c.url === url);
          if (ch) {{
            const res = Storage.toggleFavorite(ch);
            if (this.channels[this.currentChannelIndex]?.url === url) {{
              this.updateFavoriteButtonState(res.isAdded);
            }}
            this.renderCategories();
            this.renderChannels();
          }}
        }});
      }});
    }}

    clearAllChannels() {{
      if (confirm("Mevcut kanal listesi temizlensin mi?")) {{
        this.channels = [];
        this.currentPlaylistName = "Liste Yok (Temizlendi)";
        this.currentChannelIndex = -1;
        this.currentCategory = "all";
        this.player.stop();
        this.updateActiveChannelDisplay(null);
        this.updatePlaylistUI();
      }}
    }}

    highlightActiveChannelItem() {{
      this.renderChannels();
      const activeCard = this.channelsContainer?.querySelector(".channel-card.active");
      if (activeCard) {{
        activeCard.scrollIntoView({{ behavior: "smooth", block: "nearest" }});
      }}
    }}

    renderPlaylistsMenu() {{
      const presetListContainer = document.getElementById("preset-playlists-container");
      const customListContainer = document.getElementById("custom-playlists-container");

      if (presetListContainer) {{
        presetListContainer.innerHTML = PRESET_PLAYLISTS.map(p => `
          <div class="p-3 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800 flex items-center justify-between gap-3">
            <div>
              <h4 class="text-xs font-semibold text-slate-200">${{p.name}}</h4>
              <p class="text-[11px] text-slate-400 mt-0.5">${{p.description}}</p>
            </div>
            <button data-url="${{p.url}}" data-name="${{p.name}}" class="btn-load-preset px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500 text-sky-300 hover:text-white text-xs font-medium transition-all">
              Yükle
            </button>
          </div>
        `).join("");

        presetListContainer.querySelectorAll(".btn-load-preset").forEach(btn => {{
          btn.addEventListener("click", () => {{
            const url = btn.getAttribute("data-url");
            const name = btn.getAttribute("data-name");
            if (url === "local_germany") {{
              this.channels = [...GERMANY_CHANNELS];
              this.currentPlaylistName = name;
              this.updatePlaylistUI();
              this.closeAllModals();
            }} else if (url === "local_default") {{
              this.channels = [...DEFAULT_FREE_CHANNELS];
              this.currentPlaylistName = name;
              this.updatePlaylistUI();
              this.closeAllModals();
            }} else {{
              this.loadM3UFromUrl(url, name);
            }}
          }});
        }});
      }}

      const customPlaylists = Storage.getCustomPlaylists();
      if (customListContainer) {{
        if (customPlaylists.length === 0) {{
          customListContainer.innerHTML = `<p class="text-xs text-slate-500">Henüz kaydedilmiş özel oynatma listesi yok.</p>`;
        }} else {{
          customListContainer.innerHTML = customPlaylists.map(p => `
            <div class="p-3 rounded-xl border border-slate-800/80 bg-slate-900/60 flex items-center justify-between gap-3">
              <div>
                <h4 class="text-xs font-semibold text-slate-200">${{p.name}}</h4>
                <p class="text-[11px] text-slate-400 mt-0.5">${{p.channels.length}} kanal</p>
              </div>
              <div class="flex items-center gap-2">
                <button data-id="${{p.id}}" class="btn-load-custom px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500 text-sky-300 hover:text-white text-xs font-medium transition-all">Yükle</button>
                <button data-id="${{p.id}}" class="btn-del-custom p-1.5 text-slate-500 hover:text-rose-500"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
              </div>
            </div>
          `).join("");

          customListContainer.querySelectorAll(".btn-load-custom").forEach(btn => {{
            btn.addEventListener("click", () => {{
              const id = btn.getAttribute("data-id");
              const p = customPlaylists.find(x => x.id === id);
              if (p) {{
                this.channels = p.channels;
                this.currentPlaylistName = p.name;
                this.updatePlaylistUI();
                this.closeAllModals();
              }}
            }});
          }});

          customListContainer.querySelectorAll(".btn-del-custom").forEach(btn => {{
            btn.addEventListener("click", () => {{
              const id = btn.getAttribute("data-id");
              Storage.deleteCustomPlaylist(id);
              this.renderPlaylistsMenu();
            }});
          }});
        }}
      }}
    }}

    async loadM3UFromUrl(url, customName = null) {{
      const loadingBadge = document.getElementById("loading-playlist-indicator");
      if (loadingBadge) loadingBadge.classList.remove("hidden");

      try {{
        let response;
        try {{
          response = await fetch(url);
        }} catch (err) {{
          console.warn("Doğrudan fetch engellendi, genel proxy deneniyor:", err);
          response = await fetch(`https://api.allorigins.win/raw?url=${{encodeURIComponent(url)}}`);
        }}

        const text = await response.text();
        const parsed = parseM3U(text);

        if (parsed.channels.length > 0) {{
          this.channels = parsed.channels;
          this.currentPlaylistName = customName || "Özel IPTV Listesi";
          
          Storage.saveCustomPlaylist({{
            id: "pl-" + Date.now(),
            name: this.currentPlaylistName,
            channels: this.channels,
            createdAt: new Date().toISOString()
          }});

          this.updatePlaylistUI();
          this.closeAllModals();
        }} else {{
          alert("Oynatma listesinde geçerli kanal bulunamadı.");
        }}
      }} catch (e) {{
        console.error("M3U yükleme hatası:", e);
        alert("Oynatma listesi indirilemedi. Bağlantınızı ve URL adresini kontrol edin.");
      }} finally {{
        if (loadingBadge) loadingBadge.classList.add("hidden");
      }}
    }}

    loadM3UFromFile(file) {{
      const reader = new FileReader();
      reader.onload = (e) => {{
        const content = e.target.result;
        const parsed = parseM3U(content);

        if (parsed.channels.length > 0) {{
          this.channels = parsed.channels;
          this.currentPlaylistName = file.name.replace(/\\.[^/.]+$/, "");
          
          Storage.saveCustomPlaylist({{
            id: "pl-" + Date.now(),
            name: this.currentPlaylistName,
            channels: this.channels,
            createdAt: new Date().toISOString()
          }});

          this.updatePlaylistUI();
          this.closeAllModals();
        }} else {{
          alert("Yüklenen M3U dosyasında kanal bulunamadı.");
        }}
      }};
      reader.readAsText(file);
    }}

    updatePlaylistUI() {{
      if (this.playlistTitleBadge) this.playlistTitleBadge.textContent = this.currentPlaylistName;
      this.currentCategory = "all";
      this.renderCategories();
      this.renderChannels();
      this.renderPlaylistsMenu();
      if (this.channels.length > 0) {{
        this.playChannelByIndex(0);
      }}
    }}

    updateViewModeButtons() {{
      const listBtn = document.getElementById("btn-view-list");
      const gridBtn = document.getElementById("btn-view-grid");
      if (this.viewMode === "list") {{
        listBtn?.classList.add("bg-slate-700", "text-sky-400");
        gridBtn?.classList.remove("bg-slate-700", "text-sky-400");
      }} else {{
        gridBtn?.classList.add("bg-slate-700", "text-sky-400");
        listBtn?.classList.remove("bg-slate-700", "text-sky-400");
      }}
    }}

    toggleSidebar() {{
      const sidebar = document.getElementById("sidebar-channels");
      if (!sidebar) return;
      this.isSidebarOpen = !this.isSidebarOpen;
      if (this.isSidebarOpen) {{
        sidebar.classList.remove("hidden");
      }} else {{
        sidebar.classList.add("hidden");
      }}
    }}

    toggleStatsHUD() {{
      this.showStats = !this.showStats;
      if (this.showStats) {{
        this.statsOverlay?.classList.remove("hidden");
        this.statsToggleBtn?.classList.add("text-sky-400", "bg-sky-500/20");
      }} else {{
        this.statsOverlay?.classList.add("hidden");
        this.statsToggleBtn?.classList.remove("text-sky-400", "bg-sky-500/20");
      }}
    }}

    handlePlayerStateChange(state) {{
      const spinner = document.getElementById("player-buffering-spinner");
      if (state.status === "loading" || state.status === "buffering") {{
        spinner?.classList.remove("hidden");
      }} else {{
        spinner?.classList.add("hidden");
      }}

      if (state.status === "error") {{
        this.playerErrorOverlay?.classList.remove("hidden");
        if (this.playerErrorMessage) {{
          this.playerErrorMessage.textContent = state.message || "Yayın akışı başlatılamadı (Sunucu yanıt vermedi veya hesap eşzamanlı bağlantı sınırı (2/2) dolu).";
        }}
      }} else if (state.status === "playing") {{
        this.playerErrorOverlay?.classList.add("hidden");
        this.autoplayOverlay?.classList.add("hidden");
      }}

      if (state.status === "autoplay_blocked") {{
        this.autoplayOverlay?.classList.remove("hidden");
      }}

      if (this.playPauseIcon) {{
        if (state.paused) {{
          this.playPauseIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
        }} else {{
          this.playPauseIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
        }}
      }}

      if (this.volumeIcon) {{
        if (state.muted || state.volume === 0) {{
          this.volumeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>`;
        }} else {{
          this.volumeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>`;
        }}
      }}

      if (state.levels && state.levels.length > 0 && this.qualitySelect) {{
        this.qualitySelect.innerHTML = `<option value="-1">Kalite: Otomatik</option>` +
          state.levels.map(l => `<option value="${{l.index}}">${{l.name}}</option>`).join("");
        this.qualitySelect.classList.remove("hidden");
      }}
    }}

    handleStatsUpdate(stats) {{
      const resEl = document.getElementById("stat-res");
      const bitEl = document.getElementById("stat-bitrate");
      const bufEl = document.getElementById("stat-buffer");
      const drpEl = document.getElementById("stat-dropped");

      if (resEl) resEl.textContent = stats.resolution;
      if (bitEl) bitEl.textContent = stats.bitrate;
      if (bufEl) bufEl.textContent = stats.bufferLength;
      if (drpEl) drpEl.textContent = stats.droppedFrames;
    }}

    openModal(modal) {{
      if (modal) {{
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }}
    }}

    closeAllModals() {{
      [this.playlistModal, this.directUrlModal, this.shortcutsModal].forEach(m => {{
        if (m) {{
          m.classList.add("hidden");
          m.classList.remove("flex");
        }}
      }});
    }}
  }}

  function start() {{
    if (!window.iptvApp) {{
      window.iptvApp = new IPTVApp();
    }}
  }}

  if (document.readyState === "loading") {{
    document.addEventListener("DOMContentLoaded", start);
  }} else {{
    start();
  }}

}})();
"""

with open('js/bundle.js', 'w', encoding='utf-8') as f:
    f.write(bundle_template)

print("bundle.js successfully updated with Dropdown Categories and Clear List functionality!")

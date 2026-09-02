import { DEFAULT_CHANNELS, PRESET_PLAYLISTS } from "./channels.js";
import { parseM3U } from "./parser.js";
import { Storage } from "./storage.js";
import { IPTVPlayer } from "./player.js";

class IPTVApp {
  constructor() {
    this.channels = [...DEFAULT_CHANNELS];
    this.currentPlaylistName = "Varsayılan Halka Açık Kanallar";
    this.currentCategory = "all";
    this.searchQuery = "";
    this.currentChannelIndex = 0;
    this.viewMode = "list"; // "list" | "grid"
    this.showStats = false;
    this.isSidebarOpen = true;

    // DOM Elements
    this.videoEl = document.getElementById("video-element");
    this.playerContainer = document.getElementById("player-container");
    this.channelsContainer = document.getElementById("channels-container");
    this.categoriesContainer = document.getElementById("categories-container");
    this.channelCountEl = document.getElementById("channel-count");
    this.currentChannelTitleEl = document.getElementById("current-channel-title");
    this.currentChannelGroupEl = document.getElementById("current-channel-group");
    this.currentChannelLogoEl = document.getElementById("current-channel-logo");
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

    // Initialize Player
    this.player = new IPTVPlayer(this.videoEl, this.playerContainer, {
      onStateChange: (state) => this.handlePlayerStateChange(state),
      onStatsUpdate: (stats) => this.handleStatsUpdate(stats),
      onError: (err) => this.handlePlayerError(err)
    });

    this.init();
  }

  init() {
    this.loadInitialData();
    this.bindEvents();
    this.setupKeyboardShortcuts();
    this.renderCategories();
    this.renderChannels();
    this.renderPlaylistsMenu();

    // Auto play first channel
    if (this.channels.length > 0) {
      this.playChannelByIndex(0);
    }
  }

  loadInitialData() {
    const settings = Storage.getSettings();
    if (settings.volume !== undefined) {
      this.player.setVolume(settings.volume);
      this.volumeSlider.value = settings.volume * 100;
    }
  }

  bindEvents() {
    // Search
    this.searchInput.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.renderChannels();
    });

    // Clear search
    document.getElementById("btn-clear-search")?.addEventListener("click", () => {
      this.searchInput.value = "";
      this.searchQuery = "";
      this.renderChannels();
    });

    // Player controls
    this.playPauseBtn.addEventListener("click", () => this.player.togglePlay());
    this.volumeBtn.addEventListener("click", () => this.player.toggleMute());
    this.volumeSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value) / 100;
      this.player.setVolume(val);
      Storage.saveSettings({ ...Storage.getSettings(), volume: val });
    });

    this.fullscreenBtn.addEventListener("click", () => this.player.toggleFullscreen());
    this.pipBtn.addEventListener("click", () => this.player.togglePiP());
    this.screenshotBtn.addEventListener("click", () => this.player.captureScreenshot());
    this.statsToggleBtn.addEventListener("click", () => this.toggleStatsHUD());

    this.prevChannelBtn.addEventListener("click", () => this.playPreviousChannel());
    this.nextChannelBtn.addEventListener("click", () => this.playNextChannel());

    this.aspectRatioSelect.addEventListener("change", (e) => {
      this.player.setAspectRatio(e.target.value);
    });

    this.qualitySelect.addEventListener("change", (e) => {
      this.player.setQuality(parseInt(e.target.value));
    });

    this.channelFavoriteBtn.addEventListener("click", () => {
      const current = this.channels[this.currentChannelIndex];
      if (current) {
        const res = Storage.toggleFavorite(current);
        this.updateFavoriteButtonState(res.isAdded);
        if (this.currentCategory === "favorites") {
          this.renderChannels();
        }
      }
    });

    // View mode toggle (List / Grid)
    document.getElementById("btn-view-list")?.addEventListener("click", () => {
      this.viewMode = "list";
      this.updateViewModeButtons();
      this.renderChannels();
    });

    document.getElementById("btn-view-grid")?.addEventListener("click", () => {
      this.viewMode = "grid";
      this.updateViewModeButtons();
      this.renderChannels();
    });

    // Sidebar toggle for mobile/desktop
    document.getElementById("btn-toggle-sidebar")?.addEventListener("click", () => {
      this.toggleSidebar();
    });

    // Modal Triggers
    document.getElementById("btn-open-playlist-modal")?.addEventListener("click", () => {
      this.openModal(this.playlistModal);
    });

    document.getElementById("btn-open-direct-url-modal")?.addEventListener("click", () => {
      this.openModal(this.directUrlModal);
    });

    document.getElementById("btn-open-shortcuts-modal")?.addEventListener("click", () => {
      this.openModal(this.shortcutsModal);
    });

    // Modal Close buttons
    document.querySelectorAll(".modal-close-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.closeAllModals();
      });
    });

    // Close modals on background click
    [this.playlistModal, this.directUrlModal, this.shortcutsModal].forEach(modal => {
      if (modal) {
        modal.addEventListener("click", (e) => {
          if (e.target === modal) this.closeAllModals();
        });
      }
    });

    // Direct URL form submit
    document.getElementById("form-direct-url")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const urlInput = document.getElementById("input-direct-url");
      const nameInput = document.getElementById("input-direct-name");
      const url = urlInput.value.trim();
      const name = nameInput.value.trim() || "Özel Canlı Akış";

      if (url) {
        const customChannel = {
          id: "custom-" + Date.now(),
          name,
          group: "Özel Akışlar",
          url,
          logo: "",
          resolution: "HD"
        };
        this.channels.unshift(customChannel);
        this.renderCategories();
        this.renderChannels();
        this.playChannelByIndex(0);
        this.closeAllModals();
        urlInput.value = "";
        nameInput.value = "";
      }
    });

    // M3U URL load
    document.getElementById("btn-load-m3u-url")?.addEventListener("click", () => {
      const urlInput = document.getElementById("input-m3u-url");
      const url = urlInput.value.trim();
      if (url) {
        this.loadM3UFromUrl(url);
      }
    });

    // M3U File upload
    const fileInput = document.getElementById("input-m3u-file");
    fileInput?.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        this.loadM3UFromFile(file);
      }
    });

    // Drag and Drop M3U file on dropzone
    const dropZone = document.getElementById("m3u-drop-zone");
    if (dropZone) {
      dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("border-sky-500", "bg-sky-500/10");
      });
      dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("border-sky-500", "bg-sky-500/10");
      });
      dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.classList.remove("border-sky-500", "bg-sky-500/10");
        if (e.dataTransfer.files.length > 0) {
          this.loadM3UFromFile(e.dataTransfer.files[0]);
        }
      });
    }
  }

  setupKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        return;
      }

      switch (e.code) {
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
      }
    });
  }

  adjustVolume(delta) {
    const newVol = Math.max(0, Math.min(1, this.videoEl.volume + delta));
    this.player.setVolume(newVol);
    this.volumeSlider.value = newVol * 100;
  }

  playChannelByIndex(index) {
    const filtered = this.getFilteredChannels();
    if (index >= 0 && index < filtered.length) {
      const channel = filtered[index];
      this.currentChannelIndex = this.channels.findIndex(ch => ch.url === channel.url);
      if (this.currentChannelIndex === -1) this.currentChannelIndex = index;

      this.updateActiveChannelDisplay(channel);
      this.player.playChannel(channel);
      Storage.addToHistory(channel);
      this.highlightActiveChannelItem();
    }
  }

  playNextChannel() {
    const filtered = this.getFilteredChannels();
    if (filtered.length === 0) return;
    const current = this.channels[this.currentChannelIndex];
    let currentIndexInFiltered = filtered.findIndex(c => c.url === current?.url);
    let nextIndex = (currentIndexInFiltered + 1) % filtered.length;
    this.playChannelByIndex(nextIndex);
  }

  playPreviousChannel() {
    const filtered = this.getFilteredChannels();
    if (filtered.length === 0) return;
    const current = this.channels[this.currentChannelIndex];
    let currentIndexInFiltered = filtered.findIndex(c => c.url === current?.url);
    let prevIndex = (currentIndexInFiltered - 1 + filtered.length) % filtered.length;
    this.playChannelByIndex(prevIndex);
  }

  updateActiveChannelDisplay(channel) {
    this.currentChannelTitleEl.textContent = channel.name;
    this.currentChannelGroupEl.textContent = channel.group || "Canlı Yayın";
    this.currentChannelBadgeEl.textContent = channel.resolution || "HD";

    if (channel.logo) {
      this.currentChannelLogoEl.src = channel.logo;
      this.currentChannelLogoEl.classList.remove("hidden");
    } else {
      this.currentChannelLogoEl.classList.add("hidden");
    }

    const isFav = Storage.isFavorite(channel.id || channel.url);
    this.updateFavoriteButtonState(isFav);
  }

  updateFavoriteButtonState(isFavorite) {
    if (isFavorite) {
      this.channelFavoriteBtn.classList.add("text-rose-500", "bg-rose-500/20", "border-rose-500/40");
      this.channelFavoriteBtn.classList.remove("text-slate-400", "bg-slate-800/80", "border-slate-700");
      this.channelFavoriteBtn.innerHTML = `<svg class="w-5 h-5 fill-rose-500" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    } else {
      this.channelFavoriteBtn.classList.remove("text-rose-500", "bg-rose-500/20", "border-rose-500/40");
      this.channelFavoriteBtn.classList.add("text-slate-400", "bg-slate-800/80", "border-slate-700");
      this.channelFavoriteBtn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`;
    }
  }

  getFilteredChannels() {
    let result = [...this.channels];

    if (this.currentCategory === "favorites") {
      const favs = Storage.getFavorites();
      result = result.filter(ch => favs.some(f => f.id === ch.id || f.url === ch.url));
    } else if (this.currentCategory === "history") {
      result = Storage.getHistory();
    } else if (this.currentCategory !== "all") {
      result = result.filter(ch => ch.group === this.currentCategory);
    }

    if (this.searchQuery) {
      result = result.filter(ch =>
        ch.name.toLowerCase().includes(this.searchQuery) ||
        (ch.group && ch.group.toLowerCase().includes(this.searchQuery))
      );
    }

    return result;
  }

  renderCategories() {
    const groups = new Set();
    this.channels.forEach(ch => {
      if (ch.group) groups.add(ch.group);
    });

    const categoryList = Array.from(groups).sort();

    let html = `
      <button data-cat="all" class="cat-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${this.currentCategory === "all" ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30" : "bg-slate-800/70 text-slate-400 hover:text-white hover:bg-slate-700/60"}">
        Tümü (${this.channels.length})
      </button>
      <button data-cat="favorites" class="cat-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${this.currentCategory === "favorites" ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30" : "bg-slate-800/70 text-rose-400 hover:text-white hover:bg-slate-700/60"}">
        <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        Favoriler
      </button>
      <button data-cat="history" class="cat-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${this.currentCategory === "history" ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30" : "bg-slate-800/70 text-amber-400 hover:text-white hover:bg-slate-700/60"}">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        Son İzlenenler
      </button>
    `;

    categoryList.forEach(cat => {
      const count = this.channels.filter(c => c.group === cat).length;
      const isActive = this.currentCategory === cat;
      html += `
        <button data-cat="${cat}" class="cat-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${isActive ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30" : "bg-slate-800/70 text-slate-400 hover:text-white hover:bg-slate-700/60"}">
          ${cat} (${count})
        </button>
      `;
    });

    this.categoriesContainer.innerHTML = html;

    this.categoriesContainer.querySelectorAll(".cat-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-cat");
        this.currentCategory = cat;
        this.renderCategories();
        this.renderChannels();
      });
    });
  }

  renderChannels() {
    const filtered = this.getFilteredChannels();
    this.channelCountEl.textContent = `${filtered.length} kanal listelendi`;

    if (filtered.length === 0) {
      this.channelsContainer.innerHTML = `
        <div class="p-8 text-center text-slate-400 flex flex-col items-center justify-center">
          <svg class="w-12 h-12 mb-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="font-medium">Kanal bulunamadı</p>
          <p class="text-xs text-slate-500 mt-1">Arama kelimenizi veya filtreyi değiştirmeyi deneyin.</p>
        </div>
      `;
      return;
    }

    const current = this.channels[this.currentChannelIndex];

    if (this.viewMode === "grid") {
      this.channelsContainer.className = "grid grid-cols-2 gap-2.5 p-3";
      this.channelsContainer.innerHTML = filtered.map((ch, idx) => {
        const isActive = current && current.url === ch.url;
        const isFav = Storage.isFavorite(ch.id || ch.url);
        return `
          <div data-index="${idx}" class="channel-card cursor-pointer p-3 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800/80 flex flex-col items-center text-center relative group ${isActive ? "active" : ""}">
            <button data-fav-url="${ch.url}" class="btn-item-fav absolute top-2 right-2 p-1 text-slate-500 hover:text-rose-500 transition-colors">
              <svg class="w-4 h-4 ${isFav ? "fill-rose-500 text-rose-500" : "fill-none stroke-current"}" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>
            <div class="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-2 overflow-hidden p-1 border border-slate-700/50">
              ${ch.logo ? `<img src="${ch.logo}" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none" class="text-xs font-bold text-sky-400">${ch.name.substring(0, 2).toUpperCase()}</span>` : `<span class="text-xs font-bold text-sky-400">${ch.name.substring(0, 2).toUpperCase()}</span>`}
            </div>
            <h4 class="text-xs font-semibold text-slate-200 line-clamp-1 w-full">${ch.name}</h4>
            <div class="flex items-center gap-1.5 mt-1">
              <span class="text-[10px] text-slate-400">${ch.group || "Genel"}</span>
              <span class="text-[9px] px-1 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">${ch.resolution || "HD"}</span>
            </div>
          </div>
        `;
      }).join("");
    } else {
      this.channelsContainer.className = "flex flex-col gap-1.5 p-2";
      this.channelsContainer.innerHTML = filtered.map((ch, idx) => {
        const isActive = current && current.url === ch.url;
        const isFav = Storage.isFavorite(ch.id || ch.url);
        return `
          <div data-index="${idx}" class="channel-card cursor-pointer px-3 py-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 hover:bg-slate-800/70 flex items-center justify-between gap-3 ${isActive ? "active" : ""}">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-9 h-9 rounded-lg bg-slate-800 flex-shrink-0 flex items-center justify-center overflow-hidden p-1 border border-slate-700/50">
                ${ch.logo ? `<img src="${ch.logo}" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span style="display:none" class="text-xs font-bold text-sky-400">${ch.name.substring(0, 2).toUpperCase()}</span>` : `<span class="text-xs font-bold text-sky-400">${ch.name.substring(0, 2).toUpperCase()}</span>`}
              </div>
              <div class="min-w-0">
                <h4 class="text-xs font-semibold text-slate-100 truncate">${ch.name}</h4>
                <div class="flex items-center gap-2 mt-0.5">
                  <span class="text-[11px] text-slate-400 truncate">${ch.group || "Genel"}</span>
                  <span class="text-[9px] px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 font-mono">${ch.resolution || "HD"}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-1">
              ${isActive ? `<span class="flex h-2 w-2 relative mr-1"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>` : ""}
              <button data-fav-url="${ch.url}" class="btn-item-fav p-1.5 text-slate-500 hover:text-rose-500 transition-colors">
                <svg class="w-4 h-4 ${isFav ? "fill-rose-500 text-rose-500" : "fill-none stroke-current"}" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </button>
            </div>
          </div>
        `;
      }).join("");
    }

    // Attach card clicks
    this.channelsContainer.querySelectorAll(".channel-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".btn-item-fav")) return;
        const idx = parseInt(card.getAttribute("data-index"));
        this.playChannelByIndex(idx);
      });
    });

    // Attach favorite toggle clicks inside list
    this.channelsContainer.querySelectorAll(".btn-item-fav").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const url = btn.getAttribute("data-fav-url");
        const ch = this.channels.find(c => c.url === url);
        if (ch) {
          const res = Storage.toggleFavorite(ch);
          if (this.channels[this.currentChannelIndex]?.url === url) {
            this.updateFavoriteButtonState(res.isAdded);
          }
          this.renderChannels();
        }
      });
    });
  }

  highlightActiveChannelItem() {
    this.renderChannels();
    const activeCard = this.channelsContainer.querySelector(".channel-card.active");
    if (activeCard) {
      activeCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  renderPlaylistsMenu() {
    const presetListContainer = document.getElementById("preset-playlists-container");
    const customListContainer = document.getElementById("custom-playlists-container");

    if (presetListContainer) {
      presetListContainer.innerHTML = PRESET_PLAYLISTS.map(p => `
        <div class="p-3 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-800 flex items-center justify-between gap-3">
          <div>
            <h4 class="text-xs font-semibold text-slate-200">${p.name}</h4>
            <p class="text-[11px] text-slate-400 mt-0.5">${p.description}</p>
          </div>
          <button data-url="${p.url}" data-name="${p.name}" class="btn-load-preset px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500 text-sky-300 hover:text-white text-xs font-medium transition-all">
            Yükle
          </button>
        </div>
      `).join("");

      presetListContainer.querySelectorAll(".btn-load-preset").forEach(btn => {
        btn.addEventListener("click", () => {
          const url = btn.getAttribute("data-url");
          const name = btn.getAttribute("data-name");
          if (!url) {
            this.channels = [...DEFAULT_CHANNELS];
            this.currentPlaylistName = name;
            this.updatePlaylistUI();
            this.closeAllModals();
          } else {
            this.loadM3UFromUrl(url, name);
          }
        });
      });
    }

    const customPlaylists = Storage.getCustomPlaylists();
    if (customListContainer) {
      if (customPlaylists.length === 0) {
        customListContainer.innerHTML = `<p class="text-xs text-slate-500">Henüz kaydedilmiş özel oynatma listesi yok.</p>`;
      } else {
        customListContainer.innerHTML = customPlaylists.map(p => `
          <div class="p-3 rounded-xl border border-slate-800/80 bg-slate-900/60 flex items-center justify-between gap-3">
            <div>
              <h4 class="text-xs font-semibold text-slate-200">${p.name}</h4>
              <p class="text-[11px] text-slate-400 mt-0.5">${p.channels.length} kanal</p>
            </div>
            <div class="flex items-center gap-2">
              <button data-id="${p.id}" class="btn-load-custom px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500 text-sky-300 hover:text-white text-xs font-medium transition-all">Yükle</button>
              <button data-id="${p.id}" class="btn-del-custom p-1.5 text-slate-500 hover:text-rose-500"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
            </div>
          </div>
        `).join("");

        customListContainer.querySelectorAll(".btn-load-custom").forEach(btn => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const p = customPlaylists.find(x => x.id === id);
            if (p) {
              this.channels = p.channels;
              this.currentPlaylistName = p.name;
              this.updatePlaylistUI();
              this.closeAllModals();
            }
          });
        });

        customListContainer.querySelectorAll(".btn-del-custom").forEach(btn => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            Storage.deleteCustomPlaylist(id);
            this.renderPlaylistsMenu();
          });
        });
      }
    }
  }

  async loadM3UFromUrl(url, customName = null) {
    const loadingBadge = document.getElementById("loading-playlist-indicator");
    if (loadingBadge) loadingBadge.classList.remove("hidden");

    try {
      let response;
      try {
        response = await fetch(url);
      } catch (err) {
        console.warn("Direct fetch failed due to CORS, attempting via public proxy:", err);
        response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
      }

      const text = await response.text();
      const parsed = parseM3U(text);

      if (parsed.channels.length > 0) {
        this.channels = parsed.channels;
        this.currentPlaylistName = customName || url.split("/").pop() || "İçe Aktarılan Liste";
        
        Storage.saveCustomPlaylist({
          id: "pl-" + Date.now(),
          name: this.currentPlaylistName,
          channels: this.channels,
          createdAt: new Date().toISOString()
        });

        this.updatePlaylistUI();
        this.closeAllModals();
      } else {
        alert("Oynatma listesinde geçerli kanal bulunamadı veya format uyumsuz.");
      }
    } catch (e) {
      console.error("M3U fetch error:", e);
      alert("Oynatma listesi yüklenemedi. URL adresini ve bağlantınızı kontrol edin.");
    } finally {
      if (loadingBadge) loadingBadge.classList.add("hidden");
    }
  }

  loadM3UFromFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const parsed = parseM3U(content);

      if (parsed.channels.length > 0) {
        this.channels = parsed.channels;
        this.currentPlaylistName = file.name.replace(/\.[^/.]+$/, "");
        
        Storage.saveCustomPlaylist({
          id: "pl-" + Date.now(),
          name: this.currentPlaylistName,
          channels: this.channels,
          createdAt: new Date().toISOString()
        });

        this.updatePlaylistUI();
        this.closeAllModals();
      } else {
        alert("Yüklenen M3U dosyasında kanal bulunamadı.");
      }
    };
    reader.readAsText(file);
  }

  updatePlaylistUI() {
    this.playlistTitleBadge.textContent = this.currentPlaylistName;
    this.currentCategory = "all";
    this.renderCategories();
    this.renderChannels();
    this.renderPlaylistsMenu();
    if (this.channels.length > 0) {
      this.playChannelByIndex(0);
    }
  }

  updateViewModeButtons() {
    const listBtn = document.getElementById("btn-view-list");
    const gridBtn = document.getElementById("btn-view-grid");
    if (this.viewMode === "list") {
      listBtn?.classList.add("bg-slate-700", "text-sky-400");
      gridBtn?.classList.remove("bg-slate-700", "text-sky-400");
    } else {
      gridBtn?.classList.add("bg-slate-700", "text-sky-400");
      listBtn?.classList.remove("bg-slate-700", "text-sky-400");
    }
  }

  toggleSidebar() {
    const sidebar = document.getElementById("sidebar-channels");
    this.isSidebarOpen = !this.isSidebarOpen;
    if (this.isSidebarOpen) {
      sidebar.classList.remove("hidden");
    } else {
      sidebar.classList.add("hidden");
    }
  }

  toggleStatsHUD() {
    this.showStats = !this.showStats;
    if (this.showStats) {
      this.statsOverlay.classList.remove("hidden");
      this.statsToggleBtn.classList.add("text-sky-400", "bg-sky-500/20");
    } else {
      this.statsOverlay.classList.add("hidden");
      this.statsToggleBtn.classList.remove("text-sky-400", "bg-sky-500/20");
    }
  }

  handlePlayerStateChange(state) {
    const spinner = document.getElementById("player-buffering-spinner");
    if (state.status === "loading" || state.status === "buffering") {
      spinner?.classList.remove("hidden");
    } else {
      spinner?.classList.add("hidden");
    }

    if (state.paused) {
      this.playPauseIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    } else {
      this.playPauseIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
    }

    if (state.muted || state.volume === 0) {
      this.volumeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>`;
    } else {
      this.volumeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>`;
    }

    if (state.levels && state.levels.length > 0) {
      this.qualitySelect.innerHTML = `<option value="-1">Otomatik Kalite</option>` +
        state.levels.map(l => `<option value="${l.index}">${l.name}</option>`).join("");
      this.qualitySelect.classList.remove("hidden");
    }
  }

  handleStatsUpdate(stats) {
    document.getElementById("stat-res").textContent = stats.resolution;
    document.getElementById("stat-bitrate").textContent = stats.bitrate;
    document.getElementById("stat-buffer").textContent = stats.bufferLength;
    document.getElementById("stat-dropped").textContent = stats.droppedFrames;
  }

  handlePlayerError(err) {
    console.warn("Player Error Hook:", err);
  }

  openModal(modal) {
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }
  }

  closeAllModals() {
    [this.playlistModal, this.directUrlModal, this.shortcutsModal].forEach(m => {
      if (m) {
        m.classList.add("hidden");
        m.classList.remove("flex");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.iptvApp = new IPTVApp();
});

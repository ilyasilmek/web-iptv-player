/**
 * Storage Manager for IPTV Hub
 * LocalStorage persistence for favorites, custom playlists, settings, history
 */

const STORAGE_KEYS = {
  FAVORITES: iptv_favorites_v1,
  PLAYLISTS: iptv_custom_playlists_v1,
  HISTORY: iptv_history_v1,
  LAST_CHANNEL: iptv_last_channel_v1,
  SETTINGS: iptv_settings_v1
};

export const Storage = {
  // --- FAVORITES ---
  getFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error(Favoriler yüklenirken hata:, e);
      return [];
    }
  },

  isFavorite(channelId) {
    const favs = this.getFavorites();
    return favs.some(ch => ch.id === channelId || ch.url === channelId);
  },

  toggleFavorite(channel) {
    let favs = this.getFavorites();
    const index = favs.findIndex(ch => ch.id === channel.id || (ch.url && ch.url === channel.url));
    let isAdded = false;

    if (index > -1) {
      favs.splice(index, 1);
      isAdded = false;
    } else {
      favs.unshift(channel);
      isAdded = true;
    }

    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
    return { isAdded, favorites: favs };
  },

  // --- PLAYLISTS ---
  getCustomPlaylists() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PLAYLISTS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveCustomPlaylist(playlist) {
    const playlists = this.getCustomPlaylists();
    const exists = playlists.find(p => p.id === playlist.id);
    if (!exists) {
      playlists.unshift(playlist);
    } else {
      const idx = playlists.indexOf(exists);
      playlists[idx] = playlist;
    }
    localStorage.setItem(STORAGE_KEYS.PLAYLISTS, JSON.stringify(playlists));
    return playlists;
  },

  deleteCustomPlaylist(playlistId) {
    let playlists = this.getCustomPlaylists();
    playlists = playlists.filter(p => p.id !== playlistId);
    localStorage.setItem(STORAGE_KEYS.PLAYLISTS, JSON.stringify(playlists));
    return playlists;
  },

  // --- HISTORY ---
  getHistory() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  addToHistory(channel) {
    if (!channel) return;
    let history = this.getHistory();
    history = history.filter(item => item.url !== channel.url);
    history.unshift({
      ...channel,
      watchedAt: new Date().toISOString()
    });
    // Keep last 30
    if (history.length > 30) history = history.slice(0, 30);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
  },

  clearHistory() {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
    return [];
  },

  // --- SETTINGS ---
  getSettings() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? JSON.parse(data) : {
        volume: 0.9,
        aspectRatio: contain,
        corsProxy: true,
        autoPlay: true,
        theme: dark
      };
    } catch (e) {
      return { volume: 0.9, aspectRatio: contain, corsProxy: true, autoPlay: true, theme: dark };
    }
  },

  saveSettings(settings) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }
};

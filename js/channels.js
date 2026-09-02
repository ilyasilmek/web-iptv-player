// Hazir Yasal ve Halka Acik Canli IPTV Kanallari Listesi
export const DEFAULT_CHANNELS = [
  // --- TURKIYE - HABER & GENEL ---
  {
    id: trt-1,
    name: TRT 1 HD,
    group: Türkiye - Ulusal,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TRT_1_logo_2021.svg/320px-TRT_1_logo_2021.svg.png,
    url: https://tv-trt1.medya.trt.com.tr/master.m3u8,
    country: TR,
    resolution: FHD
  },
  {
    id: trt-haber,
    name: TRT Haber HD,
    group: Türkiye - Haber,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/TRT_Haber_logo_2021.svg/320px-TRT_Haber_logo_2021.svg.png,
    url: https://tv-trthaber.medya.trt.com.tr/master.m3u8,
    country: TR,
    resolution: FHD
  },
  {
    id: trt-spor,
    name: TRT Spor HD,
    group: Türkiye - Spor,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/TRT_Spor_logo_2021.svg/320px-TRT_Spor_logo_2021.svg.png,
    url: https://tv-trtspor1.medya.trt.com.tr/master.m3u8,
    country: TR,
    resolution: FHD
  },
  {
    id: trt-spor-yildiz,
    name: TRT Spor Yıldız,
    group: Türkiye - Spor,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/TRT_Spor_Y%C4%B1ld%C4%B1z_logo.png/320px-TRT_Spor_Y%C4%B1ld%C4%B1z_logo.png,
    url: https://tv-trtsporyildiz.medya.trt.com.tr/master.m3u8,
    country: TR,
    resolution: HD
  },
  {
    id: trt-belgesel,
    name: TRT Belgesel HD,
    group: Türkiye - Belgesel,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/TRT_Belgesel_logo_2021.svg/320px-TRT_Belgesel_logo_2021.svg.png,
    url: https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8,
    country: TR,
    resolution: FHD
  },
  {
    id: trt-muzik,
    name: TRT Müzik HD,
    group: Türkiye - Müzik,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/TRT_M%C3%BCzik_logo_2021.svg/320px-TRT_M%C3%BCzik_logo_2021.svg.png,
    url: https://tv-trtmuzik.medya.trt.com.tr/master.m3u8,
    country: TR,
    resolution: HD
  },
  {
    id: trt-cocuk,
    name: TRT Çocuk HD,
    group: Türkiye - Çocuk,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/TRT_%C3%87ocuk_logo_2021.svg/320px-TRT_%C3%87ocuk_logo_2021.svg.png,
    url: https://tv-trtcocuk.medya.trt.com.tr/master.m3u8,
    country: TR,
    resolution: FHD
  },
  {
    id: trt-world,
    name: TRT World HD (English),
    group: Türkiye - Haber,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/TRT_World_logo_2021.svg/320px-TRT_World_logo_2021.svg.png,
    url: https://tv-trtworld.medya.trt.com.tr/master.m3u8,
    country: TR,
    resolution: FHD
  },
  {
    id: trt-turk,
    name: TRT Türk,
    group: Türkiye - Ulusal,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/TRT_T%C3%BCrk_logo_2021.svg/320px-TRT_T%C3%BCrk_logo_2021.svg.png,
    url: https://tv-trtturk.medya.trt.com.tr/master.m3u8,
    country: TR,
    resolution: HD
  },
  {
    id: trt-avaz,
    name: TRT Avaz,
    group: Türkiye - Ulusal,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/TRT_Avaz_logo_2021.svg/320px-TRT_Avaz_logo_2021.svg.png,
    url: https://tv-trtavaz.medya.trt.com.tr/master.m3u8,
    country: TR,
    resolution: HD
  },

  // --- DUNYA HABER & BILGI ---
  {
    id: euronews-en,
    name: Euronews (English),
    group: Dünya - Haber,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Euronews_2016_logo.svg/320px-Euronews_2016_logo.svg.png,
    url: https://euronews-euronews-news-world-1-us.samsung.wurl.tv/playlist.m3u8,
    country: EU,
    resolution: HD
  },
  {
    id: dw-english,
    name: Deutsche Welle (English),
    group: Dünya - Haber,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Deutsche_Welle_logo.svg/320px-Deutsche_Welle_logo.svg.png,
    url: https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8,
    country: DE,
    resolution: FHD
  },
  {
    id: france24-en,
    name: France 24 HD (English),
    group: Dünya - Haber,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/France_24_logo_2013.svg/320px-France_24_logo_2013.svg.png,
    url: https://f24hls-i.akamaihd.net/hls/live/221193/F24_EN_LO_HLS/master.m3u8,
    country: FR,
    resolution: HD
  },
  {
    id: aljazeera-en,
    name: Al Jazeera English HD,
    group: Dünya - Haber,
    logo: https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Al_Jazeera_English_logo.svg/320px-Al_Jazeera_English_logo.svg.png,
    url: https://live-hls-web-aje.getaj.net/AJE/03.m3u8,
    country: QA,
    resolution: FHD
  },
  {
    id: bloomberg-quicktake,
    name: Bloomberg Originals,
    group: Dünya - Haber,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bloomberg_logo.svg/320px-Bloomberg_logo.svg.png,
    url: https://bloomberg.com/media-manifest/streams/us.m3u8,
    country: US,
    resolution: FHD
  },

  // --- BILIM, UZAY & BELGESEL ---
  {
    id: nasa-tv,
    name: NASA TV HD (Public Channel),
    group: Bilim & Belgesel,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/320px-NASA_logo.svg.png,
    url: https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8,
    country: US,
    resolution: FHD
  },
  {
    id: redbull-tv,
    name: Red Bull TV,
    group: Spor & Macera,
    logo: https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Red_Bull_TV_logo.svg/320px-Red_Bull_TV_logo.svg.png,
    url: https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8,
    country: AT,
    resolution: FHD
  },

  // --- MUZIK & EGLENCE ---
  {
    id: deluxe-music,
    name: Deluxe Lounge HD,
    group: Müzik & Eğlence,
    logo: https://i.imgur.com/8Qp4w07.png,
    url: https://sdn-global-live-streaming-packager-cache.simplestreamcdn.com/play/live.m3u8?owner=deluxemusic&stream=lounge,
    country: DE,
    resolution: HD
  },
  {
    id: clubland-tv,
    name: Clubland TV HD,
    group: Müzik & Eğlence,
    logo: https://i.imgur.com/G5T8R6k.png,
    url: https://m7.distro.tv/live/eds/clubland/hls_video/index.m3u8,
    country: UK,
    resolution: HD
  },
  {
    id: big-buck-bunny,
    name: Big Buck Bunny (4K Test Stream),
    group: Test & VOD,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/320px-Big_buck_bunny_poster_big.jpg,
    url: https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8,
    country: NL,
    resolution: 4K
  },
  {
    id: tears-of-steel,
    name: Tears of Steel (Sci-Fi Test),
    group: Test & VOD,
    logo: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Tears_of_Steel_poster.jpg/320px-Tears_of_Steel_poster.jpg,
    url: https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8,
    country: NL,
    resolution: FHD
  }
];

export const PRESET_PLAYLISTS = [
  {
    id: preset-default,
    name: Varsayılan Halka Açık Kanallar (TR & Dünya),
    url: ",
 description: TRT kanalları, Uluslararası Haberler, NASA TV, RedBull ve Müzik kanalları.
 },
 {
 id: preset-iptv-tr,
 name: IPTV-ORG Türkiye Kanalları (GitHub),
 url: https://iptv-org.github.io/iptv/countries/tr.m3u,
 description: GitHub iptv-org topluluğunun güncel Türkiye listesi.
 },
 {
 id: preset-iptv-news,
 name: IPTV-ORG Dünya Haber Kanalları (News),
 url: https://iptv-org.github.io/iptv/categories/news.m3u,
 description: Tüm dünyadan 24/7 canlı haber yayınları.
 },
 {
 id: preset-iptv-music,
 name: IPTV-ORG Müzik Kanalları (Music),
 url: https://iptv-org.github.io/iptv/categories/music.m3u,
 description: Uluslararası canlı müzik kanalları.
 },
 {
 id: preset-iptv-sports,
 name: IPTV-ORG Spor Kanalları (Sports),
 url: https://iptv-org.github.io/iptv/categories/sports.m3u,
 description: Canlı spor, motor sporları ve ekstrem spor kanalları.
 }
];

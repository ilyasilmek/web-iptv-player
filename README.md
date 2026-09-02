# 📺 IPTV Web Hub - Modern & İnteraktif Web TV Oynatıcı

Tarayıcınız üzerinden canlı IPTV yayınlarını (`.m3u8`, `.mpd`, `.mp4`) oynatabileceğiniz, M3U formatındaki oynatma listelerinizi sürükle-bırak yöntemiyle veya link vererek içe aktarabileceğiniz gelişmiş bir web uygulamasıdır.

## 🚀 Hızlı Başlangıç

### Yöntem 1: Python ile Sunucuyu Başlatma (Önerilen)
Komut satırında proje klasörüne gidin ve çalıştırın:
```bash
python server.py
```
Otomatik olarak tarayıcınızda `http://localhost:5173` adresi açılacaktır.

### Yöntem 2: Doğrudan Açma
`index.html` dosyasına çift tıklayarak herhangi bir modern tarayıcıda doğrudan çalıştırabilirsiniz.

---

## 🌟 Özellikler

- **HLS.js Canlı Akış Motoru**: Düşük gecikmeli, adaptif bitrate destekli kesintisiz `.m3u8` oynatıcı.
- **Hazır Canlı Kanallar**: TRT kanalları, Uluslararası Haberler (Euronews, Al Jazeera, France24, DW), NASA TV, RedBull TV ve müzik kanalları hazır yüklü.
- **M3U / M3U8 Dosya & URL Desteği**: Kendi IPTV listelerinizi sürükleyip bırakabilir veya M3U bağlantınızı anında yapıştırıp yükleyebilirsiniz.
- **Özel Akış Açma (Direct Stream)**: Tekil `.m3u8` canlı akış linklerini doğrudan açabilirsiniz.
- **İnteraktif Kontroller**:
  - Resim İçinde Resim (PiP)
  - Anlık Ekran Görüntüsü (Screenshot) Yakalama
  - En-Boy Oranı Seçimi (Sığdır, Doldur, 16:9, 4:3)
  - Canlı Yayın İstatistikleri (Bitrate, Buffer, Resolution, Dropped Frames HUD)
- **Kategori & Akıllı Arama**: Kategoriye, kaliteye ve isme göre anında filtreleme.
- **Favoriler ve Geçmiş**: Beğendiğiniz kanalları işaretleme ve son izlenenleri hatırlama (LocalStorage).
- **Klavye Kısayolları**:
  - `Space`: Oynat / Duraklat
  - `↑ / ↓ Ok Tuşları`: Sonraki / Önceki kanal
  - `← / → Ok Tuşları`: Ses seviyesi
  - `F`: Tam ekran
  - `M`: Sessiz (Mute)
  - `P`: Resim içinde Resim (PiP)
  - `S`: Ekran görüntüsü alma
  - `I`: Canlı istatistik paneli (HUD)

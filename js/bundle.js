(function() {
  'use strict';

  console.log("🚀 IPTV Web Hub başlatılıyor...");

  // ================= 1. DATA: GERMANY IPTV CHANNELS (EMBEDDED 549 CHANNELS) =================
  const GERMANY_CHANNELS = [{"id": "de-88956", "name": "TR:TRT 1 HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/trt1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88956.m3u8", "resolution": "HD"}, {"id": "de-104091", "name": "TR:TRT 1 HD [YEDEK]", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/trt1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/104091.m3u8", "resolution": "HD"}, {"id": "de-88955", "name": "TR:TRT 1 HQ", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/trt1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88955.m3u8", "resolution": "SD"}, {"id": "de-94866", "name": "TR:TRT AVAZ HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/trtavaz.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/94866.m3u8", "resolution": "HD"}, {"id": "de-88959", "name": "TR:ATV HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/atv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88959.m3u8", "resolution": "HD"}, {"id": "de-88958", "name": "TR:ATV HQ", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/atv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88958.m3u8", "resolution": "SD"}, {"id": "de-88962", "name": "TR:SHOW TV HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/showtv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88962.m3u8", "resolution": "HD"}, {"id": "de-88961", "name": "TR:SHOW TV HQ", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/showtv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88961.m3u8", "resolution": "SD"}, {"id": "de-88965", "name": "TR:STAR TV HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/startv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88965.m3u8", "resolution": "HD"}, {"id": "de-88964", "name": "TR:STAR TV HQ", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/startv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88964.m3u8", "resolution": "SD"}, {"id": "de-88968", "name": "TR:KANAL D HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/kanald.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88968.m3u8", "resolution": "HD"}, {"id": "de-88967", "name": "TR:KANAL D HQ", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/kanald.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88967.m3u8", "resolution": "SD"}, {"id": "de-88971", "name": "TR:NOW HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/fox.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88971.m3u8", "resolution": "HD"}, {"id": "de-88970", "name": "TR:NOW HQ", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/fox.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88970.m3u8", "resolution": "SD"}, {"id": "de-88974", "name": "TR:TV 8 HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/tv8.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88974.m3u8", "resolution": "HD"}, {"id": "de-88973", "name": "TR:TV 8 HQ", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/tv8.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88973.m3u8", "resolution": "SD"}, {"id": "de-88982", "name": "TR:TV 8.5 HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/tv85.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88982.m3u8", "resolution": "HD"}, {"id": "de-88980", "name": "TR:BEYAZ TV HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/beyaz.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88980.m3u8", "resolution": "HD"}, {"id": "de-88979", "name": "TR:BEYAZ TV HQ", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/beyaz.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88979.m3u8", "resolution": "SD"}, {"id": "de-88976", "name": "TR:KANAL 7 HQ", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/kanal7.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88976.m3u8", "resolution": "SD"}, {"id": "de-88977", "name": "TR:KANAL 7 HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/kanal7.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88977.m3u8", "resolution": "HD"}, {"id": "de-88984", "name": "TR:TEVE 2 HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/teve2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88984.m3u8", "resolution": "HD"}, {"id": "de-89813", "name": "TR:A2 HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/a2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89813.m3u8", "resolution": "HD"}, {"id": "de-88986", "name": "TR:360 TV HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/360tv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88986.m3u8", "resolution": "HD"}, {"id": "de-115820", "name": "TR:BI KANAL HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/bikanal.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/115820.m3u8", "resolution": "HD"}, {"id": "de-115899", "name": "TR:TYT TURK HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/tytturk.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/115899.m3u8", "resolution": "HD"}, {"id": "de-88990", "name": "TR:ATV AVRUPA HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/atveuro.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88990.m3u8", "resolution": "HD"}, {"id": "de-88989", "name": "TR:EURO D HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/kanaldeuro.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88989.m3u8", "resolution": "HD"}, {"id": "de-88988", "name": "TR:EURO STAR HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/eurostar.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88988.m3u8", "resolution": "HD"}, {"id": "de-88991", "name": "TR:TV 8 INT HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/tv8int.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88991.m3u8", "resolution": "HD"}, {"id": "de-89118", "name": "TR:TGRT EU HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/tgrteu.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89118.m3u8", "resolution": "HD"}, {"id": "de-88994", "name": "TR:TRT EBA HD", "group": "TÜRK ULUSAL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/ebalise.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88994.m3u8", "resolution": "HD"}, {"id": "de-144124", "name": "TR:KANAL 1 HD", "group": "TÜRK ULUSAL", "logo": "https://upload.wikimedia.org/wikipedia/tr/8/88/Kanal_1.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/144124.m3u8", "resolution": "HD"}, {"id": "de-89002", "name": "TR:TRT 4K UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/muzik/trt4k.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89002.m3u8", "resolution": "4K"}, {"id": "de-88957", "name": "TR:TRT 1 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/trt1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88957.m3u8", "resolution": "4K"}, {"id": "de-104092", "name": "TR:TRT 1 UHD [YEDEK]", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/trt1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/104092.m3u8", "resolution": "4K"}, {"id": "de-88960", "name": "TR:ATV UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/atv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88960.m3u8", "resolution": "4K"}, {"id": "de-88963", "name": "TR:SHOW TV UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/showtv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88963.m3u8", "resolution": "4K"}, {"id": "de-88966", "name": "TR:STAR TV UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/startv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88966.m3u8", "resolution": "4K"}, {"id": "de-88969", "name": "TR:KANAL D UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/kanald.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88969.m3u8", "resolution": "4K"}, {"id": "de-88972", "name": "TR:NOW UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/fox.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88972.m3u8", "resolution": "4K"}, {"id": "de-88975", "name": "TR:TV 8 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/tv8.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88975.m3u8", "resolution": "4K"}, {"id": "de-88978", "name": "TR:KANAL 7 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/kanal7.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88978.m3u8", "resolution": "4K"}, {"id": "de-88981", "name": "TR:BEYAZ TV UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/beyaz.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88981.m3u8", "resolution": "4K"}, {"id": "de-89295", "name": "TR:TRT MUZIK UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/muzik/trtmuzik.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89295.m3u8", "resolution": "4K"}, {"id": "de-88983", "name": "TR:A2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/a2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88983.m3u8", "resolution": "4K"}, {"id": "de-88985", "name": "TR:TEVE 2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/teve2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88985.m3u8", "resolution": "4K"}, {"id": "de-88987", "name": "TR:SHOWMAX UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/showmax.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88987.m3u8", "resolution": "4K"}, {"id": "de-88992", "name": "TR:KANAL 7 EU UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/kanal7avrupa.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88992.m3u8", "resolution": "4K"}, {"id": "de-89100", "name": "TR:A HABER UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/haber/ahaber.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89100.m3u8", "resolution": "4K"}, {"id": "de-105313", "name": "TR:CNBC-Ê UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/cnbce.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/105313.m3u8", "resolution": "4K"}, {"id": "de-89106", "name": "TR:CNN TURK UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/haber/cnnturk.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89106.m3u8", "resolution": "4K"}, {"id": "de-89108", "name": "TR:HABERTURK UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/haber/haberturk.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89108.m3u8", "resolution": "4K"}, {"id": "de-89111", "name": "TR:TRT HABER UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/haber/trthaber.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89111.m3u8", "resolution": "4K"}, {"id": "de-116793", "name": "TR:HALK TV UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/haber/halktv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/116793.m3u8", "resolution": "4K"}, {"id": "de-116792", "name": "TR:SOZCU TV UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/haber/sozcu.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/116792.m3u8", "resolution": "4K"}, {"id": "de-89112", "name": "TR:ULKE TV UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/ulketv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89112.m3u8", "resolution": "4K"}, {"id": "de-89117", "name": "TR:FLASH HABER UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/haber/flashaber.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89117.m3u8", "resolution": "4K"}, {"id": "de-90992", "name": "TR:KON TV UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kontv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90992.m3u8", "resolution": "4K"}, {"id": "de-96946", "name": "TR:TVNET UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/haber/tvnet.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/96946.m3u8", "resolution": "4K"}, {"id": "de-89122", "name": "TR:AKIT TV UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/haber/akitv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89122.m3u8", "resolution": "4K"}, {"id": "de-89123", "name": "TR:TV 100 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/haber/tv100.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89123.m3u8", "resolution": "4K"}, {"id": "de-89099", "name": "TR:A NEWS UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/haber/anews.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89099.m3u8", "resolution": "4K"}, {"id": "de-89160", "name": "TR:TLC UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/tlc.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89160.m3u8", "resolution": "4K"}, {"id": "de-89162", "name": "TR:DMAX UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/dmax.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89162.m3u8", "resolution": "4K"}, {"id": "de-89174", "name": "TR:BBC EARTH UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/bbcearth.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89174.m3u8", "resolution": "4K"}, {"id": "de-89177", "name": "TR:DOCU SCREEN UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/docubox.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89177.m3u8", "resolution": "4K"}, {"id": "de-89179", "name": "TR:DISCOVERY CHANNEL UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/discovery.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89179.m3u8", "resolution": "4K"}, {"id": "de-89183", "name": "TR:VIASAT HISTORY UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/hvasiat.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89183.m3u8", "resolution": "4K"}, {"id": "de-89186", "name": "TR:NAT GEOGRAPHIC UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/nationalgeo.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89186.m3u8", "resolution": "4K"}, {"id": "de-89188", "name": "TR:NAT GEOGRAPHIC WILD UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/nationalgeowil.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89188.m3u8", "resolution": "4K"}, {"id": "de-89599", "name": "TR:BEINSPORTS 4K (MAC ZAMANI)", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek1/bein4Kmac.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89599.m3u8", "resolution": "4K"}, {"id": "de-89012", "name": "TR:BEINSPORTS 1 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89012.m3u8", "resolution": "4K"}, {"id": "de-89017", "name": "TR:BEINSPORTS 2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89017.m3u8", "resolution": "4K"}, {"id": "de-89019", "name": "TR:BEINSPORTS 3 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89019.m3u8", "resolution": "4K"}, {"id": "de-89021", "name": "TR:BEINSPORTS 4 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89021.m3u8", "resolution": "4K"}, {"id": "de-104160", "name": "TR:BEINSPORTS 5 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/104160.m3u8", "resolution": "4K"}, {"id": "de-89032", "name": "TR:BEINSPORTS MAX 1 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/beinmax1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89032.m3u8", "resolution": "4K"}, {"id": "de-89034", "name": "TR:BEINSPORTS HABER UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/beinhaber.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89034.m3u8", "resolution": "4K"}, {"id": "de-89832", "name": "TR:EXXEN SPORT 1 UHD (FEED YAYIN)", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/exen1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89832.m3u8", "resolution": "4K"}, {"id": "de-89042", "name": "TR:EXXEN SPORT 2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89042.m3u8", "resolution": "4K"}, {"id": "de-89045", "name": "TR:EXXEN SPORT 3 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89045.m3u8", "resolution": "4K"}, {"id": "de-89048", "name": "TR:EXXEN SPORT 4 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89048.m3u8", "resolution": "4K"}, {"id": "de-89051", "name": "TR:EXXEN SPORT 5 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89051.m3u8", "resolution": "4K"}, {"id": "de-89054", "name": "TR:EXXEN SPORT 6 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen6.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89054.m3u8", "resolution": "4K"}, {"id": "de-89055", "name": "TR:EXXEN SPORT 7 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen7.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89055.m3u8", "resolution": "4K"}, {"id": "de-89056", "name": "TR:EXXEN SPORT 8 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen8.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89056.m3u8", "resolution": "4K"}, {"id": "de-103747", "name": "TR:SPOR SMART 1 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/smartspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103747.m3u8", "resolution": "4K"}, {"id": "de-89060", "name": "TR:SPOR SMART 2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/smartspor2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89060.m3u8", "resolution": "4K"}, {"id": "de-89095", "name": "TR:EUROSPORT 1 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/eurosport1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89095.m3u8", "resolution": "4K"}, {"id": "de-89097", "name": "TR:EUROSPORT 2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/eurosport2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89097.m3u8", "resolution": "4K"}, {"id": "de-89062", "name": "TR:S SPORTS 1 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport-1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89062.m3u8", "resolution": "4K"}, {"id": "de-89064", "name": "TR:S SPORTS 2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89064.m3u8", "resolution": "4K"}, {"id": "de-89072", "name": "TR:TIVIBUSPOR UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek2/tivibuspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89072.m3u8", "resolution": "4K"}, {"id": "de-92358", "name": "TR:TIVIBUSPOR 1 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek1/tivibu1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/92358.m3u8", "resolution": "4K"}, {"id": "de-104337", "name": "TR:TABII SPOR UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/104337.m3u8", "resolution": "4K"}, {"id": "de-103828", "name": "TR:TABII SPOR 1 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103828.m3u8", "resolution": "4K"}, {"id": "de-103829", "name": "TR:TABII SPOR 2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103829.m3u8", "resolution": "4K"}, {"id": "de-103830", "name": "TR:TABII SPOR 3 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103830.m3u8", "resolution": "4K"}, {"id": "de-103831", "name": "TR:TABII SPOR 4 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103831.m3u8", "resolution": "4K"}, {"id": "de-103832", "name": "TR:TABII SPOR 5 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103832.m3u8", "resolution": "4K"}, {"id": "de-103833", "name": "TR:TABII SPOR 6 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii6.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103833.m3u8", "resolution": "4K"}, {"id": "de-89337", "name": "TR:TRT SPOR UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/trtspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89337.m3u8", "resolution": "4K"}, {"id": "de-111498", "name": "TR:TRT YILDIZ UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/trtsporyildiz.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/111498.m3u8", "resolution": "4K"}, {"id": "de-89087", "name": "TR:A SPOR UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/aspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89087.m3u8", "resolution": "4K"}, {"id": "de-115724", "name": "TR:HT SPOR UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/htspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/115724.m3u8", "resolution": "4K"}, {"id": "de-116791", "name": "TR:EKOL SPORTS UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/ekolsports.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/116791.m3u8", "resolution": "4K"}, {"id": "de-89089", "name": "TR:FIGHTBOX UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/fightbox.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89089.m3u8", "resolution": "4K"}, {"id": "de-89090", "name": "TR:NBA TV UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/spor/nbatv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89090.m3u8", "resolution": "4K"}, {"id": "de-89190", "name": "TR:BABY TV UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/cocuk/babytv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89190.m3u8", "resolution": "4K"}, {"id": "de-89197", "name": "TR:COCUK SMART UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/cocuk/smarttv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89197.m3u8", "resolution": "4K"}, {"id": "de-89207", "name": "TR:FX UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/sinema/fx.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89207.m3u8", "resolution": "4K"}, {"id": "de-89210", "name": "TR:SINEMA 1 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinamatv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89210.m3u8", "resolution": "4K"}, {"id": "de-89211", "name": "TR:SINEMA 2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek2/sinematv2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89211.m3u8", "resolution": "4K"}, {"id": "de-89212", "name": "TR:SINEMA 1001 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinema1001.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89212.m3u8", "resolution": "4K"}, {"id": "de-89213", "name": "TR:SINEMA 1002 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinema1002.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89213.m3u8", "resolution": "4K"}, {"id": "de-89214", "name": "TR:SINEMA AILE UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemaaile.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89214.m3u8", "resolution": "4K"}, {"id": "de-89215", "name": "TR:SINEMA AILE 2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek2/sinemaaile2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89215.m3u8", "resolution": "4K"}, {"id": "de-89216", "name": "TR:SINEMA KOMEDI UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemakomedi.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89216.m3u8", "resolution": "4K"}, {"id": "de-89217", "name": "TR:SINEMA KOMEDI 2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemakomedi2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89217.m3u8", "resolution": "4K"}, {"id": "de-89218", "name": "TR:SINEMA AKSIYON UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemaaksiyon.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89218.m3u8", "resolution": "4K"}, {"id": "de-89219", "name": "TR:SINEMA AKSIYON 2 UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemaaksiyon2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89219.m3u8", "resolution": "4K"}, {"id": "de-89268", "name": "TR:MOVIESMART TURK UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/sinema/smartmovie.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89268.m3u8", "resolution": "4K"}, {"id": "de-89269", "name": "TR:MOVIESMART CLASSIC UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/sinema/moviesmartclasic.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89269.m3u8", "resolution": "4K"}, {"id": "de-89270", "name": "TR:DIZISMART PREMIUM UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/sinema/dizismartpremium.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89270.m3u8", "resolution": "4K"}, {"id": "de-89283", "name": "TR:FILMBOX UHD", "group": "TÜRK UHD", "logo": "https://i0.wp.com/resim.yayins.com/sinema/filmbox.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89283.m3u8", "resolution": "4K"}, {"id": "de-89354", "name": "TR:BEINSPORTS HABER HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/beinhaber.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89354.m3u8", "resolution": "HD"}, {"id": "de-105874", "name": "TR:BEINSPORTS 1 TICARI HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/105874.m3u8", "resolution": "HD"}, {"id": "de-89006", "name": "TR:BEINSPORTS 1 HD (50FPS)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89006.m3u8", "resolution": "HD"}, {"id": "de-89004", "name": "TR:BEINSPORTS 1 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89004.m3u8", "resolution": "HD"}, {"id": "de-89026", "name": "TR:BEINSPORTS 1 HQ (VODAFONE-TURKCELL-TURKIYE)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89026.m3u8", "resolution": "SD"}, {"id": "de-89371", "name": "TR:BEINSPORTS 1 SD (DUSUK KALITE)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89371.m3u8", "resolution": "SD"}, {"id": "de-146096", "name": "TR:BEINSPORTS 2 HD (50FPS)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/146096.m3u8", "resolution": "HD"}, {"id": "de-89007", "name": "TR:BEINSPORTS 2 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89007.m3u8", "resolution": "HD"}, {"id": "de-112574", "name": "TR:BEINSPORTS 2 HD (YEDEK)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/112574.m3u8", "resolution": "HD"}, {"id": "de-89009", "name": "TR:BEINSPORTS 3 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89009.m3u8", "resolution": "HD"}, {"id": "de-112579", "name": "TR:BEINSPORTS 3 HD (YEDEK)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/112579.m3u8", "resolution": "HD"}, {"id": "de-89011", "name": "TR:BEINSPORTS 4 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89011.m3u8", "resolution": "HD"}, {"id": "de-115512", "name": "TR:BEINSPORTS 4 HD (YEDEK)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/115512.m3u8", "resolution": "HD"}, {"id": "de-89811", "name": "TR:BEINSPORTS 5 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89811.m3u8", "resolution": "HD"}, {"id": "de-112581", "name": "TR:BEINSPORTS 5 HD (YEDEK)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/bein5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/112581.m3u8", "resolution": "HD"}, {"id": "de-89030", "name": "TR:BEINSPORTS MAX 1 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/beinmax1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89030.m3u8", "resolution": "HD"}, {"id": "de-89031", "name": "TR:BEINSPORTS MAX 2 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/beinmax2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89031.m3u8", "resolution": "HD"}, {"id": "de-89365", "name": "TR:BEIN CONNECT 1 HD [MAC ZAMANI AKTIF]", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/beinconnetc1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89365.m3u8", "resolution": "HD"}, {"id": "de-102635", "name": "TR:BEIN CONNECT 2 HD [MAC ZAMANI AKTIF]", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/beincon2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/102635.m3u8", "resolution": "HD"}, {"id": "de-102634", "name": "TR:BEIN CONNECT 3 HD [MAC ZAMANI AKTIF]", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/beincon3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/102634.m3u8", "resolution": "HD"}, {"id": "de-102633", "name": "TR:BEIN CONNECT 4 HD [MAC ZAMANI AKTIF]", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/beincon4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/102633.m3u8", "resolution": "HD"}, {"id": "de-102632", "name": "TR:BEIN CONNECT 5 HD [MAC ZAMANI AKTIF]", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/beincon5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/102632.m3u8", "resolution": "HD"}, {"id": "de-102631", "name": "TR:BEIN CONNECT 6 HD [MAC ZAMANI AKTIF]", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/beincon6.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/102631.m3u8", "resolution": "HD"}, {"id": "de-115513", "name": "TR:SKY SPORTS F1 HD (ALMANCA)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/alman/ek/sjysportsf1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/115513.m3u8", "resolution": "HD"}, {"id": "de-89831", "name": "TR:EXXEN SPORT 1 HD (FEED YAYIN)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/exen1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89831.m3u8", "resolution": "HD"}, {"id": "de-89036", "name": "TR:EXXEN SPORT 1 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/exen1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89036.m3u8", "resolution": "HD"}, {"id": "de-89035", "name": "TR:EXXEN SPORT 1 HQ", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/exen1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89035.m3u8", "resolution": "SD"}, {"id": "de-124524", "name": "TR:SPORTDIGITAL HD (AFRIKA KUPASI - ALMANCA)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/alman/ek4/SPORTDIGITAL.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/124524.m3u8", "resolution": "HD"}, {"id": "de-101303", "name": "TR:EXXEN SPORTS 2 HD (MAC ZAMANI AKTIF )", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101303.m3u8", "resolution": "HD"}, {"id": "de-101302", "name": "TR:EXXEN SPORTS 3 HD (MAC ZAMANI AKTIF )", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101302.m3u8", "resolution": "HD"}, {"id": "de-101301", "name": "TR:EXXEN SPORTS 4 HD (MAC ZAMANI AKTIF )", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101301.m3u8", "resolution": "HD"}, {"id": "de-101300", "name": "TR:EXXEN SPORTS 5 HD (MAC ZAMANI AKTIF )", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101300.m3u8", "resolution": "HD"}, {"id": "de-101299", "name": "TR:EXXEN SPORTS 6 HD (MAC ZAMANI AKTIF )", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen6.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101299.m3u8", "resolution": "HD"}, {"id": "de-101298", "name": "TR:EXXEN SPORTS 7 HD (MAC ZAMANI AKTIF )", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen7.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101298.m3u8", "resolution": "HD"}, {"id": "de-101297", "name": "TR:EXXEN SPORTS 8 HD (MAC ZAMANI AKTIF )", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/exxen8.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101297.m3u8", "resolution": "HD"}, {"id": "de-89061", "name": "TR:S SPORTS 1 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport-1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89061.m3u8", "resolution": "HD"}, {"id": "de-89063", "name": "TR:S SPORTS 2 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89063.m3u8", "resolution": "HD"}, {"id": "de-101359", "name": "TR:S SPORT PLUS 1 UHD (MAC ZAMANI)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101359.m3u8", "resolution": "4K"}, {"id": "de-101358", "name": "TR:S SPORT PLUS 2 UHD (MAC ZAMANI)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101358.m3u8", "resolution": "4K"}, {"id": "de-101357", "name": "TR:S SPORT PLUS 3 UHD (MAC ZAMANI)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101357.m3u8", "resolution": "4K"}, {"id": "de-101356", "name": "TR:S SPORT PLUS 4 UHD (MAC ZAMANI)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101356.m3u8", "resolution": "4K"}, {"id": "de-101355", "name": "TR:S SPORT PLUS 5 UHD (MAC ZAMANI)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101355.m3u8", "resolution": "4K"}, {"id": "de-101354", "name": "TR:S SPORT PLUS 6 UHD (MAC ZAMANI)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport6.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101354.m3u8", "resolution": "4K"}, {"id": "de-101353", "name": "TR:S SPORT PLUS 7 UHD (MAC ZAMANI)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport7.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101353.m3u8", "resolution": "4K"}, {"id": "de-101352", "name": "TR:S SPORT PLUS 8 UHD (MAC ZAMANI)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport8.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101352.m3u8", "resolution": "4K"}, {"id": "de-101351", "name": "TR:S SPORT PLUS 9 UHD (MAC ZAMANI)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport9.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101351.m3u8", "resolution": "4K"}, {"id": "de-101350", "name": "TR:S SPORT PLUS 10 UHD (MAC ZAMANI)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ssport10.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101350.m3u8", "resolution": "4K"}, {"id": "de-89094", "name": "TR:EUROSPORT 1 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/eurosport1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89094.m3u8", "resolution": "HD"}, {"id": "de-89096", "name": "TR:EUROSPORT 2 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/eurosport2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89096.m3u8", "resolution": "HD"}, {"id": "de-103746", "name": "TR:SPOR SMART 1 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/smartspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103746.m3u8", "resolution": "HD"}, {"id": "de-89059", "name": "TR:SPOR SMART 2 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/smartspor2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89059.m3u8", "resolution": "HD"}, {"id": "de-89071", "name": "TR:TIVIBUSPOR HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/ek2/tivibuspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89071.m3u8", "resolution": "HD"}, {"id": "de-101505", "name": "TR:TIVIBUSPOR 1 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/tivibusp1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101505.m3u8", "resolution": "HD"}, {"id": "de-89075", "name": "TR:TIVIBUSPOR 2 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/ek1/tivibu2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89075.m3u8", "resolution": "HD"}, {"id": "de-89077", "name": "TR:TIVIBUSPOR 3 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/ek1/tivibu3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89077.m3u8", "resolution": "HD"}, {"id": "de-89078", "name": "TR:TIVIBUSPOR 4 HD (MAC ZAMANI)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/ek1/tivibu4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89078.m3u8", "resolution": "HD"}, {"id": "de-104336", "name": "TR:TABII SPOR HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/104336.m3u8", "resolution": "HD"}, {"id": "de-103838", "name": "TR:TABII SPOR 1 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103838.m3u8", "resolution": "HD"}, {"id": "de-103839", "name": "TR:TABII SPOR 2 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103839.m3u8", "resolution": "HD"}, {"id": "de-103840", "name": "TR:TABII SPOR 3 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103840.m3u8", "resolution": "HD"}, {"id": "de-103841", "name": "TR:TABII SPOR 4 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103841.m3u8", "resolution": "HD"}, {"id": "de-103842", "name": "TR:TABII SPOR 5 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103842.m3u8", "resolution": "HD"}, {"id": "de-103843", "name": "TR:TABII SPOR 6 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii6.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103843.m3u8", "resolution": "HD"}, {"id": "de-127649", "name": "TR:TABII SPOR 7 HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/tabii1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/127649.m3u8", "resolution": "HD"}, {"id": "de-89081", "name": "TR:TRT SPOR HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/trtspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89081.m3u8", "resolution": "HD"}, {"id": "de-89083", "name": "TR:TRT 3 SPOR HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/trtspo3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89083.m3u8", "resolution": "HD"}, {"id": "de-89084", "name": "TR:TRT YILDIZ HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/trtsporyildiz.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89084.m3u8", "resolution": "HD"}, {"id": "de-89086", "name": "TR:A SPOR HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/aspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89086.m3u8", "resolution": "HD"}, {"id": "de-89085", "name": "TR:A SPOR HQ", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/aspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89085.m3u8", "resolution": "SD"}, {"id": "de-104546", "name": "TR:HT SPOR HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/htspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/104546.m3u8", "resolution": "HD"}, {"id": "de-115725", "name": "TR:HT SPOR HQ", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/htspor.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/115725.m3u8", "resolution": "SD"}, {"id": "de-116803", "name": "TR:SIFIR TV HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/sifir.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/116803.m3u8", "resolution": "HD"}, {"id": "de-89080", "name": "TR:FB TV HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/fbtv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89080.m3u8", "resolution": "HD"}, {"id": "de-89091", "name": "TR:TAY TV HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/taytv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89091.m3u8", "resolution": "HD"}, {"id": "de-89381", "name": "TR:TJK TV HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/tjktv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89381.m3u8", "resolution": "HD"}, {"id": "de-89092", "name": "TR:NBA TV HD (TR/ENG)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/nbatv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89092.m3u8", "resolution": "HD"}, {"id": "de-89093", "name": "TR:SPORTS TV HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/sportstv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89093.m3u8", "resolution": "HD"}, {"id": "de-114295", "name": "TR:TRACE SPORT STARS HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/2/tracesportstars.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114295.m3u8", "resolution": "HD"}, {"id": "de-114776", "name": "TR:W SPORTS HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/w-sport.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114776.m3u8", "resolution": "HD"}, {"id": "de-114775", "name": "TR:COSMO SPORTS HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/cosmo-sports.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114775.m3u8", "resolution": "HD"}, {"id": "de-89897", "name": "TR:WWE SMACKDOWN HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/smackdow.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89897.m3u8", "resolution": "HD"}, {"id": "de-98103", "name": "AZ:CBC SPORT HD", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/cbc.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/98103.m3u8", "resolution": "HD"}, {"id": "de-101296", "name": "TR:UFC FIGHT PASS", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/ufc.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101296.m3u8", "resolution": "SD"}, {"id": "de-89088", "name": "TR:FIGHTBOX HD (TR/ENG)", "group": "TÜRK SPOR", "logo": "https://i0.wp.com/resim.yayins.com/spor/fightbox.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89088.m3u8", "resolution": "HD"}, {"id": "de-89110", "name": "TR:TRT HABER HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/trthaber.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89110.m3u8", "resolution": "HD"}, {"id": "de-89101", "name": "TR:A HABER HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/ahaber.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89101.m3u8", "resolution": "HD"}, {"id": "de-89114", "name": "TR:CNN TURK HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/cnnturk.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89114.m3u8", "resolution": "HD"}, {"id": "de-89107", "name": "TR:HABERTURK HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/haberturk.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89107.m3u8", "resolution": "HD"}, {"id": "de-89119", "name": "TR:TGRT HABER HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/tgrthaber.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89119.m3u8", "resolution": "HD"}, {"id": "de-105312", "name": "TR:CNBC-Ê HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/cnbce.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/105312.m3u8", "resolution": "HD"}, {"id": "de-93724", "name": "TR:SOZCU TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/sozcu.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/93724.m3u8", "resolution": "HD"}, {"id": "de-89116", "name": "TR:HALK TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/halktv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89116.m3u8", "resolution": "HD"}, {"id": "de-89467", "name": "TR:KOZA TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/yerel/koza.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89467.m3u8", "resolution": "HD"}, {"id": "de-89127", "name": "TR:ULUSAL TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/ulusaltv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89127.m3u8", "resolution": "HD"}, {"id": "de-89115", "name": "TR:TELE 1 HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/tele1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89115.m3u8", "resolution": "HD"}, {"id": "de-89113", "name": "TR:ULKE TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/ulketv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89113.m3u8", "resolution": "HD"}, {"id": "de-92361", "name": "TR:YOL TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/ek2/yoltv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/92361.m3u8", "resolution": "HD"}, {"id": "de-89128", "name": "TR:TH TURK HABER HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/turkhaber.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89128.m3u8", "resolution": "HD"}, {"id": "de-89126", "name": "TR:BLOOMBERG HT HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/bloomberg.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89126.m3u8", "resolution": "HD"}, {"id": "de-89105", "name": "TR:NTV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/ntv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89105.m3u8", "resolution": "HD"}, {"id": "de-89102", "name": "TR:A PARA HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/ek1/apara.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89102.m3u8", "resolution": "HD"}, {"id": "de-89120", "name": "TR:BENGUTURK TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/bengu.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89120.m3u8", "resolution": "HD"}, {"id": "de-103074", "name": "TR:EKOL TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/ekoltv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103074.m3u8", "resolution": "HD"}, {"id": "de-89104", "name": "TR:EKOTURK HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/ekoturk.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89104.m3u8", "resolution": "HD"}, {"id": "de-89136", "name": "TR:ES TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/yerel/estv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89136.m3u8", "resolution": "HD"}, {"id": "de-89125", "name": "TR:HABER GLOBAL HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/haberglobal.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89125.m3u8", "resolution": "HD"}, {"id": "de-89138", "name": "TR:KANAL 3 HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanal3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89138.m3u8", "resolution": "HD"}, {"id": "de-89140", "name": "TR:KANAL 23 HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanal23.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89140.m3u8", "resolution": "HD"}, {"id": "de-89098", "name": "TR:KANAL 24 HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/ek1/kanal24.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89098.m3u8", "resolution": "HD"}, {"id": "de-89134", "name": "TR:KANAL AVRUPA HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanalavrupa.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89134.m3u8", "resolution": "HD"}, {"id": "de-89150", "name": "TR:MELTEM TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/dini/meltemtv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89150.m3u8", "resolution": "HD"}, {"id": "de-89129", "name": "TR:KANAL B HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanalb.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89129.m3u8", "resolution": "HD"}, {"id": "de-89109", "name": "TR:TRT TURK HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/trtturk.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89109.m3u8", "resolution": "HD"}, {"id": "de-89124", "name": "TR:TRT WORLD HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/trtworld.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89124.m3u8", "resolution": "HD"}, {"id": "de-89103", "name": "TR:TV 100 HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/tv100.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89103.m3u8", "resolution": "HD"}, {"id": "de-89135", "name": "TR:TV 4 HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/ek1/kanal4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89135.m3u8", "resolution": "HD"}, {"id": "de-114793", "name": "TR:LIDER HABER HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/lider-haber-tv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114793.m3u8", "resolution": "HD"}, {"id": "de-89143", "name": "TR:TV 42 HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/yerel/42tv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89143.m3u8", "resolution": "HD"}, {"id": "de-89131", "name": "TR:TV 5 HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/ek1/kanal5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89131.m3u8", "resolution": "HD"}, {"id": "de-96945", "name": "TR:TVNET HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/tvnet.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/96945.m3u8", "resolution": "HD"}, {"id": "de-89121", "name": "TR:EGEMAX TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/uzayhaber.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89121.m3u8", "resolution": "HD"}, {"id": "de-89451", "name": "TR:AKIT TV HD", "group": "TÜRK HABER", "logo": "https://i0.wp.com/resim.yayins.com/haber/akitv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89451.m3u8", "resolution": "HD"}, {"id": "de-89166", "name": "TR:TRT BELGESEL HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/trtbelgesel.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89166.m3u8", "resolution": "HD"}, {"id": "de-89165", "name": "TR:TRT 2 HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/trt2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89165.m3u8", "resolution": "HD"}, {"id": "de-103868", "name": "TR:NAT GEOGRAPHIC HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/nationalgeo.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/103868.m3u8", "resolution": "HD"}, {"id": "de-89187", "name": "TR:NAT GEOGRAPHIC WILD HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/nationalgeowil.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89187.m3u8", "resolution": "HD"}, {"id": "de-89178", "name": "TR:DISCOVERY CHANNEL HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/discovery.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89178.m3u8", "resolution": "HD"}, {"id": "de-89180", "name": "TR:DISCOVERY ID HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/idx.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89180.m3u8", "resolution": "HD"}, {"id": "de-89173", "name": "TR:BBC EARTH HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/bbcearth.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89173.m3u8", "resolution": "HD"}, {"id": "de-89911", "name": "TR:VIASAT EXPLORE HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/viasat.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89911.m3u8", "resolution": "HD"}, {"id": "de-89182", "name": "TR:VIASAT HISTORY HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/hvasiat.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89182.m3u8", "resolution": "HD"}, {"id": "de-89161", "name": "TR:DMAX HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/dmax.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89161.m3u8", "resolution": "HD"}, {"id": "de-89159", "name": "TR:TLC HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/tlc.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89159.m3u8", "resolution": "HD"}, {"id": "de-89172", "name": "TR:BEIN GURME HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/beingurma.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89172.m3u8", "resolution": "HD"}, {"id": "de-89171", "name": "TR:BEIN IZ HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/beiniz.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89171.m3u8", "resolution": "HD"}, {"id": "de-89175", "name": "TR:DA VINCI HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/davinci.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89175.m3u8", "resolution": "HD"}, {"id": "de-114791", "name": "TR:TARIH TV HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/tarimtv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114791.m3u8", "resolution": "HD"}, {"id": "de-114789", "name": "TR:HABITAT HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/habitat.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114789.m3u8", "resolution": "HD"}, {"id": "de-114285", "name": "TR:TARIM TV HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/2/tarimtv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114285.m3u8", "resolution": "HD"}, {"id": "de-89377", "name": "TR:ANIMAUX HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/animaux.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89377.m3u8", "resolution": "HD"}, {"id": "de-89163", "name": "TR:CIFTCI TV HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/ciftcitv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89163.m3u8", "resolution": "HD"}, {"id": "de-89380", "name": "TR:YABAN TV HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/yabantv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89380.m3u8", "resolution": "HD"}, {"id": "de-89376", "name": "TR:CHASSE & PECHE HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/chasse.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89376.m3u8", "resolution": "HD"}, {"id": "de-114783", "name": "TR:DOCU SCREEN HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/docuscreen.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114783.m3u8", "resolution": "HD"}, {"id": "de-114284", "name": "TR:FASHION ONE HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/fashion-one.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114284.m3u8", "resolution": "HD"}, {"id": "de-89000", "name": "TR:FASHION TV HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/fashiotv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89000.m3u8", "resolution": "HD"}, {"id": "de-89168", "name": "TR:LOVE NATURE HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/lovenature.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89168.m3u8", "resolution": "HD"}, {"id": "de-89176", "name": "TR:DOCU SCREEN HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/docubox.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89176.m3u8", "resolution": "HD"}, {"id": "de-89167", "name": "TR:TGRT BELGESEL HD", "group": "TÜRK BELGESEL", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/tgrtbelgesel.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89167.m3u8", "resolution": "HD"}, {"id": "de-90481", "name": "TR:BEIN BOX OFFICE 1 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/beinboxoffice1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90481.m3u8", "resolution": "HD"}, {"id": "de-90482", "name": "TR:BEIN BOX OFFICE 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/beinboxoffice2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90482.m3u8", "resolution": "HD"}, {"id": "de-90483", "name": "TR:BEIN BOX OFFICE 3 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/spor/beinbxoffice3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90483.m3u8", "resolution": "HD"}, {"id": "de-92116", "name": "TR:BEIN SERIES 1 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek2/beindrama.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/92116.m3u8", "resolution": "HD"}, {"id": "de-92115", "name": "TR:BEIN SERIES 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek2/beincomedy.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/92115.m3u8", "resolution": "HD"}, {"id": "de-89267", "name": "TR:BEIN SERIES 3 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/beinseriesvice.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89267.m3u8", "resolution": "HD"}, {"id": "de-89266", "name": "TR:BEIN SERIES 4 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/beinseriesscfi.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89266.m3u8", "resolution": "HD"}, {"id": "de-90484", "name": "TR:BEIN MOVIES PREMIERE 1 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/beinmoviepremeire.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90484.m3u8", "resolution": "HD"}, {"id": "de-89264", "name": "TR:BEIN MOVIES PREMIERE 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/beinmoviepremier2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89264.m3u8", "resolution": "HD"}, {"id": "de-89261", "name": "TR:BEIN MOVIES STARS HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/beinmoviesstas.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89261.m3u8", "resolution": "HD"}, {"id": "de-144123", "name": "TR:BEIN MOVIES TURK HD", "group": "TÜRK SINEMA", "logo": "http://logo.purstreams.net/LOGOULTRA/BeinMoviesTurkHd_full_ultra.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/144123.m3u8", "resolution": "HD"}, {"id": "de-89272", "name": "TR:DIZISMART MAX HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/dizismartmax.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89272.m3u8", "resolution": "HD"}, {"id": "de-89271", "name": "TR:DIZISMART PREMIUM HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/dizismartpremium.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89271.m3u8", "resolution": "HD"}, {"id": "de-89282", "name": "TR:FILMBOX HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/filmbox.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89282.m3u8", "resolution": "HD"}, {"id": "de-114781", "name": "TR:BBC FIRST HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/belgesel/bbc-first.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114781.m3u8", "resolution": "HD"}, {"id": "de-89206", "name": "TR:FX HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/fx.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89206.m3u8", "resolution": "HD"}, {"id": "de-89274", "name": "TR:MOVIESMART CLASSIC HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/moviesmartclasic.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89274.m3u8", "resolution": "HD"}, {"id": "de-89273", "name": "TR:MOVIESMART TURK HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/smartmovie.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89273.m3u8", "resolution": "HD"}, {"id": "de-100938", "name": "TR:CINE YESILCAM 1 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cineyesilcam1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100938.m3u8", "resolution": "HD"}, {"id": "de-100939", "name": "TR:CINE YESILCAM 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cineyesilcam2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100939.m3u8", "resolution": "HD"}, {"id": "de-100940", "name": "TR:CINE YESILCAM 3 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cineyesilcam3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100940.m3u8", "resolution": "HD"}, {"id": "de-100941", "name": "TR:CINE YESILCAM 4 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cineyesilcam4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100941.m3u8", "resolution": "HD"}, {"id": "de-100942", "name": "TR:CINE YESILCAM 5 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cineyesilcam5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100942.m3u8", "resolution": "HD"}, {"id": "de-89286", "name": "TR:SINEMA AKSIYON HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/sinema/sinemaaksiyontv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89286.m3u8", "resolution": "HD"}, {"id": "de-89285", "name": "TR:SINEMA KOMEDI HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemakomedi.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89285.m3u8", "resolution": "HD"}, {"id": "de-100944", "name": "TR:SINEMA TV 1002 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinema1002.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100944.m3u8", "resolution": "HD"}, {"id": "de-100945", "name": "TR:SINEMA TV 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek2/sinematv2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100945.m3u8", "resolution": "HD"}, {"id": "de-100946", "name": "TR:SINEMA TV AILE 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek2/sinemaaile2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100946.m3u8", "resolution": "HD"}, {"id": "de-100947", "name": "TR:SINEMA TV AILE HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemaaile.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100947.m3u8", "resolution": "HD"}, {"id": "de-89284", "name": "TR:SINEMA AILE HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemaaile.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89284.m3u8", "resolution": "HD"}, {"id": "de-100948", "name": "TR:SINEMA TV AKSIYON 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemaaksiyon2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100948.m3u8", "resolution": "HD"}, {"id": "de-100949", "name": "TR:SINEMA TV AKSIYON HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemaaksiyon.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100949.m3u8", "resolution": "HD"}, {"id": "de-100950", "name": "TR:SINEMA TV HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinamatv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100950.m3u8", "resolution": "HD"}, {"id": "de-100951", "name": "TR:SINEMA TV KOMEDI 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemakomedi2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100951.m3u8", "resolution": "HD"}, {"id": "de-100952", "name": "TR:SINEMA TV KOMEDI HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/sinemakomedi.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100952.m3u8", "resolution": "HD"}, {"id": "de-100953", "name": "TR:SINEMA TV YERLI 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek2/sinemayerli2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100953.m3u8", "resolution": "HD"}, {"id": "de-100954", "name": "TR:SINEMA TV YERLI HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek2/sinemayerli.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100954.m3u8", "resolution": "HD"}, {"id": "de-92118", "name": "TR:SINEMA YERLI 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek2/sinemayerli2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/92118.m3u8", "resolution": "HD"}, {"id": "de-92117", "name": "TR:SINEMA YERLI 1 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek2/sinemayerli.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/92117.m3u8", "resolution": "HD"}, {"id": "de-141512", "name": "TR:CINELUX VIZYON 1 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-VIZYON-1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141512.m3u8", "resolution": "4K"}, {"id": "de-141513", "name": "TR:CINELUX VIZYON 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-VIZYON-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141513.m3u8", "resolution": "4K"}, {"id": "de-141514", "name": "TR:CINELUX VIZYON 3 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-VIZYON-3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141514.m3u8", "resolution": "4K"}, {"id": "de-141515", "name": "TR:CINELUX VIZYON 4 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-VIZYON-4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141515.m3u8", "resolution": "4K"}, {"id": "de-141539", "name": "TR:CINELUX AKSIYON UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-AKSIYON.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141539.m3u8", "resolution": "4K"}, {"id": "de-141516", "name": "TR:CINELUX AKSIYON 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-AKSIYON-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141516.m3u8", "resolution": "4K"}, {"id": "de-141548", "name": "TR:CINELUX KOMEDI UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-KOMEDI-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141548.m3u8", "resolution": "4K"}, {"id": "de-141549", "name": "TR:CINELUX KOMEDI 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-KOMEDI-2-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141549.m3u8", "resolution": "4K"}, {"id": "de-141547", "name": "TR:CINELUX KORKU UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-KORKU.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141547.m3u8", "resolution": "4K"}, {"id": "de-141518", "name": "TR:CINELUX KORKU 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-KORKU-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141518.m3u8", "resolution": "4K"}, {"id": "de-141523", "name": "TR:CINELUX IMDB UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-IMDB-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141523.m3u8", "resolution": "4K"}, {"id": "de-141524", "name": "TR:CINELUX IMDB 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-IMDB-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141524.m3u8", "resolution": "4K"}, {"id": "de-141557", "name": "TR:CINELUX 4K", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-4K-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141557.m3u8", "resolution": "4K"}, {"id": "de-141555", "name": "TR:CINELUX AILE UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-AILE-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141555.m3u8", "resolution": "4K"}, {"id": "de-141556", "name": "TR:CINELUX AILE 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-AILE-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141556.m3u8", "resolution": "4K"}, {"id": "de-141538", "name": "TR:CINELUX ANIMASYON UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-ANIMASYON.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141538.m3u8", "resolution": "4K"}, {"id": "de-141554", "name": "TR:CINELUX ANIMASYON 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-ANIMASYON-2-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141554.m3u8", "resolution": "4K"}, {"id": "de-141553", "name": "TR:CINELUX BILIM KURGU UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-BILIM-KURGU.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141553.m3u8", "resolution": "4K"}, {"id": "de-141537", "name": "TR:CINELUX CINEMA MIX UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-CINEMA-MIX-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141537.m3u8", "resolution": "4K"}, {"id": "de-141534", "name": "TR:CINELUX SAVAS UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-SAVAS-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141534.m3u8", "resolution": "4K"}, {"id": "de-141533", "name": "TR:CINELUX YERLI UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-YERLI.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141533.m3u8", "resolution": "4K"}, {"id": "de-141542", "name": "TR:CINELUX YERLI 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-YERLI-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141542.m3u8", "resolution": "4K"}, {"id": "de-141532", "name": "TR:CINELUX YESILCAM UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-YESILCAM-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141532.m3u8", "resolution": "4K"}, {"id": "de-141541", "name": "TR:CINELUX YESILCAM 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-YESILCAM-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141541.m3u8", "resolution": "4K"}, {"id": "de-141517", "name": "TR:CINELUX YESILCAM 3 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-YESILCAM-3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141517.m3u8", "resolution": "4K"}, {"id": "de-141535", "name": "TR:CINELUX KOMEDI TURK UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-KOMEDI-TURK-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141535.m3u8", "resolution": "4K"}, {"id": "de-141526", "name": "TR:CINELUX KOMEDI TURK 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-KOMEDI-TURK-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141526.m3u8", "resolution": "4K"}, {"id": "de-141519", "name": "TR:CINELUX EZEL 7/24 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-EZEL-7-24-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141519.m3u8", "resolution": "4K"}, {"id": "de-141521", "name": "TR:CINELUX GULDUR GULDUR 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-GULDUR-GULDUR-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141521.m3u8", "resolution": "4K"}, {"id": "de-141522", "name": "TR:CINELUX ASMALI KONAK 7/24 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-ASMALI-KONAK-7-24.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141522.m3u8", "resolution": "4K"}, {"id": "de-141525", "name": "TR:CINELUX EKMEK TEKNESI 7/24 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-EKMEK-TEKNESI-7-24.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141525.m3u8", "resolution": "4K"}, {"id": "de-141527", "name": "TR:CINELUX MUHTESEM YUZYIL 7/24 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-MUHTESEM-YUZYIL-7-24-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141527.m3u8", "resolution": "4K"}, {"id": "de-141530", "name": "TR:CINELUX ASK-I MEMNU 7/24 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-ASK-I-MEMNU-7-24.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141530.m3u8", "resolution": "4K"}, {"id": "de-141531", "name": "TR:CINELUX IKINCI BAHAR 7/24 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-IKINCI-BAHAR-7-24.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141531.m3u8", "resolution": "4K"}, {"id": "de-141546", "name": "TR:CINELUX KURTLAR VADISI 7/24 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-KURTLAR-VADISI-7-24-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141546.m3u8", "resolution": "4K"}, {"id": "de-141543", "name": "TR:CINELUX VAHSI BATI UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-VAHSI-BATI-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141543.m3u8", "resolution": "4K"}, {"id": "de-141544", "name": "TR:CINELUX VAHSI BATI 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-VAHSI-BATI-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141544.m3u8", "resolution": "4K"}, {"id": "de-141551", "name": "TR:CINELUX GULDUR GULDUR UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-GULDUR-GULDUR-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141551.m3u8", "resolution": "4K"}, {"id": "de-141552", "name": "TR:CINELUX C.G.H.B. 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-C.G.H.B.-2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141552.m3u8", "resolution": "4K"}, {"id": "de-141536", "name": "TR:CINELUX KEMAL SUNAL UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-KEMAL-SUNAL.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141536.m3u8", "resolution": "4K"}, {"id": "de-141550", "name": "TR:CINELUX KEMAL SUNAL 2 UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-KEMAL-SUNAL-2-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141550.m3u8", "resolution": "4K"}, {"id": "de-141520", "name": "TR:CINELUX TURKAN SORAY UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-TURKAN-SORAY-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141520.m3u8", "resolution": "4K"}, {"id": "de-141528", "name": "TR:CINELUX CUNEYT ARKIN UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-CUNEYT-ARKIN.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141528.m3u8", "resolution": "4K"}, {"id": "de-141529", "name": "TR:CINELUX YILMAZ GUNEY UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-YILMAZ-GUNEY.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141529.m3u8", "resolution": "4K"}, {"id": "de-141540", "name": "TR:CINELUX ZEKI METIN UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-ZEKI-METIN-.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141540.m3u8", "resolution": "4K"}, {"id": "de-141545", "name": "TR:CINELUX SENER SEN UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cinelux/CINELUX-SENER-SEN.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/141545.m3u8", "resolution": "4K"}, {"id": "de-140562", "name": "TR:GPRIME AKSIYON 1 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/aksiyon.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/140562.m3u8", "resolution": "SD"}, {"id": "de-90128", "name": "TR:MAX 4K UHD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/max4k.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90128.m3u8", "resolution": "4K"}, {"id": "de-90118", "name": "TR:MAX HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxhd.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90118.m3u8", "resolution": "HD"}, {"id": "de-90113", "name": "TR:MAX VIZYON HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxvizyon.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90113.m3u8", "resolution": "HD"}, {"id": "de-90115", "name": "TR:MAX VIZYON 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxvizyon2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90115.m3u8", "resolution": "HD"}, {"id": "de-90114", "name": "TR:MAX VIZYON 3 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxvizyon3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90114.m3u8", "resolution": "HD"}, {"id": "de-90130", "name": "TR:MAX VIZYON 4 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxvizyon4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90130.m3u8", "resolution": "HD"}, {"id": "de-90131", "name": "TR:MAX AKSIYON HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxaksiyon.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90131.m3u8", "resolution": "HD"}, {"id": "de-90132", "name": "TR:MAX AKSYION 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxaksiyon2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90132.m3u8", "resolution": "HD"}, {"id": "de-90122", "name": "TR:MAX ANIMASYON HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxanimasyon.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90122.m3u8", "resolution": "HD"}, {"id": "de-90123", "name": "TR:MAX ANIMASYON 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxanimasyon2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90123.m3u8", "resolution": "HD"}, {"id": "de-90116", "name": "TR:MAX TURK HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxturk.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90116.m3u8", "resolution": "HD"}, {"id": "de-90120", "name": "TR:MAX GOLD HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxgold.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90120.m3u8", "resolution": "HD"}, {"id": "de-90121", "name": "TR:MAX PREMIER HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxpremier.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90121.m3u8", "resolution": "HD"}, {"id": "de-90117", "name": "TR:MAX STAR WARS HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxstarwars.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90117.m3u8", "resolution": "HD"}, {"id": "de-90112", "name": "TR:MAX WESTERN HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/maxwestern.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90112.m3u8", "resolution": "HD"}, {"id": "de-90124", "name": "TR:MAX 007 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/ek1/max007.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/90124.m3u8", "resolution": "HD"}, {"id": "de-100918", "name": "TR:CINE OFFICE 1 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100918.m3u8", "resolution": "HD"}, {"id": "de-100929", "name": "TR:CINE OFFICE 2 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100929.m3u8", "resolution": "HD"}, {"id": "de-100931", "name": "TR:CINE OFFICE 3 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100931.m3u8", "resolution": "HD"}, {"id": "de-100932", "name": "TR:CINE OFFICE 4 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100932.m3u8", "resolution": "HD"}, {"id": "de-100933", "name": "TR:CINE OFFICE 5 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100933.m3u8", "resolution": "HD"}, {"id": "de-100934", "name": "TR:CINE OFFICE 6 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine6.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100934.m3u8", "resolution": "HD"}, {"id": "de-100935", "name": "TR:CINE OFFICE 7 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine7.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100935.m3u8", "resolution": "HD"}, {"id": "de-100936", "name": "TR:CINE OFFICE 8 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine8.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100936.m3u8", "resolution": "HD"}, {"id": "de-100937", "name": "TR:CINE OFFICE 9 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine9.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100937.m3u8", "resolution": "HD"}, {"id": "de-100919", "name": "TR:CINE OFFICE 10 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine10.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100919.m3u8", "resolution": "HD"}, {"id": "de-100920", "name": "TR:CINE OFFICE 11 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine11.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100920.m3u8", "resolution": "HD"}, {"id": "de-100921", "name": "TR:CINE OFFICE 12 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine12.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100921.m3u8", "resolution": "HD"}, {"id": "de-100922", "name": "TR:CINE OFFICE 13 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine13.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100922.m3u8", "resolution": "HD"}, {"id": "de-100923", "name": "TR:CINE OFFICE 14 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine14.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100923.m3u8", "resolution": "HD"}, {"id": "de-100924", "name": "TR:CINE OFFICE 15 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine15.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100924.m3u8", "resolution": "HD"}, {"id": "de-100925", "name": "TR:CINE OFFICE 16 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine16.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100925.m3u8", "resolution": "HD"}, {"id": "de-100926", "name": "TR:CINE OFFICE 17 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine17.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100926.m3u8", "resolution": "HD"}, {"id": "de-100927", "name": "TR:CINE OFFICE 18 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine18.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100927.m3u8", "resolution": "HD"}, {"id": "de-100928", "name": "TR:CINE OFFICE 19 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine19.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100928.m3u8", "resolution": "HD"}, {"id": "de-100930", "name": "TR:CINE OFFICE 20 HD", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/cine/cine20.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100930.m3u8", "resolution": "HD"}, {"id": "de-143814", "name": "TR:GLIFE - ADILE NASIT ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/adilnenasit.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143814.m3u8", "resolution": "SD"}, {"id": "de-143813", "name": "TR:GLIFE - ATA DEMIRER ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/ata.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143813.m3u8", "resolution": "SD"}, {"id": "de-143817", "name": "TR:GLIFE - AYHAN ISIK ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/ayhanisik.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143817.m3u8", "resolution": "SD"}, {"id": "de-143774", "name": "TR:GLIFE - CUNEYT ARKIN ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/cuneytarkin.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143774.m3u8", "resolution": "SD"}, {"id": "de-143759", "name": "TR:GLIFE - EDIZ HUN ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/edizhun.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143759.m3u8", "resolution": "SD"}, {"id": "de-143758", "name": "TR:GLIFE - EMEL SAYIN ʜᴅ", "group": "TÜRK SINEMA", "logo": "ps://i0.wp.com/resim.yayins.com/glife/turksinema/emelsayin.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143758.m3u8", "resolution": "SD"}, {"id": "de-143792", "name": "TR:GLIFE - KEMAL SUNAL ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/kemalsunal.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143792.m3u8", "resolution": "SD"}, {"id": "de-143778", "name": "TR:GLIFE - ALPACINO ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/alpacino.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143778.m3u8", "resolution": "SD"}, {"id": "de-143777", "name": "TR:GLIFE - ANGELINA JOLIE ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/angelinajoliy.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143777.m3u8", "resolution": "SD"}, {"id": "de-143766", "name": "TR:GLIFE - ARNOLD SCHWARZENEGGER ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/arnold.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143766.m3u8", "resolution": "SD"}, {"id": "de-143764", "name": "TR:GLIFE - CAMERON DIAZ ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/camerondiaz.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143764.m3u8", "resolution": "SD"}, {"id": "de-143760", "name": "TR:GLIFE - DWAYNE JOHNSON ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/dwaynejohnson.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143760.m3u8", "resolution": "SD"}, {"id": "de-143795", "name": "TR:GLIFE - JACKIE CHAN ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/jackiechan.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143795.m3u8", "resolution": "SD"}, {"id": "de-143828", "name": "TR:GLIFE - JAN CLAUDE VAN DAMME ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/jcvd.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143828.m3u8", "resolution": "SD"}, {"id": "de-143794", "name": "TR:GLIFE - JASON STATHAM ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/jasonstatham.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143794.m3u8", "resolution": "SD"}, {"id": "de-143827", "name": "TR:GLIFE - JET LI ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/jetli.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143827.m3u8", "resolution": "SD"}, {"id": "de-143725", "name": "TR:GLIFE - JURASSIC WORLD ʜᴅ", "group": "TÜRK COCUK", "logo": "https://i0.wp.com/resim.yayins.com/glife/turkcocuk/jurassicpark.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143725.m3u8", "resolution": "SD"}, {"id": "de-143786", "name": "TR:GLIFE - WILL SMITH ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/willsmith.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143786.m3u8", "resolution": "SD"}, {"id": "de-143819", "name": "TR:GLIFE - AILE ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/aile.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143819.m3u8", "resolution": "SD"}, {"id": "de-143779", "name": "TR:GLIFE - AKSIYON 2 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/aksiyon.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143779.m3u8", "resolution": "SD"}, {"id": "de-143748", "name": "TR:GLIFE - AKSIYON ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/aksiyon.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143748.m3u8", "resolution": "SD"}, {"id": "de-143776", "name": "TR:GLIFE - ANIMASYON ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/animasyon.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143776.m3u8", "resolution": "SD"}, {"id": "de-143749", "name": "TR:GLIFE - BELGESEL ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/belgesel.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143749.m3u8", "resolution": "SD"}, {"id": "de-143775", "name": "TR:GLIFE - BILIM KURGU ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/bilimkurgu.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143775.m3u8", "resolution": "SD"}, {"id": "de-143765", "name": "TR:GLIFE - BOLLYWOOD ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/bollywood.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143765.m3u8", "resolution": "SD"}, {"id": "de-143785", "name": "TR:GLIFE - BOXSET ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/boxset.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143785.m3u8", "resolution": "SD"}, {"id": "de-143755", "name": "TR:GLIFE - DRAM ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/dram.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143755.m3u8", "resolution": "SD"}, {"id": "de-143754", "name": "TR:GLIFE - FANTASTIK ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/fantastik.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143754.m3u8", "resolution": "SD"}, {"id": "de-143753", "name": "TR:GLIFE - GERILIM ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/gerilim.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143753.m3u8", "resolution": "SD"}, {"id": "de-143812", "name": "TR:GLIFE - HARRY POTTER ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/harrypotter.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143812.m3u8", "resolution": "SD"}, {"id": "de-143797", "name": "TR:GLIFE - IMDB TOP 100 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/imbd100.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143797.m3u8", "resolution": "SD"}, {"id": "de-143752", "name": "TR:GLIFE - KOMEDI ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/komedi.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143752.m3u8", "resolution": "SD"}, {"id": "de-143751", "name": "TR:GLIFE - KORKU ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/korku.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143751.m3u8", "resolution": "SD"}, {"id": "de-143750", "name": "TR:GLIFE - MACERA ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/macera.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143750.m3u8", "resolution": "SD"}, {"id": "de-143757", "name": "TR:GLIFE - SAVAS ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/savas.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143757.m3u8", "resolution": "SD"}, {"id": "de-143825", "name": "TR:GLIFE - VIZYON 1 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/vizyon1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143825.m3u8", "resolution": "SD"}, {"id": "de-143824", "name": "TR:GLIFE - VIZYON 2 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/vizyon2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143824.m3u8", "resolution": "SD"}, {"id": "de-143823", "name": "TR:GLIFE - VIZYON 3 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/vizyon3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143823.m3u8", "resolution": "SD"}, {"id": "de-143822", "name": "TR:GLIFE - VIZYON 4 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/vizyon4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143822.m3u8", "resolution": "SD"}, {"id": "de-143821", "name": "TR:GLIFE - VIZYON 5 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/vizyon5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143821.m3u8", "resolution": "SD"}, {"id": "de-143756", "name": "TR:GLIFE - WESTERN ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/western.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143756.m3u8", "resolution": "SD"}, {"id": "de-143784", "name": "TR:GLIFE - YERLI SINEMA 1 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/yerlisinema1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143784.m3u8", "resolution": "SD"}, {"id": "de-143783", "name": "TR:GLIFE - YERLI SINEMA 2 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/yerlisinema2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143783.m3u8", "resolution": "SD"}, {"id": "de-143782", "name": "TR:GLIFE - YERLI SINEMA 3 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/yerlisinema3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143782.m3u8", "resolution": "SD"}, {"id": "de-143781", "name": "TR:GLIFE - YERLI SINEMA 4 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/yerlisinema4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143781.m3u8", "resolution": "SD"}, {"id": "de-143780", "name": "TR:GLIFE - YERLI SINEMA 5 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/yerlisinema5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143780.m3u8", "resolution": "SD"}, {"id": "de-143673", "name": "TR:GLIFE - YESILCAM 1 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/yesilcam1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143673.m3u8", "resolution": "SD"}, {"id": "de-143672", "name": "TR:GLIFE - YESILCAM 2 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/yesilcam2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143672.m3u8", "resolution": "SD"}, {"id": "de-143671", "name": "TR:GLIFE - YESILCAM 3 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/yesilcam3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143671.m3u8", "resolution": "SD"}, {"id": "de-143670", "name": "TR:GLIFE - YESILCAM 4 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/yesilcam4.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143670.m3u8", "resolution": "SD"}, {"id": "de-143669", "name": "TR:GLIFE - YESILCAM 5 ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/yesilcam5.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143669.m3u8", "resolution": "SD"}, {"id": "de-143661", "name": "TR:GLIFE - AILE SAADETI ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/ailesaadetik.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143661.m3u8", "resolution": "SD"}, {"id": "de-143818", "name": "TR:GLIFE - BEHZAT C ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/behzatc.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143818.m3u8", "resolution": "SD"}, {"id": "de-143820", "name": "TR:GLIFE - CENNET MAHALLESI ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/cennetmah.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143820.m3u8", "resolution": "SD"}, {"id": "de-143763", "name": "TR:GLIFE - DAYI SOV ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/dayi.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143763.m3u8", "resolution": "SD"}, {"id": "de-143762", "name": "TR:GLIFE - DEHA ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/deha.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143762.m3u8", "resolution": "SD"}, {"id": "de-143761", "name": "TR:GLIFE - DIRILIS ERTUGRUL ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/dirilisertugrul.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143761.m3u8", "resolution": "SD"}, {"id": "de-143800", "name": "TR:GLIFE - ESREF RUYA ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/esref.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143800.m3u8", "resolution": "SD"}, {"id": "de-143799", "name": "TR:GLIFE - GULDUR GULDUR ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/guldurguldur.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143799.m3u8", "resolution": "SD"}, {"id": "de-143798", "name": "TR:GLIFE - ICERDE ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/icerde.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143798.m3u8", "resolution": "SD"}, {"id": "de-143796", "name": "TR:GLIFE - ISLER GUCLER ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/islergucler.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143796.m3u8", "resolution": "SD"}, {"id": "de-143660", "name": "TR:GLIFE - KACAK ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/kacak.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143660.m3u8", "resolution": "SD"}, {"id": "de-143793", "name": "TR:GLIFE - KANIT ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/kanit.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143793.m3u8", "resolution": "SD"}, {"id": "de-143831", "name": "TR:GLIFE - KARADAYI 1.SEZON ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/karadayi1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143831.m3u8", "resolution": "SD"}, {"id": "de-143830", "name": "TR:GLIFE - KARADAYI 2.SEZON ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/karadayi2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143830.m3u8", "resolution": "SD"}, {"id": "de-143829", "name": "TR:GLIFE - KARADAYI 3.SEZON ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/karadayi3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143829.m3u8", "resolution": "SD"}, {"id": "de-143791", "name": "TR:GLIFE - KISMET ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/kismet.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143791.m3u8", "resolution": "SD"}, {"id": "de-143790", "name": "TR:GLIFE - KIYMA ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/kiyma.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143790.m3u8", "resolution": "SD"}, {"id": "de-143832", "name": "TR:GLIFE - KIZILCIK SERBETI ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/kizilcikserbeti.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143832.m3u8", "resolution": "SD"}, {"id": "de-143789", "name": "TR:GLIFE - KIZIL GONCALAR ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/kizilgoncalar.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143789.m3u8", "resolution": "SD"}, {"id": "de-143668", "name": "TR:GLIFE - KURTLAR VADISI ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/kurtlarvadisi.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143668.m3u8", "resolution": "SD"}, {"id": "de-143667", "name": "TR:GLIFE - KURTLAR VADISI PUSU ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/kvp.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143667.m3u8", "resolution": "SD"}, {"id": "de-143530", "name": "TR:GLIFE - KUZEY YILDIZI ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/kuzeyyildizi.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143530.m3u8", "resolution": "SD"}, {"id": "de-143834", "name": "TR:GLIFE - LEYLA ILE MECNUN ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/leylailemecnun.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143834.m3u8", "resolution": "SD"}, {"id": "de-143826", "name": "TR:GLIFE - MAHSUN J", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/mahsunj.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143826.m3u8", "resolution": "SD"}, {"id": "de-143833", "name": "TR:GLIFE - MEVZULAR ACIK MIKROFON ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/mevzularacikmikrofon.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143833.m3u8", "resolution": "SD"}, {"id": "de-143816", "name": "TR:GLIFE - SIFIR 1 ADANA ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/sifir1adana.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143816.m3u8", "resolution": "SD"}, {"id": "de-143815", "name": "TR:GLIFE - SIHIRLI ANNEM ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/cc/sihirliannem.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143815.m3u8", "resolution": "SD"}, {"id": "de-143788", "name": "TR:GLIFE - SON YAZ ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/sonyaz.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143788.m3u8", "resolution": "SD"}, {"id": "de-143787", "name": "TR:GLIFE - VATANIM SENSIN ʜᴅ", "group": "TÜRK SINEMA", "logo": "https://i0.wp.com/resim.yayins.com/glife/turksinema/vatanimsensin.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143787.m3u8", "resolution": "SD"}, {"id": "de-143805", "name": "TR:GLIFE - FLORENCE 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/FLORENCE.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143805.m3u8", "resolution": "4K"}, {"id": "de-143806", "name": "TR:GLIFE - HEAVEN ON EARTH 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/HEAVEN.ON.EARTH.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143806.m3u8", "resolution": "4K"}, {"id": "de-143807", "name": "TR:GLIFE - ISTANBUL 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/istanbul.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143807.m3u8", "resolution": "4K"}, {"id": "de-143808", "name": "TR:GLIFE - JAPAN 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/JAPAN.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143808.m3u8", "resolution": "4K"}, {"id": "de-143801", "name": "TR:GLIFE - MILAN 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/milan.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143801.m3u8", "resolution": "4K"}, {"id": "de-143802", "name": "TR:GLIFE - NEW YORK 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/newyork.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143802.m3u8", "resolution": "4K"}, {"id": "de-143768", "name": "TR:GLIFE - PARIS 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/paris.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143768.m3u8", "resolution": "4K"}, {"id": "de-143769", "name": "TR:GLIFE - PRAGUE 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/prague.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143769.m3u8", "resolution": "4K"}, {"id": "de-143770", "name": "TR:GLIFE - TOKYO 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/tokyo.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143770.m3u8", "resolution": "4K"}, {"id": "de-143771", "name": "TR:GLIFE - TURKEY 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/turkey.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143771.m3u8", "resolution": "4K"}, {"id": "de-143772", "name": "TR:GLIFE - VATICAN 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/VATICAN.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143772.m3u8", "resolution": "4K"}, {"id": "de-143773", "name": "TR:GLIFE - WARSAW 4K", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/ambiyans/warsaw.jpg", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143773.m3u8", "resolution": "4K"}, {"id": "de-143741", "name": "TR:GLIFE - EN IYI 20 BLUES MUZIKLERI", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/muzik/Blues-glife.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143741.m3u8", "resolution": "SD"}, {"id": "de-143742", "name": "TR:GLIFE - EN IYI 20 JAZZ MUZIKLERI", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/muzik/Jazz.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143742.m3u8", "resolution": "SD"}, {"id": "de-143739", "name": "TR:GLIFE - EN IYI 20 RAP/HIP-HOP MUZIKLERI", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/muzik/hiphop-RAP.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143739.m3u8", "resolution": "SD"}, {"id": "de-143744", "name": "TR:GLIFE - EN IYI 20 REGGAE MUZIKLERI", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/muzik/Reggae.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143744.m3u8", "resolution": "SD"}, {"id": "de-143746", "name": "TR:GLIFE - EN IYI 20 TURK POP MUZIKLERI", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/muzik/Pop.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143746.m3u8", "resolution": "SD"}, {"id": "de-143740", "name": "TR:GLIFE - EN IYI 20 TURK RAP/HIP-HOP MUZIKLERI", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/muzik/hiphop-RAP.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143740.m3u8", "resolution": "SD"}, {"id": "de-143747", "name": "TR:GLIFE - EN IYI 20 TURK ROCK MUZIKLERI", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/muzik/Rock.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143747.m3u8", "resolution": "SD"}, {"id": "de-143745", "name": "TR:GLIFE - EN IYI 20 YABANCI POP MUZIKLERI", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/muzik/Pop.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143745.m3u8", "resolution": "SD"}, {"id": "de-143743", "name": "TR:GLIFE - EN IYI 20 YABANCI ROCK MUZIKLERI", "group": "TÜRK MÜZIK", "logo": "https://i0.wp.com/resim.yayins.com/muzik/Rock.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/143743.m3u8", "resolution": "SD"}, {"id": "de-89472", "name": "TR:ADA TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/adatv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89472.m3u8", "resolution": "HD"}, {"id": "de-89413", "name": "TR:AKSU TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/aksutv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89413.m3u8", "resolution": "HD"}, {"id": "de-101348", "name": "TR:KRT TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/ktv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/101348.m3u8", "resolution": "HD"}, {"id": "de-89483", "name": "TR:ANADOLU DERNEK TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/anadoludernek.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89483.m3u8", "resolution": "HD"}, {"id": "de-116366", "name": "TR:BURSA AS TV", "group": "TÜRK YEREL", "logo": "", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/116366.m3u8", "resolution": "SD"}, {"id": "de-89428", "name": "TR:MALATYA VUSLAT TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/vuslattv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89428.m3u8", "resolution": "HD"}, {"id": "de-100991", "name": "TR:KON TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kontv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/100991.m3u8", "resolution": "HD"}, {"id": "de-89470", "name": "TR:BRT 1 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/brttv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89470.m3u8", "resolution": "HD"}, {"id": "de-89469", "name": "TR:BRT 2 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/brt2.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89469.m3u8", "resolution": "HD"}, {"id": "de-89468", "name": "TR:BRT 3 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/ulusal/brt3.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89468.m3u8", "resolution": "HD"}, {"id": "de-89453", "name": "TR:CAY TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/caytv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89453.m3u8", "resolution": "HD"}, {"id": "de-89415", "name": "TR:DEHA TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/dehatv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89415.m3u8", "resolution": "HD"}, {"id": "de-89442", "name": "TR:EDESSA TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/edessetv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89442.m3u8", "resolution": "HD"}, {"id": "de-89416", "name": "TR:ER TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/erttv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89416.m3u8", "resolution": "HD"}, {"id": "de-89460", "name": "TR:FM TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/fmtv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89460.m3u8", "resolution": "HD"}, {"id": "de-89445", "name": "TR:GUNEYDOGU TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/gtv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89445.m3u8", "resolution": "HD"}, {"id": "de-89424", "name": "TR:KANAL 15 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/k15.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89424.m3u8", "resolution": "HD"}, {"id": "de-89410", "name": "TR:KANAL 26 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanal26.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89410.m3u8", "resolution": "HD"}, {"id": "de-89459", "name": "TR:KANAL 32 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanal32.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89459.m3u8", "resolution": "HD"}, {"id": "de-89437", "name": "TR:KANAL 33 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/haber/kanal33.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89437.m3u8", "resolution": "HD"}, {"id": "de-89418", "name": "TR:KANAL 68 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanal68.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89418.m3u8", "resolution": "HD"}, {"id": "de-89458", "name": "TR:KANAL FIRAT HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanalf.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89458.m3u8", "resolution": "HD"}, {"id": "de-89474", "name": "TR:KANAL T HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanalt.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89474.m3u8", "resolution": "HD"}, {"id": "de-89443", "name": "TR:KANAL URFA HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanalurfa.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89443.m3u8", "resolution": "HD"}, {"id": "de-89409", "name": "TR:KANAL V HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanalv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89409.m3u8", "resolution": "HD"}, {"id": "de-89003", "name": "TR:KANAL YALOVA HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanalyalova.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89003.m3u8", "resolution": "HD"}, {"id": "de-114288", "name": "TR:GONCA TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/2/goncatv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114288.m3u8", "resolution": "HD"}, {"id": "de-114287", "name": "TR:KANAL 12 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/2/kanal12.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/114287.m3u8", "resolution": "HD"}, {"id": "de-89473", "name": "TR:KIBRIS GENC TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/genctv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89473.m3u8", "resolution": "HD"}, {"id": "de-89475", "name": "TR:KIBRIS TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/ktv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89475.m3u8", "resolution": "HD"}, {"id": "de-89463", "name": "TR:KOY TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/koytv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89463.m3u8", "resolution": "HD"}, {"id": "de-89446", "name": "TR:LINE TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/linetv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89446.m3u8", "resolution": "HD"}, {"id": "de-88999", "name": "TR:MANISA TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/manisatv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88999.m3u8", "resolution": "HD"}, {"id": "de-89465", "name": "TR:ORDU ALTAS TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/altastv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89465.m3u8", "resolution": "HD"}, {"id": "de-89439", "name": "TR:PAMUKKALE TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/pamukkale.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89439.m3u8", "resolution": "HD"}, {"id": "de-89450", "name": "TR:REHBER TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/dini/rehber.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89450.m3u8", "resolution": "HD"}, {"id": "de-89481", "name": "TR:RUMELI TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/rumeli.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89481.m3u8", "resolution": "HD"}, {"id": "de-99220", "name": "TR:TEK RUMELI TV", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/rumeli.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/99220.m3u8", "resolution": "SD"}, {"id": "de-89426", "name": "TR:SAT 7 TURK HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/satturk.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89426.m3u8", "resolution": "HD"}, {"id": "de-89421", "name": "TR:TEMPO TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/tempo.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89421.m3u8", "resolution": "HD"}, {"id": "de-89452", "name": "TR:TMB TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/tmb.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89452.m3u8", "resolution": "HD"}, {"id": "de-89425", "name": "TR:TON TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/tontv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89425.m3u8", "resolution": "HD"}, {"id": "de-89411", "name": "TR:TV 2020 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/tv2020.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89411.m3u8", "resolution": "HD"}, {"id": "de-89419", "name": "TR:TV 41 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/tv41.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89419.m3u8", "resolution": "HD"}, {"id": "de-89488", "name": "TR:TV 52 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kanal52.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89488.m3u8", "resolution": "HD"}, {"id": "de-89457", "name": "TR:TV KAYSERI HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/ek1/kayseritv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89457.m3u8", "resolution": "HD"}, {"id": "de-89414", "name": "TR:TVDEN HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/tvden.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89414.m3u8", "resolution": "HD"}, {"id": "de-88996", "name": "TR:TVO HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/tvo.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/88996.m3u8", "resolution": "HD"}, {"id": "de-89422", "name": "TR:VIZYON 58 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/vizyon58.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89422.m3u8", "resolution": "HD"}, {"id": "de-89434", "name": "TR:YENI KOCAELI TV HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/kocalitv.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89434.m3u8", "resolution": "HD"}, {"id": "de-89164", "name": "TR:TV 1 HD", "group": "TÜRK YEREL", "logo": "https://i0.wp.com/resim.yayins.com/yerel/tv1.png", "url": "http://germanyservers3.net:8080/live/ilyasilmek/13467900/89164.m3u8", "resolution": "HD"}];

  // ================= 2. DATA: DEFAULT FREE CHANNELS =================
  const DEFAULT_FREE_CHANNELS = [
    // --- TÜRKİYE - HABER & GENEL ---
    {
      id: "trt-1",
      name: "TRT 1 HD",
      group: "Türkiye - Ulusal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/TRT_1_logo_2021.svg/320px-TRT_1_logo_2021.svg.png",
      url: "https://tv-trt1.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    },
    {
      id: "trt-haber",
      name: "TRT Haber HD",
      group: "Türkiye - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/TRT_Haber_logo_2021.svg/320px-TRT_Haber_logo_2021.svg.png",
      url: "https://tv-trthaber.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    },
    {
      id: "trt-spor",
      name: "TRT Spor HD",
      group: "Türkiye - Spor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/TRT_Spor_logo_2021.svg/320px-TRT_Spor_logo_2021.svg.png",
      url: "https://tv-trtspor1.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    },
    {
      id: "trt-belgesel",
      name: "TRT Belgesel HD",
      group: "Türkiye - Belgesel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/TRT_Belgesel_logo_2021.svg/320px-TRT_Belgesel_logo_2021.svg.png",
      url: "https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    },
    {
      id: "trt-muzik",
      name: "TRT Müzik HD",
      group: "Türkiye - Müzik",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/TRT_M%C3%BCzik_logo_2021.svg/320px-TRT_M%C3%BCzik_logo_2021.svg.png",
      url: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "HD"
    },
    {
      id: "trt-cocuk",
      name: "TRT Çocuk HD",
      group: "Türkiye - Çocuk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/TRT_%C3%87ocuk_logo_2021.svg/320px-TRT_%C3%87ocuk_logo_2021.svg.png",
      url: "https://tv-trtcocuk.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    },
    {
      id: "trt-world",
      name: "TRT World HD (English)",
      group: "Türkiye - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/TRT_World_logo_2021.svg/320px-TRT_World_logo_2021.svg.png",
      url: "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
      country: "TR",
      resolution: "FHD"
    },

    // --- DÜNYA HABER & BİLGİ ---
    {
      id: "euronews-en",
      name: "Euronews (English)",
      group: "Dünya - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Euronews_2016_logo.svg/320px-Euronews_2016_logo.svg.png",
      url: "https://euronews-euronews-news-world-1-us.samsung.wurl.tv/playlist.m3u8",
      country: "EU",
      resolution: "HD"
    },
    {
      id: "dw-english",
      name: "Deutsche Welle (English)",
      group: "Dünya - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Deutsche_Welle_logo.svg/320px-Deutsche_Welle_logo.svg.png",
      url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8",
      country: "DE",
      resolution: "FHD"
    },
    {
      id: "france24-en",
      name: "France 24 HD (English)",
      group: "Dünya - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/France_24_logo_2013.svg/320px-France_24_logo_2013.svg.png",
      url: "https://f24hls-i.akamaihd.net/hls/live/221193/F24_EN_LO_HLS/master.m3u8",
      country: "FR",
      resolution: "HD"
    },
    {
      id: "aljazeera-en",
      name: "Al Jazeera English HD",
      group: "Dünya - Haber",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Al_Jazeera_English_logo.svg/320px-Al_Jazeera_English_logo.svg.png",
      url: "https://live-hls-web-aje.getaj.net/AJE/03.m3u8",
      country: "QA",
      resolution: "FHD"
    },

    // --- BİLİM, UZAY & SPOR ---
    {
      id: "nasa-tv",
      name: "NASA TV HD (Public)",
      group: "Bilim & Belgesel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/320px-NASA_logo.svg.png",
      url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8",
      country: "US",
      resolution: "FHD"
    },
    {
      id: "redbull-tv",
      name: "Red Bull TV",
      group: "Spor & Macera",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Red_Bull_TV_logo.svg/320px-Red_Bull_TV_logo.svg.png",
      url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
      country: "AT",
      resolution: "FHD"
    },
    {
      id: "clubland-tv",
      name: "Clubland TV HD",
      group: "Müzik & Eğlence",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Clubland_TV_Logo.png/320px-Clubland_TV_Logo.png",
      url: "https://m7.distro.tv/live/eds/clubland/hls_video/index.m3u8",
      country: "UK",
      resolution: "HD"
    },
    {
      id: "big-buck-bunny",
      name: "Big Buck Bunny (4K Test)",
      group: "Test & VOD",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/320px-Big_buck_bunny_poster_big.jpg",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      country: "NL",
      resolution: "4K"
    }
  ];

  const PRESET_PLAYLISTS = [
    {
      id: "preset-user-germany",
      name: "⚡ Özel Almanya IPTV (ilyasilmek) [549 Kanal]",
      url: "local_germany",
      description: "Tüm Türk Ulusal, Spor, Sinema, Belgesel ve Çocuk kanalları."
    },
    {
      id: "preset-default",
      name: "Varsayılan Halka Açık Kanallar (TR & Dünya)",
      url: "local_default",
      description: "TRT Kanalları, Uluslararası Haberler, NASA TV, RedBull ve Müzik kanalları."
    },
    {
      id: "preset-iptv-tr",
      name: "IPTV-ORG Türkiye Kanalları (GitHub)",
      url: "https://iptv-org.github.io/iptv/countries/tr.m3u",
      description: "GitHub iptv-org topluluğunun güncel Türkiye listesi."
    },
    {
      id: "preset-iptv-news",
      name: "IPTV-ORG Dünya Haber Kanalları (News)",
      url: "https://iptv-org.github.io/iptv/categories/news.m3u",
      description: "Tüm dünyadan 24/7 canlı haber yayınları."
    }
  ];

  // ================= 3. STORAGE MANAGER =================
  const STORAGE_KEYS = {
    FAVORITES: "iptv_favorites_v1",
    PLAYLISTS: "iptv_custom_playlists_v1",
    HISTORY: "iptv_history_v1",
    SETTINGS: "iptv_settings_v1"
  };

  const Storage = {
    getFavorites() {
      try {
        const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
        return data ? JSON.parse(data) : [];
      } catch (e) {
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
      const exists = playlists.find(p => p.id === playlist.id || p.name === playlist.name);
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

    clearAllCustomPlaylists() {
      localStorage.removeItem(STORAGE_KEYS.PLAYLISTS);
    },

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
      if (history.length > 30) history = history.slice(0, 30);
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    },

    clearHistory() {
      localStorage.removeItem(STORAGE_KEYS.HISTORY);
    },

    getSettings() {
      try {
        const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
        return data ? JSON.parse(data) : { volume: 0.9, aspectRatio: "contain" };
      } catch (e) {
        return { volume: 0.9, aspectRatio: "contain" };
      }
    },

    saveSettings(settings) {
      try {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
      } catch (e) {}
    }
  };

  // ================= 4. M3U PARSER =================
  function parseM3U(content) {
    if (!content || typeof content !== "string") {
      return { channels: [], groups: [] };
    }

    const lines = content.split(/\r?\n/);
    const channels = [];
    const groupsSet = new Set();
    let currentChannel = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      if (line.startsWith("#EXTINF:")) {
        currentChannel = extractExtInfData(line);
      } else if (line.startsWith("#EXTGRP:") && currentChannel) {
        const grp = line.replace("#EXTGRP:", "").trim();
        if (grp) currentChannel.group = grp;
      } else if (!line.startsWith("#")) {
        if (currentChannel) {
          currentChannel.url = line;
          if (!currentChannel.group) currentChannel.group = "Genel";
          if (!currentChannel.resolution) currentChannel.resolution = detectResolution(currentChannel.name);
          groupsSet.add(currentChannel.group);
          channels.push(currentChannel);
          currentChannel = null;
        } else if (line.startsWith("http://") || line.startsWith("https://")) {
          const title = line.split("/").pop().split("?")[0] || "Kanal " + (channels.length + 1);
          channels.push({
            id: "ch-" + Math.random().toString(36).substr(2, 9),
            name: title,
            group: "Genel",
            logo: "",
            url: line,
            resolution: detectResolution(title)
          });
          groupsSet.add("Genel");
        }
      }
    }

    return {
      channels,
      groups: Array.from(groupsSet).sort()
    };
  }

  function extractExtInfData(line) {
    const channel = {
      id: "ch-" + Math.random().toString(36).substr(2, 9),
      name: "İsimsiz Kanal",
      group: "Genel",
      logo: "",
      url: "",
      resolution: "HD"
    };

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
    if (commaIndex !== -1 && commaIndex < line.length - 1) {
      const rawTitle = line.substring(commaIndex + 1).trim();
      if (rawTitle) channel.name = rawTitle;
    } else if (channel.tvgName) {
      channel.name = channel.tvgName;
    }

    return channel;
  }

  function detectResolution(title) {
    if (!title) return "HD";
    const upper = title.toUpperCase();
    if (upper.includes("4K") || upper.includes("UHD") || upper.includes("2160P")) return "4K";
    if (upper.includes("FHD") || upper.includes("1080P") || upper.includes("1080I")) return "FHD";
    if (upper.includes("HD") || upper.includes("720P")) return "HD";
    if (upper.includes("SD") || upper.includes("576P") || upper.includes("480P")) return "SD";
    return "HD";
  }

  // ================= 5. VIDEO PLAYER ENGINE =================
  class IPTVPlayer {
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
      this.video.addEventListener("play", () => this.triggerState("playing"));
      this.video.addEventListener("pause", () => this.triggerState("paused"));
      this.video.addEventListener("waiting", () => this.triggerState("buffering"));
      this.video.addEventListener("playing", () => this.triggerState("playing"));
      this.video.addEventListener("volumechange", () => {
        this.triggerState("volumechange", {
          volume: this.video.volume,
          muted: this.video.muted
        });
      });

      this.video.addEventListener("loadedmetadata", () => {
        this.triggerState("loadedmetadata", {
          videoWidth: this.video.videoWidth,
          videoHeight: this.video.videoHeight,
          duration: this.video.duration
        });
      });

      this.video.addEventListener("error", (e) => {
        console.warn("Video Error:", this.video.error);
        this.triggerState("error", { error: this.video.error });
      });

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
      let streamUrl = channel.url.trim();

      if (streamUrl.endsWith(".ts")) {
        streamUrl = streamUrl.replace(/\.ts$/, ".m3u8");
      }

      console.log("▶ Oynatılıyor:", channel.name, "URL:", streamUrl);

      if (this.hls) {
        this.hls.destroy();
        this.hls = null;
      }

      this.triggerState("loading", { channel });

      if (window.Hls && window.Hls.isSupported()) {
        const hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 30,
          maxBufferLength: 20
        });
        this.hls = hls;

        hls.loadSource(streamUrl);
        hls.attachMedia(this.video);

        hls.on(window.Hls.Events.MANIFEST_PARSED, (event, data) => {
          const levels = (data.levels || []).map((lvl, index) => ({
            index,
            bitrate: lvl.bitrate,
            height: lvl.height,
            name: lvl.height ? `${lvl.height}p` : `${Math.round(lvl.bitrate / 1000)}k`
          }));

          this.triggerState("manifest_parsed", { levels });

          const playPromise = this.video.play();
          if (playPromise !== undefined) {
            playPromise.catch(err => {
              console.warn("Autoplay engellendi:", err);
              this.triggerState("autoplay_blocked");
            });
          }
        });

        hls.on(window.Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            console.warn("HLS Fatal Error:", data);
            switch (data.type) {
              case window.Hls.ErrorTypes.NETWORK_ERROR:
                console.warn("Ağ hatası, sunucu bağlantısı kurulamadı...");
                hls.destroy();
                this.triggerState("error", { details: data, message: "Yayın sunucusu bağlantıyı reddetti (CORS veya eşzamanlı bağlantı sınırı (2/2) dolu)." });
                break;
              case window.Hls.ErrorTypes.MEDIA_ERROR:
                console.warn("Medya format hatası...");
                hls.recoverMediaError();
                break;
              default:
                hls.destroy();
                this.triggerState("error", { details: data, message: "Yayın oynatılamadı. Sunucu çevrimdışı olabilir." });
                break;
            }
          }
        });

      } else if (this.video.canPlayType("application/vnd.apple.mpegurl")) {
        this.video.src = streamUrl;
        this.video.play().catch(() => this.triggerState("autoplay_blocked"));
      } else {
        this.video.src = streamUrl;
        this.video.play().catch(() => this.triggerState("autoplay_blocked"));
      }
    }

    stop() {
      if (this.hls) {
        this.hls.destroy();
        this.hls = null;
      }
      this.video.pause();
      this.video.removeAttribute("src");
      this.video.load();
      this.currentChannel = null;
    }

    togglePlay() {
      if (this.video.paused) {
        this.video.play().catch(e => console.warn(e));
      } else {
        this.video.pause();
      }
    }

    setVolume(volume) {
      this.video.volume = Math.max(0, Math.min(1, volume));
      if (this.video.volume > 0) this.video.muted = false;
    }

    toggleMute() {
      this.video.muted = !this.video.muted;
    }

    setQuality(levelIndex) {
      if (this.hls) {
        this.hls.currentLevel = levelIndex;
      }
    }

    setAspectRatio(ratio) {
      this.video.style.objectFit = "";
      this.video.style.aspectRatio = "";
      if (ratio === "cover" || ratio === "contain" || ratio === "fill") {
        this.video.style.objectFit = ratio;
      } else if (ratio === "16/9") {
        this.video.style.objectFit = "cover";
        this.video.style.aspectRatio = "16/9";
      } else if (ratio === "4/3") {
        this.video.style.objectFit = "cover";
        this.video.style.aspectRatio = "4/3";
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
        console.warn("PiP Hatası:", e);
      }
    }

    toggleFullscreen() {
      if (!document.fullscreenElement) {
        this.container.requestFullscreen().catch(e => console.warn(e));
      } else {
        document.exitFullscreen();
      }
    }

    captureScreenshot() {
      try {
        if (!this.video.videoWidth || !this.video.videoHeight) {
          alert("Ekran görüntüsü almak için yayın açık olmalıdır.");
          return;
        }
        const canvas = document.createElement("canvas");
        canvas.width = this.video.videoWidth;
        canvas.height = this.video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);

        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const channelName = (this.currentChannel?.name || "iptv-stream").replace(/[^a-zA-Z0-9_-]/g, "_");
        const link = document.createElement("a");
        link.download = `${channelName}_${timestamp}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      } catch (e) {
        alert("Bu yayın CORS güvenlik koruması nedeniyle ekran görüntüsü alımını kısıtlıyor.");
      }
    }

    collectStats() {
      if (!this.video || this.video.paused) return;
      let bitrate = 0;
      let bufferLength = 0;
      let droppedFrames = 0;

      if (this.hls && this.hls.levels) {
        const lvl = this.hls.levels[this.hls.currentLevel] || this.hls.levels[this.hls.autoLevel];
        if (lvl) bitrate = Math.round(lvl.bitrate / 1000);
      }

      if (this.video.buffered && this.video.buffered.length > 0) {
        const cur = this.video.currentTime;
        for (let i = 0; i < this.video.buffered.length; i++) {
          if (this.video.buffered.start(i) <= cur && cur <= this.video.buffered.end(i)) {
            bufferLength = (this.video.buffered.end(i) - cur).toFixed(1);
            break;
          }
        }
      }

      if (this.video.getVideoPlaybackQuality) {
        droppedFrames = this.video.getVideoPlaybackQuality().droppedVideoFrames;
      }

      this.onStatsUpdate({
        resolution: `${this.video.videoWidth || 0}x${this.video.videoHeight || 0}`,
        bitrate: bitrate > 0 ? `${bitrate} kbps` : "Canlı Akış",
        bufferLength: `${bufferLength} s`,
        droppedFrames
      });
    }
  }

  // ================= 6. MAIN APP CONTROLLER =================
  class IPTVApp {
    constructor() {
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
      this.player = new IPTVPlayer(this.videoEl, this.playerContainer, {
        onStateChange: (state) => this.handlePlayerStateChange(state),
        onStatsUpdate: (stats) => this.handleStatsUpdate(stats),
        onError: (err) => console.warn("Player Error:", err)
      });

      this.init();
    }

    init() {
      console.log("IPTVApp başlatıldı. Kanal sayısı:", this.channels.length);
      this.loadInitialData();
      this.bindEvents();
      this.setupKeyboardShortcuts();
      this.renderCategories();
      this.renderChannels();
      this.renderPlaylistsMenu();

      // Start first channel
      if (this.channels.length > 0) {
        this.playChannelByIndex(0);
      }
    }

    loadInitialData() {
      const settings = Storage.getSettings();
      if (settings.volume !== undefined && this.volumeSlider) {
        this.player.setVolume(settings.volume);
        this.volumeSlider.value = settings.volume * 100;
      }
    }

    bindEvents() {
      // Search
      this.searchInput?.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderChannels();
      });

      document.getElementById("btn-clear-search")?.addEventListener("click", () => {
        if (this.searchInput) this.searchInput.value = "";
        this.searchQuery = "";
        this.renderChannels();
      });

      // Category Dropdown Change (Açılır Liste)
      this.categorySelect?.addEventListener("change", (e) => {
        this.currentCategory = e.target.value;
        if (this.activeCategoryBadge) {
          const selText = this.categorySelect.options[this.categorySelect.selectedIndex]?.text || "Tümü";
          const cleanName = selText.replace(/^[\p{Emoji}\s]+/u, '').split('(')[0].trim();
          this.activeCategoryBadge.textContent = cleanName || "Tümü";
        }
        this.renderChannels();
      });

      // Clear Playlists & Channels (Listeleri Temizle)
      this.btnClearChannels?.addEventListener("click", () => this.clearAllChannels());
      this.btnModalClearAll?.addEventListener("click", () => {
        this.clearAllChannels();
        this.closeAllModals();
      });

      // Autoplay overlay click
      this.autoplayOverlay?.addEventListener("click", () => {
        this.autoplayOverlay.classList.add("hidden");
        this.player.togglePlay();
      });

      // Error overlay buttons
      this.btnPlayerRetry?.addEventListener("click", () => {
        this.playerErrorOverlay?.classList.add("hidden");
        const current = this.channels[this.currentChannelIndex];
        if (current) this.player.playChannel(current);
      });

      this.btnPlayerSwitchFree?.addEventListener("click", () => {
        this.playerErrorOverlay?.classList.add("hidden");
        this.channels = [...DEFAULT_FREE_CHANNELS];
        this.currentPlaylistName = "Varsayılan Halka Açık Kanallar";
        this.updatePlaylistUI();
      });

      // Player controls
      this.playPauseBtn?.addEventListener("click", () => {
        this.autoplayOverlay?.classList.add("hidden");
        this.player.togglePlay();
      });

      this.volumeBtn?.addEventListener("click", () => this.player.toggleMute());
      
      this.volumeSlider?.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value) / 100;
        this.player.setVolume(val);
        Storage.saveSettings({ ...Storage.getSettings(), volume: val });
      });

      this.fullscreenBtn?.addEventListener("click", () => this.player.toggleFullscreen());
      this.pipBtn?.addEventListener("click", () => this.player.togglePiP());
      this.screenshotBtn?.addEventListener("click", () => this.player.captureScreenshot());
      this.statsToggleBtn?.addEventListener("click", () => this.toggleStatsHUD());

      this.prevChannelBtn?.addEventListener("click", () => this.playPreviousChannel());
      this.nextChannelBtn?.addEventListener("click", () => this.playNextChannel());

      this.aspectRatioSelect?.addEventListener("change", (e) => {
        this.player.setAspectRatio(e.target.value);
      });

      this.qualitySelect?.addEventListener("change", (e) => {
        this.player.setQuality(parseInt(e.target.value));
      });

      this.channelFavoriteBtn?.addEventListener("click", () => {
        const current = this.channels[this.currentChannelIndex];
        if (current) {
          const res = Storage.toggleFavorite(current);
          this.updateFavoriteButtonState(res.isAdded);
          this.renderCategories();
          if (this.currentCategory === "favorites") {
            this.renderChannels();
          }
        }
      });

      // View mode toggle
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

      // Sidebar mobile toggle
      document.getElementById("btn-toggle-sidebar")?.addEventListener("click", () => {
        this.toggleSidebar();
      });

      // Modals
      document.getElementById("btn-open-playlist-modal")?.addEventListener("click", () => this.openModal(this.playlistModal));
      document.getElementById("btn-open-direct-url-modal")?.addEventListener("click", () => this.openModal(this.directUrlModal));
      document.getElementById("btn-open-shortcuts-modal")?.addEventListener("click", () => this.openModal(this.shortcutsModal));

      document.querySelectorAll(".modal-close-btn").forEach(btn => {
        btn.addEventListener("click", () => this.closeAllModals());
      });

      [this.playlistModal, this.directUrlModal, this.shortcutsModal].forEach(modal => {
        if (modal) {
          modal.addEventListener("click", (e) => {
            if (e.target === modal) this.closeAllModals();
          });
        }
      });

      // Direct URL Form
      document.getElementById("form-direct-url")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const urlInput = document.getElementById("input-direct-url");
        const nameInput = document.getElementById("input-direct-name");
        const url = urlInput?.value.trim();
        const name = nameInput?.value.trim() || "Özel Canlı Akış";

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
          if (urlInput) urlInput.value = "";
          if (nameInput) nameInput.value = "";
        }
      });

      // M3U URL Button
      document.getElementById("btn-load-m3u-url")?.addEventListener("click", () => {
        const urlInput = document.getElementById("input-m3u-url");
        const url = urlInput?.value.trim();
        if (url) {
          this.loadM3UFromUrl(url);
        }
      });

      // File upload
      const fileInput = document.getElementById("input-m3u-file");
      fileInput?.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          this.loadM3UFromFile(file);
        }
      });

      // Drag & Drop
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
        if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;

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
      if (!this.videoEl) return;
      const newVol = Math.max(0, Math.min(1, this.videoEl.volume + delta));
      this.player.setVolume(newVol);
      if (this.volumeSlider) this.volumeSlider.value = newVol * 100;
    }

    playChannelByIndex(index) {
      const filtered = this.getFilteredChannels();
      if (index >= 0 && index < filtered.length) {
        const channel = filtered[index];
        this.currentChannelIndex = this.channels.findIndex(ch => ch.url === channel.url);
        if (this.currentChannelIndex === -1) this.currentChannelIndex = index;

        this.playerErrorOverlay?.classList.add("hidden");
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
      if (!channel) {
        if (this.currentChannelTitleEl) this.currentChannelTitleEl.textContent = "Kanal Seçilmedi";
        if (this.currentChannelGroupEl) this.currentChannelGroupEl.textContent = "Liste Boş";
        if (this.currentChannelBadgeEl) this.currentChannelBadgeEl.textContent = "-";
        if (this.currentChannelLogoEl) this.currentChannelLogoEl.classList.add("hidden");
        if (this.currentChannelLogoPlaceholder) {
          this.currentChannelLogoPlaceholder.textContent = "TV";
          this.currentChannelLogoPlaceholder.classList.remove("hidden");
        }
        return;
      }

      if (this.currentChannelTitleEl) this.currentChannelTitleEl.textContent = channel.name;
      if (this.currentChannelGroupEl) this.currentChannelGroupEl.textContent = channel.group || "Canlı Yayın";
      if (this.currentChannelBadgeEl) this.currentChannelBadgeEl.textContent = channel.resolution || "HD";

      if (channel.logo && this.currentChannelLogoEl) {
        this.currentChannelLogoEl.src = channel.logo;
        this.currentChannelLogoEl.classList.remove("hidden");
        if (this.currentChannelLogoPlaceholder) this.currentChannelLogoPlaceholder.classList.add("hidden");
        
        this.currentChannelLogoEl.onerror = () => {
          this.currentChannelLogoEl.classList.add("hidden");
          if (this.currentChannelLogoPlaceholder) {
            this.currentChannelLogoPlaceholder.textContent = channel.name.substring(0, 2).toUpperCase();
            this.currentChannelLogoPlaceholder.classList.remove("hidden");
          }
        };
      } else {
        if (this.currentChannelLogoEl) this.currentChannelLogoEl.classList.add("hidden");
        if (this.currentChannelLogoPlaceholder) {
          this.currentChannelLogoPlaceholder.textContent = channel.name.substring(0, 2).toUpperCase();
          this.currentChannelLogoPlaceholder.classList.remove("hidden");
        }
      }

      const isFav = Storage.isFavorite(channel.id || channel.url);
      this.updateFavoriteButtonState(isFav);
    }

    updateFavoriteButtonState(isFavorite) {
      if (!this.channelFavoriteBtn) return;
      if (isFavorite) {
        this.channelFavoriteBtn.classList.add("text-rose-500", "bg-rose-500/20", "border-rose-500/40");
        this.channelFavoriteBtn.classList.remove("text-slate-400", "bg-slate-800/80", "border-slate-700");
        this.channelFavoriteBtn.innerHTML = `<svg class="w-5 h-5 fill-rose-500" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> <span>Favori</span>`;
      } else {
        this.channelFavoriteBtn.classList.remove("text-rose-500", "bg-rose-500/20", "border-rose-500/40");
        this.channelFavoriteBtn.classList.add("text-slate-400", "bg-slate-800/80", "border-slate-700");
        this.channelFavoriteBtn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg> <span>Favori</span>`;
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
      if (!this.categorySelect) return;
      const groups = new Set();
      this.channels.forEach(ch => {
        if (ch.group) groups.add(ch.group);
      });

      const categoryList = Array.from(groups).sort();
      const favsCount = Storage.getFavorites().length;
      const historyCount = Storage.getHistory().length;

      let optionsHtml = `
        <option value="all" ${this.currentCategory === "all" ? "selected" : ""}>📂 Tüm Kanallar (${this.channels.length})</option>
        <option value="favorites" ${this.currentCategory === "favorites" ? "selected" : ""}>⭐ Favoriler (${favsCount})</option>
        <option value="history" ${this.currentCategory === "history" ? "selected" : ""}>🕒 Son İzlenenler (${historyCount})</option>
      `;

      categoryList.forEach(cat => {
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
          <option value="${cat}" ${isSelected ? "selected" : ""}>
            ${icon} ${cat} (${count})
          </option>
        `;
      });

      this.categorySelect.innerHTML = optionsHtml;

      if (this.activeCategoryBadge) {
        if (this.currentCategory === "all") this.activeCategoryBadge.textContent = `Tümü (${this.channels.length})`;
        else if (this.currentCategory === "favorites") this.activeCategoryBadge.textContent = `Favoriler (${favsCount})`;
        else if (this.currentCategory === "history") this.activeCategoryBadge.textContent = `Geçmiş (${historyCount})`;
        else this.activeCategoryBadge.textContent = this.currentCategory;
      }
    }

    renderChannels() {
      if (!this.channelsContainer) return;
      const filtered = this.getFilteredChannels();
      if (this.channelCountEl) this.channelCountEl.textContent = `${filtered.length} kanal listelendi`;

      if (this.channels.length === 0) {
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

        document.getElementById("btn-quick-load-germany")?.addEventListener("click", () => {
          this.channels = [...GERMANY_CHANNELS];
          this.currentPlaylistName = "⚡ Özel Almanya IPTV (ilyasilmek)";
          this.updatePlaylistUI();
        });

        document.getElementById("btn-quick-load-free")?.addEventListener("click", () => {
          this.channels = [...DEFAULT_FREE_CHANNELS];
          this.currentPlaylistName = "Varsayılan Halka Açık Kanallar";
          this.updatePlaylistUI();
        });

        return;
      }

      if (filtered.length === 0) {
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
      }

      const current = this.channels[this.currentChannelIndex];

      if (this.viewMode === "grid") {
        this.channelsContainer.className = "flex-1 min-h-0 overflow-y-auto p-3 grid grid-cols-2 gap-2.5";
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
                <span class="text-[10px] text-slate-400 truncate max-w-[80px]">${ch.group || "Genel"}</span>
                <span class="text-[9px] px-1 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">${ch.resolution || "HD"}</span>
              </div>
            </div>
          `;
        }).join("");
      } else {
        this.channelsContainer.className = "flex-1 min-h-0 overflow-y-auto p-2 flex flex-col gap-1.5";
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

      // Attach favorite toggle clicks
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
            this.renderCategories();
            this.renderChannels();
          }
        });
      });
    }

    clearAllChannels() {
      if (confirm("Mevcut kanal listesi temizlensin mi?")) {
        this.channels = [];
        this.currentPlaylistName = "Liste Yok (Temizlendi)";
        this.currentChannelIndex = -1;
        this.currentCategory = "all";
        this.player.stop();
        this.updateActiveChannelDisplay(null);
        this.updatePlaylistUI();
      }
    }

    highlightActiveChannelItem() {
      this.renderChannels();
      const activeCard = this.channelsContainer?.querySelector(".channel-card.active");
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
            if (url === "local_germany") {
              this.channels = [...GERMANY_CHANNELS];
              this.currentPlaylistName = name;
              this.updatePlaylistUI();
              this.closeAllModals();
            } else if (url === "local_default") {
              this.channels = [...DEFAULT_FREE_CHANNELS];
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
          console.warn("Doğrudan fetch engellendi, genel proxy deneniyor:", err);
          response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
        }

        const text = await response.text();
        const parsed = parseM3U(text);

        if (parsed.channels.length > 0) {
          this.channels = parsed.channels;
          this.currentPlaylistName = customName || "Özel IPTV Listesi";
          
          Storage.saveCustomPlaylist({
            id: "pl-" + Date.now(),
            name: this.currentPlaylistName,
            channels: this.channels,
            createdAt: new Date().toISOString()
          });

          this.updatePlaylistUI();
          this.closeAllModals();
        } else {
          alert("Oynatma listesinde geçerli kanal bulunamadı.");
        }
      } catch (e) {
        console.error("M3U yükleme hatası:", e);
        alert("Oynatma listesi indirilemedi. Bağlantınızı ve URL adresini kontrol edin.");
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
      if (this.playlistTitleBadge) this.playlistTitleBadge.textContent = this.currentPlaylistName;
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
      if (!sidebar) return;
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
        this.statsOverlay?.classList.remove("hidden");
        this.statsToggleBtn?.classList.add("text-sky-400", "bg-sky-500/20");
      } else {
        this.statsOverlay?.classList.add("hidden");
        this.statsToggleBtn?.classList.remove("text-sky-400", "bg-sky-500/20");
      }
    }

    handlePlayerStateChange(state) {
      const spinner = document.getElementById("player-buffering-spinner");
      if (state.status === "loading" || state.status === "buffering") {
        spinner?.classList.remove("hidden");
      } else {
        spinner?.classList.add("hidden");
      }

      if (state.status === "error") {
        this.playerErrorOverlay?.classList.remove("hidden");
        if (this.playerErrorMessage) {
          this.playerErrorMessage.textContent = state.message || "Yayın akışı başlatılamadı (Sunucu yanıt vermedi veya hesap eşzamanlı bağlantı sınırı (2/2) dolu).";
        }
      } else if (state.status === "playing") {
        this.playerErrorOverlay?.classList.add("hidden");
        this.autoplayOverlay?.classList.add("hidden");
      }

      if (state.status === "autoplay_blocked") {
        this.autoplayOverlay?.classList.remove("hidden");
      }

      if (this.playPauseIcon) {
        if (state.paused) {
          this.playPauseIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
        } else {
          this.playPauseIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
        }
      }

      if (this.volumeIcon) {
        if (state.muted || state.volume === 0) {
          this.volumeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>`;
        } else {
          this.volumeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>`;
        }
      }

      if (state.levels && state.levels.length > 0 && this.qualitySelect) {
        this.qualitySelect.innerHTML = `<option value="-1">Kalite: Otomatik</option>` +
          state.levels.map(l => `<option value="${l.index}">${l.name}</option>`).join("");
        this.qualitySelect.classList.remove("hidden");
      }
    }

    handleStatsUpdate(stats) {
      const resEl = document.getElementById("stat-res");
      const bitEl = document.getElementById("stat-bitrate");
      const bufEl = document.getElementById("stat-buffer");
      const drpEl = document.getElementById("stat-dropped");

      if (resEl) resEl.textContent = stats.resolution;
      if (bitEl) bitEl.textContent = stats.bitrate;
      if (bufEl) bufEl.textContent = stats.bufferLength;
      if (drpEl) drpEl.textContent = stats.droppedFrames;
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

  function start() {
    if (!window.iptvApp) {
      window.iptvApp = new IPTVApp();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

})();

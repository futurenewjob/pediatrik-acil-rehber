# Pediatrik Acil PWA v10

Bu paket, GitHub Pages üzerinde çalışan Pediatrik Acil Klinik Rehberi için hazırlanmıştır.

## v10 ile gelenler
- Yeni modül: `pages/hemsirelik-prosedurleri.html`
- Ana menüye “Hemşirelik Prosedürleri” kartı eklendi.
- Modül hedefi: Acil serviste ekip desteği sınırlı olduğunda genç hekimin ilaç hazırlama, damar yolu/kemik içi erişim, oksijen cihazları, aspirasyon, nebülizasyon, monitörizasyon ve hastalık bazlı hazırlık akışlarını güvenli kontrol etmesi.
- Hızlı hazırlama hesaplayıcısı eklendi.
- Ana sayfadaki hesaplayıcı JavaScript değişken hatası düzeltildi.
- Service worker sürümü `v10` yapıldı.

## Kök dizinde kalması gereken yapı
- `index.html`
- `manifest.json`
- `service-worker.js`
- `offline.html`
- `README.md`
- `assets/`
- `icons/`
- `pages/`

## Test
- Ana sayfada “Hemşirelik Prosedürleri” kartı görünmeli.
- Kart `pages/hemsirelik-prosedurleri.html` sayfasını açmalı.
- Ana sayfa hesaplayıcısında 10 kg için sonuçlar görünmeli.
- Hemşirelik Prosedürleri sayfasında hızlı hesaplayıcı çalışmalı.
- Mobilde Safari/Chrome ile Ana Ekrana Ekle yapılabilir.

## Klinik güvenlik
Bu materyal eğitim ve hızlı başvuru amaçlıdır. Klinik uygulamada kurum protokolü, güncel rehberler, ilaç konsantrasyonu, hasta özel durumu ve kıdemli hekim değerlendirmesi esas alınmalıdır.


## v11 güncellemesi
- Hemşirelik Prosedürleri modülü ayrıntılandırıldı.
- Alt sabit butonlar JavaScript scroll işleviyle düzeltildi.
- İlaç sulandırma, geçimlilik/uyumsuzluk, infüzyon ve pompa güvenliği tabloları eklendi.
- Damar yolu, kemik içi erişim, balon-valf-maske, aspirasyon, nebülizasyon, kan kültürü ve mesane kateteri işlem adımları genişletildi.
- Hızlı hazırlama hesaplayıcısına levetirasetam, fenitoin, valproat, insülin infüzyonu, %3 NaCl ve mannitol ayrıntıları eklendi.

## v12 güncellemesi
- Yeni modül eklendi: `pages/hastane-oncesi.html`
- Ana menüye “Hastane Öncesi Çocuk Hasta Yönetimi” kartı eklendi.
- Modül hedef kitlesi: intern hekimler, genç hekimler, yeni uzmanlar, pratisyen hekimler, paramedikler ve hemşireler.
- İçerik başlıkları: çağrı öncesi hazırlık, olay yeri güvenliği, çocuk değerlendirme üçgeni, ABCDE, saha triyajı, yaşam kurtarıcı girişimler, nakil kararı, acil servise teslim, malzeme kontrol listesi, hızlı hesaplayıcı ve simülasyon senaryoları.
- Service worker sürümü `v12` yapıldı.

## v12 test
- Ana sayfada “Hastane Öncesi Çocuk Hasta Yönetimi” kartı görünmeli.
- Kart `pages/hastane-oncesi.html` sayfasını açmalı.
- Sayfadaki alt butonlar: Ana Menü, Saha, ABCDE, Nakil, Hesapla çalışmalı.
- Hesaplayıcıda 10 kg için 100/200 mL sıvı, 0.1 mL IM adrenalin, 1 mL IV/IO adrenalin, 50 mL %10 dekstroz sonucu görünmeli.

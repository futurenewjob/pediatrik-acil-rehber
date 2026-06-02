# Pediatrik Acil PWA v3

Bu paket, GitHub Pages üzerinde çalışan Pediatrik Acil Klinik Rehberi için hazırlanmıştır.

## İçerik
- `index.html`: yeni ana menü + arama + kategori filtreleri + kilo bazlı hesaplayıcı
- `pages/`: yüklenen HTML rehber modülleri
- `manifest.json`: PWA tanımı
- `service-worker.js`: önbellekleme / PWA altyapısı
- `icons/`: 192 ve 512 piksel ikonlar
- `offline.html`: çevrimdışı yedek sayfa

## GitHub'a yükleme
1. ZIP dosyasını açın.
2. İçindeki dosya ve klasörleri repository kök dizinine yükleyin.
3. Mevcut `index.html`, `manifest.json`, `service-worker.js`, `icons/` dosyalarının üzerine yazın.
4. `pages/` klasörü yeni eklenecektir.
5. Commit changes deyin.
6. Actions yeşil tik olduktan sonra siteyi açıp Command + Shift + R ile sert yenileyin.

## Test
- Ana sayfada arama ve kategori filtreleri çalışmalı.
- Hesaplayıcıda 10 kg için arrest epinefrin 0.1 mg / 1 mL, anafilaksi 0.1 mg / 0.1 mL, sıvı 100/200 mL görünmeli.
- Her rehber kartı ayrı sayfayı açmalı.
- Mobilde Safari/Chrome ile Ana Ekrana Ekle yapılabilir.

## Not
Sayfa içerikleri eğitim ve hızlı başvuru amaçlıdır. Klinik uygulamada kurum protokolü, güncel rehberler ve kıdemli hekim değerlendirmesi esas alınmalıdır.

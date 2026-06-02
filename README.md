# Pediatrik Acil PWA v8

Bu paket, GitHub Pages üzerinde çalışan Pediatrik Acil Klinik Rehberi için hazırlanmıştır.

## v8 ile gelenler
- Sınav ve Öğrenme Modülü: TUS/YDUS tarzına benzer, özgün, açıklamalı soru bankası
- Ana menüye “Sınav ve Öğrenme Modülü” kartı eklendi
- Kurumsal renkler güncellendi: Edirne Kırmızısı `#A91101`, Kurumsal Lacivert `#002F65`, Altın/Sarı `#FFD700`
- Trakya Çocuk Acil logosu ana sayfa ve soru modülüne eklendi
- İngilizce klinik yer adları Türkçeleştirildi
- Benzodiazepin yaklaşımı sadeleştirildi; midazolam/diazepam temel seçenekler olarak düzenlendi
- Service worker sürümü `v8` yapıldı

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
- Ana sayfada arama, filtre ve hesaplayıcı çalışmalı.
- “Sınav ve Öğrenme Modülü” kartı `pages/soru-bankasi.html` sayfasını açmalı.
- Hesaplayıcıda 10 kg için arrest adrenalin 0.1 mg / 1 mL, anafilaksi 0.1 mg / 0.1 mL, sıvı 100/200 mL görünmeli.
- Mobilde Safari/Chrome ile Ana Ekrana Ekle yapılabilir.

## Klinik güvenlik
Bu materyal eğitim ve hızlı başvuru amaçlıdır. Klinik uygulamada kurum protokolü, güncel rehberler, ilaç konsantrasyonu ve kıdemli hekim değerlendirmesi esas alınmalıdır.


## v8 ile gelenler
- Soru modülünde yanlış cevapta doğru seçenek hemen gösterilmez.
- Önce ipucu ve tekrar deneme verilir.
- Kullanıcı isterse “Çözümü göster” ile doğru seçeneği ve açıklamayı açar.
- Service worker sürümü v8 yapıldı.

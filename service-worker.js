const CACHE_NAME = "pediatrik-acil-rehber-v7";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./service-worker.js",
  "./offline.html",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./pages/intern-klinik-karar.html",
  "./pages/anafilaksi.html",
  "./pages/sepsis.html",
  "./pages/status-epileptikus.html",
  "./pages/solunum-yetmezligi.html",
  "./pages/dka.html",
  "./pages/zehirlenme.html",
  "./pages/kafa-travmasi.html",
  "./pages/soru-bankasi.html",
  "./assets/trakya-cocuk-acil-logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => cachedResponse || fetch(event.request).catch(() => caches.match("./offline.html")))
  );
});

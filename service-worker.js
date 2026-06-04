const CACHE_NAME = "cocuk-acil-akademi-v14";
const OFFLINE_URL = "./offline.html";

const APP_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./offline.html",

  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/favicon-16.png",
  "./icons/favicon-32.png",
  "./icons/apple-touch-icon.png",

  "./icon-192.png",
  "./icon-512.png",
  "./favicon-16.png",
  "./favicon-32.png",
  "./apple-touch-icon.png",

  "./intern-klinik-karar.html",
  "./anafilaksi.html",
  "./sepsis.html",
  "./status-epileptikus.html",
  "./solunum-yetmezligi.html",
  "./dka.html",
  "./zehirlenme.html",
  "./kafa-travmasi.html",
  "./soru-bankasi.html",
  "./hemsirelik-prosedurleri.html",
  "./hastane-oncesi.html",

  "./pages/intern-klinik-karar.html",
  "./pages/anafilaksi.html",
  "./pages/sepsis.html",
  "./pages/status-epileptikus.html",
  "./pages/solunum-yetmezligi.html",
  "./pages/dka.html",
  "./pages/zehirlenme.html",
  "./pages/kafa-travmasi.html",
  "./pages/soru-bankasi.html",
  "./pages/hemsirelik-prosedurleri.html",
  "./pages/hastane-oncesi.html",

  "./assets/trakya-cocuk-acil-logo.png",
  "./trakya-cocuk-acil-logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        APP_ASSETS.map(asset => {
          return cache.add(asset).catch(error => {
            console.warn("[Çocuk Acil Akademi SW] Önbelleğe alınamadı:", asset, error);
          });
        })
      );
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });

          return response;
        })
        .catch(() => {
          return caches.match(OFFLINE_URL).then(offlineResponse => {
            return offlineResponse || caches.match("./index.html");
          });
        })
    );

    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          const responseClone = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });

          return response;
        })
        .catch(() => {
          return caches.match(OFFLINE_URL);
        });
    })
  );
});

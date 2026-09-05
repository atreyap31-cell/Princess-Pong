/* Princess Pong service worker.
   Everything the game needs is same-origin and precached, so once the page has
   been opened while online it plays with no connection at all. Only the online
   multiplayer mode needs the network, and that traffic is never cached. */
const VERSION = 'princess-pong-v3';
const ASSETS = [
  './',
  './index.html',
  './peerjs.min.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './voice/index.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => Promise.allSettled(ASSETS.map(a => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return;   // signalling / STUN: always live network

  // The document goes network-first so an update lands as soon as you are
  // online, and falls back to the cached copy when you are not.
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      fetch(req)
        .then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return r; })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Everything else is static: serve from cache, fill the cache on first use.
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r && r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return r;
    }))
  );
});

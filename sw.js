const CACHE='zaslugabet-shell-v2';
const ASSETS=[
'/ZaslugaBet-iPhone/',
'/ZaslugaBet-iPhone/index.html',
'/ZaslugaBet-iPhone/manifest.webmanifest',
'/ZaslugaBet-iPhone/icons/icon-180.png',
'/ZaslugaBet-iPhone/icons/icon-192.png',
'/ZaslugaBet-iPhone/icons/icon-512.png',
'/ZaslugaBet-iPhone/icons/icon-maskable-512.png'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin===self.location.origin){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));}});

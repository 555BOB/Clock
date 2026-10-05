// Clean-up service worker.
// An earlier version of the clock cached its files for offline use, which can
// keep showing an old copy after updates. This version deletes those caches,
// removes itself, and reloads open pages so they get the latest clock.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    await self.registration.unregister();
    const pages = await self.clients.matchAll({ type: 'window' });
    pages.forEach(page => page.navigate(page.url));
  })());
});

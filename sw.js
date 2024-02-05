const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/manifest.json",
      "/index.html",
      "/index2.html",
      "/index.js",
      "/index2.js",
      "/test192.png",
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request));
});

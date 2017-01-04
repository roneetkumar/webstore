self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
         '/',
         '/index.html',
         '/index.html?homescreen=1',
         '/?homescreen=1',
         '/styles/index.min.css',
         '/functions/jquery.min.js',
         '/functions/index.js',
         '/functions/manifest.json'
     ]);
   })
 );
});

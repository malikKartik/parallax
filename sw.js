const staticCacheName = 'site-static';
  const assets = [
    '/',
    '/index.html',
    '/timeline1.html',
    '/timeline2.html',
    '/timeline3.html',
    '/assets/css/animate.min.css',
    '/assets/css/bootstrap.min.css',
    '/assets/css/et-line.css',
    '/assets/css/font-awesome.min.css',
    '/assets/css/ionicons.min.css',
    '/assets/css/main.css',
    '/assets/css/owl.carousel.min.css',
    '/assets/css/owl.theme.default.min.css',
    '/assets/css/ajax-loader.gif',
    '/assets/js/app.js',
    '/assets/js/bootstrap.min.js',
    '/assets/js/bootstrap-progressbar.min.js',
    '/assets/js/jquery.countdown.min.js',
    '/assets/js/jquery.counterup.min.js',
    '/assets/js/jquery.min.js',
    '/assets/js/jquery-migrate.js',
    '/assets/js/main.js',
    '/assets/js/owl.carousel.min.js',
    '/assets/js/parallax.min.js',
    '/assets/js/popper.js',
    '/assets/js/wow.min.js',
    '/assets/js/waypoints.min.js',
    '/assets/img/parallax.png',
    '/assets/img/tec.jpg',
    '/assets/img/tec.svg',
    '/assets/img/bg/bg-img.png',
    '/assets/img/bg/s2.jpg',
    '/assets/img/bg/tickets.png',
    '/assets/img/speakers/s1.png',
    '/assets/img/speakers/s2.png',
    '/assets/img/speakers/s3.png',
    '/assets/img/speakers/s4.png',
    '/assets/img/speakers/s5.png',
    '/assets/img/speakers/s6.png',
    '/assets/img/speakers/s7.png',
    '/assets/img/speakers/s8.png',
    '/assets/img/speakers/s4-copy.png',
    '/assets/img/speakers/s10.png'
]

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});

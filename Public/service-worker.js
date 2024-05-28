const cacheName = 'treatment-app-cache';
const filesToCache = [
    '/',
    '/index.html',
    '/admission.html',
    '/treatment.html',
    '/discharge.html',
    '/reports.html',
    '/inpatients.html', // Added inpatients.html
    '/schedule.html',   // Added schedule.html
    '/css/styles.css',
    '/js/admission.js',
    '/js/treatment.js',
    '/js/nursing.js',
    '/js/doctor.js',
    '/js/discharge.js',
    '/js/reports.js'    // Added reports.js
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

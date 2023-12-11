importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js");

self.addEventListener('push', function (e) {
    console.log('inside')
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
    }

    if (e.data) {
        console.log('resr')
        var msg = e.data.json();
        console.log(msg)
        e.waitUntil(self.registration.showNotification(msg.title, {
            body: msg.body,
            icon: msg.icon,
            actions: msg.actions
        }));
    }
});

self.addEventListener('notificationclick', function (event) {
    // Define the URL to open when the notification is clicked
    var url = 'https://www.flipkart.com/';

    event.notification.close(); // Close the notification

    // Open the app or specific page
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If no window/tab is open, open a new one
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});


// ....offline
workbox.routing.registerRoute(
    ({ event }) => event.request.mode === 'navigate',
    new workbox.strategies.NetworkFirst({
      cacheName: 'pages',
    })
  );
  
  workbox.routing.registerRoute(
    /\.(css|js|woff|woff2|png|jpg|jpeg|gif|svg|webp)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'assets',
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
          purgeOnQuotaError: true,
        }),
      ],
    })
  );
  
  workbox.routing.registerRoute(
    ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('/'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'api',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 60, // 30 minutes
        }),
      ],
    })
  );
  
  workbox.routing.registerRoute(
    ({ event }) => event.request.mode === 'navigate',
    ({ event }) => {
      return fetch(event.request)
        .catch(() => caches.match('@/components/offlinePage.vue'));
    }
  );
  
// ....offline



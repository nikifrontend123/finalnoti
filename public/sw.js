const CACHE_NAME = 'v5';
self.addEventListener('activate', (event) => {
  console.log('Service Worker Activated');
  event.waitUntil(
    // Clear old caches here
    caches.keys().then((cacheNames) => {
      console.log('Existing Caches:', cacheNames);
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting Cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

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

self.addEventListener('fetch', (event) => {
  console.log('hello');
  event.respondWith(
    fetch(event.request)
      .then(function (response) {
        console.log('inside fetch in service worker', event.request);

        if (response.status === 200) {
          var responseToCache = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            // Use cache.put to associate the request with the response
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      })
      .catch(async (error) => {
        console.log(error);

        const cachedResponse = await caches.match(event.request);

        if (cachedResponse) {
          return cachedResponse;
        } else if (event.request.mode === 'navigate') {
          return caches.match('/views/OfflinePage.vue');
        }
      })
  );
});


// ....offline

 // cache delete

// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     // Clear old caches here
//     caches.keys().then((cacheNames) => {
//       console.log('cache File')
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName !== CACHE_NAME) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
// cache delete

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

 

self.addEventListener('fetch', function (event) {
    event.respondWith(
      // Try to fetch the request from the network
      fetch(event.request).then(function (response) {
        // If successful, clone the response and cache it
        if (response.status === 200) {
          var responseToCache = response.clone();
          caches.open('my-cache').then(function (cache) {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(function () {
        // If the network request fails, try to get it from the cache
        return caches.match(event.request).then(function (cachedResponse) {
          // If the resource is in the cache, return it
          if (cachedResponse) {
            return cachedResponse;
          } else if (event.request.mode === 'navigate') {
            // If the request is a navigation request, serve the custom offline page
            return caches.match('/views/OfflinePage.vue');
          }
        });
      })
    );
  });
  
  
// ....offline



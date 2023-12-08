/* eslint-disable no-console */

import { register } from "register-service-worker";

// if (process.env.NODE_ENV === "production") {
register(`${process.env.BASE_URL}sw.js`, {
  ready() {
    console.log(
      "App is being served from cache by a service worker.\n" +
      "For more details, visit https://goo.gl/AFskqB"
    );
  },
  registered(registration) {
    console.log("Service worker has been registered.");
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BHaGoupz6SaaiUM6EOTtsVSVjAklaOV3Y4lmexYmEV7XwDDiA4LkPLfqmvpaF4FcyyHEZ2LvLQUp9sHpuW0K96s'
          }).then(function (newSubscription) {
            console.log('Push subscription successful:', newSubscription);
            localStorage.setItem('p256dhKey', newSubscription.keys.p256dh);
            localStorage.setItem('endpoint', newSubscription.endpoint);
            localStorage.setItem('authKey', newSubscription.keys.auth);
          }).catch(error => {
            console.error('Error subscribing to push notifications:', error);
          });
        }
      });
    }


  },
  cached() {
    console.log("Content has been cached for offline use.");
  },
  updatefound() {
    console.log("New content is downloading.");
  },
  updated() {
    console.log("New content is available; please refresh.");
  },
  offline() {
    console.log(
      "No internet connection found. App is running in offline mode."
    );
  },
  error(error) {
    console.error("Error during service worker registration:", error);
  },
});
// }

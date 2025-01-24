<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Version 1.2.3</h1>
    <div class="container my-5 py-3">
      <h5 v-if="userLocation">
        User Coordinate: {{ userLocation.latitude }}, {{ userLocation.longitude }}
      </h5>
    </div>
    <GeoPrompt v-if="!locationPermissionGranted" />
    <div v-if="showInstallPopup" class="install-popup">
      <div class="install-popup-content">
        <p>Do you want to install this app?</p>
        <button @click="installApp">Install</button>
        <button @click="dismissInstall">Dismiss</button>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="d-flex gap-3 align-items-center">
      <router-link to="/login" class="btn btn-primary">Login</router-link>
      <router-link to="/registration" class="btn btn-primary">Register</router-link>
    </div>
    {{ users }}
    <div class="d-flex gap-2 align-items-center">
      <button class="btn btn-primary" @click="subscribeForNotifications">Subscribe for Notifications</button>
      <button class="btn btn-primary" @click="getNoti">Push Data to Api</button>
    </div>
  </div>

  <button @click="callApi">Random Data</button>

  <div v-for="(d, index) in data" :key="index" class="">
    <!-- {{ d.avatar}} -->
    <img v-if="d.avatar" :src="d.avatar" style="height: 100px; width: 100px;">

  </div>
</template>

<script>
// @ is an alias to /src
import GeoPrompt from "@/components/GeoPrompt.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    GeoPrompt
  },
  data() {
    return {
      deferredPrompt: null,
      showInstallButton: false,
      showInstallPopup: false,
      users: null,
      userLocation: null,
      customPromptClosed: false,
      locationPermissionGranted: false,
      data: null
    };
  },
 
  created() {
    window.addEventListener('beforeinstallprompt', this.handleInstallPrompt);

    this.checkGeolocationPermission();
  },
  unmounted() {
    window.removeEventListener('beforeinstallprompt', this.handleInstallPrompt);
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {

      axios.get('https://pwanew.clobug.co.in/api/user', {
        headers: { "Authorization": `Bearer ${token}` }
      }).then((response) => {
        this.users = response.data
        console.log(response.data)
      })
        .catch((error) => {
          console.error(error)
        })
    }

    const geoPrompt = this.$refs.geoPrompt;
    if (geoPrompt && !geoPrompt.isLocationPermissionGranted) {
      geoPrompt.openLocationPopup();
    }
    this.getUserLocation();
  },
  methods: {
    handleInstallPrompt(event) {
      // Prevent the default behavior to show the browser's install prompt
      event.preventDefault();
      // Store the event for later use
      this.deferredPrompt = event;
      // Show a browser-style alert immediately
      this.showInstallAlert();
    },
    showInstallAlert() {
      // Set the flag to true to show the install popup
      this.showInstallPopup = true;
    },
    installApp() {
      // If the user clicks "Install," show the browser's install prompt
      this.deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          // Now the app is installed
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // Reset the deferredPrompt
        this.deferredPrompt = null;
        // Close the install popup
        this.showInstallPopup = false;
      });
    },
    dismissInstall() {
      this.showInstallPopup = false;
    },
    subscribeForNotifications() {
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.ready
          .then((registration) => {
            const subscribeOptions = {
              userVisibleOnly: true,
              applicationServerKey: "BHaGoupz6SaaiUM6EOTtsVSVjAklaOV3Y4lmexYmEV7XwDDiA4LkPLfqmvpaF4FcyyHEZ2LvLQUp9sHpuW0K96s"
            };

            return registration.pushManager.subscribe(subscribeOptions);
          })
          .then((pushSubscription) => {
            console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
            // You can store the pushSubscription data as needed
            this.storePushSubscription(pushSubscription);
          })
          .catch((error) => {
            console.error('Error subscribing for notifications:', error);
          });
      } else {
        console.warn('Push notifications are not supported in this browser.');
      }
    },
    storePushSubscription(pushSubscription) {
      // Implement your logic to store the pushSubscription data
      // For example, send it to your server
      const { keys, endpoint } = pushSubscription.toJSON();

      // Store the keys in localStorage
      localStorage.setItem('p256dhKey', keys.p256dh);
      localStorage.setItem('authKey', keys.auth);
      localStorage.setItem('endpoint', endpoint)

      console.log('Stored p256dhKey in localStorage:', keys.p256dh);
      console.log('Stored authKey in localStorage:', keys.auth);
    },
    getNoti() {
      const token = localStorage.getItem('token');
      const keys = {
        "auth": localStorage.getItem('authKey'),
        "p256dh": localStorage.getItem('p256dhKey')
      };

      const data = {
        endpoint: localStorage.getItem('endpoint'),
        keys
      };

      const config = {
        headers: { "Authorization": `Bearer ${token}` }
      };

      axios.post('https://pwanew.clobug.co.in/api/push_store', data, config)
        .then((response) => {
          console.log('data sent', response);
        })
        .catch((error) => {
          console.error('error sending data', error);
        });
    },
    getUserLocation() {
      if (navigator.permissions) {
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                this.userLocation = { latitude, longitude };
                console.log("User Location:", this.userLocation); // Add this line for debugging
                this.showLocationPopup = false;
                this.$emit("geolocationAllowed", this.userLocation);
              },
              (error) => {
                console.error(`Error getting location: ${error.message}`);
                this.showLocationPopup = false;
              },
              {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
              }
            );
          } else {
            console.error("Geolocation permission not granted.");
            this.showLocationPopup = false;
            this.$emit("geolocationDenied");
          }
        });
      } else {
        console.error("Geolocation is not supported by your browser");
        this.showLocationPopup = false;
      }
    },
    checkGeolocationPermission() {
      if (navigator.permissions) {
        navigator.permissions.query({ name: 'geolocation' })
          .then((result) => {
            if (result.state === 'granted') {
              this.locationPermissionGranted = true;
              this.getUserLocation();
            }
          })
          .catch((error) => {
            console.error(`Error checking geolocation permission: ${error.message}`);
          });
      }
    },
    callApi() {
      axios.get('https://random-data-api.com/api/v2/users?size=2&is_xml=true')
        .then((response) => {
          this.data = response.data
        })
    }
  }
};
</script>
<style> .install-popup {
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background: #fff;
   padding: 20px;
   border: 1px solid #ccc;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 }

 .install-popup-content {
   text-align: center;
 }

 .install-popup button {
   margin: 10px;
   padding: 8px 16px;
   cursor: pointer;
 }
</style>
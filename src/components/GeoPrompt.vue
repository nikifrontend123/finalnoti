<template>
    <div>
      <!-- Custom Location Permission Popup -->
      <div v-if="showLocationPopup && !isLocationPermissionGranted" class="location-popup">
        <p>Would you like to share your location?</p>
        <button @click="allowLocation">Allow</button>
        <button @click="denyLocation">Deny</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showLocationPopup: false,
        location: null,
        isLocationPermissionGranted: false,
      };
    },
    mounted() {
      this.checkLocationPermission();
    },
    methods: {
      openLocationPopup() {
        if (!this.isLocationPermissionGranted) {
          this.showLocationPopup = true;
        }
      },
      allowLocation() {
        this.getLocation();
      },
      denyLocation() {
        this.showLocationPopup = false;
        this.$emit('closeGeoPrompt');
      },
      getLocation() {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // Handle successful location retrieval
              this.location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              };
              this.showLocationPopup = false;
              this.isLocationPermissionGranted = true; // Set the flag to true
              this.$emit('geolocationAllowed', this.location);
            },
            (error) => {
              // Handle location retrieval error
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
          console.error('Geolocation is not supported by your browser');
          this.showLocationPopup = false;
        }
      },
      checkLocationPermission() {
        if ('geolocation' in navigator) {
          // Geolocation is supported, ask for permission
          this.showLocationPopup = true;
        } else {
          console.error('Geolocation is not supported by your browser');
          this.showLocationPopup = false;
        }
      },
    },
  };
  </script>
  
  <style>
  .location-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-align: center;
  }
  </style>
  
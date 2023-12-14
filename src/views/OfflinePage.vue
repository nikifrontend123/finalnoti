<template>
  <div>
    <div>
      <button @click="fetchChar">Get Characters</button>
      <h2>Characters:</h2>

      <div v-for="(data, index) in datasP" :key="index" class="">
        <img :src="data.avatar" style="height: 100px; width: 100px;">
      </div>
    </div>



    <!-- ---------------------TOP-NAV----------------------- -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <div class="d-flex align-items-center">
            <img src="img/logo/logo.png" width="100" alt="">
            <!-- <b class="fs-4" style="font-family: 'Caveat', cursive;">holesale Guruji</b>  -->
          </div>
        </a>
        <div class="d-flex justify-content-end">
          <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
            <RouterLink to="/LoginPage">
              <button class="btn btn-outline-danger">LOGIN</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <!-- ---------------------TOP-NAV----------------------- -->

    <!-- ------------------------Banner------------------ -->
    <div id="banner" class="d-md-flex justify-content-evenly align-items-center w-100 "
      style="background-image: linear-gradient(66deg, rgba(220,53,69,1) 33.33%, rgba(229,104,116,1) 33.33%, rgba(229,104,116,1) 66.66%, rgba(220,53,69,1) 66.66%); background-size: 100% 100%; background-repeat: no-repeat; height: 600px;">
      <div class=" d-flex justify-content-center align-items-center pt-3">
        <img src="img/Mobile.png" style="max-width:50%; ">
      </div>
      <div class=" d-flex flex-column justify-content-center align-items-center pt-3">
        <h1 class="text-center text-white mt-3">India's largest B2B Platform for <br> businesses & shop-owners</h1>
        <RouterLink to="/test">
          <div class="btn btn-light text-danger my-4 fs-5" @click="showOfflineAlert">
            Register <i class="bi bi-arrow-right"></i>
          </div>
        </RouterLink>

        <div v-if="offline" class="install-popup">
          <div class="install-popup-content">
            <i class="bi bi-wifi-off fs-3"></i>
            <p>You are Offline Try connecting to the internet or try again later</p>
            <button class="btn btn-outline-dark" @click="dismissOffline">Dismiss</button>
          </div>
        </div>

        <a href="#second"><i class="bi bi-chevron-down fs-1 text-white"></i></a>
      </div>
    </div>
    <!-- ------------------------Banner------------------ -->

    <!-- ------------------------Second------------------ -->
    <div id="second" style="background-color: #fbf4f4;  padding-bottom: 50px;">
      <div class="container">
        <div class="d-md-flex justify-content-between">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <p class="fw-bold text-secondary mt-4 ">WELCOME TO WHOLESALE GURUJI</p>
            <p class=" fs-4 text-center">Buy stocks for your shop/business easily</p>
            <!-- <video class="d-flex justify-content-center" width="40%"
                  src="https://ud-video.azureedge.net/h_1080/u/assets/c1mbeluruj0p7cr2bsyp.mp4" autoplay="" loop=""></video> -->
          </div>
          <div class="">
            <div class="mt-4">
              <h3>Great <span class="text-danger opacity-75">Wholesale</span> Prices</h3>
              <p>Avail best price on 10+ top quality categories</p>
            </div>
            <div class="">
              <h3><span class="text-danger opacity-75"> Trending </span> Products Wide <span
                  class="text-danger opacity-75">
                  Range</span></h3>
              <p>Shop 1,000+ trending products across all categories</p>
            </div>
            <div class=" ">
              <h3>PAN <span class="text-danger opacity-75">India</span> Doorstep <span
                  class="text-danger opacity-75">Delivery</span></h3>
              <p>Delivery services available for 3,000+ cities</p>
            </div>
            <div class=" ">
              <h3><span class="text-danger opacity-75">Quick</span> Doorstep <span
                  class="text-danger opacity-75">Delivery</span></h3>
              <p>Get delivery of your orders within few days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------Second------------------ -->

    <!-- ------------------------Third------------------ -->
    <div class="py-5 w-100">
      <div class="container">
        <h1 class="w-100 text-center">A powerful mobile app for quick & easy buying</h1>
        <div class="d-md-flex justify-content-center align-items-center w-100 my-5">
          <div class="mx-1 p-3 d-flex justify-content-center flex-column align-items-center">
            <p class="fw-bold fs-4 text-danger opacity-75 mb-0">Best offers and deals</p>
            <p class="text-center">Enjoy great margins! Exciting discounts on products during sale events.</p>
          </div>
          <div class="mx-1 p-3 d-flex justify-content-center flex-column align-items-center">
            <p class="fw-bold fs-4 text-danger opacity-75 mb-0">Easy browsing and Ordering</p>
            <p class="text-center">Browse for products across categories and choose from a wide range</p>
          </div>
          <div class="mx-1 p-3 d-flex justify-content-center flex-column align-items-center">
            <p class="fw-bold fs-4 text-danger opacity-75 mb-0">Safe payment options</p>
            <p class="text-center">Multiple payment options including Cash on Delivery, Debit & Credit cards, e-wallets
              and UPI
            </p>
          </div>



        </div>
      </div>
    </div>
    <!-- ------------------------Third------------------ -->

    <!-- ------------------------KYC------------------ -->
    <div class="mb-5" style="background-color: #fbf4f4; padding-bottom: 20px;">
      <h1 class="text-center py-5">Start trading in 3 simple steps</h1>
      <div class="d-flex flex-wrap justify-content-center container">
        <div v-for="(data, index) in datas" :key="index" class="col-lg-4 col-md-6 col-12 mb-4 border p-2 row g-1">
          <div class="d-flex justify-content-center align-items-center">
            <img :src="data.img" width="120" class="">
          </div>
          <h3 class="text-center">{{ data.head }}</h3>
          <p class="text-center w-100">{{ data.text }}</p>
        </div>
      </div>
      <div class="d-flex justify-content-center my-3">
        <div class="btn btn-danger fs-4">
          Register
        </div>
      </div>
    </div>
    <!-- ------------------------KYC------------------ -->

    <!-- ------------------------Collection Slider------------------ -->
    <div id="slider1">
      <div class="heading d-flex justify-content-center text-center">
        <h1 class="my-5">Our Top Collections</h1>
      </div>
      <div class="slider1 ">
        <div class="slide-track1 pb-4" style="margin: -12px 0;">
          <div v-for="(catagory, index) in catagories" :key="index"
            class="slide1 d-flex flex-column justify-content-center align-items-center">
            <img :src="catagory.image" width="100">
            <b class="fs-4" style="font-family: 'Times New Roman', Times, serif;">{{ catagory.label }}</b>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------Collection Slider------------------ -->

    <!-- ------------------------Categories------------------ -->
    <h1 class=" text-center py-5" style="background-color: #fbf4f4;">Our Top Categories</h1>
    <CollectionPage></CollectionPage>
    <!-- ------------------------Categories------------------ -->

    <!-- ------------------------user Banner------------------ -->
    <div class="tenth" style="background-color: #fbf4f4">
      <div class="heading d-flex justify-content-center text-center pt-4">
        <p class="fs-1" style="font-weight: 600;">Success Stories of Our Wholesellers</p>
      </div>
      <div class="banner w-100 d-block ">
        <UserBanner></UserBanner>
      </div>

    </div>
    <!-- ------------------------user Banner------------------ -->

    <!-- ------------------------counter------------------ -->
    <div class="bg ">
      <div class="d-flex justify-content-center">
        <h1 class="text-white">Join India's largest B2B platform</h1>
      </div>
      <div class="text-white d-md-flex justify-content-between mt-4 ">
        <div class="text-center fw-bold">
          <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
            <AutoCounter :data="30"> </AutoCounter>&nbsp;L+
          </p>
          <p class="fs-5 mt-0">Authorised Sellers</p>
        </div>
        <div class="text-center fw-bold">
          <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
            <AutoCounter :data="25"> </AutoCounter>&nbsp;k+
          </p>
          <p class="fs-5 mt-0">Fashion Categories</p>
        </div>
        <div class="text-center fw-bold">
          <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
            <AutoCounter :data="10"> </AutoCounter>&nbsp;k+
          </p>
          <p class="fs-5 mt-0">Product Already Listed</p>
        </div>
        <div class="text-center fw-bold">
          <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
            <AutoCounter :data="60"> </AutoCounter>&nbsp;L+
          </p>
          <p class="fs-5 mt-0">Happy Customer</p>
        </div>
        <div class="text-center fw-bold">
          <p class=" m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
            <AutoCounter :data="900"> </AutoCounter>&nbsp;+
          </p>
          <p class="fs-5 mt-0 d-flex justify-content-center">Daily Cities</p>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-light  fs-4 text-danger">Register</button>
      </div>
    </div>
    <!-- ------------------------counter------------------ -->

    <!-- ------------------------Brand Slider------------------ -->
    <div id="slider" class="pt-5">
      <div class="heading d-flex justify-content-center text-center">
        <div class="fs-3 fw-bold">Top brands available for a seller to resell across all categories</div>
      </div>
      <div class="slider">
        <div class="slide-track" style="padding:50px 0;">
          <div v-for="(brand, index) in brands" :key="index"
            class="slide d-flex justify-content-center align-items-center">
            <img :src="brand.image" :width="brand.width" :style="{ margin: '0px 60px', width: brand.width }">
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------Brand Slider------------------ -->

    <!-- ------------------------Social Media Banner------------------ -->
    <div class="text-light fw-bold "
      style="background-image: linear-gradient(66deg, rgba(220,53,69,1) 33.33%, rgba(229,104,116,1) 33.33%, rgba(229,104,116,1) 66.66%, rgba(220,53,69,1) 66.66%); background-size: 100% 100%; background-repeat: no-repeat; padding: 68px 70px;">
      <div class="w-100 d-md-flex justify-content-between align-items-center ">
        <h1 class="text-center">Follow Us On Social Media</h1>

        <div class="d-flex justify-content-center ">
          <i class="bi bi-linkedin fs-1 "></i>
          <i class="bi bi-instagram fs-1 ms-3"></i>
          <i class="bi bi-facebook fs-1 ms-3"></i>
        </div>
      </div>
      <!-- <div class="d-flex justify-content-center align-items-center">
          <button class="btn btn-light px-5 py-3 fs-4 fw-bold text-danger"> Register <i
              class="bi bi-arrow-right"></i></button>
        </div> -->
    </div>
    <!-- ------------------------Social Media Banner------------------ -->

    <!-- ------------------------bottom------------------ -->
    <div class="">
      <BottomComp></BottomComp>
    </div>
    <!-- ------------------------bottom------------------ -->
  </div>
</template>

<script>
import AutoCounter from '@/components/maincomp/AutoCounter.vue';
import BottomComp from '@/components/maincomp/BottomComp.vue';
import CollectionPage from '@/components/maincomp/CollectionPage.vue';
import UserBanner from '@/components/maincomp/UserBanner.vue';
import axios from 'axios';

export default {
  name: "HomeView",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      datas: [
        {
          id: 1,
          img: 'https://ud-img.azureedge.net/w_720,q_90/u/assets/ppuy1q441skzq5rkviqh.png',
          head: 'Create Account',
          text: 'Register using your mobile number. Enter your Name, Shop name and Pincode.'
        },
        {
          id: 2,
          img: 'https://ud-img.azureedge.net/w_720,q_90/u/assets/complete_kyc_pic.png',
          head: 'Complete KYC',
          text: 'Upload any one of shops KYC documents like GSTIN, Shop & Establishment Licence'
        },
        {
          id: 3,
          img: '	https://ud-img.azureedge.net/w_720,q_90/u/assets/start_buying_pic.png',
          head: 'Start Ordering',
          text: 'Browse and order products for your shop from top sellers & brands'
        },
      ],
      offline: false,
      data: null
    }
  },
  components: {
    AutoCounter, BottomComp, CollectionPage, UserBanner,
  },
  computed: {
    catagories() {
      return this.$store.getters.getCatagories
    },
    brands() {
      return this.$store.getters.getBrands
    },
    datasP() {
      return this.$store.getters.getTest
    }
  },
  methods: {
    showOfflineAlert() {
      if (!navigator.onLine) {
        this.offline = true
      }
    },
    dismissOffline() {
      this.offline = false
    },
    fetchChar() {
      const charUrl = 'https://random-data-api.com/api/v2/users?size=2&is_xml=true';
      axios.get(charUrl).then(res => {
        this.$store.dispatch('setData', res.data)
        // this.data = res.data
      })
    }
  }
};
</script>
  
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

.bg {
  background-image: linear-gradient(66deg, rgba(220, 53, 69, 1) 33.33%, rgba(229, 104, 116, 1) 33.33%, rgba(229, 104, 116, 1) 66.66%, rgba(220, 53, 69, 1) 66.66%);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  align-items: stretch;
  box-sizing: content-box;
  padding: 34px 68px;
}

#slider {
  @mixin white-gradient {
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  }

  $animationSpeed: 15s;

  // Animation
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(calc(-250px * 5))
    }
  }

  .slider {
    background-color: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    height: 180px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;


    &::before,
    &::after {
      @include white-gradient;
      content: "";
      height: 150px;
      position: absolute;
      width: 50px;
      z-index: 2;
    }

    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }

    &::before {
      left: 0;
      top: 0;
    }

    .slide-track {
      animation: scroll $animationSpeed linear infinite;
      display: flex;
      width: calc(250px * 6);

    }

    .slide {
      height: auto;
      width: 100%;
    }
  }

  .slide img:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  .slide img {
    transition: 1s;
  }

}

#slider1 {
  @mixin white-gradient {
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  }

  $animationSpeed: 15s;

  // Animation
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(calc(-250px * 5))
    }
  }


  // Styling
  .slider1 {
    background: white;
    // box-shadow: 0 10px 10px 0px rgba(0, 0, 0, .125);
    height: 200px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;


    &::before,
    &::after {
      @include white-gradient;
      content: "";
      height: 150px;
      position: absolute;
      width: 50px;
      z-index: 2;
    }

    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }

    &::before {
      left: 0;
      top: 0;
    }

    .slide-track1 {
      animation: scroll $animationSpeed linear infinite;
      display: flex;
      width: calc(250px * 6);

    }

    .slide1 {
      height: auto;
      width: 100%;
    }
  }

  .slide1 img:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  .slide1 img {
    transition: 1s;
  }
}

.install-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #e1a64e !important;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.5s ease-in-out;
  z-index: 999 !important;

  .install-popup-content {
    text-align: center;
  }

  @keyframes slideIn {
    from {
      transform: translate(-50%, -70%);
      opacity: 0;
    }

    to {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
}
</style>
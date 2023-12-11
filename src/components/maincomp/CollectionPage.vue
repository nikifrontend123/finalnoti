<template>
  <div class="">
    <div v-for="(collect, index) in collections" :key="index" class="my-3">
      <div class="banner">
        <div class="container"> 
          <h1 class="mt-4 decorated"><span class="text-danger opacity-75">~ {{ collect.heading }} ~</span></h1>

          <!-- </div> -->

        </div>
      </div>

      <div class="container px-4 mt-3  d-md-none">
        <div class="row row-cols-3 gx-2 ">
          <div class="col mb-3" v-for="(collection, index) in collect.collects" :key="index">
            <!-- <router-link :to="'/catalog-page/' + first.id" class="text-decoration-none text-dark"> -->
            <div class="card rounded-0">
              <img :src="collection.img" alt="" style="width: 100%;">
            </div>
            <!-- </router-link> -->
            <div class="d-flex justify-content-between" style="font-size: 12px;">
              <small>
                <small class="text-danger opacity-75 fw-bold">₹{{ collection.price }}</small>
              </small>
              <small>
                <small class="text-success fw-bold text-end">({{ calculateMargin(collection) }}% Margin)</small>
              </small>
            </div>
            <div class="d-flex justify-content-between" style="font-size: 13px;">
              <small>
                <small>
                  <small class="mb-2  text-decoration-line-through">₹ {{ collection.mrp }}</small>
                </small>
              </small>
              <small>
                <small>
                  <small>MOQ: {{collection.moq}} Pcs</small>
                </small>
              </small>

            </div>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <div class="d-none d-md-flex overflow-x-scroll gap-3 px-3 scroll-container">
          <div class="mb-2" v-for="(collection, index) in collect.collects" :key="index">
            <!-- <router-link :to="'/product-page/' + collection.id" class="text-decoration-none text-dark"> -->
            <div class="w-100 border my-2">
              <img :src="`${publicPath}${collection.img}`" style="width:200px;">
            </div>
            <div class="d-flex justify-content-between mx-2">
              <small>
                <small class="text-danger   fw-bold">Cost ₹{{ collection.price }}</small>
              </small>
              <small>
                <small class="text-success fw-bold text-end">({{ calculateMargin(collection) }}% Margin)</small>
              </small>
            </div>
            <div class="d-flex justify-content-between mx-2">
              <small>
                <small>
                  <small class="mb-2  text-decoration-line-through">MRP {{ collection.mrp }}</small>
                </small>
              </small>
              <small>
                <small>
                  <small>MOQ: {{collection.moq}} Pcs</small>
                </small>
              </small>

            </div>
            <!-- </router-link> -->
          </div>
          <div class="d-flex align-items-center justify-content-center" style="width: 300px;">
            <!-- <router-link to="/catalogs/category1" class="text-decoration-none text-dark"> -->
            <p class="fs-1" style="width:300px;">View All <i class="bi bi-chevron-right"></i></p>
            <!-- </router-link> -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "CollectionPage",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  computed: {
    collections() {
      return this.$store.getters.getCollections
    },

  },
  methods: {
    scrollPrev() {
      const container = document.querySelector('.scroll-container');
      if (container) {
        container.scrollLeft -= 400;
      }
    },
    scrollNext() {
      const container = document.querySelector('.scroll-container');
      if (container) {
        container.scrollLeft += 400;
      }
    },
    calculateMargin(collection) {
      const margin = ((collection.mrp - collection.price) / collection.mrp) * 100;
      return margin.toFixed(0); // Adjust the number of decimal places as needed
    },
  },

  mounted() {
    console.log(this.$refs.gallery);
  }
};
</script>
<style>
.decorated {
  overflow: hidden;
  text-align: center;
}

.decorated>span {
  position: relative;
  display: inline-block;
}

.decorated>span:before,
.decorated>span:after {
  content: '';
  position: absolute;
  top: 50%;
  border-bottom: 2px solid;
  width: 591px;
  /* half of limiter*/
  margin: 0 20px;
}

.decorated>span:before {
  right: 100%;
}

.decorated>span:after {
  left: 100%;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fcfbfb;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #fcfbfb;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e8e6e6;
}



@keyframes moveLeft {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.prev-icon {
  position: absolute;
  top: 40%;
  left: 0px;
  background-color: #F4B700;
  padding: 8px;
  display: flex;
}

.next-icon {
  position: absolute;
  top: 40%;
  right: 0px;
  background-color: #F4B700;
  padding: 8px;
  display: flex;
}
</style>

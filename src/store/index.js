import { createStore } from "vuex";

export default createStore({
  state: {
    collections: [
      {
        id: 1,
        heading: 'Tops',
        text: 'Sleek & graceful fits for every occasion',
        order: '0',
        button: 'SHOP NOW',
        img: 'img/catalog/Tops.png',
        collects: [
          {
            id: 1,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/one.webp',
            price: '900',
            mrp: 1400,
            moq: 5
          },
          {
            id: 2,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/two.webp',
            price: '600',
            mrp: 1200,
            moq: 16
          },
          {
            id: 3,
            name: 'Clobug logo Collection Recycled',
            img: 'img/collection/three.webp',
            price: '400',
            mrp: 900,
            moq: 8
          },
          {
            id: 4,
            name: 'Clobug logo Collection Printed',
            img: 'img/collection/four.webp',
            price: '700',
            mrp: 1600,
            moq: 6
          },
          {
            id: 5,
            name: 'Clobug logo Collection Bucket Hat',
            img: 'img/collection/five.webp',
            price: '500',
            mrp: 1200,
            moq: 15
          },
          {
            id: 6,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '900',
            mrp: 2000,
            moq: 10
          },
          {
            id: 7,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '400',
            mrp: 1400,
            moq: 12
          },
          {
            id: 8,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '300',
            mrp: 1400,
            moq: 9
          },
          {
            id: 9,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '1990',
            mrp: 1400,
            moq: 9
          },
        ],
      },
      {
        id: 2,
        heading: 'T-Shirts',
        text: 'Tops that will make you stand apart',
        order: '1',
        button: 'SHOP NOW',
        img: 'img/catalog/Tshirt.png',
        collects: [
          {
            id: 1,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/one.webp',
            price: '900',
            mrp: 1400,
            moq: 7
          },
          {
            id: 2,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/two.webp',
            price: '600',
            mrp: 1200,
            moq: 12
          },
          {
            id: 3,
            name: 'Clobug logo Collection Recycled',
            img: 'img/collection/three.webp',
            price: '400',
            mrp: 900,
            moq: 14
          },
          {
            id: 4,
            name: 'Clobug logo Collection Printed',
            img: 'img/collection/four.webp',
            price: '700',
            mrp: 1600,
            moq: 8
          },
          {
            id: 5,
            name: 'Clobug logo Collection Bucket Hat',
            img: 'img/collection/five.webp',
            price: '500',
            mrp: 1200,
            moq: 6
          },
          {
            id: 6,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '900',
            mrp: 2000,
            moq: 4
          },
          {
            id: 7,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '400',
            mrp: 1400,
            moq: 10
          },
          {
            id: 8,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '300',
            mrp: 1400,
            moq: 12
          },
          {
            id: 9,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '1990',
            mrp: 1400,
            moq: 12
          },
        ],
      },
      {
        id: 3,
        heading: 'Co-ords',
        text: 'Slack on with dungarees, pants, skirts and much',
        order: '0',
        button: 'SHOP NOW',
        img: 'img/catalog/Co-ords.png',
        collects: [
          {
            id: 1,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/one.webp',
            price: '900',
            mrp: 1400,
            moq: 7
          },
          {
            id: 2,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/two.webp',
            price: '600',
            mrp: 1200,
            moq: 12
          },
          {
            id: 3,
            name: 'Clobug logo Collection Recycled',
            img: 'img/collection/three.webp',
            price: '400',
            mrp: 900,
            moq: 14
          },
          {
            id: 4,
            name: 'Clobug logo Collection Printed',
            img: 'img/collection/four.webp',
            price: '700',
            mrp: 1600,
            moq: 8
          },
          {
            id: 5,
            name: 'Clobug logo Collection Bucket Hat',
            img: 'img/collection/five.webp',
            price: '500',
            mrp: 1200,
            moq: 6
          },
          {
            id: 6,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '900',
            mrp: 2000,
            moq: 4
          },
          {
            id: 7,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '400',
            mrp: 1400,
            moq: 10
          },
          {
            id: 8,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '300',
            mrp: 1400,
            moq: 12
          },
          {
            id: 9,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '1990',
            mrp: 1400,
            moq: 12
          },
        ],
      },
      {
        id: 4,
        heading: 'Jumpsuits',
        text: 'Psst... They go with everything',
        order: '1',
        button: 'SHOP NOW',
        img: 'img/catalog/Jumpsuits.png',
        collects: [
          {
            id: 1,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/one.webp',
            price: '900',
            mrp: 1400,
            moq: 7
          },
          {
            id: 2,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/two.webp',
            price: '600',
            mrp: 1200,
            moq: 12
          },
          {
            id: 3,
            name: 'Clobug logo Collection Recycled',
            img: 'img/collection/three.webp',
            price: '400',
            mrp: 900,
            moq: 14
          },
          {
            id: 4,
            name: 'Clobug logo Collection Printed',
            img: 'img/collection/four.webp',
            price: '700',
            mrp: 1600,
            moq: 8
          },
          {
            id: 5,
            name: 'Clobug logo Collection Bucket Hat',
            img: 'img/collection/five.webp',
            price: '500',
            mrp: 1200,
            moq: 6
          },
          {
            id: 6,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '900',
            mrp: 2000,
            moq: 4
          },
          {
            id: 7,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '400',
            mrp: 1400,
            moq: 10
          },
          {
            id: 8,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '300',
            mrp: 1400,
            moq: 12
          },
          {
            id: 9,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '1990',
            mrp: 1400,
            moq: 12
          },
        ],
      },
      {
        id: 5,
        heading: 'Bottoms',
        text: 'Get your A-game on with voguish sets & ensembles',
        order: '0',
        button: 'SHOP NOW',
        img: 'img/catalog/Bottoms.png',
        collects: [
          {
            id: 1,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/one.webp',
            price: '900',
            mrp: 1400,
            moq: 7
          },
          {
            id: 2,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/two.webp',
            price: '600',
            mrp: 1200,
            moq: 12
          },
          {
            id: 3,
            name: 'Clobug logo Collection Recycled',
            img: 'img/collection/three.webp',
            price: '400',
            mrp: 900,
            moq: 14
          },
          {
            id: 4,
            name: 'Clobug logo Collection Printed',
            img: 'img/collection/four.webp',
            price: '700',
            mrp: 1600,
            moq: 8
          },
          {
            id: 5,
            name: 'Clobug logo Collection Bucket Hat',
            img: 'img/collection/five.webp',
            price: '500',
            mrp: 1200,
            moq: 6
          },
          {
            id: 6,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '900',
            mrp: 2000,
            moq: 4
          },
          {
            id: 7,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '400',
            mrp: 1400,
            moq: 10
          },
          {
            id: 8,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '300',
            mrp: 1400,
            moq: 12
          },
          {
            id: 9,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '1990',
            mrp: 1400,
            moq: 12
          },
        ],
      },
      {
        id: 5,
        heading: 'Dresses',
        text: 'Get your A-game on with voguish sets & ensembles',
        order: '0',
        button: 'SHOP NOW',
        img: 'img/catalog/Bottoms.png',
        collects: [
          {
            id: 1,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/one.webp',
            price: '900',
            mrp: 1400,
            moq: 7
          },
          {
            id: 2,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/two.webp',
            price: '600',
            mrp: 1200,
            moq: 12
          },
          {
            id: 3,
            name: 'Clobug logo Collection Recycled',
            img: 'img/collection/three.webp',
            price: '400',
            mrp: 900,
            moq: 14
          },
          {
            id: 4,
            name: 'Clobug logo Collection Printed',
            img: 'img/collection/four.webp',
            price: '700',
            mrp: 1600,
            moq: 8
          },
          {
            id: 5,
            name: 'Clobug logo Collection Bucket Hat',
            img: 'img/collection/five.webp',
            price: '500',
            mrp: 1200,
            moq: 6
          },
          {
            id: 6,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '900',
            mrp: 2000,
            moq: 4
          },
          {
            id: 7,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '400',
            mrp: 1400,
            moq: 10
          },
          {
            id: 8,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '300',
            mrp: 1400,
            moq: 12
          },
          {
            id: 9,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '1990',
            mrp: 1400,
            moq: 12
          },
        ],
      },
      {
        id: 5,
        heading: 'Shirts',
        text: 'Get your A-game on with voguish sets & ensembles',
        order: '0',
        button: 'SHOP NOW',
        img: 'img/catalog/Bottoms.png',
        collects: [
          {
            id: 1,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/one.webp',
            price: '900',
            mrp: 1400,
            moq: 7
          },
          {
            id: 2,
            name: 'Clobug logo Collection Embroider',
            img: 'img/collection/two.webp',
            price: '600',
            mrp: 1200,
            moq: 12
          },
          {
            id: 3,
            name: 'Clobug logo Collection Recycled',
            img: 'img/collection/three.webp',
            price: '400',
            mrp: 900,
            moq: 14
          },
          {
            id: 4,
            name: 'Clobug logo Collection Printed',
            img: 'img/collection/four.webp',
            price: '700',
            mrp: 1600,
            moq: 8
          },
          {
            id: 5,
            name: 'Clobug logo Collection Bucket Hat',
            img: 'img/collection/five.webp',
            price: '500',
            mrp: 1200,
            moq: 6
          },
          {
            id: 6,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '900',
            mrp: 2000,
            moq: 4
          },
          {
            id: 7,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '400',
            mrp: 1400,
            moq: 10
          },
          {
            id: 8,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '300',
            mrp: 1400,
            moq: 12
          },
          {
            id: 9,
            name: 'Clobug logo Collection Cropped',
            img: 'img/collection/six.webp',
            price: '1990',
            mrp: 1400,
            moq: 12
          },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        show: false,
        imgr: 'img/users/1.png',
        text: ' "Using Retailpur.com has given me the opportunity to sell more products, and my customers have increased greatly over the period I joined as a Retailer."'
      },
      {
        id: 2,
        show: false,
        imgr: 'img/users/2.png',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 3,
        show: false,
        imgr: 'img/users/3.png',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 4,
        show: false,
        imgr: 'img/users/4.png',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 5,
        show: false,
        imgr: 'img/users/5.png',
        text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
      },
      {
        id: 6,
        show: false,
        imgr: 'img/users/6.png',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 7,
        show: false,
        imgr: 'img/users/7.png',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 8,
        show: false,
        imgr: 'img/users/8.png',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 9,
        show: false,
        imgr: 'img/users/9.png',
        text: '  "I have been able to increase my earnings since I joined as a Retailer. I sell almost everything in the app to my contacts and members in different online channels and groups." '
      },
      {
        id: 10,
        show: false,
        imgr: 'img/users/4.png',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
      {
        id: 11,
        show: false,
        imgr: 'img/users/1.png',
        text: ' "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all." '
      },
      {
        id: 12,
        show: false,
        imgr: 'img/users/10.png',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 13,
        show: false,
        imgr: 'img/users/8.png',
        text: ' "My shopping experience has been good and delivery is as per schedule with courteous and location savvy personnel. I use PayTM which is safe. They focus on security so if you are logging in from another phone, they immediately check to verify its you." '
      },
      {
        id: 14,
        show: false,
        imgr: 'img/users/6.png',
        text: ' "Smooth app functioning, easy to use for even a novice. No need to build a website to sell products which requires monthly fees. The platform already provides a free one which is totally at zero cost. Make your own shop here with no headaches. Prime membership has extra benefits, although it is not mandatory. Payments can be withdrawn directly in your bank account." '
      },
    ],
    catagories: [
      { image: 'img/catalog/Tops.png', label: 'Under ₹ 199' },
      { image: 'img/catalog/Tshirt.png', label: 'Under ₹ 299' },
      { image: 'img/catalog/Co-ords.png', label: 'Under ₹ 399' },
      { image: 'img/catalog/Jumpsuits.png', label: 'Under ₹ 499' },
      { image: 'img/catalog/Bottoms.png', label: 'Under ₹ 599' },
      { image: 'img/catalog/Dresses.png', label: 'Under ₹ 699' },
      { image: 'img/catalog/Shirts.png', label: 'Under ₹ 799' },
    ],
    brands: [
      { image: 'img/brand/clobug.png', width: '0%' },
      { image: 'img/brand/cylqa.png', width: '80%' },
      { image: 'img/brand/dnbClothing.png', width: '60%' },
      { image: 'img/brand/dryfitt.png', width: '60%' },
      { image: 'img/brand/fineLegs.png', width: '60%' },
      { image: 'img/brand/fleekIin.png', width: '60%' },
      { image: 'img/brand/greenCherry.png', width: '80%' },
      { image: 'img/brand/legsUp.png', width: '60%' },
      { image: 'img/brand/underGears.png', width: '60%' },
    ],
  },
  getters: {
    getCollections(state) {
      return state.collections;
    },
    getCatagories(state) {
      return state.catagories;
    },
    getBrands(state) {
      return state.brands;
    },
    getCategories(state) {
      return state.categories;
    },
    getReviews(state) {
      return state.reviews;
    },
  },
  mutations: {
    toggleReview(state, review) {
      let index = state.reviews.indexOf(review);
      state.reviews.forEach(user_review => {
        user_review.show = false
      });
      state.reviews[index].show = true
    },
  },
  actions: {
    toggleReview({ commit }, review) {
      commit("toggleReview", review);
    },
  },
  modules: {},
});

<template>
    <div class=" pt-3" style="background-color: #fbf4f4">

        <div class="d-md-flex flex-column-sm justify-content-evenly py-4 px-3  ">
            <div class="mb-3">
                <div class="d-flex   mb-2">
                    <a href="#banner">
                        <img :src="`${publicPath}${img}`" style="width: 140px;object-fit: contain;">
                    </a>
                </div>
                <p class="mb-2 fw-bold">Welcome to Wholesale Guruji</p>
                <p class="mb-2">Digital Marketplace For Wholesellers</p>
            </div>
            <div class="mb-3">
                <p class="mb-2 fw-bold">Contact Us</p>
                <p class="mb-2">Email : support@wholesaleguruji.com</p>
                <p class="mb-2">Mob no. : 9999437620</p>
                <p class="mb-2">Address : B-74, Okhla Phase-II,<br> New Delhi - 110020, Delhi, India</p>
            </div>
            <div class="mb-3">
                <p class="mb-2 fw-bold">Help</p>
                <p class="mb-2">Payment Methods</p>
                <router-link to="/shipping-&-delivery" class="text-dark" style="text-decoration: none;">
                    <p class="mb-2">Shipping & Delivery</p>
                </router-link>
                <router-link to="/faqs" class="text-dark" style="text-decoration: none;">
                    <p class="mb-2">FAQs</p>
                </router-link>
            </div>
            <div class="mb-3">
                <p class="mb-2 fw-bold">Policies</p>
                <router-link to="/privacy-policy" class="text-dark" style="text-decoration: none;">
                    <p class="mb-2">Privacy Policy</p>
                </router-link>
                <router-link to="/term-&-condition" class="text-dark" style="text-decoration: none;">
                    <p class="mb-2">Terms & Conditions</p>
                </router-link>
                <router-link to="/return-policy" class="text-dark" style="text-decoration: none;">
                    <p class="mb-2">Return Policy</p>
                </router-link>
            </div>
        </div>
        <div class="bg-danger opacity-75 text-center py-3 d-flex align-items-center justify-content-center">
            <p class="text-white mb-0"> Copyright © 2024 Wholesale Guruji Private Limited. All
                rights reserved</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/logo.png",
        }
    },
}
</script>

<style></style>

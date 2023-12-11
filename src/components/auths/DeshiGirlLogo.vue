<template>
    <div class="d-flex flex-column align-items-center justify-content-center pt-4">
        <img :src="logo" style="height:150px;width: 330px; object-fit: contain;filter: brightness(7.5);" class="">
        <!-- <p class="text-center m-0 fs-1 fw-bold  text-white"
            style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
            Wholesale Guruji
        </p> -->
    </div>
</template>

<script>
export default {
    name: 'DeshiGirlLogo',
    data() {
        return {
            // logo: 'img/logo/DeshiGirl.png',
            // logo: 'img/logo/deshiDark.png',
            logo: 'img/logo/logo.png',
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
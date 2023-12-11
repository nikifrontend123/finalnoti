<template>
    <div>
         <!-- ---------------------TOP-NAV----------------------- -->
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                                <div class="d-flex align-items-center">
                                        <RouterLink to="/">
                                                <img src="img/logo/logo.png" width="100" alt="">
                                        </RouterLink>
                                </div>
                        </a>
                        <div class="d-flex justify-content-end">
                                <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
                                        <RouterLink to="/LoginPage ">
                                                <button class="btn btn-outline-danger">LOGIN</button>
                                        </RouterLink>
                                </div>
                        </div>
                </div>
        </nav>
         
        <!-- ---------------------TOP-NAV----------------------- -->
        <h1 class="d-flex justify-content-center align-items-center py-5 text-white" style="background-image: linear-gradient(66deg, rgba(220,53,69,1) 33.33%, rgba(229,104,116,1) 33.33%, rgba(229,104,116,1) 66.66%, rgba(220,53,69,1) 66.66%); background-size: 100% 100%; background-repeat: no-repeat; height: 200px;">FAQ</h1>

    </div>
    <div class="">
        <BottomComp></BottomComp>
    </div>
</template>

<script>
import BottomComp from '../maincomp/BottomComp.vue';

    export default {
    name: 'FaqPage',
    components: { BottomComp }
}
</script>

<style lang="scss" scoped>

</style>
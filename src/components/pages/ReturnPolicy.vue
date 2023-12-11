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
                <h1 class="d-flex justify-content-center align-items-center py-5 text-white"
                        style="background-image: linear-gradient(66deg, rgba(220,53,69,1) 33.33%, rgba(229,104,116,1) 33.33%, rgba(229,104,116,1) 66.66%, rgba(220,53,69,1) 66.66%); background-size: 100% 100%; background-repeat: no-repeat; height: 200px;">
                        Return Policy</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae error et voluptas! Iste neque labore
                        commodi sunt quae non sed autem, dolorem porro rerum aperiam corporis similique suscipit eligendi!
                        Quidem commodi corporis ipsa debitis aspernatur culpa, molestias natus modi hic a? Laborum quasi
                        possimus, id iure quod, quaerat nulla repellat doloremque harum eveniet est, sapiente tenetur ad modi
                        accusantium! Architecto velit deleniti veritatis molestias numquam nam quod blanditiis expedita neque
                        dicta dolorum perferendis corporis, odit totam nobis repellat, ullam culpa aspernatur itaque maxime
                        harum possimus, a est. Dignissimos tempore ipsam eum fuga nobis? Facere mollitia veritatis commodi
                        eligendi, inventore architecto.</p>
        </div>
        <div class="">
                <BottomComp></BottomComp>
        </div>
</template>

<script>
import BottomComp from '../maincomp/BottomComp.vue';

export default {
        name: 'ReturnPolicy',
        components: { BottomComp }
}
</script>

<style lang="scss" scoped></style>
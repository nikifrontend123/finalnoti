<template>
    <div class="row pb-0" style="min-height: 100vh;background-color: #E56874;">
        <div class="d-flex align-items-center justify-content-center col-md-6 text-center text-md-start">
            <RouterLink to="/">
                <DeshiGirlLogo></DeshiGirlLogo>
            </RouterLink>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center col-md-6 bg-light">
            <p class="fs-5 mt-4 text-dark text-center">Register</p>
            <div class="container">
                <div class="w-100 p-2 form-floating container">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="name">
                    <label for="floatingInput" class="text-muted">Enter your Name</label>
                </div>
                <div class="w-100 p-2 form-floating container">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="email">
                    <label for="floatingInput" class="text-muted">Enter your Email</label>
                </div>
                <div class="w-100 p-2 form-floating container">
                    <input type="password" class="form-control" id="floatingInput" placeholder="Email" v-model="password">
                    <label for="floatingInput" class="text-muted">Password</label>
                </div>
                <div class="w-100 p-2 form-floating container">
                    <input type="password" class="form-control" id="floatingInput" placeholder="Email"
                        v-model="confirmPassword">
                    <label for="floatingInput" class="text-muted">Confirm Password</label>
                </div>

                <div class="mt-4 text-center">
                    <button class="w-100 btn btn-danger rounded-pill">Submit</button>
                </div>
            </div>
            <!-- <div class="text-center container my-3">
                    <p>By proceeding, you agree to <RouterLink :to="{ name: 'TOSPage' }">Terms & Conditions</RouterLink> &
                        <RouterLink :to="{ name: 'PrivacyPolicy' }">Privacy policy</RouterLink>
                    </p>
                </div> -->
            <router-link to="/LoginPage">
                <p class="text-center text-dark">Already have an account ? Login</p>
            </router-link>


        </div>
    </div>
</template>

<script>
import DeshiGirlLogo from './DeshiGirlLogo.vue';
export default { 
    components: { DeshiGirlLogo }
}
</script>
<style scoped>
p,
a {
    color: #fddee0;
}
</style>
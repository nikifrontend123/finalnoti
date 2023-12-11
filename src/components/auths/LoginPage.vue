<template>
    <div class="row pb-0" style="background-color: #E56874; min-height: 100vh;">
        <div class="d-flex align-items-center justify-content-center col-md-6 text-center text-md-start">
            <RouterLink to="/">
                <DeshiGirlLogo></DeshiGirlLogo>    
            </RouterLink>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center col-md-6 bg-light">
            <div class="container w-100">
                <p class="fs-5 text-center text-dark">Account Login</p>
                <div class="form-floating mb-2 ">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="Email">
                    <label for="floatingInput" class="text-muted">Enter your Email</label>
                </div>
                <div class="form-floating mb-2 ">
                    <input type="password" class="form-control" id="floatingInput" placeholder="Password"
                        v-model="Password">
                    <label for="floatingInput" class="text-muted">Password</label>
                </div>
                <div class="mt-4 text-center">
                    <button class="w-100 btn btn-danger rounded-pill">Submit</button>
                </div>
                <RouterLink class="d-flex align-items-center justify-content-center my-3 text-dark" to="/forgot-password">
                    Forgot Password?</RouterLink>
            </div>
            <div class="text-center container my-3">
                <!-- <p>By proceeding, you agree to <RouterLink :to="{ name: 'TOSPage' }">Terms & Conditions</RouterLink> &
                            <RouterLink :to="{ name: 'PrivacyPolicy' }">Privacy policy</RouterLink>
                        </p> -->
            </div>

            <router-link to="/Registration">
                <p class="text-center text-dark">Don't have an account ? Register</p>
            </router-link>

            <div class="text-center mt-2">
                <p class="text-dark">Or login with</p>
                <div class="d-flex justify-content-center gap-5">
                    <div class="d-flex flex-column">
                        <i class="bi bi-envelope-fill fs-1" style="color:rgb(73, 44, 46);"></i>
                        <p class="text-dark">Gmail</p>
                    </div>
                    <div class="d-flex flex-column">
                        <i class="bi bi-facebook fs-1 " style="color:rgb(73, 44, 46);"></i>
                        <p class="text-dark">Facebook</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DeshiGirlLogo from './DeshiGirlLogo.vue';
export default {
    components: { DeshiGirlLogo },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            Email: "",
            Password: "",
        };
    },
    methods: {
        goBack() {
            window.history.back();
        },
    },
}
</script>

<style scoped>
p,
a {
    color: #fddee0;
}

 

.login {
    font-family: sans-serif;
    color: #ECA1A6;
    text-align: center;
    position: relative;
}

/* .login:before {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #ECA1A6;
    left: 0;
    top: 50%;
    position: absolute;
}

.login:after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #ECA1A6;
    right: 0;
    top: 50%;
    position: absolute;
} */
</style>
<template>
    <div class="row pb-0" style="min-height: 100vh;padding-bottom:30px;background: #E56874">
        <div class="d-flex align-items-center justify-content-center col-md-6 text-center text-md-start">
            <RouterLink to="/">
                <DeshiGirlLogo></DeshiGirlLogo>
            </RouterLink>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center col-md-6 bg-light">
            <p class="fs-5 text-center text-dark">Forgot Password </p>
            <div class="container">
                <div class="w-100 p-2 form-floating container">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="email" required>
                    <label for="floatingInput" class="text-muted">Enter your Email</label>
                </div>
                <button class="w-100 btn btn btn-danger rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    >Submit</button>

            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" style="background-color: #4C2E30;">
                        <div class="modal-header">
                            <p class="modal-title fs-5" id="exampleModalLabel">New Password Sent Successfully</p>
                            <i class="bi bi-x fs-1" data-bs-dismiss="modal" style="color: #fddee0 !important;"></i>
                        </div>
                        <div class="modal-body text-center">
                            <p class="m-0 mb-4">
                                A new password has been sent to your registered email address, Please find and login
                                again.
                            </p>
                            <router-link to="/LoginPage">
                                <button class="btn btn-danger w-100" data-bs-dismiss="modal">Ok</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <p class="text-center text-dark mt-2 px-2">If you submit your email here, Will send you a One Time Password at
                your
                registered email
                address</p>

            <div class="d-flex justify-content-center mt-4 p-2">
                <router-link to="/LoginPage" class="d-flex justify-content-center text-decoration-none w-100 rounded">
                    <button class="btn btn-danger fs-5">
                        Click here for Login
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import DeshiGirlLogo from './DeshiGirlLogo.vue';
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            email: "",
        };
    },
    methods: {
        login() {
            console.log("Email:", this.email);
        }
    },
    components: { DeshiGirlLogo }
}
</script>

<style scoped>
.icon {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 2rem;
    background: -webkit-linear-gradient(#273990, #24aae3);
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

p,
a {
    color: #fddee0;
}
 
</style>

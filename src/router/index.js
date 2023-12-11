import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("@/views/LoginPage.vue")
  },
  {
    path: "/registration",
    name: "RegistrationPage",
    component: () => import("@/views/RegistrationPage.vue")
  },


  {
    path: "/",
    name: "home",
    component: () => import('../views/HomeView.vue')
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: () => import('@/components/auths/LoginPage.vue')
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import('@/components/auths/ForgotPasswordPage.vue')
  },
  {
    path: "/Registration",
    name: "Registration",
    component: () => import('@/components/auths/RegistrationPage.vue') 
  },
  {
    path: '/shipping-&-delivery',
    name: 'shipping-&-delivery',
    component: () => import('@/components/pages/ShippingPolicy.vue')
  },
  {
    path: '/return-policy',
    name: 'return-policy',
    component: () => import('@/components/pages/ReturnPolicy.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('@/components/pages/PrivacyPolicy.vue')
  },
  {
    path: '/term-&-condition',
    name: 'term-&-condition',
    component: () => import('@/components/pages/TOSPage.vue')
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import('@/components/pages/FaqPage.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

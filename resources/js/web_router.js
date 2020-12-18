import VueRouter from "vue-router";
Vue.use(VueRouter);
import Vue from "vue";
import App from "./App.vue";
import DashboardLayout from "./components/Frontend/DashboardLayout";
const router = new VueRouter({
    base: process.env.MIX_VUE_ROUTER_BASE,
    mode: "history",
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            component: DashboardLayout,
            children: [
                {
                    path: "/",
                    name: "Service.index",
                    component: () => import("./views/Service/Index")
                },
                {
                    path: "/Service/create",
                    name: "Service.create",
                    component: () => import("./views/Service/Form")
                },
                {
                    path: "/Service/:id",
                    name: "Service.show",
                    component: () => import("./views/Service/View")
                },
                {
                    path: "/Service/:id/edit",
                    name: "Service.edit",
                    component: () => import("./views/Service/Form")
                },
                {
                    path: "/Customer",
                    name: "Customer.index",
                    component: () => import("./views/Customer/Index")
                },
                {
                    path: "/Customer/create",
                    name: "Customer.create",
                    component: () => import("./views/Customer/Form")
                },
                {
                    path: "/Customer/:id",
                    name: "Customer.show",
                    component: () => import("./views/Customer/View")
                },
                {
                    path: "/Customer/:id/edit",
                    name: "Customer.edit",
                    component: () => import("./views/Customer/Form")
                }
            ]
        },

        {
            path: "*",
            redirect: "/"
            // component: NotFoundComponent
        }
    ]
});
const app = new Vue({
    el: "#app",
    components: { App },
    router,
    data: {
        baseurl: document.head.querySelector('meta[name="base-url"]').content
    },
    methods: {},
    mounted() {},
    beforeCreate() {},
    created() {},
    beforeMount() {}
});
router.beforeEach((to, from, next) => {
    app.loading = true;
    next();
});

router.afterEach((to, from, next) => {
    // setTimeout(() => app.loading = false, 500)
});

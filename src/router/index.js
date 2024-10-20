import {createRouter, createWebHistory} from 'vue-router'
import ViewUIPlus from "view-ui-plus";
import useUserStore from "@/store/modules/user";
import useAppStore from "@/store/modules/app";

const constantRoutes = [
    // {
    //     path: "/redirect",
    //     component: Layout,
    //     hidden: true,
    //     children: [
    //         {
    //             path: "/redirect/:path(.*)",
    //             component: () => import('@/views/redirect.vue')
    //         }
    //     ]
    // },
    {
        path: "/login",
        component: () => import('@/views/auth/login.vue'),
        meta: {
            title: "登录",
        },
        // hidden: true
    },
    // {
    //     path: "/",
    //     component: Layout,
    //     meta: {
    //         title: "控制台",
    //     },
    // },
    {
        path: "/:pathMatch(.*)*",
        component: () => import('@/views/error/404.vue'),
        meta: {
            title: "404",
        },
        hidden: true
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes
})

router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();
    const appStore = useAppStore()

    ViewUIPlus.LoadingBar.start()

    document.title = `${to.meta.title} - ${appStore.title}`;

    next();
});

router.afterEach((to, from) => {
    ViewUIPlus.LoadingBar.finish()
    window.scrollTo(0, 0);
});

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Archive",
    name: "Archive",
    component: () => import(/* webpackChunkName: "about" */ "../views/Archive.vue"),
  },
  {
    path:"/Other",
    name:'Other',
    component:()=> import("../views/Other.vue")
  }
];
console.log(process.env,'process.env.BASE_URL');

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

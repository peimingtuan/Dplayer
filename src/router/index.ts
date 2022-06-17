import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/Dplayer",
    name: "Dplayer",
    meta: {
      title: "播放器",
      keepAlive: true
    },
    component: () => import("../views/Dplayer/index.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL as string),
  routes
});
export default router;

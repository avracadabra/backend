import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/containers",
    component: () => import("@/views/Containers.vue"),
    children: [
      {
        path: "/containers/list",
        name: "containers",
        component: () => import("@/views/ContainerList.vue"),
        meta: { title: "Locations & Containers" },
      },
      {
        path: "/containers/print",
        name: "print-container",
        component: () => import("@/views/ContainerPrint.vue"),
        meta: { title: "Container bare-code label print" },
      },
      {
        path: "/containers/help",
        name: "help-container",
        component: () => import("@/views/ContainerInfo.vue"),
        meta: { title: "Help: Container & Locations" },
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
  },
  { path: "*", component: () => import("@/views/NotFound.vue") },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

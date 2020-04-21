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
    path: "/locations",
    component: () => import("@/views/Locations.vue"),
    children: [
      {
        path: "/locations/list",
        name: "locations",
        component: () => import("@/views/LocationHome.vue"),
        meta: { title: "Locations" },
      },
      {
        path: "/locations/print",
        name: "print-location",
        component: () => import("@/views/LocationPrint.vue"),
        meta: { title: "Print locations" },
      },
      {
        path: "/locations/help",
        name: "help-location",
        component: () => import("@/views/LocationInfo.vue"),
        meta: { title: "Location info" },
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

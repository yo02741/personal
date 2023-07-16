import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
    {
      path: "/",
      name: "Index",
      component: IndexView,
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("@/views/ContactView.vue"),
    },
    {
      path: "/practice",
      name: "Practice",
      component: () => import("@/views/PracticeView.vue"),
    },
  ],
});

export default router;

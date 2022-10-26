import { createRouter, createWebHistory } from "vue-router";
import ListsPage from "@/pages/lists/VListsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Списки",
      component: ListsPage,
    },
  ],
});

export default router;

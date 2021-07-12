import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new",
    name: "NewArticle",
    // route level code-splitting
    // this generates a separate chunk (articles.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "articles" */ "@/views/NewArticle.vue"),
  },
  {
    path: "/:slug",
    name: "Article",
    component: () => import("@/views/Article.vue"),
  },
  {
    path: "/edit/:slug",
    name: "EditArticle",
    component: () => import("@/views/EditArticle.vue"),
  },
  {
    path: "/archives",
    name: "ArchivedArticles",
    component: () => import("@/views/Archive.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

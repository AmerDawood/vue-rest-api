import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/skills",
      name: "SkillIndex",
      component: () => import("../views/skills/SkillIndex.vue"),
    },
    {
      path: "/skills/create",
      name: "SkillCreate",
      component: () => import("../views/skills/SkillCreate.vue"),
    },
    {
      path: "/skills/:id/edit",
      name: "SkillEdit",
      component: () => import("../views/skills/SkillEdit.vue"),
      props: true,
    },

    // {
    //  path: "/test/create",
    //  name:'TestCreate',
    //  component:()=>import("../views/test/TestCreate.vue"),
    // //  props:true
    // },

    {
      path: "/articles",
      name: "ArticleIndex",
      component: () => import("../views/articles/ArticleIndex.vue"),
    },


    {
      path: "/articles/create",
      name: "ArticleCreate",
      component: () => import("../views/articles/ArticleCreate.vue"),
    },

    {
      path: "/articles/:id/edit",
      name: "ArticleEdit",
      component: () => import("../views/articles/ArticleEdit.vue"),
      props: true,
    },

  ],
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import CountPage from "../views/CountPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/count-page",
      name: "CountPage",
      component: CountPage,
    },
  ],
});

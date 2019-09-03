import Vue from "vue";
import Router from "vue-router";
import Availability from "./views/Availability.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "availability",
      component: Availability
    }
  ]
});

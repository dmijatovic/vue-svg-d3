import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import { routes } from "@/routes";

import store from "@/store";

import "@/styles/variables.css";
import "@/styles/main.css";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false;
Vue.config.devtools = true

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

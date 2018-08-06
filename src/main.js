// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "@babel/polyfill";
import "intersection-observer";

import Vue from "vue";
import { sync } from "vuex-router-sync";
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/registerServiceWorker";
import "./plugins/vuetify";

import VueGtm from "vue-gtm";

sync(store, router);

Vue.use(VueGtm, {
  vueRouter: router
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "@babel/polyfill";
import "intersection-observer";

import Vue from "vue";
import { sync } from "vuex-router-sync";
import Vuetify from "vuetify";
import VuePlyr from "vue-plyr";
import "vuetify/dist/vuetify.min.css";
import "viewerjs/dist/viewer.css";
import "vue-plyr/dist/vue-plyr.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/registerServiceWorker";

Vue.use(Vuetify, {});
Vue.use(VuePlyr);

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

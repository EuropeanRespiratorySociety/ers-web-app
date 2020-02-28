const CmeOnline = () => import("./CmeOnlineApp.vue");
const CmeModules = () => import("./CmeModulesApp.vue");
const CmeModule = () => import("./CmeModuleApp.vue");
const CmeError = () => import("./CmeErrorApp.vue");
const CmeMaintenance = () => import("./CmeMaintenanceApp.vue");
import store from "@/store";

export default [
  {
    path: "/cme-online",
    name: "CmeOnline",
    component: CmeOnline,
    meta: {
      gtm: "CmeOnlineLandingPage"
    },
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("base/setDrawer", false).then(() => next());
    }
  },
  {
    path: "/cme-online/modules",
    name: "CmeModules",
    component: CmeModules,
    meta: {
      gtm: "CmeOnlineListOfModulesPage"
    },
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("base/setDrawer", false);
      store.dispatch("cmeOnline/prepareStates").then(result => {
        if (result === false) {
          next("/cme-error");
        } else {
          next();
        }
      });
    }
  },
  {
    path: "/cme-online/modules/:slug",
    name: "CmeModule",
    component: CmeModule,
    meta: {
      gtm: "CmeOnlineModule"
    },
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("base/setDrawer", false);
      store
        .dispatch("cmeOnline/fetchCmeModule", routeTo.params.slug)
        .then(result => {
          if (result === false) {
            next("/cme-error");
          } else {
            next();
          }
        });
    }
  },
  {
    path: "/cme-error",
    name: "CmeError",
    component: CmeError,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("base/setDrawer", false).then(() => next());
    }
  },
  {
    path: "/cme-maintenance",
    name: "CmeMaintenance",
    component: CmeMaintenance,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("base/setDrawer", false).then(() => next());
    }
  }
];

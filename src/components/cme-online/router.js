const CmeOnline = () => import("./CmeOnlineApp.vue");
const CmeModules = () => import("./CmeModulesApp.vue");
const CmeModule = () => import("./CmeModuleApp.vue");
const CmeModuleMock = () => import("./Mock/CmeModuleMockApp.vue");
import store from "@/store";

export default [
  {
    path: "/cme-online",
    name: "CmeOnline",
    component: CmeOnline
  },
  {
    path: "/cme-online/modules",
    name: "CmeModules",
    component: CmeModules,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("cmeOnline/prepareStates").then(next());
    }
  },
  {
    path: "/cme-online/modules/:slug",
    name: "CmeModule",
    component: CmeModule,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("cmeOnline/fetchCmeModule", routeTo.params.slug)
        .then(next());
    }
  },
  {
    path: "/cme-online/modulesMock/:slug",
    name: "CmeModuleMock",
    component: CmeModuleMock
  }
];

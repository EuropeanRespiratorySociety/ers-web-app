const CmeOnline = () => import("./CmeOnlineApp.vue");
const CmeModules = () => import("./CmeModulesApp.vue");
const CmeModule = () => import("./CmeModuleApp.vue");
//import store from "@/store";

export default [
  {
    path: "/cme-online",
    name: "CmeOnline",
    component: CmeOnline
    // meta: {
    //   requiresAuth: true,
    //   requiresRole: ["admin:*"]
    // }
  },
  {
    path: "/cme-online/modules",
    name: "CmeModules",
    component: CmeModules
    // meta: {
    //   requiresAuth: true,
    //   requiresRole: ["admin:*"]
    // }
  },
  {
    path: "/cme-online/modules/:slug",
    name: "CmeModule",
    component: CmeModule,
    props: true
    // beforeEnter(routeTo, routeFrom, next) {
    //   store
    //     .dispatch("cmeOnline/fetchCmeModule", routeTo.params.slug)
    //     .then(module => {
    //       routeTo.params.module = module;
    //       next();
    //     })
    //     .catch();
  }
  // meta: {
  //   requiresAuth: true,
  //   requiresRole: ["admin:*"]
  // }
];

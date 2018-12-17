const CmeOnline = () => import("./CmeOnlineApp.vue");
const CmeModules = () => import("./CmeModulesApp.vue");
const CmeModuleDetail = () => import("./CmeModuleDetailApp.vue");

export default [
  {
    path: "/cme-online",
    name: "CmeOnline",
    component: CmeOnline,
    meta: {
      requiresAuth: true,
      requiresRole: ["admin:*"]
    }
  },
  {
    path: "/cme-online/modules",
    name: "CmeModules",
    component: CmeModules,
    meta: {
      requiresAuth: true,
      requiresRole: ["admin:*"]
    }
  },
  {
    path: "/cme-online/modules/:slug",
    name: "CmeModuleDetail",
    component: CmeModuleDetail,
    meta: {
      requiresAuth: true,
      requiresRole: ["admin:*"]
    }
  }
];

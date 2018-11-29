const CmeOnline = () => import("./CmeOnlineApp.vue");
const CmeModule = () => import("./CmeOnlineModuleApp.vue");

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
    path: "/cme-online/:slug",
    name: "CmeModule",
    component: CmeModule,
    meta: {
      requiresAuth: true,
      requiresRole: ["admin:*"]
    }
  }
];

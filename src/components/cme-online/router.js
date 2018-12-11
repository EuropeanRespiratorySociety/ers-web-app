const CmeOnline = () => import("./CmeOnlineApp.vue");
const CmeModule = () => import("./CmeOnlineModuleApp.vue");
const CmeCourse = () => import("./components/pages/CmeCourse.vue");

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
    path: "/cme-online/course",
    name: "CmeCourse",
    component: CmeCourse,
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

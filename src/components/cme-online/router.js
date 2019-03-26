const CmeOnline = () => import("./CmeOnlineApp.vue");
const CmeModules = () => import("./CmeModulesApp.vue");
const CmeModule = () => import("./CmeModuleApp.vue");
const CmeModuleMock = () => import("./Mock/CmeModuleMockApp.vue");
//import store from "@/store";

export default [
  {
    path: "/cme-online",
    name: "CmeOnline",
    component: CmeOnline
  },
  {
    path: "/cme-online/modules",
    name: "CmeModules",
    component: CmeModules
  },
  {
    path: "/cme-online/modules/:slug",
    name: "CmeModule",
    component: CmeModule,
    props: true
  },
  {
    path: "/cme-online/modulesMock/:slug",
    name: "CmeModuleMock",
    component: CmeModuleMock,
    props: true
  }
  // {
  //   path: "/cme-online/modules/:slug",
  //   name: "CmeModule",
  //   component: CmeModule,
  //   props: true
  // }
];

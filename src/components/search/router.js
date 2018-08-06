const SearchApp = () => import("./SearchApp.vue");

export default [
  {
    path: "/search",
    name: "Search",
    component: SearchApp,
    meta: { gtm: "searchpage" }
  }
];

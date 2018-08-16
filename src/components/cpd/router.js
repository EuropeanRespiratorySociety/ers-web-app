const CPD = () => import("./CPDApp.vue");
const Article = () => import("@/components/article/ArticleApp.vue");

export default [
  {
    path: "/cpd",
    name: "CPD",
    component: CPD,
    meta: {
      requiresAuth: true,
      requiresRole: ["admin:*"]
    }
  },
  {
    path: "/cpd/:slug",
    name: "CPD Article",
    component: Article,
    meta: {
      requiresAuth: true,
      requiresRole: ["admin:*"]
    }
  }
];

const Feed = () => import("./FeedApp.vue");
const Article = () => import("@/components/article/ArticleApp.vue");

export default [
  {
    path: "/news",
    name: "News",
    component: Feed,
    meta: {
      requiresAuth: true,
      requiresRole: ["admin:*"]
    }
  },
  {
    path: "/news/:slug",
    name: "News Article",
    component: Article,
    meta: {
      requiresAuth: true,
      requiresRole: ["admin:*"]
    }
  }
];

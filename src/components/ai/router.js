const AIApp = () => import("./AIApp.vue");
const ClassifierTrainingApp = () => import("./ClassifierTrainingApp.vue");
const Visualiser = () => import("./VisualiserApp.vue");
const Recommender = () => import("./RecommenderApp.vue");
const Classifier = () => import("./ClassifierApp.vue");

export default [
  {
    path: "/ai",
    name: "AI",
    component: AIApp,
    meta: {
      requiresAuth: true,
      requiresRole: ["admin:*"]
    }
  },
  {
    path: "/ai/training-tool",
    name: "Training Tool",
    component: ClassifierTrainingApp,
    meta: {
      requiresAuth: true,
      requiresRole: ["admin:*", "myERS:*"]
    }
  },
  {
    path: "/ai/entity-extraction",
    name: "Entity Extraction",
    component: Visualiser,
    meta: {
      requiresAuth: true,
      requiresRole: ["admin:*"]
    }
  },
  {
    path: "/ai/recommender",
    name: "Recommender Demo",
    component: Recommender,
    meta: {
      requiresAuth: true,
      requiresRole: ["myERS:*"]
    }
  },
  {
    path: "/ai/classifier",
    name: "Classifier Demo",
    component: Classifier,
    meta: {
      requiresAuth: true,
      requiresRole: ["myERS:*"]
    }
  }
];

const ProfileApp = () => import("./ProfileApp.vue");
const PreferencesApp = () => import("./PreferencesApp.vue");

export default [
  {
    path: "/user",
    name: "Profile",
    component: ProfileApp,
    meta: { requiresAuth: true }
  },
  {
    path: "/user/preferences",
    name: "Preferences",
    component: PreferencesApp,
    meta: { requiresAuth: true }
  },
  {
    path: "/user/login",
    name: "Login",
    component: ProfileApp
  }
];

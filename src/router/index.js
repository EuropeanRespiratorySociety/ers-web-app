// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
import store from "../store";
import classifierRouter from "@/components/ai/router";
import feedRouter from "@/components/feed/router";
import searchRouter from "@/components/search/router";
import userRouter from "@/components/user/router";
import errorsRouter from "@/components/errors/router";

/* eslint-disable */

const ErrorApp = () => import('@/components/errors/ErrorApp.vue')
/* eslint-enable */

// import store from '../vuex/store'

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/search"
    },
    ...classifierRouter,
    ...feedRouter,
    ...searchRouter,
    ...userRouter,
    ...errorsRouter
  ]
});
router.beforeEach((to, from, next) => beforeEach(to, from, next));
router.afterEach(() => afterEach());

export function beforeEach(to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const authenticated = store.getters["authentication/isAuthenticated"];
    const hasPermission = to.meta.requiresRole
      ? to.meta.requiresRole.reduce((a, i) => {
          if (store.state.user.permissions.includes(i)) {
            a = true;
            return a;
          }
          return a;
        }, false)
      : false;

    if (!authenticated) {
      next({
        path: "/user/login",
        query: { redirect: to.fullPath }
      });
    }

    if ((to.meta.requiresRole && !hasPermission) || !authenticated) {
      next({
        path: "/not-authorized",
        query: { redirect: to.fullPath }
      });
    }
    next();
  } else {
    next(); // make sure to always call next()!
  }
}

export function checkPermission(role, permissions) {
  return role
    ? role.reduce((a, i) => {
        if (permissions.includes(i)) {
          a = true;
          return a;
        }
        return a;
      }, false)
    : false;
}

export function afterEach() {
  // Auto close navigation drawer after
  // navigation on mobile devices.
  if (store.state.base.isMobile === true) {
    store.dispatch("base/setDrawer", false, { root: true });
  }
}

export default router;

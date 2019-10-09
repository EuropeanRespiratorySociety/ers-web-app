// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";
import store from "../store";
import classifierRouter from "@/components/ai/router";
import cmeOnlineRouter from "@/components/cme-online/router";
import cpdRouter from "@/components/cpd/router";
import errorsRouter from "@/components/errors/router";
import feedRouter from "@/components/feed/router";
import searchRouter from "@/components/search/router";
import userRouter from "@/components/user/router";

/* eslint-disable */
const ErrorApp = () => import('@/components/errors/ErrorApp.vue')
/* eslint-enable */
Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/cme-online"
    },
    ...classifierRouter,
    ...cmeOnlineRouter,
    ...cpdRouter,
    ...feedRouter,
    ...searchRouter,
    ...userRouter,
    ...errorsRouter
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});
router.beforeEach((to, from, next) => beforeEach(to, from, next));
router.afterEach(() => afterEach());

export function beforeEach(to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const authenticated = store.getters["authentication/isAuthenticated"];
    const hasPermission = checkPermission(
      to.meta.requiresRole,
      store.state.user.permissions
    );

    if (!authenticated) {
      next({
        path: "/user/login",
        query: {
          redirect: to.fullPath
        }
      });
      return;
    }

    if (to.meta.requiresRole && !hasPermission) {
      next({
        path: "/not-authorized",
        query: {
          redirect: to.fullPath
        }
      });
      return;
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
    store.dispatch("base/setDrawer", false, {
      root: true
    });
  }
}

export default router;

import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import store from '../vuex/store'

/* eslint-disable */
const SearchApp = () => import('@/components/search/SearchApp.vue') // eslint-disable-next-line
const ProfileApp = () => import('@/components/user/ProfileApp.vue')
const Feed = () => import('@/components/feed/FeedApp.vue')
const Article = () => import('@/components/article/ArticleApp.vue')
const PreferencesApp = () => import('@/components/user/PreferencesApp.vue')
const ClassifierTrainingApp = () => import('@/components/classifier-training/ClassifierTrainingApp.vue')
const Visualiser = () => import('@/components/nlp/VisualiserApp.vue')
const ErrorApp = () => import('@/components/errors/ErrorApp.vue')
/* eslint-enable */

// import store from '../vuex/store'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/search'
    },
    {
      path: '/news',
      name: 'News',
      component: Feed,
      meta: {
        requiresAuth: true,
        requiresRole: ['admin:*']
      }
    },
    {
      path: '/ai',
      name: 'AI',
      component: ClassifierTrainingApp,
      meta: {
        requiresAuth: true,
        requiresRole: ['admin:*', 'training:*']
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchApp,
      meta: { gtm: 'searchpage' }
    },
    {
      path: '/news/:slug',
      name: 'News Article',
      component: Article,
      meta: {
        requiresAuth: true,
        requiresRole: ['admin:*']
      }
    },
    {
      path: '/articles/:slug',
      name: 'Articles',
      component: Article,
      meta: {
        requiresAuth: true,
        requiresRole: ['admin:*']
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: ProfileApp
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileApp,
      meta: { requiresAuth: true }
    },
    {
      path: '/preferences',
      name: 'Preferences',
      component: PreferencesApp,
      meta: { requiresAuth: true }
    },
    {
      path: '/nlp',
      name: 'NLP',
      component: Visualiser,
      meta: {
        requiresAuth: true,
        requiresRole: ['admin:*']
      }
    },
    {
      path: '/not-authorized',
      name: 'NotAuthorized',
      component: ErrorApp
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const authenticated = store.getters['authentication/isAuthenticated']
    const hasPermission = to.meta.requiresRole
      ? to.meta.requiresRole.reduce((a, i) => {
        if (store.state.user.permissions.includes(i)) a = true
      }, false)
      : false

    if (!authenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }

    if ((to.meta.requiresRole && hasPermission) && authenticated) {
      next({
        path: '/not-authorized',
        query: { redirect: to.fullPath }
      })
    }
    next()
  } else {
    next() // make sure to always call next()!
  }
})

router.afterEach((to, from) => {
  if (store.state.base.isMobile === true) {
    store.dispatch('base/setDrawer', false, { root: true })
  }
})

export default router

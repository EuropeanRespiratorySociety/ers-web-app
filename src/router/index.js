import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import store from '../vuex/store'

const SearchApp = () => import('@/components/search/SearchApp.vue')
const ProfileApp = () => import('@/components/user/ProfileApp.vue')
const Feed = () => import('@/components/feed/FeedApp.vue')
const Article = () => import('@/components/article/ArticleApp.vue')
const PreferencesApp = () => import('@/components/user/PreferencesApp.vue')
const Visualiser = () => import('@/components/nlp/VisualiserApp.vue')
const ErrorApp = () => import('@/components/errors/ErrorApp.vue')

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
        requiresRole: 'admin:*'
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchApp
    },
    {
      path: '/news/:slug',
      name: 'News Article',
      component: Article,
      meta: {
        requiresAuth: true,
        requiresRole: 'admin:*'
      }
    },
    {
      path: '/articles/:slug',
      name: 'Articles',
      component: Article,
      meta: {
        requiresAuth: true,
        requiresRole: 'admin:*'
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
        requiresRole: 'admin:*' 
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
    if (!authenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }

    if ((to.meta.requiresRole && !store.state.user.permissions.includes(to.meta.requiresRole)) && authenticated) {
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

export default router

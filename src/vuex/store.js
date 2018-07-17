
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import article from './modules/article/store'
import authentication from './modules/authentication/store'
import base from './modules/base/store'
import category from './modules/category/store'
import classifierTraining from './modules/classifier-training/store'
import feed from './modules/feed/store'
import search from './modules/search/store'
import user from './modules/user/store'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  modules: {
    article,
    authentication,
    base,
    category,
    classifierTraining,
    feed,
    search,
    user
  },
  plugins: [vuexLocal.plugin]
})

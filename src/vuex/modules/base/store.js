import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default {
  namespaced: true,
  actions,
  getters,
  state: {
    drawer: false,
    skip: 0,
    limit: 10,
    length: 0,
    offline: false,
    parallaxImg: ''
  },
  mutations: mutations.default
}

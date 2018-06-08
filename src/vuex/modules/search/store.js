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
    results: [],
    pageNumber: 1,
    counters: {
      all: 0,
      web: 0,
      journals: 0,
      congress: 0,
      sessions: 0,
      presentations: 0,
      erj: 0,
      err: 0,
      openres: 0,
      breathe: 0
    },
    q: '',
    i: ['all'],
    filters: {
      field: '',
      filtering: false,
      congress: [],
      journals: ['erj', 'err', 'breathe', 'openres']
    }
  },
  mutations: mutations.default
}

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
    text: '',
    _id: '',
    diseases: '',
    methods: '',
    error: {},
    status: ''
  },
  mutations: mutations.default
}
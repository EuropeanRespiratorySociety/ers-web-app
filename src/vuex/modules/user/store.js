import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default {
  namespaced: true,
  actions,
  getters,
  state: {
    data: {},
    status: "Nothing to save",
    apiUserId: null,
    permissions: [],
    preferences: {
      _id: null,
      interests: []
    },
    interests: [],
    errors: null
  },
  mutations: mutations.default
};

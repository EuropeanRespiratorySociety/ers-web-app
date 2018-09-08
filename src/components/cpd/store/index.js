import * as actions from "./actions";
import * as mutations from "./mutations";
// import * as getters from "./getters";

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default {
  namespaced: true,
  actions,
  // getters,
  state: {
    category: {},
    articles: [],
    feed: [],
    pageNumber: 1,
    skip: 0,
    limit: 25,
    total: 0,
    recommend: true,
    contentType: "published"
  },
  mutations: mutations.default
};

import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import article from "@/components/article/store";
import authentication from "@/components/authentication/store";
import base from "@/components/base/store";
import category from "@/components/category/store";
import classifierTraining from "@/components/ai/store";
import cpd from "@/components/cpd/store";
import feed from "@/components/feed/store";
import search from "@/components/search/store";
import user from "@/components/user/store";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  modules: {
    article,
    authentication,
    base,
    category,
    classifierTraining,
    cpd,
    feed,
    search,
    user
  },
  plugins: [vuexLocal.plugin]
});

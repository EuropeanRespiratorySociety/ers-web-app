import * as mutationTypes from "./mutation-types";

export default {
  [mutationTypes.SET_CME_MODULES_TOTAL](state, cmeModulesTotal) {
    state.cmeModulesTotal = cmeModulesTotal;
  },
  [mutationTypes.SET_CME_MODULES](state, cmeModules) {
    state.cmeModules = cmeModules;
  },
  [mutationTypes.SET_CME_MODULE](state, cmeModule) {
    state.cmeModule = cmeModule;
  },
  [mutationTypes.RESET_FILTERS](state) {
    state.filters.diseases = [];
    state.filters.methods = [];
    state.filters.types = [];
    state.filters.categories = [];
  }
};

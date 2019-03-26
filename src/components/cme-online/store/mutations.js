// import * as mutationTypes from "./mutation-types";

export default {
  SET_CME_MODULES_TOTAL(state, cmeModulesTotal) {
    state.cmeModulesTotal = cmeModulesTotal;
  },
  SET_CME_MODULES(state, cmeModules) {
    state.cmeModules = cmeModules;
  },
  SET_CME_MODULE(state, cmeModule) {
    state.cmeModule = cmeModule;
  },
  SET_PAGE_NUMBER(state, pageNumber) {
    state.pageNumber = pageNumber;
  },
  SET_CURRENT_STEP(state, step) {
    state.currentStep = step.component;
  },
  RESET_RESULTS(state) {
    state.filters.diseases = [];
    state.filters.methods = [];
    state.filters.types = [];
    state.filters.categories = [];
    state.cmeModulesTotal = 0;
    state.cmeModules = [];
    state.pageNumber = 1;
  }
};

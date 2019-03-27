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
  SET_CURRENT_STEP(state, selectedStepIndex) {
    let currentStep = state.cmeModule.cmeOnlineModule[selectedStepIndex];
    if (currentStep) {
      currentStep.component = currentStep.isSimulation
        ? "cme-simulation-panel"
        : "cme-" + currentStep.panels[0].panelType + "-panel";
    } else {
      currentStep = {
        title: "Take a CME TEST"
      };
    }
    state.currentStep = currentStep;
  },
  SET_TIMELINE(state, timeline) {
    state.timeline = timeline;
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

// import * as mutationTypes from "./mutation-types";

export default {
  RESET_CME_MODULE_STATES(state) {
    state.cmeModule = {};
    state.timeline = {};
    state.currentStep = {};
    state.currentPanel = {};
  },
  RESET_RESULTS(state) {
    state.filters.diseases = [];
    state.filters.methods = [];
    state.filters.types = [];
    state.filters.categories = [];
    state.cmeModulesTotal = 0;
    state.cmeModules = [];
    state.pageNumber = 1;
  },
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
    if (!currentStep) {
      currentStep = {
        title: "Take a CME TEST"
      };
    }
    currentStep.selectedIndex = selectedStepIndex;
    state.currentStep = currentStep;
  },
  SET_CURRENT_PANEL(state, data) {
    let currentPanel = {};
    if (state.currentStep.panels) {
      currentPanel = state.currentStep.panels[data.selectedPanelIndex];
      currentPanel.startSimulation = data.startSimulation;
      currentPanel.selectedIndex = data.selectedPanelIndex;
    }
    state.currentPanel = currentPanel;
  },
  SET_TIMELINE(state, timeline) {
    state.timeline = timeline;
  }
};

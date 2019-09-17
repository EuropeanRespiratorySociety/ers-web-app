// import * as mutationTypes from "./mutation-types";

export default {
  RESET_STATIC_STATES(state) {
    state.pageNumber = 1;
    state.perPage = 25;
    state.filtersValues = {
      diseases: [
        "Airway diseases",
        "Interstitial lung diseases",
        "Paediatric respiratory diseases",
        "Pulmonary vascular diseases",
        "Respiratory critical care",
        "Respiratory infections",
        "Sleep and breathing disorders",
        "Thoracic oncology"
      ],
      methods: [
        "Cell and molecular biology",
        "Endoscopy and interventional pulmonology",
        "Epidemiology",
        "General respiratory patient care",
        "Imaging",
        "Physiology",
        "Public health",
        "Pulmonary function testing",
        "Respiratory intensive care",
        "Surgery",
        "Transplantation"
      ],
      types: [
        {
          id: "Case Based",
          label: "Case based only"
        }
      ],
      categories: [
        "COPD",
        "Asthma",
        "Infectious Diseases",
        "Rare/Orphan Disease",
        "Pulmonary Fibrosis",
        "Pleural diseases",
        "Cystic Fibrosis"
      ]
    };
    state.hasAnsweredSimulation = false;
    state.filters = {
      diseases: [],
      methods: [],
      types: [],
      categories: []
    };
  },
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
    } else {
      currentPanel.panelType = "test";
    }
    state.currentPanel = currentPanel;
  },
  SET_TIMELINE(state, timeline) {
    state.timeline = timeline;
  },
  SET_HAS_ANSWERED_SIMULATION(state, hasAnsweredSimulation) {
    state.hasAnsweredSimulation = hasAnsweredSimulation;
  }
};

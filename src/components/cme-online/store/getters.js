export const getCmeModuleBySlug = state => slug => {
  return state.cmeModules.find(cmeModule => cmeModule.slug === slug);
};

export const pagesTotal = state => {
  return Math.ceil(state.cmeModulesTotal / state.perPage);
};

export const simulationStepCount = state => {
  return state.currentStep.panels.length - 1;
};

export const stepCount = state => {
  return state.cmeModule.cmeOnlineModule.length;
};

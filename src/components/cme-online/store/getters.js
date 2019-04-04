export const getCmeModuleBySlug = state => slug => {
  return state.cmeModules.find(cmeModule => cmeModule.slug === slug);
};

export const pagesTotal = state => {
  return Math.ceil(state.cmeModulesTotal / state.perPage);
};

export const simulationStepCount = state => {
  if (state.currentStep && state.currentStep.panels)
    return state.currentStep.panels.length - 1;
  return 0;
};

export const stepCount = state => {
  if (state.cmeModule && state.cmeModule.cmeOnlineModule)
    return state.cmeModule.cmeOnlineModule.length;
  return 0;
};

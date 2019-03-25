export const getCmeModules = state => {
  return state.cmeModules;
};

export const getCmeModuleBySlug = state => slug => {
  return state.cmeModules.find(cmeModule => cmeModule.slug === slug);
};

export const filters = state => {
  return state.filters;
};

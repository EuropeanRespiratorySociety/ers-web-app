export const getCmeModuleBySlug = state => slug => {
  return state.cmeModules.find(cmeModule => cmeModule.slug === slug);
};

export const pagesTotal = state => {
  return Math.ceil(state.cmeModulesTotal / state.perPage);
};

export const getCmeModuleBySlug = state => slug => {
  return state.cmeModules.find(cmeModule => cmeModule.slug === slug);
};

export const pagesTotal = state => {
  return Math.ceil(state.cmeModulesTotal / state.perPage);
};

export const timeline = state => {
  let timeline = state.cmeModule.cmeOnlineModule.map(step => {
    return {
      title: step.title,
      component: step.isSimulation
        ? "cme-simulation-panel"
        : "cme-" + step.panels[0].panelType + "-panel",
      color: "grey"
    };
  });
  timeline.push({
    title: "Take a CME TEST"
  });
  return timeline;
};

export const formMixin = {
  methods: {
    hasValue(property) {
      return property ? true : false;
    },
    buildCmeOnlineComponentName(panelType) {
      return "cme-" + panelType + "-panel";
    }
  }
};

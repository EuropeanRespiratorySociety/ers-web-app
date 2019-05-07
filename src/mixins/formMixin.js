export const formMixin = {
  methods: {
    hasValue(property) {
      return property ? true : false;
    },
    buildCmeOnlineComponentName(panelType) {
      return "cme-" + panelType + "-panel";
    },
    imageSource(cdnImage, externalImage) {
      let result = {
        isDefined: false,
        src: ""
      };
      if (this.hasValue(cdnImage)) {
        result.isDefined = true;
        result.src = cdnImage;
      } else if (this.hasValue(externalImage)) {
        result.isDefined = true;
        result.src = externalImage;
      }
      return result;
    },
    formatLinkTargetBlank(html) {
      if (html) return html.replace(/<a /g, '<a target="_blank" ');
      return html;
    }
  }
};

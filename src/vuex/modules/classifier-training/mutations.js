import * as types from "./mutation-types";
import dayjs from "dayjs";

export default {
  [types.SET_ARTICLE](state, data) {
    const { originalText, text, classifiers, _id } = data[0];
    const classifier = classifiers.reduce((a, c) => {
      if (dayjs(c.classifiedOn).isAfter(dayjs(a.classifiedOn))) a = c;
      return a;
    });

    state._id = _id;
    state.text = originalText || text;
    state.diseases = classifier.diseases;
    state.methods = classifier.methods;
  },

  [types.SET_STATUS](state, data) {
    state.status = data.message;
  },

  [types.SET_ERROR](state, data) {
    state.error = data;
  }
};

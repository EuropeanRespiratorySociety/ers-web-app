import * as types from "./mutation-types";

export default {
  [types.SET_CATEGORY](state, data) {
    state.category = { ...data };
  },
  [types.SET_ARTICLES](state, data) {
    state.articles = [...data];
  }
};

import * as types from "./mutation-types";

export default {
  [types.SET_CATEGORY](state, data) {
    state.category = { ...data };
  },

  [types.SET_ARTICLES](state, data) {
    state.articles = [...data];
  },

  [types.SET_FEED](state, data) {
    state.feed = [...data];
  },

  [types.SET_TOTAL](state, data) {
    state.total = data;
  },

  [types.SET_PAGE_NUMBER](state, data) {
    state.pageNumber = data;
  },

  [types.SET_CONTENT_TYPE](state, data) {
    state.contentType = data;
  }
};

import * as types from "./mutation-types";

export default {
  [types.SET_CATEGORY](state, data) {
    console.log("cat:", data);
    state.category = data;
  },
  [types.SET_ARTICLES](state, data) {
    console.log("articles", data);
    state.articles = [...data];
  }
};

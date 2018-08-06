import * as types from "./mutation-types";

export default {
  [types.SET_ARTICLE](state, data) {
    const { item, previous } = data;
    state.item = item;
    state.previous = previous;
  }
};

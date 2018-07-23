import * as types from "./mutation-types";

export default {
  [types.SET_USER](state, data) {
    state.user = data;
  },

  [types.LOGIN](state, data) {
    state.expiresOn = parseJwt(data).exp;
    state.token = data;
  },

  [types.LOGOUT](state) {
    state.token = null;
    state.error = null;
    state.expiresOn = null;
  },

  [types.SET_ERROR](state, data) {
    state.error = data.message;
  }
};

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}

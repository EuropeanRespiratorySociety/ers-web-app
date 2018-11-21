import { HTTP, sureThing } from "@/helpers/http";
import * as types from "./mutation-types";

// export const authenticate = ({ commit }) => {

// };

// Login user with email / password
export const login = async ({ commit, dispatch }, payload) => {
  commit(types.LOADING);

  const { ok, response, error } = await sureThing(
    HTTP.post("/ers/contacts/login", payload)
  );

  ok
    ? (commit(types.LOGIN, response.accessToken),
      commit("user/SET_USER", response, { root: true }),
      commit(types.SET_ERROR, { message: null }),
      dispatch("user/getInterestsList", {}, { root: true }))
    : commit(types.SET_ERROR, error);
  commit(types.LOADING);
};

// Logout user
export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  commit('user/LOGOUT', null, { root: true }) // eslint-disable-line
};

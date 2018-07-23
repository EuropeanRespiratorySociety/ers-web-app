import { HTTP, sureThing } from "@/helpers/http";
import * as types from "./mutation-types";

// export const authenticate = ({ commit }) => {

// };

// Login user with email / password
export const login = async ({ commit }, payload) => {
  const { ok, response, error } = await sureThing(
    HTTP.post("/ers/contacts/login", payload)
  );
  // eslint-disable-next-line
  ok
    ? (commit(types.LOGIN, response.accessToken), // eslint-disable-line
      commit('user/SET_USER', response, { root: true }),// eslint-disable-line
      commit(types.SET_ERROR, { message: null }) // eslint-disable-line
    ) // eslint-disable-line
    : commit(types.SET_ERROR, error);
};

// Logout user
export const logout = ({ commit }) => {
  commit(types.LOGOUT);
  commit('user/LOGOUT', null, { root: true }) // eslint-disable-line
};

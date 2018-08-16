import * as types from "./mutation-types";
import { HTTP, sureThing } from "@/helpers/http";

export const getCategory = async ({ commit, dispatch }) => {
  const route = "cpd";

  const { ok, response, error } = await sureThing(HTTP.get(route));
  console.log(response);
  ok
    ? (dispatch("base/setOnline", {}, { root: true }),
      commit(types.SET_CATEGORY, response.category[0], err => {
        console.log(err);
      }),
      commit(types.SET_ARTICLES, response.data, err => {
        console.log(err);
      }))
    : (dispatch("base/setOffline", {}, { root: true }),
      commit(types.SET_ERROR, error, err => {
        console.log(err);
      }),
      restoreLocalData(commit));
};

function restoreLocalData(commit) {
  if (window.localStorage.getItem("vuex")) {
    const restored = JSON.parse(window.localStorage.getItem("vuex"));
    commit("base/RESTORE_MUTATION", restored, { root: true }, err => {
      console.log(err);
    });
  }
}

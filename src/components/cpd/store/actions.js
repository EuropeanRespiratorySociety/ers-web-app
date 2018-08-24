import * as types from "./mutation-types";
import { HTTP, sureThing } from "@/helpers/http";

export const getCategory = async ({ commit, dispatch }) => {
  const route = "cpd";

  const { ok, response, error } = await sureThing(HTTP.get(route));
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

export const getFeed = async ({ commit, dispatch, state }, filter) => {
  let route = `feed?limit=${state.limit}&contentType=${state.contentType}`;
  console.log(route);
  if (filter.length > 0) {
    route += `&filterBy=${filter.join(",")}`;
  }

  if (state.pageNumber > 1) {
    route += `&skip=${(state.pageNumber - 1) * state.limit}`;
  }

  const { ok, response, error } = await sureThing(HTTP.get(route));
  console.log(response);
  ok
    ? (dispatch("base/setOnline", {}, { root: true }),
      commit(types.SET_FEED, response.data, err => {
        console.log(err);
      }),
      commit(types.SET_TOTAL, response._sys.total, err => {
        console.log(err);
      }))
    : (dispatch("base/setOffline", {}, { root: true }),
      commit(types.SET_ERROR, error, err => {
        console.log(err);
      }),
      restoreLocalData(commit));
};

export const setPageNumber = ({ commit }, payload) => {
  commit(types.SET_PAGE_NUMBER, payload, err => {
    console.log(err);
  });
};

export const setContentType = ({ commit }, payload) => {
  commit(types.SET_CONTENT_TYPE, payload, err => {
    console.log(err);
  });
};

function restoreLocalData(commit) {
  if (window.localStorage.getItem("vuex")) {
    const restored = JSON.parse(window.localStorage.getItem("vuex"));
    commit("base/RESTORE_MUTATION", restored, { root: true }, err => {
      console.log(err);
    });
  }
}

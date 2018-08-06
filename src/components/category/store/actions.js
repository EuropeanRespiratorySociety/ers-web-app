import * as types from "./mutation-types";
import { HTTP } from "@/helpers/http";
// import router from '@/router'

export const getCategory = ({ commit, dispatch }, payload) => {
  let data = { skip: 0, pageNumber: 1 };
  const route = payload.request;

  HTTP.get(route)
    .then(response => {
      data.items = response.data.data;
      data.category = response.data.category[0];
      data.skip = response.data._sys.skip;

      dispatch("pageNumber", data.pageNumber);
      dispatch("base/setOnline", {}, { root: true });
      commit(types.SET_CATEGORY, data, err => {
        console.log(err);
      });
    })
    .catch(() => {
      if (window.localStorage.getItem("vuex")) {
        const restored = JSON.parse(window.localStorage.getItem("vuex"));
        dispatch("base/setOffline", {}, { root: true });
        commit("base/RESTORE_MUTATION", restored, { root: true }, err => {
          console.log(err);
        });
      }
    });
};

export const pageNumber = ({ commit }, payload) => {
  commit(types.SET_PAGE_NUMBER, payload, err => {
    console.log(err);
  });
};

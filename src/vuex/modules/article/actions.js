import * as types from "./mutation-types";
import { HTTP } from "@/helpers/http";
// import router from '@/router'

export const getArticle = ({ commit, dispatch }, payload) => {
  const { endpoint, slug, previous } = payload;
  const route = `${endpoint}/${slug}`;

  HTTP.get(route)
    .then(response => {
      const item = response.data.data;
      dispatch("base/setOnline");
      // if (rootState.base.isMobile) {
      //   dispatch('base/setDrawer', false, { root: true })
      // }
      dispatch("base/setParallaxImg", item.image, { root: true });
      commit(types.SET_ARTICLE, { item, previous }, err => {
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

import * as types from "./mutation-types";
import { HTTP, sureThing } from "@/helpers/http";

export const getHighlights = ({ commit, dispatch }) => {
  const route = "highlights";

  HTTP.get(route)
    .then(response => {
      const [first, ...rest] = response.data.data;

      dispatch("base/setOnline", {}, { root: true });
      dispatch("base/setParallaxImg", first.highResImage, { root: true });
      commit(types.SET_HIGHLIGHTS, { first, rest }, err => {
        console.log(err);
      });
    })
    .catch(e => {
      console.log(e);
      if (window.localStorage.getItem("vuex")) {
        const restored = JSON.parse(window.localStorage.getItem("vuex"));
        dispatch("base/setOffline", {}, { root: true });
        commit("base/RESTORE_MUTATION", restored, { root: true }, err => {
          console.log(err);
        });
      }
    });
};

export const getInterests = async ({ commit }, data) => {
  const { interest } = data;
  const { ok, response, error } = await sureThing(
    HTTP.get(`feed?filterBy=${interest}&limit=5`)
  );
  ok
    ? commit(types.SET_INTEREST, { interest, response }, err => {
        console.log(err);
      })
    : commit(types.SET_ERROR, { interest, error }, err => {
        console.log(err);
      });
};

export const getFeed = async (
  { commit, dispatch, rootState, state },
  data = {}
) => {
  const { limit = 5 } = data;
  const { interests } = rootState.user.preferences;
  const { highlights } = state;
  // Setting highlights
  commit(
    types.SET_INTEREST,
    {
      interest: "highlights",
      response: { data: highlights }
    },
    err => {
      console.log(err);
    }
  );
  // Setting/Getting users intersts
  interests.forEach(i => {
    dispatch("getInterests", { interest: i });
  });

  // adding highlights to feed
  const { ok, response, error } = await sureThing(
    HTTP.get(
      `feed?filterBy=no-highlights&limit=${limit * (interests.length + 1)}`
    )
  );
  ok
    ? commit(types.SET_FEED, { interests, limit, feed: response.data }, err => {
        console.log(err);
      })
    : commit(types.SET_ERROR, { error }, err => {
        console.log(err);
      });
};

export const getLatestJournalArticles = ({ commit, dispatch }) => {
  const route =
    "journals?$limit=5&$sort[publication_date]=-1&$or[1][article_type]=Editorial&$or[2][article_type]=Research%20Article&$or[3][article_type]=Review%20Article&$or[4][article_type]=Other";

  HTTP.get(route)
    .then(response => {
      const data = response.data.data;

      dispatch("base/setOnline", {}, { root: true });
      commit(types.SET_LATEST_JOURNAL_ARTICLES, data, err => {
        console.log(err);
      });
    })
    .catch(e => {
      console.log(e);
      if (window.localStorage.getItem("vuex")) {
        const restored = JSON.parse(window.localStorage.getItem("vuex"));
        dispatch("base/setOffline", {}, { root: true });
        commit("base/RESTORE_MUTATION", restored, { root: true }, err => {
          console.log(err);
        });
      }
    });
};

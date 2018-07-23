import * as types from "./mutation-types";
import { HTTP, sureThing } from "@/helpers/http";

export const getArticle = async ({ commit, rootState }) => {
  const route = "training-data";

  const { ok, response, error } = await sureThing(
    HTTP.get(route, {
      headers: {
        Authorization: `Bearer ${rootState.authentication.token}`
      }
    })
  );

  ok
    ? commit(types.SET_ARTICLE, response.data)
    : commit(types.SET_ERROR, error);
};

export const saveArticle = async ({ commit, state, rootState }, payload) => {
  const route = `training-data/${state._id}`;
  const { methods, diseases, skip = false } = payload;
  const p = !skip
    ? { methods, diseases, reviewingType: "article" }
    : { skippedBy: rootState.user.data.ContactId };

  const { ok, response, error } = await sureThing(
    HTTP.patch(route, p, {
      headers: {
        Authorization: `Bearer ${rootState.authentication.token}`
      }
    })
  );

  ok
    ? commit(types.SET_STATUS, {
        message: !skip
          ? "The classification has been saved"
          : "The text has been skipped",
        data: response
      })
    : commit(types.SET_ERROR, error);
};

export const resetStatus = ({ commit }) => {
  commit(types.SET_STATUS, { message: "" });
};

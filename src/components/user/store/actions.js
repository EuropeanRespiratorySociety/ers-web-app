import { HTTP, sureThing } from "@/helpers/http";
import * as types from "./mutation-types";

export const getInterestsList = async ({ commit }) => {
  const { ok, response, error } = await sureThing(HTTP.get("/interests"));
  // eslint-disable-next-line
  ok
    ? commit(types.SET_INTERESTS, response.data) // eslint-disable-line 
    : commit(types.SET_ERROR, error) // eslint-disable-line
};

export const getPreferences = async ({ state, rootState, commit }) => {
  const _id = state.apiUserId;
  const { ok, response, error } = await sureThing(
    HTTP.get(`/preferences/${_id}`, {
      headers: {
        Authorization: `Bearer ${rootState.authentication.token}`
      }
    })
  );
  // eslint-disable-next-line
  ok
    ? commit(types.SET_PREFERENCES, response) // eslint-disable-line 
    : commit(types.SET_ERROR, error) // eslint-disable-line
};

export const setInterestsPreferences = async (
  { state, rootState, commit },
  d
) => {
  commit(types.SET_STATUS, "saving...");
  const _id = state.apiUserId;
  const payload = { interests: d };
  const REQUEST =
    state.preferences.interests.length === 0 && state.preferences._id === null
      ? { method: "post", path: "/preferences" }
      : { method: "patch", path: `/preferences/${_id}` };

  const { ok, response, error } = await sureThing(
    HTTP[REQUEST.method](REQUEST.path, payload, {
      headers: {
        Authorization: `Bearer ${rootState.authentication.token}`
      }
    })
  );
  /* eslint-disable */
  ok
    ? (
      commit(types.SET_PREFERENCES, response),
      commit(types.SET_STATUS, 'Saved a few instants ago...')
    )
    : (
      commit(types.SET_ERROR, error),
      commit(types.SET_STATUS, 'Saving failed...')
    )
}

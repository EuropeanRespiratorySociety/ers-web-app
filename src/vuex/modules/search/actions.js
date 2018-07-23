import * as types from "./mutation-types";
import { HTTP } from "@/helpers/http";
import router from "@/router";

export const searchAll = async (
  { commit, dispatch, state },
  query = null,
  type = null
) => {
  const page = state.pageNumber;
  const q = query || state.q;
  const t = type || state.i;
  const f = state.filters;
  const qs = setRoute(q, t, f, page);
  const results = await HTTP.get(`/search${qs}`);
  commit(types.SEARCH_RESULTS, results.data, err => {
    console.log(err);
  });
  commit(types.SET_QUERY, q);
  if (query) dispatch("getAggregations");
};

export const getAggregations = async ({ commit, state }, type = null) => {
  const query = state.q;
  const f = state.filters;
  const qs = setRoute(query, type, f, null, true);
  const results = await HTTP.get(`/search${qs}`);
  commit(types.SET_COUNTERS, results.data, err => {
    console.log(err);
  });
};

export const resetResults = ({ commit }) => {
  router.replace({ query: {} });
  commit(types.RESET_RESULTS);
};

export const setActiveTab = async ({ commit, dispatch }, data) => {
  if (data.length > 0)
    commit(types.SET_ACTIVE_TAB, data, err => {
      console.log(err);
    });
  dispatch("setPageNumber", 1);
};

export const setQuery = async ({ commit }, query) => {
  commit(types.SET_QUERY, query, err => {
    console.log(err);
  });
};

export const setFilters = async ({ commit, dispatch }, payload) => {
  commit(types.SET_FILTERS, payload, err => {
    console.log(err);
  });
  dispatch("searchAll");
  dispatch("getAggregations", payload.type);
};

export const setIndices = async ({ commit, dispatch }, payload) => {
  commit(types.SET_INDICES, payload, err => {
    console.log(err);
  });
  dispatch("searchAll");
  dispatch("getAggregations", payload.payload);
};

export const setPageNumber = ({ commit }, payload) => {
  commit(types.SET_PAGE_NUMBER, payload, err => {
    console.log(err);
  });
};

function setRoute(
  query,
  type = null,
  filters = null,
  page = 1,
  aggs = false,
  limit = 10
) {
  const params = { query: { q: query } };
  const t = type && type[0].includes("congress") ? "congress" : type;
  let string = `?q=${query}`;
  if (type) {
    // params.query = Object.assign({}, params.query, { i: type })
    string += `&i=${Array.isArray(type) ? type.join(",") : type}`;
    if (filters[t] && filters[t].length > 0)
      string += `&f=${filters[t].join(",")}`;
  }

  if (filters.field && filters.field.length > 0)
    string += `&field=${filters.field}`;

  if (page > 1) {
    // params.query.p = page
    string += `&s=${(page - 1) * limit}`;
  }

  if (limit !== 10) string += `&l=${limit}`;
  if (aggs) string += "&a=true";

  if (!aggs) router.push(params);
  return string;
}

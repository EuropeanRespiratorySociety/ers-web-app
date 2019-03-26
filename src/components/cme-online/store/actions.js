import * as mutationTypes from "./mutation-types";
import { HTTP, sureThing } from "@/helpers/http";

/* eslint-disable */
export const fetchCmeModules = async ({
  commit,
  state
}) => {
  const page = state.pageNumber;
  const perPage = state.perPage;
  const filters = state.filters;
  const queryString = setRoute(filters, page, perPage)
  const {
    ok,
    response,
    error
  } = await sureThing(
    HTTP.get('/cme-online?' + queryString)
  );

  if (ok) {
    commit(mutationTypes.SET_CME_MODULES, response.data);
    commit(mutationTypes.SET_CME_MODULES_TOTAL, response._sys.total);
  } else {
    console.log(error);
  }
};

export const fetchCmeModule = async ({
  commit,
  getters
}, slug) => {
  let cmeModule = getters.getCmeModuleBySlug(slug);

  if (cmeModule) {
    commit(mutationTypes.SET_CME_MODULE, cmeModule);
    return cmeModule;
  } else {
    const {
      ok,
      response,
      error
    } = await sureThing(
      HTTP.get("/cme-online/" + slug)
    );

    if (ok) {
      commit(mutationTypes.SET_CME_MODULE, response.data);
      return cmeModule;
    } else {
      console.log(error);
    }
  }
};

export const resetCmeModules = async ({
  commit,
  dispatch
}) => {
  commit(mutationTypes.RESET_RESULTS);
  dispatch("fetchCmeModules");
};

export const fetchCmeModulesForOnePage = ({
  commit,
  dispatch
}, pageNumber) => {
  commit(mutationTypes.SET_PAGE_NUMBER, pageNumber);
  dispatch("fetchCmeModules");
};

function setRoute(
  filters = null,
  page = 1,
  limit = 10
) {
  let params = [];
  params.push("full=true");
  if (filters && filters.diseases && filters.methods && (filters.diseases.length > 0 || filters.methods.length > 0)) {
    params.push("filterBy=" + filters.diseases.concat(filters.methods).join(","));
  }
  if (filters && filters.types && filters.types.length > 0) {
    params.push("types=" + filters.types.join(","));
  }
  if (filters && filters.categories && filters.categories.length > 0) {
    params.push("categories=" + filters.categories.join(","));
  }
  params.push("limit=" + limit);
  params.push("skip=" + ((page - 1) * limit));
  let result = params.join("&");
  return result;
}

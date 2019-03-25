import * as mutationTypes from "./mutation-types";
import { HTTP, sureThing } from "@/helpers/http";

/* eslint-disable */
export const fetchCmeModules = async ({
  commit
}, payload) => {

  const {
    ok,
    response,
    error
  } = await sureThing(
    HTTP.get('/cme-online?' + setRoute(payload.filters))
  );

  if (ok) {
    commit(mutationTypes.SET_CME_MODULES, response.data, err => {
      console.log(err);
    });
    commit(mutationTypes.SET_CME_MODULES_TOTAL, response._sys.total, err => {
      console.log(err);
    });
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
      commit(mutationTypes.SET_CME_MODULE, response.data, err => {
        console.log(err);
      });
      return cmeModule;
    } else {
      console.log(error);
    }
  }
};

function setRoute(
  filters = null
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
  let result = params.join("&");
  return result;
}

import * as mutationTypes from "./mutation-types";
import { HTTP, sureThing } from "@/helpers/http";

export const fetchCmeModules = async ({ commit }) => {
  const { ok, response, error } = await sureThing(
    HTTP.get(`/cme-online?full=true`)
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

export const fetchCmeModule = async ({ commit, getters }, slug) => {
  let cmeModule = getters.getCmeModuleBySlug(slug);

  if (cmeModule) {
    commit(mutationTypes.SET_CME_MODULE, cmeModule);
    return cmeModule;
  } else {
    const { ok, response, error } = await sureThing(
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

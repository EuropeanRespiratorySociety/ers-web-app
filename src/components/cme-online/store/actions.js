import * as mutationTypes from "./mutation-types";
import { HTTP } from "@/helpers/http";

export const fetchCmeModules = async ({ commit }) => {
  const results = await HTTP.get(`/cme-online`);
  commit(mutationTypes.SET_CME_MODULES, results.data.data, err => {
    console.log(err);
  });
  commit(mutationTypes.SET_CME_MODULES_TOTAL, results.data._sys.total, err => {
    console.log(err);
  });
};

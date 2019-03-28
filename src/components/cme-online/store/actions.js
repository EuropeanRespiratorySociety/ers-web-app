import { HTTP, sureThing } from "@/helpers/http";

export const fetchCmeModules = async ({ commit, state }) => {
  const page = state.pageNumber;
  const perPage = state.perPage;
  const filters = state.filters;
  const queryString = setRoute(filters, page, perPage);
  const { ok, response, error } = await sureThing(
    HTTP.get("/cme-online?" + queryString)
  );

  if (ok) {
    commit("SET_CME_MODULES", response.data);
    commit("SET_CME_MODULES_TOTAL", response._sys.total);
  } else {
    console.log(error);
  }
};

export const fetchCmeModule = async ({ commit, getters }, slug) => {
  let cmeModule = getters.getCmeModuleBySlug(slug);

  if (cmeModule) {
    commit("SET_CME_MODULE", cmeModule);
    return cmeModule;
  } else {
    const { ok, response, error } = await sureThing(
      HTTP.get("/cme-online/" + slug)
    );

    if (ok) {
      commit("SET_CME_MODULE", response.data);
      return response.data;
    } else {
      console.log(error);
    }
  }
};

export const fetchCmeModulesForOnePageNumber = (
  { commit, dispatch },
  pageNumber
) => {
  commit("SET_PAGE_NUMBER", pageNumber);
  dispatch("fetchCmeModules");
};

export const fetchTimeline = ({ commit, state }, selectedStepIndex) => {
  let timeline = state.cmeModule.cmeOnlineModule.map(step => {
    return {
      title: step.title,
      color: "grey"
    };
  });
  timeline.push({
    title: "Take a CME TEST",
    color: "grey"
  });
  timeline[selectedStepIndex].color = "primary";
  commit("SET_TIMELINE", timeline);
  commit("SET_CURRENT_STEP", selectedStepIndex);
  commit("SET_CURRENT_PANEL", {
    selectedPanelIndex: 0,
    startSimulation: state.currentStep.isSimulation
  });
};

export const resetCmeModules = async ({ commit, dispatch }) => {
  commit("RESET_RESULTS");
  dispatch("fetchCmeModules");
};

export const prepareStates = async ({ commit, dispatch }) => {
  commit("RESET_CME_MODULE_STATES");
  dispatch("fetchCmeModules");
};

function setRoute(filters = null, page = 1, limit = 10) {
  let params = [];
  params.push("full=true");
  if (
    filters &&
    filters.diseases &&
    filters.methods &&
    (filters.diseases.length > 0 || filters.methods.length > 0)
  ) {
    params.push(
      "filterBy=" + filters.diseases.concat(filters.methods).join(",")
    );
  }
  if (filters && filters.types && filters.types.length > 0) {
    params.push("types=" + filters.types.join(","));
  }
  if (filters && filters.categories && filters.categories.length > 0) {
    params.push("categories=" + filters.categories.join(","));
  }
  params.push("limit=" + limit);
  params.push("skip=" + (page - 1) * limit);
  let result = params.join("&");
  return result;
}

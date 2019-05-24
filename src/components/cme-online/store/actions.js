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
    return false;
  }
};

export const fetchCmeModule = async ({ commit }, slug) => {
  const { ok, response, error } = await sureThing(
    HTTP.get("/cme-online/" + slug)
  );

  if (ok && response.status === 200) {
    commit("SET_CME_MODULE", response.data);
    return response.data;
  } else {
    console.log(error);
    return false;
  }
};

export const fetchCmeModulesPerPageNumber = (
  { commit, dispatch },
  pageNumber
) => {
  commit("SET_PAGE_NUMBER", pageNumber);
  dispatch("fetchCmeModules");
};

export const fetchCmeModulesPerFilters = ({ commit, dispatch }) => {
  commit("SET_PAGE_NUMBER", 1);
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

export const navigateOnStep = ({ dispatch, state }, direction) => {
  let selectedStepIndex = state.currentStep.selectedIndex + direction;
  dispatch("fetchTimeline", selectedStepIndex);
};

export const navigateOnSimulation = ({ commit, state }, direction) => {
  let selectedPanelIndex = state.currentPanel.selectedIndex + direction;
  commit("SET_CURRENT_PANEL", {
    selectedPanelIndex: selectedPanelIndex,
    startSimulation:
      selectedPanelIndex === 0 ? state.currentStep.isSimulation : false
  });
  commit(
    "SET_HAS_ANSWERED_SIMULATION",
    !(state.currentPanel.panelType === "question")
  );
};

export const prepareStates = ({ commit, dispatch }) => {
  commit("RESET_STATIC_STATES");
  commit("RESET_CME_MODULE_STATES");
  return dispatch("fetchCmeModules");
};

export const resetCmeModules = ({ commit, dispatch }) => {
  commit("RESET_RESULTS");
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
    params.push(
      "types=" +
        filters.types
          .map(type => {
            return type.id;
          })
          .join(",")
    );
  }
  if (filters && filters.categories && filters.categories.length > 0) {
    params.push("categories=" + filters.categories.join(","));
  }
  params.push("limit=" + limit);
  params.push("skip=" + (page - 1) * limit);
  let result = params.join("&");
  return result;
}

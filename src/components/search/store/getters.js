export const searchQuery = state => state.q;

export const routeQuery = (state, getters, rootState) =>
  rootState.route.query.q || false;

export const counters = state => state.counters;

export const index = state => {
  // eslint-disable-next-line
  return state.i.join(',')
};

export const filters = state => state.filters;

export const results = state => state.results;

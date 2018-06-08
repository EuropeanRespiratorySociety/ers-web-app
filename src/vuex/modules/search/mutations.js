import * as types from './mutation-types'

export default {
  [types.SEARCH_RESULTS] (state, data) {
    state.results = data.results
  },

  // @TODO externalise this in external file (inizialse state an reset here)
  [types.RESET_RESULTS] (state) {
    state.results = []
    state.counters = {
      all: 0,
      web: 0,
      journals: 0,
      congress: 0,
      sessions: 0,
      presentations: 0,
      erj: 0,
      err: 0,
      openres: 0,
      breathe: 0
    }
    state.q = ''
    state.i = ['all']
    state.filters = {
      filtering: false,
      field: null,
      congress: [],
      journals: ['erj', 'err', 'breathe', 'openres']
    }
    state.pageNumber = 1
  },

  [types.SET_ACTIVE_TAB] (state, data) {
    state.i = [data]
  },

  [types.SET_FILTERS] (state, data) {
    state.filters.filtering = data.filtering
    state.filters.field = data.field
    // @TODO fix this uglyness
    state.filters[data.type[0].includes('congress') ? 'congress' : data.type] = [...data.payload]
  },

  [types.SET_INDICES] (state, data) {
    state.filters.filtering = data.filtering
    state.i = [...data.payload]
  },

  [types.SET_COUNTERS] (state, data) {
    state.counters = {
      all: data.total || 0,
      web: data.aggs.web || 0,
      journals: data.aggs.journal || 0,
      congress: data.aggs.congress || 0,
      sessions: data.aggs.sessions || 0,
      presentations: data.aggs.presentations || 0,
      erj: data.aggs.erj || 0,
      err: data.aggs.err || 0,
      openres: data.aggs.openres || 0,
      breathe: data.aggs.breathe || 0
    }
  },

  [types.SET_QUERY] (state, data) {
    state.q = data
  },

  [types.SET_PAGE_NUMBER] (state, value) {
    state.pageNumber = value
  }
}

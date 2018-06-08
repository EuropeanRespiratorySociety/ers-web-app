import * as types from './mutation-types'

export default {
  [types.SET_CATEGORY] (state, data) {
    state.length = data.length
    state.limit = data.limit
    state.skip = data.skip
    state.items = [...data.items]
    state.category = { ...data.category }
    state.pageNumber = data.pageNumber
  },

  [types.SET_PAGE_NUMBER] (state, value) {
    state.pageNumber = value
  }

}

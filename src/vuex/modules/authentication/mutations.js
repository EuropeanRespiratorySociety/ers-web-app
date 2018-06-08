import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, data) {
    state.user = data
  },

  [types.LOGIN] (state, data) {
    state.token = data
  },

  [types.LOGOUT] (state, data, rootState) {
    state.token = null
    state.error = null
  },

  [types.SET_ERROR] (state, data) {
    state.error = data.message
  }
}

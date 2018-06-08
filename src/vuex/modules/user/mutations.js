import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, data) {
    const { apiUserId, preferences, permissions } = data
    state.data = data.data
    state.apiUserId = apiUserId
    state.permissions = permissions
    state.preferences = preferences
  },

  [types.SET_INTERESTS] (state, data) {
    state.interests = [...data.data]
  },

  [types.SET_PREFERENCES] (state, data) {
    state.preferences = {...data.data}
  },

  [types.SET_STATUS] (state, data) {
    state.status = data
  },

  [types.SET_ERROR] (state, data) {
    state.error = data.message
  },

  [types.LOGOUT] (state) {
    state.data = {}
    state.error = null
    state.apiUserId = null
    state.permissions = []
    state.preferences = {
      _id: null,
      interests: []
    }
  }
}

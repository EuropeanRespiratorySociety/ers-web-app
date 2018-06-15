import * as types from './mutation-types'

export default {
  [types.TOGGLE_DRAWER] (state) {
    state.drawer = !state.drawer
  },

  [types.SET_DRAWER] (state, data) {
    state.drawer = data
  },

  [types.RESTORE_MUTATION] (state, data) {
    state.drawer = data.drawer
    state.pages = data.pages
    state.article = data.article
    state.pageNumber = data.pageNumber
  },

  [types.SET_ONLINE] (state) {
    state.offline = false
  },

  [types.SET_OFFLINE] (state) {
    state.offline = true
  },

  [types.SET_PARALLAX_IMG] (state, data) {
    state.parallaxImg = data
  },
  [types.SET_MOBILE] (state, data) {
    state.isMobile = data
  }
}

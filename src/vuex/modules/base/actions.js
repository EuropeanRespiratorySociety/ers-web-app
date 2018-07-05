import * as types from './mutation-types'

export const toggleDrawer = ({ commit }) => {
  commit(types.TOGGLE_DRAWER, (err) => { console.log(err) })
}

export const setDrawer = ({ commit }, data) => {
  commit(types.SET_DRAWER, data, (err) => { console.log(err) })
}

export const setOnline = ({ commit }) => {
  commit(types.SET_ONLINE)
}

export const setOffline = ({ commit }) => {
  commit(types.SET_OFFLINE)
}

export const setParallaxImg = ({ commit }, data) => {
  commit(types.SET_PARALLAX_IMG, data)
}

export const setMobile = ({ commit }, data) => {
  commit(types.SET_MOBILE, data)
}

import dayjs from 'dayjs'

export const isAuthenticated = state => {
  return state.token !== null && state.expiresOn > dayjs().unix()
}

export const error = state => state.error

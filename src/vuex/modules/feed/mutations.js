import * as types from './mutation-types'

export default {
  [types.SET_HIGHLIGHTS] (state, data) {
    state.highlights = [...data.rest]
    state.first = data.first
  },

  [types.SET_LATEST_JOURNAL_ARTICLES] (state, data) {
    state.latestJournalArticles = [...data]
  },

  [types.SET_FEED] (state, data) {
    state.feed = splitFeed(data, ['highligts', 'journals'])
  }
}

const splitFeed = (data, insert) => {
  const d = Math.floor(data.length / insert.length)

  return insert.reduce((a, c, i) => {
    if (i < insert.length - 1) {
      a.push(data.slice(i * d, (i + 1) * d))
      a.push(c)
    } else {
      a.push(data.slice(i * d, data.length))
      a.push(c)
    }
    return a
  }, [])
}

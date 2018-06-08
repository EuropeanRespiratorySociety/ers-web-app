export const slug = (state, _, rootState) => {
  return rootState.route.path.split('/').pop() || 'news'
}

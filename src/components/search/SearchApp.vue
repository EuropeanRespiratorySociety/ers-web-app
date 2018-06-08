<script>
// import store from '@/vuex/store'
const header = () => import('./SearchBar')
const results = () => import('./SearchResults')

export default {
  name: 'search-app',
  functional: true,
  render (h, c) {
    // store.dispatch('base/setParallaxImg', '', { root: true })
    return [h(header), h(results)]
  }
}
</script>

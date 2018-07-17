<script>
// import store from '@/vuex/store'
const header = () => import('./SearchBar')
const results = () => import('./SearchResults')
const SiteFooter = () => import('@/components/base/SiteFooter.vue')

export default {
  name: 'search-app',
  functional: true,
  render (h, c) {
    // store.dispatch('base/setParallaxImg', '', { root: true })
    return [h(header), h(results), h(SiteFooter)]
  }
}
</script>

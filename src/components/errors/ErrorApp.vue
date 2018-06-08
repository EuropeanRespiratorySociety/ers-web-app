<script>
// import store from '@/vuex/store'
import SimpleHeader from '@/components/base/SimpleHeader.vue'
import NotAuthorized from '@/components/errors/NotAuthorized.vue'

export default {
  name: 'error-app',

  render (h) {
    return h('div', {
      style: {
        width: '100%'
      }
    }, [h('simple-header'), h('not-authorized')])
  },

  components: { SimpleHeader, NotAuthorized }
}
</script>

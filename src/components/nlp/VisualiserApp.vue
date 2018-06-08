<script>
import SimpleHeader from '@/components/base/SimpleHeader.vue'
import Visualiser from './Visualiser.vue'

export default {
  name: 'visualiser-app',

  render (h) {
    return h('div', {
      style: {
        width: '100%'
      }
    }, [h('simple-header'), h('visualiser')])
  },

  components: { SimpleHeader, Visualiser }
}
</script>

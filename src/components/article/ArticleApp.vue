<script>
import Highlights from './Article.vue'
import ParallaxContainer from '@/components/base/ParallaxContainer.vue'

export default {
  name: 'feed-app',
  functional: true,
  render (h, c) {
    return [
      h(ParallaxContainer),
      h(Highlights)
    ]
  }
}

</script>

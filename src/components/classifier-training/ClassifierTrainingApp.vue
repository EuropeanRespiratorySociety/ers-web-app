<script>
import SimpleHeader from '@/components/base/SimpleHeader'
import Article from '@/components/classifier-training/Article'

export default {
  name: 'classifier-training-app',
  functional: true,

  components: {
    SimpleHeader,
    Article
  },

  render (h, c) {
    return [
      // h(ParallaxContainer),
      h(SimpleHeader, {props: {title: 'ERS Content Classifier'}}),
      h(Article)
    ]
  }
}

</script>

<script>
import SimpleHeader from '@/components/base/SimpleHeader'
import AILandingPage from '@/components/classifier-training/AILandingPage'

export default {
  name: 'ai-landing-page',
  functional: true,

  components: {
    SimpleHeader,
    AILandingPage
  },

  render (h, c) {
    return [
      h(SimpleHeader, {props: {title: 'Artificial Intelligence'}}),
      h(AILandingPage)
    ]
  }
}

</script>

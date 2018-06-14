<script>
import FeedContainer from './FeedContainer.vue'
import FeedPannel from './FeedPannel.vue'
// import Highlights from './Highlights.vue'
// import Journals from './Journals.vue'
import SimpleHeader from '@/components/base/SimpleHeader'
// import MainItem from './MainItem.vue'
// import ParallaxContainer from '@/components/base/ParallaxContainer.vue'
import FeaturedSection from './FeaturedSection'
import Cards from './Cards.vue'
import Popular from '@/components/partials/PopularArticles.vue'
import Network from '@/components/partials/NetworkNews.vue'

export default {
  name: 'feed-app',
  functional: true,

  components: {
    SimpleHeader,
    Cards,
    FeedContainer,
    // MainItem,
    FeaturedSection },

  render (h, c) {
    const { feed, interests } = c.parent.$store.state.feed
    const interestsArray = Object.keys(interests).reduce((a, c) => {
      a.push(interests[c])
      return a
    }, [])

    return [
      // h(ParallaxContainer),
      h(SimpleHeader, {props: {title: 'ERS News and Features'}}),
      h(FeedContainer, [
        // h(MainItem, { slot: 'main' }),
        h(FeaturedSection, { slot: 'main' }),
        feed.map((i, k) => {
          return h(FeedPannel, {
            slot: 'main',
            props: {
              feed: i.feed,
              swiper: interestsArray[k],
              side: k === 0 ? Popular : k === 1 ? Network : false
            }
          })
        })
      ])
    ]
  }
}

</script>

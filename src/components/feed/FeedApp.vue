<script>
import FeedContainer from './FeedContainer.vue'
import Highlights from './Highlights.vue'
import Journals from './Journals.vue'
import MainItem from './MainItem.vue'
import ParallaxContainer from '@/components/base/ParallaxContainer.vue'
import CardsSwiper from '@/components/category/CardsSwiper.vue'
import CardFeed from './CardFeed.vue'

export default {
  name: 'feed-app',
  functional: true,

  components: { CardsSwiper, CardFeed, FeedContainer, MainItem },

  render (h, c) {
    const feed = c.parent.$store.state.feed.feed

    return [
      h(ParallaxContainer),
      h(FeedContainer, [
        h(MainItem, { slot: 'main' }),
        feed.map(i =>
          /* eslint-disable */
          i === 'highligts'
            ? h(Highlights, { slot: 'feed' })
            : i === 'journals'
            ? h(Journals, { slot: 'feed' })
            : h(CardFeed, { slot: 'feed', props: { parent: 'news', articles: i } })
          /* eslint-enable */
        )
      ])
    ]
  }
}

</script>

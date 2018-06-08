<template>
  <cards-swiper
    v-if="latestJournalArticles"
    :articles="latestJournalArticles"
    title="Latest Journal Articles">
  </cards-swiper>
</template>

<script>
import { mapState } from 'vuex'
import CardsSwiper from '@/components/category/CardsSwiper.vue'

export default {
  name: 'Journals',

  computed: {
    ...mapState('feed', [
      'latestJournalArticles'
    ])
  },

  components: { CardsSwiper }

}
</script>

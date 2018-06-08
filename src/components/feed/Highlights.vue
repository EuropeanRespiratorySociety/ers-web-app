<template>
  <cards-swiper
    v-if="highlights"
    :articles="highlights"
    parent="news"
    title="Editor's Pick">
  </cards-swiper>
</template>

<script>
import { mapState } from 'vuex'
import CardsSwiper from '@/components/category/CardsSwiper.vue'

export default {
  name: 'Highlights',

  computed: {
    ...mapState('feed', [
      'highlights'
    ])
  },

  components: { CardsSwiper }

}
</script>

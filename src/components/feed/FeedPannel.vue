<template>
  <intersect @enter.once="entered">
    <transition mode="out-in">
      <div>
          <v-container v-if="visible" fluid>
            <v-layout row>
              <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
                <v-layout row wrap>
                  <v-flex xs12 sm7>
                    <cards parent="news" :articles="feed"></cards>
                  </v-flex>
                  <v-flex xs12 sm5>
                    <component v-if="side" :is="side"></component>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        <v-layout row>
          <v-flex xs12>
              <cards-swiper
                v-if="swiper && swiper.data.length > 0"
                :articles="swiper.data"
                :parent="swiper.parent"
                :title="swiper.title">
              </cards-swiper>
          </v-flex>
        </v-layout>
      </div>
    </transition>
  </intersect>
</template>

<script>
import Intersect from 'vue-intersect'
import CardsSwiper from '@/components/category/CardsSwiper.vue'
import Cards from './Cards.vue'

export default {
  name: 'featured',
  props: ['feed', 'swiper', 'title', 'side'],

  data () {
    return {
      visible: false
    }
  },

  components: {
    CardsSwiper, Cards, Intersect
  },

  methods: {
    entered () {
      this.visible = true
    }
  }

}
</script>

<style scoped>
  .divider {
    margin: 30px 0 20px 0;
  }
</style>

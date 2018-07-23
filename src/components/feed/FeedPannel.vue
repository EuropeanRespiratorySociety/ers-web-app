<template>
  <intersect @enter.once="entered">
    <transition mode="out-in">
      <div>
        <v-container v-if="visible" fluid>
          <v-layout row>
            <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
              <v-layout row wrap>
                <v-flex xs12 sm7>
                  <cards :articles="feed" parent="news"/>
                </v-flex>
                <v-flex xs12 sm5>
                  <component v-if="side" :is="side"/>
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
              :title="swiper.title"/>
          </v-flex>
        </v-layout>
      </div>
    </transition>
  </intersect>
</template>

<script>
import Intersect from "vue-intersect";
import CardsSwiper from "@/components/category/CardsSwiper.vue";
import Cards from "./Cards.vue";

export default {
  name: "featured",

  components: {
    CardsSwiper,
    Cards,
    Intersect
  },
  props: {
    feed: { type: Array, default: () => [] },
    swiper: { type: Object, default: () => {} },
    title: { type: String, default: "" },
    side: { type: String | Boolean, default: false }
  },

  data() {
    return {
      visible: false
    };
  },

  methods: {
    entered() {
      this.visible = true;
    }
  }
};
</script>

<style scoped>
.divider {
  margin: 30px 0 20px 0;
}
</style>

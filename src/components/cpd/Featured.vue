<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>  
            <v-card>
              <v-card-text v-html="category.body"/>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <cards-swiper
              v-if="articles.length > 0"
              :articles="articles"
              :parent="cpd"/>
          </v-flex>
        </v-layout>
        <v-layout xs12>
          <v-list v-for="(i, k) in interests" :key="k" subheader dense>
            <div v-if="i.title === 'diseases'">
              <v-list-tile v-for="(v, k) in i.values" :key="'value-' + k">
                <v-list-tile-action>
                  <v-checkbox v-model="prefs" :value="v"/>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{v}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </div>
          </v-list>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import { mapActions, mapState } from "vuex";
const CardsSwiper = () => import("@/components/category/CardsSwiper.vue");

export default {
  components: {
    CardsSwiper
  },

  data() {
    return {
      prefs: []
    };
  },

  computed: {
    ...mapState("cpd", ["category", "articles"]),
    ...mapState("user", ["interests"])
  },

  created() {
    this.fetchData();
  },

  metaInfo() {
    return {
      title: this.category.title
    };
  },

  methods: {
    ...mapActions("cpd", ["getCategory"]),

    fetchData() {
      this.getCategory();
    }
  }
};
</script>

<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
            <v-card v-if="category" id="test" class="card--flex-toolbar">
              <v-toolbar card class="white">
                <v-toolbar-title v-if="category" class="headline grey--text">{{category.title}}</v-toolbar-title>
                <v-spacer/>
              </v-toolbar>
              <v-divider/>
              <v-card-text v-if="category.body" v-html="category.body"/>
            </v-card>

            <cards-swiper v-if="articles" :articles="articles"/>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CardsSwiper from "./CardsSwiper.vue";

export default {
  name: "Category",
  components: { CardsSwiper },
  data() {
    return {
      fixed: false
    };
  },

  computed: {
    ...mapGetters("category", ["slug"]),

    articles() {
      return this.$store.state.category.items;
    },

    category() {
      return this.$store.state.category.category;
    }
  },

  created() {
    this.fetchData();
  },

  methods: {
    ...mapActions("category", ["getCategory", "pageNumber"]),

    fetchData() {
      const payload = {
        pageNumber: parseInt(this.$route.params.id) || this.page,
        request: this.slug,
        skip: this.$store.state.category.skip
      };
      this.getCategory(payload);
    }
  }
};
</script>

<style>
.published {
  font-size: 18px !important;
  padding-right: 5px;
}
</style>

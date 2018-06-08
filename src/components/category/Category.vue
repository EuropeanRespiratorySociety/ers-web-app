<template>
<transition mode="out-in">
  <v-content>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
          <v-card v-if="category" id="test" class="card--flex-toolbar">
            <v-toolbar card class="white">
              <v-toolbar-title v-if="category" class="headline grey--text">{{category.title}}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text v-if="category.body" v-html="category.body"></v-card-text>
          </v-card>

          <cards-swiper v-if="articles" :articles="articles"></cards-swiper>

        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardsSwiper from './CardsSwiper.vue'

export default {
  name: 'Category',

  data () {
    return {
      fixed: false
    }
  },

  created () {
    this.fetchData()
  },

  computed: {
    ...mapGetters('category', [
      'slug'
    ]),

    articles () {
      return this.$store.state.category.items
    },

    category () {
      return this.$store.state.category.category
    }
  },

  methods: {
    ...mapActions('category', [
      'getCategory',
      'pageNumber'
    ]),

    fetchData () {
      const payload = {
        pageNumber: parseInt(this.$route.params.id) || this.page,
        request: this.slug,
        skip: this.$store.state.category.skip
      }
      this.getCategory(payload)
    }
  },

  components: { CardsSwiper }

}
</script>

<style>
  .published {
    font-size:18px!important;
    padding-right:5px;
  }

</style>

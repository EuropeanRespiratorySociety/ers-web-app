<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
            <slot name="main"></slot>
            <slot name="feed"></slot>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.fetchData()
  },

  methods: {
    ...mapActions('feed', [
      'getHighlights',
      'getFeed',
      'getLatestJournalArticles'
    ]),

    fetchData () {
      this.getFeed()
      this.getHighlights()
      this.getLatestJournalArticles()
    }
  }
}
</script>

<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12>
            <slot name="main"/>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
            <slot name="feed"/>
            <!-- <v-layout row wrap>
              <v-flex xs12 sm7>
                <slot name="feed"></slot>
              </v-flex>
              <v-flex xs12 sm5>
                <slot name="side"></slot>
              </v-flex>
            </v-layout> -->
          </v-flex>
        </v-layout>
        <!-- <v-layout row>
          <v-flex xs12>
            <slot name="swiper"></slot>
          </v-flex>
        </v-layout> -->
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
    this.fetchData();
  },

  metaInfo() {
    return {
      title: `News and features`
    };
  },

  methods: {
    ...mapActions("feed", [
      "getHighlights",
      "getFeed",
      "getLatestJournalArticles"
    ]),

    fetchData() {
      this.getFeed();
      this.getHighlights();
      this.getLatestJournalArticles();
    }
  }
};
</script>

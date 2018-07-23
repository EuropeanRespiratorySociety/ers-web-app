<template>
  <v-container grid-list-md>
    <v-layout v-if="first" row wrap>
      <v-flex xs12>
        <v-card id="test">
          <v-toolbar card color="white" style="margin-top: -137px">
            <v-toolbar-title v-if="first.title" class="grey--text">{{first.title}}</v-toolbar-title>
            <v-spacer/>
          </v-toolbar>
          <v-divider/>
          <v-card-text v-if="first" v-html="first.leadParagraph"/>
          <v-card-actions>
            <v-btn :to="'/news/' + first.slug">More...</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "main-item",

  data() {
    return {};
  },

  computed: {
    ...mapState("feed", ["first"])
  }
};
</script>

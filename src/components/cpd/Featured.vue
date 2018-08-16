<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
            <p>hello</p>
          </v-flex>
        </v-layout>
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
      title: `Continuing Professional development`
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

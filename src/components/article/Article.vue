<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2 style="margin-top:-78px;">
            <v-card v-if="item" class="card--flex-toolbar">
              <v-toolbar card class="white">
                <v-toolbar-title v-if="item" class="headline grey--text">{{item.title}}</v-toolbar-title>
                <v-spacer/>
              </v-toolbar>
              <v-divider/>
              <v-card-text v-if="item.body" >
                <span v-if="item.leadParagraph" v-html="item.leadParagraph"/>
                <span v-if="item.body" v-html="item.body"/>
              </v-card-text>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Article",

  computed: {
    ...mapState("article", ["previous", "item"])
  },

  created() {
    this.fetchData();
  },

  methods: {
    ...mapActions("article", ["getArticle"]),

    fetchData() {
      const payload = {
        slug: this.$route.params.slug,
        endpoint: this.$route.path.split("/")[1],
        previous: this.previousPage.path
      };
      this.getArticle(payload);
    }
  }
};
</script>

<style scoped>
.published {
  font-size: 18px !important;
  padding-right: 5px;
}

ul {
  padding: 0 25px;
}
</style>

<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex 
        v-for="article in articles"
        :key="article.slug"
        xs12>
        <v-card
          hover
        >
          <v-img
            v-if="article.image"
            :src="article.image"
            height="200px"/>
          <v-card-title
            v-if="article.title"
            primary-title
            class="title"
          >
            <div>
              {{article.title | truncate}}
              <!--<span><v-icon class="published">query_builder</v-icon>{{article.createdOn}}</span>-->
            </div>
          </v-card-title>
          <v-card-text 
            v-if="article.shortLead"
            class="truncate"
            style="width:auto;"
            v-html="article.shortLead"/>
          <v-card-actions>
            <v-btn
              :to="`${parent}/${article.slug}`"
              flat
            >
              More...
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { truncate } from "../../filters";
export default {
  name: "cards",
  filters: {
    truncate: string => truncate(string, 120)
  },
  props: {
    parent: { type: String, default: "" },
    articles: { type: Array, default: () => [] }
  }
};
</script>

<style scoped>
.title {
  min-height: 88px;
  max-height: 88px;
}
</style>

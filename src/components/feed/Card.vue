<template>
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
      class="title-wrapper"
    >
      <div class="title">
        {{article.title | truncate}}
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
</template>

<script>
import { truncate } from "../../filters";
export default {
  name: "card",
  filters: {
    truncate: string => truncate(string, 100)
  },
  props: {
    parent: { type: String, default: "" },
    article: { type: Object, default: () => {} }
  }
};
</script>

<style scoped>
.title-wrapper {
  padding-bottom: 5px;
}

.title {
  min-height: 63px;
  max-height: 63px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

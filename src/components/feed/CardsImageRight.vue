<template>
  <v-layout row wrap>
    <v-flex 
      v-for="article in articles" 
      :key="article.slug"
      xs12
      md6>
      <v-card
        :to="`${parent}/${article.slug}`"
        xs8
        hover
      >
        <v-card-title
          v-if="article.title"
          primary-title
          class="title-wrapper"
        >
          <div class="title">
            {{article.title | truncate}}
            <!--<span><v-icon class="published">query_builder</v-icon>{{article.createdOn}}</span>-->
          </div>
        </v-card-title>
        <v-layout row>
          <v-flex xs8>
            <v-card-text 
              v-if="article.createdOn"
              class="truncate"
              style="width:auto;"
            >
              <div class="lead">{{ article.shortLead | truncate(80)}}</div>
              <span class="grey--text">{{article.createdOn}}</span>
            </v-card-text>
          </v-flex>
          <v-flex xs4>
            <v-img
              v-if="article.image"
              :src="article.image"
              lazy-src="./icons/logo.png"
              contain
              height="100px"/>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { truncate } from "../../filters";
export default {
  name: "cards-image-right",
  filters: {
    truncate: (string, length = 100) => truncate(string, length)
  },
  props: {
    parent: { type: String, default: "" },
    articles: { type: Array, default: () => [] }
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

.lead {
  min-height: 63px;
  max-height: 63px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

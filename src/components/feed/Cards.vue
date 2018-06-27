<template>
  <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12
            v-for="article in articles"
            :key="article.slug">
        <v-card
          hover
        >
          <v-card-media
            v-if="article.image"
            :src="article.image"
            height="200px">
          </v-card-media>
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
          <v-card-text class="truncate"
            v-if="article.shortLead"
            v-html="article.shortLead"
            style="width:auto;">
          </v-card-text>
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
import * as _ from 'lodash/truncate'
export default {
  name: 'cards',
  props: ['parent', 'articles'],
  filters: {
    truncate: function (value) {
      return _(value, {length: 120, separator: '...'})
    },

    caps: function (value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
  .title {
    min-height: 88px;
    max-height: 88px;
  }
</style>

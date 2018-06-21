<template>
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
      class="title-wrapper"
    >
      <div class="title">
        {{article.title | truncate}}
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
</template>

<script>
import * as _ from 'lodash/truncate'
export default {
  name: 'card',
  props: ['parent', 'article'],
  filters: {
    truncate: function (value, length = 100) {
      return _(value, {length, separator: '...'})
    },

    caps: function (value) {
      return value.toUpperCase()
    }
  }
}
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

<template>
    <v-layout row wrap>
      <v-flex xs12 md6
        v-for="article in articles"
        :key="article.slug">
            <v-card
              xs8
              hover
              :to="`${parent}/${article.slug}`"
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
                  <v-card-text class="truncate"
                    v-if="article.createdOn"
                    style="width:auto;"
                  >
                    <div class="lead">{{ article.shortLead | truncate(80)}}</div>
                    <span class="grey--text">{{article.createdOn}}</span>
                  </v-card-text>
                </v-flex>
                <v-flex xs4>
                  <v-card-media
                    contain
                    v-if="article.image"
                    :src="article.image"
                    height="100px">
                  </v-card-media>
                </v-flex>
              </v-layout>
            </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
import * as _ from 'lodash/truncate'
export default {
  name: 'cards-image-right',
  props: ['parent', 'articles'],
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

<style lang="css" scoped>
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

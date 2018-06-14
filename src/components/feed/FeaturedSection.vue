<template>
  <v-container grid-list-md>
    <v-layout v-if="first" row wrap>
      <v-flex xs12 sm4>
        <card parent="news" :article="first"></card>
      </v-flex>
      <v-flex xs12 sm8>
        <cards-image-right :articles="highlights" parent="news"></cards-image-right>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import CardsImageRight from './CardsImageRight'
import Card from './Card'

export default {
  name: 'featured',

  data () {
    return {}
  },

  computed: {
    ...mapState('feed', [
      'first',
      'highlights'
    ])
  },

  components: {
    CardsImageRight, Card
  }

}
</script>

<style lang="css" scoped>
  .divider {
    margin: 30px 0 5px 0;
  }
</style>

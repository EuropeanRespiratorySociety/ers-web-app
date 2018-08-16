<template>
  <v-container grid-list-md>
    <v-layout v-if="first" row wrap>
      <v-flex xs12 sm4>
        <card :article="first" parent="news"/>
      </v-flex>
      <v-flex xs12 sm8>
        <cards-image-right :articles="highlights" parent="news"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import CardsImageRight from "./CardsImageRight";
import Card from "./Card";

export default {
  name: "featured",
  components: {
    CardsImageRight,
    Card
  },
  data() {
    return {};
  },

  computed: {
    ...mapState("feed", ["first", "highlights"])
  }
};
</script>

<style scoped>
.divider {
  margin: 30px 0 5px 0;
}
</style>

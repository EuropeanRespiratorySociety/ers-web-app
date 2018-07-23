<template>
  <cards-swiper
    v-if="highlights"
    :articles="highlights"
    parent="news"
    title="Editor's Pick"/>
</template>

<script>
import { mapState } from "vuex";
import CardsSwiper from "@/components/category/CardsSwiper.vue";

export default {
  name: "Highlights",
  components: { CardsSwiper },
  computed: {
    ...mapState("feed", ["highlights"])
  }
};
</script>

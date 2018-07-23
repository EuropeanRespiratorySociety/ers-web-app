<template>
  <cards-swiper
    v-if="latestJournalArticles"
    :articles="latestJournalArticles"
    title="Latest Journal Articles"/>
</template>

<script>
import { mapState } from "vuex";
import CardsSwiper from "@/components/category/CardsSwiper.vue";

export default {
  name: "Journals",
  components: { CardsSwiper },
  computed: {
    ...mapState("feed", ["latestJournalArticles"])
  }
};
</script>

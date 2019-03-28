<template>
  <v-card>
    <v-card-text>
      <span v-html="currentPanel.references"/>
    </v-card-text>
  </v-card>
</template>

<script>
import { formMixin } from "@/mixins/formMixin";
import { mapState } from "vuex";
export default {
  name: "cme-tabs-references",
  mixins: [formMixin],
  computed: {
    ...mapState("cmeOnline", ["currentPanel"])
  }
};
</script>

<style scoped>
</style>

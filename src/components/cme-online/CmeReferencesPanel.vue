<template>
  <v-card>
    <v-card-text>
      <span v-html="currentPanel.references"/>
    </v-card-text>
  </v-card>
</template>

<script>
import { formFieldMixin } from "@/mixins/formFieldMixin";
import { mapState } from "vuex";
export default {
  name: "cme-tabs-references",
  mixins: [formFieldMixin],
  computed: {
    ...mapState("cmeOnline", ["currentPanel"])
  }
};
</script>

<style scoped>
</style>

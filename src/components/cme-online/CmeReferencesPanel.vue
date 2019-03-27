<template>
  <v-flex xs12 sm9>
    <v-card>
      <v-card-text>
        <span v-html="currentPanel.references"/>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import { formFieldMixin } from "@/mixins/formFieldMixin";
import { mapGetters } from "vuex";
export default {
  name: "cme-references-panel",
  mixins: [formFieldMixin],
  computed: {
    ...mapGetters("cmeOnline", ["currentPanel"])
  }
};
</script>

<style scoped>
</style>

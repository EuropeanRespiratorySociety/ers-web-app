<template>
  <div>
    <v-card flat>
      <v-card-text>
        <span v-html="formatLinkTargetBlank(currentPanel.references)"/>
      </v-card-text>
    </v-card>
  </div>
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

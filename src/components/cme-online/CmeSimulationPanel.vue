<template>
  <div>
    <component :is="buildCmeOnlineComponentName(currentPanel.panelType)"/>
    <v-card>
      <v-card-actions v-if="currentPanel.startSimulation" class="px-3 py-3">
        <v-spacer/>
        <v-btn color="info" v-on:click="nextPanel(1)">START SIMULATION</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { formMixin } from "@/mixins/formMixin";
import CmeTabsPanel from "@/components/cme-online/CmeTabsPanel";
import CmeQuestionPanel from "@/components/cme-online/CmeQuestionPanel";
import { mapState, mapActions } from "vuex";

export default {
  name: "cme-simulation-panel",
  components: {
    CmeTabsPanel,
    CmeQuestionPanel
  },
  mixins: [formMixin],
  computed: {
    ...mapState("cmeOnline", ["cmeModule", "currentStep", "currentPanel"])
  },
  methods: {
    ...mapActions("cmeOnline", ["nextPanel"])
  }
};
</script>

<style scoped>
</style>

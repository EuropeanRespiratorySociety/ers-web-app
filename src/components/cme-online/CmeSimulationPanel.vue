<template>
  <div>
    <component :is="componentName"/>
    <v-card>
      <v-card-actions v-if="currentPanel.startSimulation" class="px-3 py-3">
        <v-spacer/>
        <v-btn color="info">START SIMULATION</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import CmeTabsPanel from "@/components/cme-online/CmeTabsPanel";
import CmeQuestionPanel from "@/components/cme-online/CmeQuestionPanel";
import { mapState } from "vuex";

export default {
  name: "cme-simulation-panel",
  components: {
    CmeTabsPanel,
    CmeQuestionPanel
  },
  computed: {
    ...mapState("cmeOnline", ["cmeModule", "currentStep", "currentPanel"]),
    componentName() {
      return "cme-" + this.currentPanel.panelType + "-panel";
    }
  }
};
</script>

<style scoped>
</style>

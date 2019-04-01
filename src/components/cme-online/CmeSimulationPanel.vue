<template>
  <div>
    <component :is="buildCmeOnlineComponentName(currentPanel.panelType)"/>
    <v-card>
      <v-card-actions class="px-3 py-3">
        <v-spacer/>
        <v-btn
          v-if="currentPanel.startSimulation"
          color="info"
          v-on:click="nextPanel"
        >START SIMULATION</v-btn>
        <v-btn v-if="!currentPanel.startSimulation" color="info" v-on:click="previousPanel">PREVIOUS</v-btn>
        <v-btn
          v-if="!currentPanel.startSimulation && simulationPanelIndex < simulationStepCount"
          color="info"
          v-on:click="nextPanel"
        >CONTINUE</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { formMixin } from "@/mixins/formMixin";
import CmeTabsPanel from "@/components/cme-online/CmeTabsPanel";
import CmeQuestionPanel from "@/components/cme-online/CmeQuestionPanel";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "cme-simulation-panel",
  components: {
    CmeTabsPanel,
    CmeQuestionPanel
  },
  mixins: [formMixin],
  computed: {
    ...mapState("cmeOnline", ["currentPanel", "simulationPanelIndex"]),
    ...mapGetters("cmeOnline", ["simulationStepCount"])
  },
  methods: {
    ...mapActions("cmeOnline", ["nextPanel", "previousPanel"])
  }
};
</script>

<style scoped>
</style>

<template>
  <div>
    <v-card-actions class="px-3 py-3">
      <v-spacer/>
      <div v-if="currentStep.isSimulation">
        <v-btn
          v-if="currentPanel.startSimulation"
          color="info"
          href="#simulationAnchor"
          v-on:click="navigateOnSimulation(1)"
        >START SIMULATION</v-btn>
        <v-btn
          v-if="!currentPanel.startSimulation"
          color="info"
          href="#simulationAnchor"
          v-on:click="navigateOnSimulation(-1)"
        >PREVIOUS</v-btn>
        <v-btn
          v-if="!currentPanel.startSimulation && currentPanel.selectedIndex < simulationStepCount"
          :disabled="hasAnsweredSimulation === false"
          color="info"
          href="#simulationAnchor"
          v-on:click="navigateOnSimulation(1)"
        >CONTINUE</v-btn>
        <v-btn
          v-if="!currentPanel.startSimulation && currentPanel.selectedIndex === simulationStepCount"
          :disabled="hasAnsweredSimulation === false"
          color="info"
          href="#simulationAnchor"
          v-on:click="navigateOnStep(1)"
        >FINISH</v-btn>
      </div>
      <div v-else>
        <v-btn
          :disabled="currentStep.selectedIndex === 0"
          icon
          style="float:left"
          href="#simulationAnchor"
          v-on:click="navigateOnStep(-1)"
        >
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn
          v-if="currentStep.selectedIndex !== stepCount"
          icon
          style="float:right"
          href="#simulationAnchor"
          v-on:click="navigateOnStep(1)"
        >
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
        <v-btn
          v-if="currentStep.selectedIndex === stepCount"
          outline
          color="indigo"
          v-on:click="takeCmeTest"
        >Go to CME Test</v-btn>
      </div>
    </v-card-actions>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "cme-navigation",
  computed: {
    ...mapState("cmeOnline", [
      "cmeModule",
      "currentStep",
      "currentPanel",
      "hasAnsweredSimulation"
    ]),
    ...mapGetters("cmeOnline", ["simulationStepCount", "stepCount"])
  },
  methods: {
    ...mapActions("cmeOnline", ["navigateOnSimulation", "navigateOnStep"]),
    takeCmeTest() {
      window.open(
        "https://education.ersnet.org/course/view.php?id=" +
          this.cmeModule.moodleCmeId
      );
    }
  }
};
</script>

<style scoped>
</style>

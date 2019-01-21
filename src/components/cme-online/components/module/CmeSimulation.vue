<template>
  <v-flex xs12 sm9>
    <component :is="currentComp" />
    <v-card>
      <v-card-actions class="px-3 py-3">
        <v-spacer />
        <v-btn color="info" @click="nextComponent(1)">START SIMULATION</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>


<script>
import CmeSimulationIntro from "./CmeSimulationIntro";
import CmeSimulations from "./CmeSimulations";

export default {
  name: "cme-simuration",
  components: {
    CmeSimulationIntro,
    CmeSimulations
  },
  data() {
    return {
      active: null,
      currentComp: "cme-simulation-intro",
      comp: ["cme-simulation-intro", "cme-simulations"]
    };
  },
  methods: {
    nextComponent: function(num) {
      this.currentComp = this.comp[num];
    }
  }
};
</script>

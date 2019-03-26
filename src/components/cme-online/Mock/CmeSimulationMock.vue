<template>
  <v-flex xs12 sm9>
    <component :is="currentComp"/>
    <v-card>
      <v-card-actions v-if="currentComp === 'cme-simulation-intro-mock'" class="px-3 py-3">
        <v-spacer/>
        <v-btn
          v-if="currentComp === 'cme-simulation-intro-mock'"
          color="info"
          @click="nextComponent(1)"
        >START SIMULATION</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>


<script>
import CmeSimulationIntroMock from "@/components/cme-online/Mock/CmeSimulationIntroMock";
import CmeSimulationsMock from "@/components/cme-online/Mock/CmeSimulationsMock";

export default {
  name: "cme-simuration-mock",
  components: {
    CmeSimulationIntroMock,
    CmeSimulationsMock
  },
  data() {
    return {
      active: null,
      currentComp: "cme-simulation-intro-mock",
      comp: ["cme-simulation-intro-mock", "cme-simulations-mock"]
    };
  },
  methods: {
    nextComponent: function(num) {
      this.currentComp = this.comp[num];
    }
  }
};
</script>

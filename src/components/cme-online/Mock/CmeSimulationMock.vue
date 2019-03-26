<template>
  <v-flex xs12 sm9>
    <component :is="currentComp"/>
    <v-card>
      <v-card-actions v-if="currentComp === 'cme-simulation-intro'" class="px-3 py-3">
        <v-spacer/>
        <v-btn
          v-if="currentComp === 'cme-simulation-intro'"
          color="info"
          @click="nextComponent(1)"
        >START SIMULATION</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>


<script>
import CmeSimulationIntro from "@/components/cme-online/Mock/CmeSimulationIntroMock";
import CmeSimulations from "@/components/cme-online/Mock/CmeSimulationsMock";

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

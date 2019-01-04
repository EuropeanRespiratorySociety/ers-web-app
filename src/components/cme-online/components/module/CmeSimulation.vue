<template>
  <component :is="currentComp" />
</template>

<script>
import CmeSimulationIntro from "./CmeSimulationIntro";

export default {
  name: "cme-simuration",
  components: {
    CmeSimulationIntro
  },
  data() {
    return {
      active: null,
      currentComp: "cme-simulation-intro"
    };
  }
};
</script>

<template>
  <v-parallax :src="parallaxImg" height="300"/>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "parallax-image",

  data() {
    return {};
  },

  computed: {
    ...mapState("base", ["parallaxImg"])
  }
};
</script>

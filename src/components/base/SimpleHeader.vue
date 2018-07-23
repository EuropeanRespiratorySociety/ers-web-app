<template>
  <v-toolbar
    app
    fixed
    class="elevation-1"
  >
    <v-toolbar-side-icon @click.stop="toggleDrawer"/>
    <v-toolbar-title v-if="title">{{title}}</v-toolbar-title>
    <v-spacer/>
    <logout />
  </v-toolbar>
</template>

<script>
import Logout from "@/components/authentication/Logout.vue";
import { mapActions } from "vuex";

export default {
  name: "simple-header",
  components: { Logout },
  props: { title: { type: String, required: false, default: "" } },
  data() {
    return {
      fixed: false
    };
  },
  methods: {
    ...mapActions("base", ["toggleDrawer"])
  }
};
</script>

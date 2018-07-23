<template>
  <v-toolbar
    v-scroll="onScroll"
    id="header-t"
    :class="setClass()"
    app
    dark
    fixed
    prominent
  >
    <v-toolbar-side-icon @click.stop="toggle"/>
    <a :class="!drawer ? 'transparent transparent--text' : 'white primary--text'" href="/">
      <i v-if="!drawer" class="icon-ers icon" style="font-size:50px; color:#fff;"/>
    </a>
    <v-toolbar-title v-if="!drawer" class="mb-1">ERS <span v-if="offline">currently offline</span></v-toolbar-title>
    <v-spacer/>
    <logout />
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Logout from "@/components/authentication/Logout.vue";

export default {
  name: "parallax-header",

  components: {
    Logout
  },

  data() {
    return {};
  },

  computed: {
    ...mapState("base", ["drawer", "offline"])
  },

  methods: {
    ...mapActions("base", ["toggleDrawer"]),

    setClass() {
      if (this.offline) {
        return "error elevation-0";
      }
      return "primary transparent elevation-0";
    },

    toggle() {
      this.toggleDrawer();
    },

    onScroll() {
      let container = document.getElementById("header-t");
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;

      if (this.offsetTop > 100 && !this.offline) {
        container.classList.add("primary");
        container.classList.add("elevation-2");
        container.classList.remove("transparent");
        container.classList.remove("elevation-0");
      }

      if (this.offsetTop < 100 && !this.offline) {
        container.classList.add("elevation-0");
        container.classList.add("transparent");
        container.classList.remove("primary");
        container.classList.remove("elevation-2");
      }
    }
  }
};
</script>

<style>
.transparent {
  background: transparent !important;
  background-size: cover;
}

.toolbar__title {
  margin-left: 7px !important;
}
</style>

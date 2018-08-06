<template>
  <v-btn
    flat
    @click="submit"
    v-text="isAuthenticated ? 'Logout' : 'Login'"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "logout",
  data() {
    return {};
  },

  computed: {
    ...mapGetters("authentication", ["isAuthenticated"])
  },

  methods: {
    ...mapActions("authentication", ["logout"]),

    l() {
      this.logout();
      this.$router.push({ path: "/" });
    },

    submit() {
      this.isAuthenticated ? this.l() : this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped>
</style>

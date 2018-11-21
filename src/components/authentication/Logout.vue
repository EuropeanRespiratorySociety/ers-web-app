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

    submit() {
      this.isAuthenticated
        ? (this.logout(), this.$router.push({ path: "/" }))
        : this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped>
</style>

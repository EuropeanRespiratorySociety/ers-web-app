<template>
    <v-btn
      v-text="isAuthenticated ? 'Logout' : 'Login'"
      @click="submit"
      flat
    >
    </v-btn>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'logout',
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters('authentication', [
      'isAuthenticated'
    ])
  },

  methods: {
    ...mapActions('authentication', [
      'logout'
    ]),

    submit () {
      this.isAuthenticated
        ? this.logout()
        : this.$router.push({ path: '/login' })
    }
  }

}
</script>

<style scoped>
</style>

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

    l () {
      this.logout()
      this.$router.push({path: '/'})
    },

    submit () {
      this.isAuthenticated
        ? this.l()
        : this.$router.push({ path: '/login' })
    }
  }

}
</script>

<style scoped>
</style>

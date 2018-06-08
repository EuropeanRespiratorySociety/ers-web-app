<template>
  <v-toolbar
      app
      fixed
      dark
      color="primary"
    >
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <logout />
    </v-toolbar>
</template>

<script>
import Logout from '@/components/authentication/Logout.vue'
import { mapActions } from 'vuex'

export default {
  name: 'simple-header',
  data () {
    return {
      fixed: false
    }
  },
  methods: {
    ...mapActions('base', [
      'toggleDrawer'
    ])
  },
  components: { Logout }
}
</script>

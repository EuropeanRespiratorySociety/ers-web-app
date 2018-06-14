<template>
  <v-toolbar
      app
      fixed
    >
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title v-if="title">{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <logout />
    </v-toolbar>
</template>

<script>
import Logout from '@/components/authentication/Logout.vue'
import { mapActions } from 'vuex'

export default {
  name: 'simple-header',
  props: ['title'],
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

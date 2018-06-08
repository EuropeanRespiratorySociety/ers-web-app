<template>
  <v-app>
    <site-navigation></site-navigation>
    <router-view></router-view>
    <site-footer></site-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import SiteFooter from '@/components/base/SiteFooter.vue'
import SiteNavigation from '@/components/base/SiteNavigation.vue'

export default {
  name: 'App',
  data () {
    return {
      offsetTop: 0,
      height: 600,
      rightDrawer: false,
      title: 'European Respiratory Society'
    }
  },

  metaInfo () {
    return {
      title: this.title,
      titleTemplate: (titleChunk) => {
        // If undefined or blank then we don't need the hyphen
        return titleChunk ? `${titleChunk} - ${this.title}` : this.title
      },
      htmlAttrs: {
        lang: 'en',
        amp: undefined // "amp" has no value
      },
      noscript: [
        { innerHTML: 'To bad your browser is to old...' }
      ]
    }
  },

  computed: {
    ...mapState('base', [
      'drawer',
      'offline',
      'parallaxImg'
    ])

  },

  methods: {
    setClass () {
      if (this.offline) {
        return 'error elevation-0'
      }
      return 'primary elevation-0'
    }
  },
  components: { SiteFooter, SiteNavigation }
}
</script>

<style lang="css">
  .application {
      font-family: DinPro,Roboto,sans-serif;
      line-height: 1.5;
  }

  .card--flex-toolbar {
    margin-top: -64px;
  }
</style>

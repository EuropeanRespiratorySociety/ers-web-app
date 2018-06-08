<template>
  <v-toolbar
    app
    tabs
    fixed
    :dark="filters.filtering"
    :color="filters.filtering ? 'primary' : undefined"
  >
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-text-field
      prepend-icon="search"
      :prepend-icon-cb="search"
      label="Search"
      solo-inverted
      class="mx-3"
      flat
      v-model="query"
      @keyup.enter="search"
    />
    <logout />
    <v-tabs
      slot="extension"
      centered
      v-model="tab"
      :slider-color="filters.filtering ? 'white' : 'primary'"
      color="transparent"
      show-arrows
    >
      <v-tab key="all" :href="'#all'" @click="search" :disabled="filters.filtering && index !== 'all'"
      >
        All <span v-if="!filters.filtering">({{counters.all}})</span>
      </v-tab>
      <v-tab key="web" :href="'#web'" @click="search" :disabled="filters.filtering && index !== 'web'"
      >
        Web <span v-if="!filters.filtering">({{counters.web}})</span>
      </v-tab>
      <v-tab key="journals" :href="'#journals'" @click="search" :disabled="filters.filtering && index !== 'journals'"
      >
        Journals <span v-if="!filters.filtering">({{counters.journals}})</span>
      </v-tab>
      <v-tab key="congress-2018" :href="'#congress-2018'" @click="search" :disabled="filters.filtering && !index.includes('congress')"
      >
        Congress <span v-if="!filters.filtering || index.includes('congress')">({{counters.congress}})</span>
      </v-tab>
      <v-tab style="color: #90CAF9!important" disabled key="education"
      >
        Education
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script>
import debounce from 'lodash/debounce'
import Logout from '@/components/authentication/Logout.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'search-results',
  data () {
    return {
      fixed: false
    }
  },

  // watch: {
  //   query: 'search'
  // },

  created () {
    const q = this.routeQuery
    /* eslint-disable */
    q
      ? (this.setQuery(q), this.searchAll(q))
      : this.resetResults()
    /* eslint-enable */
  },

  computed: {
    ...mapGetters('search', [
      'searchQuery',
      'routeQuery',
      'counters',
      'filters',
      'index'
    ]),

    tab: {
      get () {
        return this.index
      },
      set (value) {
        this.setActiveTab(value)
      }
    },

    query: {
      get () {
        return this.searchQuery
      },
      set (value) {
        this.setQuery(value)
      }
    }
  },

  methods: {
    ...mapActions('search', [
      'searchAll',
      'setQuery',
      'searchByType',
      'resetResults',
      'setActiveTab'
    ]),

    ...mapActions('base', [
      'toggleDrawer'
    ]),

    search: debounce(function () {
      const i = this.index
      if (this.query.length > 0) {
        this.setActiveTab(i)
        this.searchAll(this.query)
      } else {
        this.setActiveTab(i)
        this.resetResults()
      }
    }, 300)
  },

  components: { Logout }
}
</script>

<style scoped>

</style>

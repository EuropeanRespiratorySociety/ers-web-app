<template>
  <v-toolbar
    :dark="filters.filtering"
    :color="filters.filtering ? 'primary' : undefined"
    app
    tabs
    fixed
  >
    <v-toolbar-side-icon @click.stop="toggleDrawer"/>
    <v-text-field
      v-model="query"
      prepend-icon="search"
      label="Search"
      solo-inverted
      class="mx-3"
      flat
      @click:prepend="search"
      @keyup.enter="search"
    />
    <logout />
    <v-tabs
      slot="extension"
      v-model="tab"
      :slider-color="filters.filtering ? 'white' : 'primary'"
      centered
      color="transparent"
      show-arrows
    >
      <v-tab key="all" :href="'#all'" :disabled="filters.filtering && index !== 'all'" @click="search"
      >
        All <span v-if="!filters.filtering">({{counters.all}})</span>
      </v-tab>
      <v-tab key="web" :href="'#web'" :disabled="filters.filtering && index !== 'web'" @click="search"
      >
        Web <span v-if="!filters.filtering">({{counters.web}})</span>
      </v-tab>
      <v-tab key="journals" :href="'#journals'" :disabled="filters.filtering && index !== 'journals'" @click="search"
      >
        Journals <span v-if="!filters.filtering">({{counters.journals}})</span>
      </v-tab>
      <v-tab key="congress-2018" :href="'#congress-2018'" :disabled="filters.filtering && !index.includes('congress')" @click="search"
      >
        Congress <span v-if="!filters.filtering || index.includes('congress')">({{counters.congress}})</span>
      </v-tab>
      <v-tab key="education" style="color: #90CAF9!important" disabled
      >
        Ressources
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script>
import debounce from "lodash/debounce";
import Logout from "@/components/authentication/Logout.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "search-results",
  components: { Logout },
  data() {
    return {
      fixed: false
    };
  },

  // watch: {
  //   query: 'search'
  // },

  computed: {
    ...mapGetters("search", [
      "searchQuery",
      "routeQuery",
      "counters",
      "filters",
      "index"
    ]),

    tab: {
      get() {
        return this.index;
      },
      set(value) {
        this.setActiveTab(value);
      }
    },

    query: {
      get() {
        return this.searchQuery;
      },
      set(value) {
        this.setQuery(value);
      }
    }
  },

  created() {
    const q = this.routeQuery;
    /* eslint-disable */
    q
      ? (this.setQuery(q), this.searchAll(q))
      : this.resetResults()
    /* eslint-enable */
  },

  methods: {
    ...mapActions("search", [
      "searchAll",
      "setQuery",
      "searchByType",
      "resetResults",
      "setActiveTab"
    ]),

    ...mapActions("base", ["toggleDrawer"]),

    search: debounce(function() {
      const i = this.index;
      if (this.query.length > 0) {
        this.setActiveTab(i);
        this.searchAll(this.query);
        this.$gtm.trackEvent({
          event: "Search", // Event type [default = 'interaction'] (Optional)
          category: "Search",
          action: "search",
          label: "query",
          value: this.query
        });
      } else {
        this.setActiveTab(i);
        this.resetResults();
      }
    }, 300)
  }
};
</script>

<style scoped>
</style>

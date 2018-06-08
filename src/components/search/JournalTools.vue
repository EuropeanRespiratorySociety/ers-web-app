<template>
    <v-layout row>
      <v-flex xs12>
        <v-container grid-list-md>
        <v-card>
          <v-btn icon @click.native="show = !show" style="float:right">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
          <v-card-title>
            <div>Filters</div>
          </v-card-title>
          <v-container fluid v-show="show">
            <v-layout row wrap>
              <v-flex xs6 sm6>

               <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-checkbox v-model="facets" value="erj"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>ERJ ({{counters.erj}})</v-list-tile-title>
                    <v-list-tile-sub-title>European Respiratory Journal</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-checkbox v-model="facets" value="openres"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>ERJ OR ({{counters.openres}})</v-list-tile-title>
                    <v-list-tile-sub-title>ERJ Open Research</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                </v-list>
              </v-flex>

              <v-flex xs6 sm6>

               <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-checkbox v-model="facets" value="err"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>ERR ({{counters.err}})</v-list-tile-title>
                    <v-list-tile-sub-title>European Respiratory Review</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-checkbox v-model="facets" value="breathe"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Breathe ({{counters.breathe}})</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                </v-list>
              </v-flex>
            </v-layout>
          </v-container>
            <v-card-actions v-show="show">
            <v-btn flat @click="reset">Cancel</v-btn>
          </v-card-actions>
        </v-card>
        </v-container>
      </v-flex>
    </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'journal-tools',
  data () {
    return {
      show: false
    }
  },

  computed: {
    ...mapGetters('search', [
      'filters',
      'counters'
    ]),

    facets: {
      get () {
        /* eslint-disable */
        return this.filters.journals
        /* eslint-enable */
      },

      set (v) {
        this.setFilters({
          type: 'journals',
          field: 'journal_url',
          filtering: true,
          payload: v.length > 0 ? v : ['erj', 'err', 'breathe', 'openres']
        })
      }
    }
  },

  methods: {
    ...mapActions('search', [
      'setFilters',
      'searchAll'
    ]),

    reset () {
      this.setFilters({ type: 'journals', filtering: false, payload: ['erj', 'err', 'breathe', 'openres'] })
      this.searchAll()
    }
  }
}
</script>

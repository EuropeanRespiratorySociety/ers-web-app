<template>
  <v-layout row>
    <v-flex xs12>
      <v-container grid-list-md>
        <v-card>
          <v-btn icon style="float:right" @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
          <v-card-title>
            <div>Filters</div>
          </v-card-title>
          <v-container v-show="show" fluid>
            <v-layout row wrap>
              <v-flex xs6 sm6>
                <v-list two-line subheader>
                  <v-subheader>Congress indices</v-subheader>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-checkbox v-model="facets" value="congress-2018"/>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Congress 2018</v-list-tile-title>
                      <v-list-tile-sub-title>Paris</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-checkbox v-model="facets" value="congress-2017"/>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Congress 2017</v-list-tile-title>
                      <v-list-tile-sub-title>Milan</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-checkbox v-model="facets" value="congress-2016"/>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Congress 2016</v-list-tile-title>
                      <v-list-tile-sub-title>London</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-checkbox v-model="facets" value="congress-2015"/>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Congress 2015</v-list-tile-title>
                      <v-list-tile-sub-title>Amsterdam</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
              <v-flex xs6 sm6>
                <v-list two-line subheader>
                  <v-subheader>Results filters</v-subheader>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-checkbox v-model="typeFacets" value="session*"/>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Sessions</v-list-tile-title>
                      <v-list-tile-sub-title/>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-checkbox v-model="typeFacets" value="presentation*"/>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Presentations</v-list-tile-title>
                      <v-list-tile-sub-title/>
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "congress-tools",
  data() {
    return {
      show: false
    };
  },

  computed: {
    ...mapGetters("search", ["index", "filters"]),

    facets: {
      get() {
        /* eslint-disable */
        return this.index.split(',')
        /* eslint-enable */
      },

      set(v) {
        this.setIndices({
          type: "congress",
          payload:
            v.length > 0 || v[0] === "congress-2018" ? v : ["congress-2018"],
          filtering: v.length > 0
        });
      }
    },

    typeFacets: {
      get() {
        return this.filters.congress;
      },

      set(v) {
        this.setFilters({
          type: this.facets,
          field: "_index",
          filtering: true,
          payload: v
        });
      }
    }
  },

  methods: {
    ...mapActions("search", ["setIndices", "setFilters", "searchAll"]),

    reset() {
      this.setFilters({
        type: ["congress-2018"],
        filtering: false,
        payload: []
      });
      this.searchAll();
    }
  }
};
</script>

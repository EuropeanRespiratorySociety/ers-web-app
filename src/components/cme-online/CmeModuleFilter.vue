<template>
  <v-layout>
    <v-flex xs12>
      <v-container grid-list-md fluid>
        <v-card>
          <v-card-actions>
            <p class="subheading ml-2 mr-2 font-weight-bold">Filters</p>
            <div v-if="!showFilters" class="text-xs-left">
              <v-chip v-for="disease in filters.diseases" :key="disease" small>{{disease}}</v-chip>
              <v-chip v-for="method in filters.methods" :key="method" small>{{method}}</v-chip>
              <v-chip v-for="cmetype in filters.types" :key="cmetype" small>{{cmetype}}</v-chip>
              <v-chip v-for="categorie in filters.categories" :key="categorie" small>{{categorie}}</v-chip>
            </div>
            <v-spacer/>
            <v-btn color="info" flat @click="resetCmeModules">Reset</v-btn>
            <v-btn icon @click="reverseShowFilters">
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-container v-show="showFilters" fluid grid-list-xl>
            <v-layout align-center wrap>
              <v-flex xs12 sm6>
                <v-select
                  :items="filtersValues.diseases"
                  v-model="filters.diseases"
                  chips
                  label="Diseases"
                  multiple
                  @change="fetchCmeModulesPerFilters"
                />
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="filtersValues.methods"
                  v-model="filters.methods"
                  chips
                  label="Methods"
                  multiple
                  @change="fetchCmeModulesPerFilters"
                />
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="filtersValues.types"
                  v-model="filters.types"
                  chips
                  label="Types"
                  multiple
                  @change="fetchCmeModulesPerFilters"
                />
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="filtersValues.categories"
                  v-model="filters.categories"
                  chips
                  label="Categories"
                  multiple
                  @change="fetchCmeModulesPerFilters"
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "cme-module-filter",
  data() {
    return {
      showFilters: false,
      icon: "keyboard_arrow_up"
    };
  },
  computed: {
    ...mapState("cmeOnline", ["filters", "filtersValues"])
  },
  methods: {
    ...mapActions("cmeOnline", [
      "fetchCmeModulesPerFilters",
      "resetCmeModules"
    ]),
    reverseShowFilters() {
      this.showFilters = !this.showFilters;
      this.icon = this.showFilters
        ? "keyboard_arrow_down"
        : "keyboard_arrow_up";
    }
  }
};
</script>


<style scope>
</style>

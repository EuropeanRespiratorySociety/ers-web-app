<template>
  <v-layout>
    <v-flex xs12>
      <v-container grid-list-md fluid>
        <v-card>
          <v-card-actions>
            <p class="subheading ml-2 mr-2 font-weight-bold">Filters</p>
            <div v-if="!showFilters" class="text-xs-left">
              <v-chip
                v-for="disease in filters.diseases"
                :key="disease"
                small
                color="#F3E5F5"
                text-color="#4A148C"
              >{{disease}}</v-chip>
              <v-chip
                v-for="method in filters.methods"
                :key="method"
                small
                color="#D0F8CE"
                text-color="#0D5302"
              >{{method}}</v-chip>
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
                  label="Diseases"
                  multiple
                  chips
                  return-object
                  @change="fetchCmeModulesPerFilters"
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :selected="data.selected"
                      :key="JSON.stringify(data.item)"
                      close
                      class="chip--select-multi"
                      color="#F3E5F5"
                      text-color="#4A148C"
                      @input="data.parent.selectItem(data.item)"
                    >{{ data.item }}</v-chip>
                  </template>
                </v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="filtersValues.methods"
                  v-model="filters.methods"
                  label="Methods"
                  multiple
                  chips
                  return-object
                  @change="fetchCmeModulesPerFilters"
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :selected="data.selected"
                      :key="JSON.stringify(data.item)"
                      close
                      class="chip--select-multi"
                      color="#D0F8CE"
                      text-color="#0D5302"
                      @input="data.parent.selectItem(data.item)"
                    >{{ data.item }}</v-chip>
                  </template>
                </v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="filtersValues.types"
                  v-model="filters.types"
                  label="Types"
                  multiple
                  chips
                  return-object
                  @change="fetchCmeModulesPerFilters"
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :selected="data.selected"
                      :key="JSON.stringify(data.item)"
                      close
                      class="chip--select-multi"
                      @input="data.parent.selectItem(data.item)"
                    >{{ data.item }}</v-chip>
                  </template>
                </v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="filtersValues.categories"
                  v-model="filters.categories"
                  label="Categories"
                  multiple
                  chips
                  return-object
                  @change="fetchCmeModulesPerFilters"
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      :selected="data.selected"
                      :key="JSON.stringify(data.item)"
                      close
                      class="chip--select-multi"
                      @input="data.parent.selectItem(data.item)"
                    >{{ data.item }}</v-chip>
                  </template>
                </v-select>
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

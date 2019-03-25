<template>
  <v-layout>
    <v-flex xs12>
      <v-container grid-list-md fluid>
        <v-card>
          <v-card-actions>
            <p class="subheading ml-2 font-weight-bold">Filters</p>
            <v-spacer/>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-container v-show="show" fluid grid-list-xl>
            <v-layout align-center wrap>
              <v-flex xs12 sm6>
                <v-select
                  :items="diseases"
                  v-model="filters.diseases"
                  chips
                  label="Diseases"
                  multiple
                  v-on:change="selectionChanged"
                />
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="methods"
                  v-model="filters.methods"
                  chips
                  label="Methods"
                  multiple
                  v-on:change="selectionChanged"
                />
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="types"
                  v-model="filters.types"
                  chips
                  label="Types"
                  multiple
                  v-on:change="selectionChanged"
                />
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="categories"
                  v-model="filters.categories"
                  chips
                  label="Categories"
                  multiple
                  v-on:change="selectionChanged"
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
import { mapGetters, mapActions } from "vuex";
/* eslint-disable */
export default {
  name: "cme-module-filter",
  data() {
    return {
      diseases: [
        "Airway diseases",
        "Interstitial lung diseases",
        "Paediatric respiratory diseases",
        "Pulmonary vascular diseases",
        "Respiratory critical care",
        "Respiratory infections",
        "Sleep and breathing disorders",
        "Thoracic oncology"
      ],
      methods: [
        "Cell and molecular biology",
        "Endoscopy and interventional pulmonology",
        "Epidemiology",
        "General respiratory patient care",
        "Imaging",
        "Physiology",
        "Public health",
        "Pulmonary function testing",
        "Respiratory intensive care",
        "Surgery",
        "Transplantation"
      ],
      types: ["Case Based", "Topic Based"],
      categories: [
        "COPD",
        "Asthma",
        "Infectious Diseases",
        "Rare/Orphan Disease",
        "Pulmonary Fibrosis",
        "Pleural diseases",
        "Respiratory critical care",
        "PAH",
        "Lung Cancer",
        "Sleep/NIV",
        "Cystic Fibrosis"
      ],
      show: false
    };
  },
  computed: {
    ...mapGetters("cmeOnline", ["filters"])
  },
  methods: {
    ...mapActions("cmeOnline", ["fetchCmeModules"]),
    selectionChanged() {
      this.fetchCmeModules({ filters: this.filters });
    }
  }
};
</script>

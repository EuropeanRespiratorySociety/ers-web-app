<template>
  <v-layout>
    <v-flex xs12>
      <v-container grid-list-md fluid>
        <v-card>
          <v-card-actions>
            <p class="subheading ml-2 font-weight-bold" >Filters</p>
            <v-spacer />
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-container v-show="show" fluid grid-list-xl>
            <v-layout align-center wrap>
              <v-flex xs12 sm6>
                <v-select :items="diseases" chips label="Diseases" multiple />
              </v-flex>
              <v-flex xs12 sm6>
                <v-select :items="methods" chips label="Methods" multiple />
              </v-flex>
              <v-flex xs12 sm6>
                <v-select :items="types" chips label="Types" multiple />
              </v-flex>
              <v-flex xs12 sm6>
                <v-select :items="categories" chips label="Categories" multiple />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "cme-module-filter",
  data() {
    return {
      active: null,
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
      types: ["Case based", "Topic based"],
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
  }
};
</script>

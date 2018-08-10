<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
            <v-container>
              <v-card>
                <v-list v-for="(i, k) in interests" :key="k" subheader>
                  <v-subheader>{{i.title | upper}}</v-subheader>
                  <v-list-tile v-for="(v, k) in i.values" :key="'value-' + k">
                    <v-list-tile-action>
                      <v-checkbox v-model="prefs" :value="v"/>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{v}}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider v-if="k < interests.length -1"/>
                </v-list>
                <v-card-text class="grey--text text--lighten">
                  {{saving}}
                </v-card-text>
                <v-card-actions>
                  <v-btn to="/user">Back</v-btn>
                </v-card-actions>
              </v-card>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { upperCaseFirstLetter } from "../../filters";

export default {
  name: "user-preferences",
  filters: {
    upper: string => upperCaseFirstLetter(string)
  },
  data() {
    return {
      saving: "Nothing to save"
    };
  },

  computed: {
    ...mapState("user", ["interests", "preferences", "status"]),

    prefs: {
      get: function() {
        return this.preferences.interests;
      },
      set: function(v) {
        this.setInterestsPreferences(v);
      }
    }
  },
  watch: {
    status: function(v) {
      this.saving = "Saving...";
      setTimeout(() => {
        this.saving = v;
      }, 500);
    }
  },

  created() {
    this.fetchData();
  },

  methods: {
    ...mapActions("user", [
      "getInterestsList",
      "getPreferences",
      "setInterestsPreferences"
    ]),

    fetchData() {
      this.getInterestsList();
      this.getPreferences();
    }
  }
};
</script>

<template>
  <transition mode="out-in">
  <v-content>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
          <v-container>
            <v-card>
              <v-list subheader v-for="(i, k) in interests" :key="k">
                <v-subheader>{{i.title | upper}}</v-subheader>
                <v-list-tile v-for="(v, k) in i.values" :key="'value-' + k">
                  <v-list-tile-action>
                    <v-checkbox v-model="prefs" :value="v"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{v}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              <v-divider v-if="k < interests.length -1"></v-divider>
              </v-list>
              <v-card-text class="grey--text text--lighten">
                {{saving}}
              </v-card-text>
              <v-card-actions>
                <v-btn to="/profile">Back</v-btn>
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
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      saving: 'Nothing to save'
    }
  },

  created () {
    this.fetchData()
  },

  watch: {
    status: function (v) {
      this.saving = 'Saving...'
      setTimeout(() => {
        this.saving = v
      }, 500)
    }
  },

  computed: {
    ...mapState('user', [
      'interests',
      'preferences',
      'status'
    ]),

    prefs: {
      get: function () {
        return this.preferences.interests
      },
      set: function (v) {
        this.setInterestsPreferences(v)
      }
    }
  },

  methods: {
    ...mapActions('user', [
      'getInterestsList',
      'getPreferences',
      'setInterestsPreferences'
    ]),

    fetchData () {
      this.getInterestsList()
      this.getPreferences()
    }
  },

  filters: {
    upper: lower => lower.replace(/^\w/, c => c.toUpperCase())
  }
}
</script>

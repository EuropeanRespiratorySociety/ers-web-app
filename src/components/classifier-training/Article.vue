<template>
  <div>
  <v-content>
    <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md10 lg8 offset-md1 offset-lg2>
            <v-layout row>
                <v-card>
                  <v-card-text>
                  <v-container>
                    <v-layout row wrap>
                      <v-flex xs12 sm12 md7>
                       <div class="text" v-html="text">
                        </div>
                      </v-flex>
                      <v-flex xs12 sm12 md5>
                        <div>
                          <v-list subheader class="blue lighten-4">
                            <v-subheader>Diseases</v-subheader>
                            <v-list-tile v-for="(v, k) in interestsDiseases" :key="k">
                              <v-list-tile-action>
                                <v-checkbox v-model="userDiseases" :value="v" :label="v"></v-checkbox>
                              </v-list-tile-action>
                            </v-list-tile>
                          </v-list>
                          <v-divider></v-divider>
                          <v-list subheader class="teal lighten-4">
                            <v-subheader>Methods</v-subheader>
                            <v-list-tile v-for="(v, k) in interestsMethods" :key="k">
                              <v-list-tile-action>
                                <v-checkbox v-model="userMethods" :value="v" :label="v"></v-checkbox>
                              </v-list-tile-action>
                            </v-list-tile>
                          </v-list>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                  </v-card-text>
                </v-card>
            </v-layout>
          </v-flex>
        </v-layout>
    </v-container>
      <v-btn
        class="accept"
        color="green"
        dark
        bottom
        right
        large
        fixed
        fab
        @click="accept"
      >
        <v-icon>s7-check</v-icon>
      </v-btn>
      <v-btn
        class="skip"
        color="red"
        dark
        bottom
        right
        large
        fixed
        fab
        @click="next"
      >
        <v-icon>s7-angle-right</v-icon>
      </v-btn>
    <v-snackbar
      v-model="notification"
      :timeout="timeout"
      top
      right
    >
      {{status}}
    </v-snackbar>
  </v-content>
    <v-bottom-nav class="elevation-1" app :value="true">
      <v-btn href="https://forms.ersnet.org/feedback" target="_blank" flat value="register">
        <span>Feedback</span>
        <v-icon>s7-chat</v-icon>
      </v-btn>
  </v-bottom-nav>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'Article',

  data () {
    return {
      selectedDiseases: [],
      selectedMethods: [],
      notification: false,
      timeout: 2000
    }
  },

  created () {
    this.fetchData()
  },

  watch: {
    /**
    * At first we will not give hints to our users
    */
    // diseases (value) {
    //   value.forEach(i => {
    //     // this is temporary one of the label is wrong in the classifier
    //     i === 'Paediatric lung diseases'
    //       ? this.selectedDiseases.push('Paediatric respiratory diseases')
    //       : this.selectedDiseases.push(i)
    //   })
    // },

    // methods (value) {
    //   value.forEach(i => this.selectedMethods.push(i))
    // },

    status (value) {
      if (value.length > 0) this.notification = true
    }

  },

  computed: {
    ...mapState('classifierTraining', [
      'diseases',
      'methods',
      'status'
    ]),

    ...mapGetters('classifierTraining', [
      'text'
    ]),

    ...mapGetters('user', [
      'interestsDiseases',
      'interestsMethods'
    ]),

    userMethods: {
      get () {
        return this.selectedMethods
      },
      set (value) {
        this.selectedMethods = value
      }
    },

    userDiseases: {
      get () {
        return this.selectedDiseases
      },
      set (value) {
        this.selectedDiseases = value
      }
    }
  },

  methods: {
    ...mapActions('classifierTraining', [
      'getArticle',
      'saveArticle',
      'resetStatus'
    ]),

    fetchData () {
      this.getArticle()
    },

    accept () {
      this.saveArticle({diseases: this.selectedDiseases, methods: this.selectedMethods})
      this.selectedMethods = []
      this.selectedDiseases = []
      this.fetchData()
      this.resetStatus()
    },

    next () {
      this.saveArticle({skip: true})
      this.selectedMethods = []
      this.selectedDiseases = []
      this.fetchData()
      this.resetStatus()
    }
  }

}
</script>

<style lang="css" scoped>
  .text {
    padding:20px;
    font-size: 16px;
  }

  .accept {
    z-index:5;
  }

  .skip {
    z-index:5;
    bottom: 100px;
  }
</style>

<style>
  div.text p img {
    display: none!important;
  }
</style>

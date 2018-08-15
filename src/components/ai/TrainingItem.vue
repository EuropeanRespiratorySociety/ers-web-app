<template>
  <div>
    <v-content>  
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md10 lg8 offset-md1 offset-lg2>
            <v-layout row>
              <v-expansion-panel>
                <v-expansion-panel-content class="grey lighten-3">
                  <div slot="header" >Help</div>
                  <v-card>
                    <v-card-text>
                      <v-list>
                        <v-list-tile avatar>
                          <v-list-tile-avatar>
                            <v-icon>exit_to_app</v-icon>
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title>Exit the training tool, stay logged in</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile avatar>
                          <v-list-tile-avatar>
                            <v-icon>s7-angle-right</v-icon>
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title>Skip and get the next training text</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile avatar>
                          <v-list-tile-avatar>
                            <v-icon>s7-check</v-icon>
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title>Validate and save the selection</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                        <v-divider/>
                        <v-list-tile >
                          <v-list-tile-content>
                            <v-list-tile-title>If unsure, it is best to skip the item</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-layout>
            <v-layout row>
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-layout row wrap>
                      <v-flex xs12 sm12 md7>
                        <div :style="{fontSize: size + 'px'}" class="text" v-html="text"/>
                      </v-flex>
                      <v-flex xs12 sm12 md5>
                        <div>
                          <v-list subheader class="blue lighten-4">
                            <v-subheader>Diseases</v-subheader>
                            <v-list-tile v-for="(v, k) in interestsDiseases" :key="k">
                              <v-list-tile-action>
                                <v-checkbox v-model="userDiseases" :value="v" :label="v" />
                              </v-list-tile-action>
                            </v-list-tile>
                          </v-list>
                          <v-divider />
                          <v-list subheader class="teal lighten-4">
                            <v-subheader>Methods</v-subheader>
                            <v-list-tile v-for="(v, k) in interestsMethods" :key="k">
                              <v-list-tile-action>
                                <v-checkbox v-model="userMethods" :value="v" :label="v" />
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
        color="orange darken-1"
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
      <v-btn
        class="exit"
        color="red"
        dark
        top
        right
        fixed
        fab
        @click="exit"
      >
        <v-icon>exit_to_app</v-icon>
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
    <v-bottom-nav :value="true" class="elevation-1" app>
      <v-btn href="https://forms.ersnet.org/feedback" target="_blank" flat value="register">
        <span>Feedback</span>
        <v-icon>s7-chat</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "TrainingItem",

  data() {
    return {
      selectedDiseases: [],
      selectedMethods: [],
      notification: false,
      timeout: 2000,
      size: 16
    };
  },

  computed: {
    ...mapState("classifierTraining", ["diseases", "methods", "status"]),

    ...mapGetters("classifierTraining", ["text"]),

    ...mapGetters("user", ["interestsDiseases", "interestsMethods"]),

    trainingText() {
      return this.type === "title" ? this.title : this.text;
    },

    setSize() {
      return this.text.length > 150 ? 16 : 24;
    },

    userMethods: {
      get() {
        return this.selectedMethods;
      },
      set(value) {
        this.selectedMethods = value;
      }
    },

    userDiseases: {
      get() {
        return this.selectedDiseases;
      },
      set(value) {
        this.selectedDiseases = value;
      }
    }
  },

  watch: {
    /**
     * At first we have decided that we
     * will not give hints to our users
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

    status(value) {
      if (value.length > 0) this.notification = true;
    },

    text(value) {
      this.size = value.length > 100 ? 16 : 24;
    }
  },

  created() {
    this.fetchData();
  },

  methods: {
    ...mapActions("classifierTraining", [
      "getArticle",
      "saveArticle",
      "resetStatus"
    ]),

    fetchData() {
      this.getArticle();
    },

    accept() {
      this.saveArticle({
        diseases: this.selectedDiseases,
        methods: this.selectedMethods
      });
      this.resetAndFetch();
    },

    next() {
      this.saveArticle({ skip: true });
      this.resetAndFetch();
    },

    exit() {
      window.location = "https://www.ersnet.org";
    },

    resetAndFetch() {
      this.selectedMethods = [];
      this.selectedDiseases = [];
      this.fetchData();
      this.resetStatus();
    }
  }
};
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

  .exit {
    z-index:5;
    top: 75px;
  }
</style>

<style lang="css">
div.text p img {
  display: none !important;
}
</style>

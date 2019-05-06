
<template>
  <div>
    <v-card flat class="mb-5">
      <v-card-title v-if="hasValue(currentPanel.title)" primary-title>
        <h3 class="title mb-0">{{ currentPanel.title }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-if="hasValue(currentPanel.description)">
          <span v-html="currentPanel.description"/>
        </p>
        <div v-if="hasValue(currentPanel.question)">
          <p
            v-if="hasValue(currentPanel.question.question)"
            class="subheading"
          >{{currentPanel.question.question}}</p>
          <v-layout wrap row>
            <v-flex
              :sm12="!hasValue(currentPanel.question.media)"
              :sm7="hasValue(currentPanel.question.media)"
              xs12
            >
              <v-list v-if="currentPanel.question.isMultiChoice">
                <v-list-tile v-for="(answer, index) in currentPanel.question.answers" :key="index">
                  <v-checkbox
                    v-model="multiAnswers"
                    :value="answer.text"
                    :label="answer.text"
                    :readonly="isValidate"
                  />
                </v-list-tile>
              </v-list>
              <v-list v-if="!currentPanel.question.isMultiChoice" subheader>
                <v-radio-group
                  v-for="(answer, index) in currentPanel.question.answers"
                  v-model="singleAnswer"
                  :key="index"
                  class="ml-3"
                >
                  <v-radio :value="answer.text" :label="answer.text" :readonly="isValidate"/>
                </v-radio-group>
              </v-list>
            </v-flex>
            <v-flex v-if="hasValue(currentPanel.question.media)" xs12 sm5>
              <viewer ref="viewer" class="viewer" @inited="inited">
                <img
                  v-if="currentPanel.question.media==='image'"
                  :src="(imageSource(currentPanel.question.imageBig, currentPanel.question.externalImageBigLink)).src"
                  width="100%"
                >
                <vue-plyr v-else>
                  <video
                    :poster="(imageSource(currentPanel.question.imageBig, currentPanel.question.externalImageBigLink)).src"
                    :src="currentPanel.question.mediaUrl"
                  >
                    <source :src="currentPanel.question.mediaUrl" type="video/mp4">
                  </video>
                </vue-plyr>
              </viewer>
            </v-flex>
          </v-layout>
          <v-btn :disabled="hasAnswer" color="primary" v-on:click="showResult">Answer</v-btn>
          <div v-if="isValidate" class="mt-4">
            <div v-if="isCorrect" class="green--text text--darken-2 title">Your answer is correct!</div>
            <div v-else class="red--text text--darken-2 title">Your answer is incorrect!</div>
            <v-alert :value="true" color="success" icon="check_circle" outline class="mt-2 mb-4">
              <span class="font-weight-bold">Correct answer: {{solution}}</span>
            </v-alert>
            <!-- <p>Correct answer: {{solution}}</p> -->
            <div v-if="hasValue(currentPanel.question.comment)">
              <h4>Comment</h4>
              <p>
                <span v-html="currentPanel.question.comment"/>
              </p>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable */
import _ from "lodash";
import { formMixin } from "@/mixins/formMixin";
import { mapMutations } from "vuex";
import Viewer from "v-viewer/src/component.vue";

export default {
  name: "cme-question-panel",
  components: {
    Viewer
  },
  mixins: [formMixin],
  data() {
    return {
      singleAnswer: "",
      multiAnswers: [],
      isValidate: false,
      correctAnswer: "",
      isCorrect: false
    };
  },
  computed: {
    currentPanel() {
      const panel = this.$store.state.cmeOnline.currentPanel;
      this.singleAnswer = "";
      this.multiAnswers = [];
      this.isValidate = false;
      this.isCorrect = false;
      this.correctAnswer = panel.question
        ? panel.question.answers
            .filter(answer => answer.isCorrect === true)
            .map(answer => answer.text)
        : "";
      return panel;
    },
    hasAnswer() {
      return !(this.singleAnswer !== "" || this.multiAnswers.length !== 0);
    },
    solution() {
      return this.correctAnswer.join(", ");
    }
  },
  methods: {
    ...mapMutations("cmeOnline", ["SET_HAS_ANSWERED_SIMULATION"]),
    showResult() {
      this.isValidate = true;
      this.isCorrect = _.isEqual(
        _.sortBy(this.correctAnswer),
        _.sortBy(
          this.currentPanel.question.isMultiChoice
            ? this.multiAnswers
            : this.singleAnswer.split()
        )
      );
      this.SET_HAS_ANSWERED_SIMULATION(true);
    },
    inited(viewer) {
      this.$viewer = viewer;
    },
    show() {
      this.$viewer.show();
    }
  }
};
</script>

<style scoped>
</style>

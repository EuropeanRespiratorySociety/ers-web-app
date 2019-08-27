
<template>
  <div>
    <v-card flat class="mb-5">
      <v-card-title v-if="hasValue(currentPanel.title)" primary-title class="pb-1">
        <h3 class="title">{{ currentPanel.title }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-if="hasValue(currentPanel.description)">
          <span v-html="formatLinkTargetBlank(currentPanel.description)" />
        </p>
        <div v-if="hasValue(currentPanel.question)" class="mt-5">
          <p
            v-if="hasValue(currentPanel.question.question)"
            class="subheading mb-3"
          >{{currentPanel.question.question}}</p>
          <v-layout wrap row class="mb-3">
            <v-flex
              :sm12="!hasValue(currentPanel.question.media)"
              :sm7="hasValue(currentPanel.question.media)"
              xs12
            >
              <v-checkbox
                v-for="(answer, index) in currentPanel.question.answers"
                v-if="currentPanel.question.isMultiChoice"
                :key="index"
                v-model="multiAnswers"
                :value="answer.text"
                :label="answer.text"
                :readonly="isValidate"
              />
              <v-radio-group
                v-for="(answer, index) in currentPanel.question.answers"
                v-if="!currentPanel.question.isMultiChoice"
                v-model="singleAnswer"
                :key="index"
                class="ml-3"
              >
                <v-radio :value="answer.text" :label="answer.text" :readonly="isValidate" />
              </v-radio-group>
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
                    <source :src="currentPanel.question.mediaUrl" type="video/mp4" >
                  </video>
                </vue-plyr>
              </viewer>
            </v-flex>
          </v-layout>
          <v-btn
            id="answer"
            :disabled="hasAnswer"
            color="primary"
            href="#answer"
            v-on:click="showResult"
          >Answer</v-btn>
          <div v-if="isValidate" class="mt-4">
            <div v-if="isCorrect" class="green--text text--darken-2 title">Your answer is correct!</div>
            <div v-else class="red--text text--darken-2 title">Your answer is incorrect!</div>
            <v-alert :value="true" color="success" icon="check_circle" outline class="mt-2 mb-4">
              <span class="font-weight-bold">Correct answer: {{solution}}</span>
            </v-alert>
            <div v-if="hasValue(currentPanel.question.comment)">
              <h4>Comment</h4>
              <p>
                <span v-html="formatLinkTargetBlank(currentPanel.question.comment)" />
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

<style>
.v-input--selection-controls .v-input__slot {
  margin-bottom: 0px;
}
</style>


<style scoped>
/* .v-input--selection-controls .v-input__slot {
  margin-bottom: 0px !important;
} */

.v-input--selection-controls {
  margin-top: 0;
}
</style>

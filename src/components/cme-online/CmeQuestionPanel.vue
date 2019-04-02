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
          <v-btn color="primary" v-on:click="checkAnswer">Validate</v-btn>
          <div v-if="isValidate">
            <h3>Answer:</h3>
            <div v-if="isCorrect">Correct !</div>
            <div v-else>Incorrect !</div>

            <p>{{solution}}</p>
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
import _ from "lodash";
import { formMixin } from "@/mixins/formMixin";
import { mapState } from "vuex";
export default {
  name: "cme-question-panel",
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
    ...mapState("cmeOnline", ["currentPanel"]),
    solution() {
      return this.correctAnswer.join(", ");
    }
  },
  beforeMount() {
    this.correctAnswer = this.currentPanel.question.answers
      .filter(answer => answer.isCorrect === true)
      .map(answer => answer.text);
  },
  methods: {
    checkAnswer() {
      this.isValidate = true;
      this.isCorrect = _.isEqual(
        _.sortBy(this.correctAnswer),
        _.sortBy(
          this.currentPanel.question.isMultiChoice
            ? this.multiAnswers
            : this.singleAnswer.split()
        )
      );
    }
  }
};
</script>

<style scoped>
</style>

<template>
  <div>
    <v-card>
      <v-stepper v-model="questionStep">
        <v-stepper-header>
          <v-stepper-step :complete="questionStep > 1" step="1">Your Information</v-stepper-step>
          <v-divider />
          <v-stepper-step :complete="questionStep > 2" step="2">Your Address</v-stepper-step>
          <v-divider />
          <v-stepper-step :complete="questionStep > 3" step="3">Misc Info</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card flat>
              <v-radio-group v-model="radioGroup" :mandatory="false" :disabled="showAnswer" class="ml-3">
                <v-radio v-for="(questionFirst, key) in questionFirsts" :key="key" :label="`${questionFirst.answer}`" :value="questionFirst.answer" />
              </v-radio-group>
              <v-btn :disabled="!radioGroup || showAnswer" color="primary" @click="showAnswer = !showAnswer">Answer</v-btn>
              <div v-show="showAnswer">
                <h3>Answer</h3>
                <p>Your answer is {{ radioGroup }}</p>
                <p>Here is the answer</p>
              </div>
            </v-card>
            <v-btn
              color="success"
              @click="questionStep = 2"
            >
              Continue
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-layout row wrap>
              <v-flex  xs12 sm6>
                <v-card flat>
                  <v-radio-group v-model="radioGroup" :mandatory="false" :disabled="showAnswer" class="ml-3">
                    <v-radio v-for="(questionSecond, key) in questionSeconds" :key="key" :label="`${questionSecond.answer}`" :value="questionSecond.answer" />
                  </v-radio-group>
                  <v-btn :disabled="!radioGroup || showAnswer" color="primary" @click="showAnswer = !showAnswer">Answer</v-btn>
                  <div v-show="showAnswer">
                    <h3>Answer</h3>
                    <p>Your answer is {{ radioGroup }}</p>
                    <p>Here is the answer</p>
                  </div>
                </v-card>
              </v-flex>
              <v-flex  xs12 sm6>
                <div><img :src="`${questionSeconds.image}`"></div>
              </v-flex>

            </v-layout>
            <v-btn flat @click.native="questionStep = 1">Previous</v-btn>
            <v-btn color="success" @click.native="questionStep = 3">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card flat>
              <v-radio-group v-model="radioGroup" :mandatory="false" :disabled="showAnswer" class="ml-3">
                <v-radio v-for="(question, key) in questions" :key="key" :label="`${question.answer}`" :value="question.answer" />
              </v-radio-group>
              <v-btn :disabled="!radioGroup || showAnswer" color="primary" @click="showAnswer = !showAnswer">Answer</v-btn>
              <div v-show="showAnswer">
                <h3>Answer</h3>
                <p>Your answer is {{ radioGroup }}</p>
                <p>Here is the answer</p>
              </div>
            </v-card>
            <v-btn flat @click.native="questionStep = 2">Previous</v-btn>
          </v-stepper-content>
          
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "cme-simurations",
  data() {
    return {
      questionStep: 0,
      showAnswer: false,
      disabled: true,
      radioGroup: null,
      questionFirsts: [
        {
          answer: "A-Yes",
          correctAnswer: true
        },
        {
          answer: "B-No",
          correctAnswer: false
        },
        {
          answer: "C-Unsure",
          correctAnswer: false
        }
      ],
      questionSeconds: [
        {
          answer: "A- Idiopathic Pulmonary Fibrosis (IPF)",
          correctAnswer: false,
          image:
            "https://www.ers-education.org/media/CmeAdmin/questionVideo_21468.mp4"
        },
        {
          answer: "B- Collagen vascular disease with lung involvement",
          correctAnswer: true
        },
        {
          answer: "C- Idiopathic nonspecific interastitial pneumonia (NSIP)",
          correctAnswer: false
        },
        {
          answer: "D- Idiopathic organizing pneumonia (OP)",
          correctAnswer: false
        }
      ],
      questionThirds: [
        {
          answer: "A-Yes",
          correctAnswer: true
        },
        {
          answer: "B-No",
          correctAnswer: false
        },
        {
          answer: "C-Unsure",
          correctAnswer: false
        }
      ]
    };
  }
};
</script>

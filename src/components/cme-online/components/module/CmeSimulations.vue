<template>
  <div>
    <v-card>
      <v-stepper v-model="questionStep">
        <v-stepper-header>
          <v-stepper-step :complete="questionStep > 1" step="1" />
          <v-divider />
          <v-stepper-step :complete="questionStep > 2" step="2" />
          <v-divider />
          <v-stepper-step :complete="questionStep > 3" step="3" />
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card flat>
              <h3 class="title mb-0">{{ questions[0].questionTitle }}</h3>
              <p>{{ questions[0].questionDescription }}</p>
              <p class="subheading">{{ questions[0].questionText }}</p>

              <v-radio-group v-model="radioGroup" :mandatory="false" :disabled="showAnswer" class="ml-3">
                <v-radio v-for="(answerOne, key) in answerOnes" :key="key" :label="`${answerOne.answer}`" :value="answerOne.answer" />
              </v-radio-group>
              <v-btn :disabled="!radioGroup || showAnswerOne" color="primary" @click="showAnswerOne = !showAnswerOne">Answer</v-btn>
              <div v-show="showAnswerOne">
                <h3>Answer</h3>
                <p>Your answer is {{ radioGroup }}</p>
                <h4>Comment</h4>
                <p><span v-html="comments[0].commentText" /></p>
              </div>
            </v-card>
            <v-btn
              :disabled="!showAnswerOne"
              color="success"
              @click="questionStep = 2"
            >
              Continue
            </v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <h3 class="title mb-0">{{ questions[1].questionTitle }}</h3>
            <p>{{ questions[1].questionDescription }}</p>
            <p class="subheading">{{ questions[1].questionText }}</p>
            <v-layout row wrap>
              <v-flex  xs12 sm6>
                <v-card flat>
                  <v-radio-group v-model="radioGroupTwo" :mandatory="false" :disabled="showAnswerTwo" class="ml-3">
                    <v-radio v-for="(answerTwo, key) in answerTwos" :key="key" :label="`${answerTwo.answer}`" :value="answerTwo.answer" />
                  </v-radio-group>
                  <v-btn :disabled="!radioGroupTwo || showAnswerTwo" color="primary" @click="showAnswerTwo = !showAnswerTwo">Answer</v-btn>
                </v-card>
              </v-flex>
              <v-flex  xs12 sm6>
                <div><img :src="questions[1].questionImage"></div>
              </v-flex>
            </v-layout>
            <div v-show="showAnswerTwo">
              <h3>Answer</h3>
              <p>Your answer is {{ radioGroupTwo }}</p>
              <h4>Comment</h4>
              <p><span v-html="comments[1].commentText" /></p>
            </div>
            <v-btn flat @click.native="questionStep = 1">Previous</v-btn>
            <v-btn :disabled="!showAnswerTwo" color="success" @click.native="questionStep = 3">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card flat>
              <h3 class="title mb-0">{{ questions[2].questionTitle }}</h3>
              <p><span v-html="questions[2].questionDescription" /></p>
              <p class="subheading">{{ questions[2].questionText }}</p>
              <v-radio-group v-model="radioGroupThree" :mandatory="false" :disabled="showAnswerThree" class="ml-3">
                <v-radio v-for="(answerThree, key) in answerThrees" :key="key" :label="`${answerThree.answer}`" :value="answerThree.answer" />
              </v-radio-group>
              <v-btn :disabled="!radioGroup || showAnswerThree" color="primary" @click="showAnswerThree = !showAnswerThree">Answer</v-btn>
              <div v-show="showAnswerThree">
                <h3>Answer</h3>
                <p>Your answer is {{ radioGroupThree }}</p>
                <h4>Comment</h4>
                <p><span v-html="comments[2].commentText" /></p>
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
      showAnswerOne: false,
      showAnswerTwo: false,
      showAnswerThree: false,
      disabled: true,
      radioGroup: null,
      radioGroupTwo: null,
      radioGroupThree: null,
      answerOnes: [
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
      answerTwos: [
        {
          answer: "A- Idiopathic Pulmonary Fibrosis (IPF)",
          correctAnswer: false
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
      answerThrees: [
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
      questions: [
        {
          id: 1,
          questionTitle: "Differential diagnosis workup",
          questionDescription:
            "Very high on the probable diseases are bacterial pneumonia and influenza A",
          questionText:
            "Which two investigations will be most likely to change your management? (Select multiple)",
          questionImage: false
        },
        {
          id: 2,
          questionTitle: "Chest X-ray",
          questionDescription:
            "While waiting for the results of other tests, you ordered a chest X-ray.",
          questionText: "Which of the following are true?: (Select one)",
          questionImage:
            "https://www.ers-education.org/media/39673/cmeonline_welcome_page_w-new-people.jpg"
        },
        {
          id: 3,
          questionTitle: "Your diagnosis",
          questionDescription:
            "<strong>Immediate findings on investigation:</strong><br />Hypoxic: saturation 85% on air<br />Impaired lung function: PEFR 150 L/min (best 400)<br />Arterial blood gas on 40% oxygen<br />pH: 7.42; pO2: 10.3 kPa; pCO2: 4.3 kPa; BE 1.3 mEq/L",
          questionText:
            "How do these findings refine your diagnostic thinking? (Select multiple)",
          questionImage: false
        }
      ],
      comments: [
        {
          id: 1,
          commentText:
            "This patient clearly shows features of beginning respiratory failure against the background of an asthma attack.<br />A mild respiratory tract infection is per definition not associated with respiratory failure.<br />Although there is tachycardia, the systolic blood pressure still is normal resulting in normal shock index.<br />The peak expiratory flow rate is severely decreased in line with an acute asthma attack."
        },
        {
          id: 2,
          commentText:
            "With this serious presentation immediate initiation of Nebulizers, antibiotics and an antiviral is essential. Bronchodilator nebulizers alone is not sufficient as are Nebulizers & broad-spectrum antibiotics beacuse of the high suspiscion of influenza clearly an antiviral is needed. Non-Invasive Ventilation: BIPAP 12/5 is not necessary at this stage because there is no ventilatory insufficiency but may be needed during the course of the disease in case of further deterioration"
        },
        {
          id: 3,
          commentText:
            "With this serious presentation immediate initiation of Nebulizers, antibiotics and an antiviral is essential. Bronchodilator nebulizers alone is not sufficient as are Nebulizers & broad-spectrum antibiotics beacuse of the high suspiscion of influenza clearly an antiviral is needed. Non-Invasive Ventilation: BIPAP 12/5 is not necessary at this stage because there is no ventilatory insufficiency but may be needed during the course of the disease in case of further deterioration"
        }
      ]
    };
  },
  methods: {
    findAnswerOne() {
      this.questionFirsts.filter;
    }
  }
};
</script>

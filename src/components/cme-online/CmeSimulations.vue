<template>
  <div>
    <v-card>
      <v-stepper v-model="questionStep">
        <v-stepper-header>
          <div v-for="(panel, index) in popQuestionPanel" :key="index">
            <v-stepper-step :complete="(index + 1) <= questionStep" :step="index + 1"/>
            <v-divider/>
          </div>
        </v-stepper-header>
        <div v-for="(panel, index) in popQuestionPanel" :key="index">
          <v-stepper-items>
            <v-stepper-content :step="index + 1">
              <v-card flat class="mb-5">
                <h3 class="title mb-0">{{panel.title}}</h3>
                <p>{{ panel.description }}</p>
                <p class="subheading">{{ panel.questionPanel.question }}</p>
                <div
                  v-for="(answerText, index) in popQuestionPanel[index].questionPanel.answers"
                  :key="index"
                >
                  <v-checkbox
                    :label="`${answerText.text}`"
                    :key="answerText.key"
                    v-model="checkboxes"
                  />
                </div>
                <v-radio-group
                  v-model="radioGroup"
                  :mandatory="false"
                  :disabled="showAnswer"
                  class="ml-3"
                >
                  <v-radio
                    v-for="(answerText, index) in popQuestionPanel[index].questionPanel.answers"
                    :key="index"
                    :label="`${answerText.text}`"
                    :value="answerText.text"
                  />
                </v-radio-group>
                <v-btn
                  :disabled="!radioGroup || showAnswer"
                  color="primary"
                  @click="showAnswer = !showAnswer"
                >Answer</v-btn>
                <div v-show="showAnswer">
                  <h3>Answer</h3>
                  <p>Your answer is {{ radioGroup }}</p>
                  <h4>Comment</h4>
                  <p>
                    <span v-html="popQuestionPanel[index].questionPanel.comment"/>
                  </p>
                </div>
              </v-card>

              <!-- <v-btn
                :disabled="!showAnswer"
                color="success"
                @click.native="questionStep = (index + 1) + 1"
              >Continue</v-btn>-->
              <v-btn :disabled="!showAnswer" color="success" @click="goToNextStep(index)">Continue</v-btn>

              <!-- @click="goToNextStep(key +1)" key + 1 === current +1 === next -->
              <v-btn flat @click="questionStep = (index + 1) - 1">Previous</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </div>
      </v-stepper>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "cme-simurations",
  data() {
    return {
      apiResponse: {
        data: {
          title: "** Test Flo ** Pneumococcal and influenza vaccination",
          slug: "pneumococcal-and-influenza-vaccination",
          moodleCmeId: 342,
          cmeType: "case",
          cmeCategory: "Infectious Diseases",
          leadParagraph: false,
          image:
            "https://cdn.ersnet.org/preview?node=3b386554bd9cbe6d2884&name=img500&size=500&v=1339694:0fb1f36d2f3d873c6991",
          imageDescription: "Vaccination",
          related: false,
          cmeOrganisers: [
            {
              name: "G. Rohde",
              title: "Module Director",
              image:
                "https://cdn.ersnet.org/preview?node=a08da24fe82bf1f6fb1d&name=img500&size=500&v=1339694:0fb1f36d2f3d873c6991",
              isMain: true
            },
            {
              name: "P. Openshaw",
              isMain: false
            }
          ],
          cmeOnlineModule: [
            {
              title: "Introduction",
              panels: [
                {
                  panelType: "tabs",
                  title:
                    "I am Gernot Rohde, Director of this module. I will be accompanied by Prof. Peter Openshaw  in order to guide you throughout this session...",
                  tabs: [
                    {
                      title: "Introduction",
                      description:
                        "<ul>\n<li>Widespread wheeze. Alert; soft abdomen</li>\n<li>Febrile: 39°C (102°F)</li>\n<li>Tachypnoea: 34 breaths/minute</li>\n<li>Tachycardia: 110 BPM</li>\n<li>Normotensive: 120/60 mm Hg</li>\n</ul>\n"
                    },
                    {
                      title: "Educational objectives",
                      description:
                        "<ul>\n<li>Widespread wheeze. Alert; soft abdomen</li>\n<li>Febrile: 39°C (102°F)</li>\n<li>Tachypnoea: 34 breaths/minute</li>\n<li>Tachycardia: 110 BPM</li>\n<li>Normotensive: 120/60 mm Hg</li>\n</ul>\n"
                    },
                    {
                      title: "Target Audience",
                      description:
                        "<ul>\n<li>Widespread wheeze. Alert; soft abdomen</li>\n<li>Febrile: 39°C (102°F)</li>\n<li>Tachypnoea: 34 breaths/minute</li>\n<li>Tachycardia: 110 BPM</li>\n<li>Normotensive: 120/60 mm Hg</li>\n</ul>\n"
                    }
                  ]
                }
              ]
            },
            {
              title: "Interactive Case - Simulation",
              panels: [
                {
                  panelType: "tabs",
                  title: "Here is your case:",
                  tabs: [
                    {
                      title: "Presentation",
                      description:
                        "<ul>\n<li>Widespread wheeze. Alert; soft abdomen</li>\n<li>Febrile: 39°C (102°F)</li>\n<li>Tachypnoea: 34 breaths/minute</li>\n<li>Tachycardia: 110 BPM</li>\n<li>Normotensive: 120/60 mm Hg</li>\n</ul>\n"
                    },
                    {
                      title: "Further clinical details",
                      description:
                        "<ul>\n<li>Widespread wheeze. Alert; soft abdomen</li>\n<li>Febrile: 39°C (102°F)</li>\n<li>Tachypnoea: 34 breaths/minute</li>\n<li>Tachycardia: 110 BPM</li>\n<li>Normotensive: 120/60 mm Hg</li>\n</ul>\n"
                    },
                    {
                      title: "Features on examination",
                      description:
                        "<ul>\n<li>Widespread wheeze. Alert; soft abdomen</li>\n<li>Febrile: 39°C (102°F)</li>\n<li>Tachypnoea: 34 breaths/minute</li>\n<li>Tachycardia: 110 BPM</li>\n<li>Normotensive: 120/60 mm Hg</li>\n</ul>\n"
                    }
                  ]
                },
                {
                  panelType: "question",
                  title: "High on the list",
                  question: {
                    question: "High on the list of possibilities are:",
                    isMultiChoice: true,
                    answers: [
                      {
                        text: " Bacterial pneumonia",
                        isCorrect: true
                      },
                      {
                        text: "Venous thromboembolism",
                        isCorrect: false
                      },
                      {
                        text: "Amniotic fluid embolism",
                        isCorrect: false
                      },
                      {
                        text: "Influenza",
                        isCorrect: true
                      }
                    ]
                  }
                },
                {
                  panelType: "question",
                  title: "Chest X-ray",
                  question: {
                    question: "Which of the following are true?:",
                    isMultiChoice: false,
                    answers: [
                      {
                        text: "The body position is well centred",
                        isCorrect: false
                      },
                      {
                        text: "The patient shows a full inspiratory effort",
                        isCorrect: true
                      },
                      {
                        text: "The heart is enlarged",
                        isCorrect: false
                      },
                      {
                        text: "Consolidation in the right lower field",
                        isCorrect: false
                      },
                      {
                        text: "Lower lobe pneumonia",
                        isCorrect: false
                      }
                    ],
                    media: "image",
                    imageBig:
                      "https://cdn.ersnet.org/preview?node=66f3996891ddc8959607&name=img800&size=800&v=1339694:0fb1f36d2f3d873c6991",
                    imageSmall:
                      "https://cdn.ersnet.org/preview?node=72d2dd903ec024a0c9b6&name=img400&size=400&v=1339694:0fb1f36d2f3d873c6991"
                  }
                }
              ]
            },
            {
              title: "Panel discussion video",
              panels: [
                {
                  panelType: "video",
                  mediaUrl:
                    "http://www.ers-education.org/ersMade/html/cme-online/flu-pneumo-vaccination/vaccination-discussion.mp4",
                  image:
                    "https://cdn.ersnet.org/preview?node=3a48088796b9275f7b6b&name=img500&size=500&v=1339694:0fb1f36d2f3d873c6991"
                }
              ]
            },
            {
              title: "Readings",
              panels: [
                {
                  panelType: "references",
                  references:
                    '<ol>\n<li><p>Petrarca L, Midulla F, Openshaw PJ. Vaccination policies in Europe: <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/eji.201870015">Common goals, diverse approaches and public doubts.</a> Eur J Immunol 2018; 48: 10-12</p>\n</li>\n<li><p>Fraser CS, Jha A, Openshaw PJ. Vaccines in the Prevention of Viral Pneumonia. Clin Chest Med 2017; 38: 155-169.</p>\n</li>\n<li><p>Schwarze J, Openshaw P, Jha A, Del Giacco SR, Firinu D, Tsilochristou O, Roberts G, Selby A, Akdis C, Agache I, Custovic A, Heffler E, Pinna G, Khaitov M, Nikonova A, Papadopoulos N, Akhlaq A, Nurmatov U, Renz H, Sheikh A, Skevaki C. Influenza burden, prevention, and treatment in asthma-A scoping review by the EAACI Influenza in asthma task force.Allergy. 2018 Jun;73(6):1151-1181. </p>\n</li>\n<li><p>Drijkoningen JJ, Rohde GG. Pneumococcal infection in adults: burden of disease. Clin Microbiol Infect. 2014 May;20 Suppl 5:45-5.</p>\n</li>\n<li><p>Openshaw P, Gernot G.U. Rohde. Pneumococcal and influenza vaccination. Respipedia, the respiratory wiki. 24.04.2018 09:57. Accessed: 17.10.2018 12:22.</p>\n</li>\n<li><p>Bellinghausen C, Rohde GGU, Savelkoul PHM, Wouters EFM, Stassen FRM. Viral-bacterial interactions in the respiratory tract. J Gen Virol. 2016 Dec;97(12):3089-3102. </p>\n</li>\n</ol>\n'
                }
              ]
            }
          ],
          url: false,
          uri: false,
          unPublished: false,
          diseases: ["Respiratory infections"],
          methods: ["Respiratory intensive care"],
          _doc: "f8b4332e3834ccd1f620",
          _system: {
            deleted: false,
            changeset: "1339694:0fb1f36d2f3d873c6991",
            created_on: {
              timestamp: "19-Mar-2019 07:34:57",
              year: 2019,
              month: 2,
              day_of_month: 19,
              hour: 7,
              minute: 34,
              second: 57,
              millisecond: 501,
              ms: 1552980897501,
              iso_8601: "2019-03-19T07:34:57Z"
            },
            created_by: "fblocklet",
            created_by_principal_id: "54933ca487265db31b1b",
            created_by_principal_domain_id: "869b74f51afe687b5b74",
            modified_on: {
              timestamp: "19-Mar-2019 10:04:49",
              year: 2019,
              month: 2,
              day_of_month: 19,
              hour: 10,
              minute: 4,
              second: 49,
              millisecond: 657,
              ms: 1552989889657,
              iso_8601: "2019-03-19T10:04:49Z"
            },
            modified_by: "fblocklet",
            modified_by_principal_id: "54933ca487265db31b1b",
            modified_by_principal_domain_id: "869b74f51afe687b5b74",
            edited_on: {
              timestamp: "19-Mar-2019 10:04:49",
              year: 2019,
              month: 2,
              day_of_month: 19,
              hour: 10,
              minute: 4,
              second: 49,
              millisecond: 657,
              ms: 1552989889657,
              iso_8601: "2019-03-19T10:04:49Z"
            },
            edited_by: "fblocklet",
            edited_by_principal_id: "54933ca487265db31b1b",
            edited_by_principal_domain_id: "869b74f51afe687b5b74",
            previousChangeset: "1339680:256b8c01cfb8f1b8df54"
          },
          _statistics: {
            "a:has_role": 1,
            "a:has_role_INCOMING": 1,
            "ers:image-association": 5,
            "ers:image-association_OUTGOING": 5
          },
          _qname: "o:f8b4332e3834ccd1f620",
          typeColor: false,
          flags: [
            {
              text: false,
              color: false
            }
          ]
        },
        //data: {
        //     title: "Test Pneumococcal and influenza vaccination",
        //     subTitle: false,
        //     slug: "test-pneumococcal-and-influenza-vaccination",
        //     tags: false,
        //     contentType: "cme_online",
        //     type: false,
        //     typeColor: false,
        //     cmeType: "case",
        //     cmeCategory: "Infectious Diseases",
        //     cmeOrganisers: [
        //       {
        //         name: "G. Rohde ",
        //         title: "Module Director",
        //         isMain: true
        //       },
        //       {
        //         name: "P. Openshaw",
        //         isMain: false
        //       }
        //     ],
        //     cmeOnlineModule: [
        //       {
        //         title: "Introduction",
        //         panels: [
        //           {
        //             title:
        //               "I am Gernot Rohde, Director of this module. I will be accompanied by Prof. Peter Openshaw  in order to guide you throughout this session...",
        //             panelType: "tabs",
        //             tabsPanel: [
        //               {
        //                 title: "Introduction",
        //                 description:
        //                   "Vaccination is amongst the most cost-effective measures available to us to improve health. The most notable example is the prevention of influenza by annual vaccination, but vaccination against pneumococcal pneumonia is also highly effective in selected populations."
        //               },
        //               {
        //                 title: "Educational objectives",
        //                 description:
        //                   "After the completion of this module, you will be able to: \r\n1. Recognise the burden and importance of influenza and pneumococcal pneumonia as causes of serious lung disease\r\n2. Identify risk factors for severe disease and targeted vaccination.\r\n3. Explain the uses and limitations of vaccination in preventing viral and bacterial lung disease\r\n4. Discuss the ways in which viruses and bacterial infections of the lung interact. \r\n5. Outline the indications for an appropriate use of antivirals"
        //               },
        //               {
        //                 title: "Targer audience",
        //                 description:
        //                   "* Physicians caring for patients with lung infections"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         title: "Interactive case - Simulation",
        //         panels: [
        //           {
        //             title: "Here is you case:",
        //             description:
        //               "* 34 year old asthmatic woman\r\n* Middle of flu season\r\n* Patient have been in hospital prior to the event",
        //             panelType: "tabs",
        //             tabsPanel: [
        //               {
        //                 title: "Presentation",
        //                 description:
        //                   "* Shortness of breath + cough + fever\r\n**One day prior:** \r\n* Haemoptysis, fever, pleuritic chest pain\r\n* Shortness of breath, no response to inhalers"
        //               },
        //               {
        //                 title: "Futher clinical details",
        //                 description:
        //                   "**Three days prior:**\r\n* Cough, yellow sputum, sore throat\r\n* Atopic asthmatic\r\n* 4 LRTI’s last year managed at home\r\n* PRN short and long acting b2 agonists (not using)\r\n* Obesity \r\n* Ectopic pregnancy: Laparoscopic surgery one week previously"
        //               },
        //               {
        //                 title: "Features on examination",
        //                 description:
        //                   "* Widespread wheeze. Alert; soft abdomen\r\n* Febrile: 39°C (102°F)\r\n* Tachypnoea: 34 breaths/minute\r\n* Tachycardia: 110 BPM\r\n* Normotensive: 120/60 mm Hg"
        //               }
        //             ]
        //           },
        //           {
        //             title: "High on the list",
        //             description:
        //               "Based on presentation you may have now a first differential diagnosis on your mind.",
        //             panelType: "question",
        //             questionPanel: {
        //               question: "High on the list of possibilities are:",
        //               isMultiChoice: true,
        //               answers: [
        //                 {
        //                   text: "Bacterial pneumonia",
        //                   isCorrect: true
        //                 },
        //                 {
        //                   text: "Venous thromboembolism",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "Amniotic fluid embolism",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "Influenza",
        //                   isCorrect: true
        //                 }
        //               ],
        //               comment:
        //                 "The clinical picture is in line with an acute respiratory infection because of the combination of shortness of breath, cough and fever with acute onset.\nVenous thromboembolism or amiotic fluid embolism are less likely because they are not usually associated with high fever and sputum production and sore throat."
        //             }
        //           },
        //           {
        //             title: "Differential diagnosis workup",
        //             description:
        //               "Very high on the probable diseases are bacterial pneumonia and influenza A",
        //             panelType: "question",
        //             questionPanel: {
        //               question:
        //                 "Which two investigations will be most likely to change your management?",
        //               isMultiChoice: true,
        //               answers: [
        //                 {
        //                   text:
        //                     "A diagnostic test for influenza on respiratory secretions (nasal pharyngeal swab)",
        //                   isCorrect: true
        //                 },
        //                 {
        //                   text: "Chest X-Ray",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "Blood cultures",
        //                   isCorrect: true
        //                 },
        //                 {
        //                   text: "Blood cell count",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "C-reactive protein",
        //                   isCorrect: false
        //                 }
        //               ],
        //               comment:
        //                 "An important step in the management is the demonstration of a specific pathogen.\nChest x-ray, blood cell count and C-reactive protein support the diagnosis of inflammatory chest disease but cannot direct specific management of possible viral or bacterial infection."
        //             }
        //           },
        //           {
        //             title: "Chest X-ray",
        //             description:
        //               "While waiting for the results of other tests, you ordered a chest X-ray",
        //             panelType: "question",
        //             questionPanel: {
        //               question: "Which of the following are true?",
        //               isMultiChoice: false,
        //               answers: [
        //                 {
        //                   text: "The body position is well centred",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "The patient shows a full inspiratory effort",
        //                   isCorrect: true
        //                 },
        //                 {
        //                   text: "The heart is enlarged",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "Consolidation in the right lower field",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "Lower lobe pneumonia",
        //                   isCorrect: false
        //                 }
        //               ],
        //               comment:
        //                 "This chest x-ray is not taken in adequate position. It is not well centred and the patient is turned to the right. It is a projection probably taken in bed in a sitting position. Therefore, we cannot judge on the size of the heart because it maybe artificially enlarged. The patient took a full inspiration because the seventh rip is cutting the diaphragm on the left side. It is doubtful whether there is a true elevation of the right hemidiaphragm because of the rotation of the patient. There is no consolidation in the right lower field but there could be an atelectasis. No clear signs of lower lobe pneumonia."
        //             }
        //           },
        //           {
        //             title: "Your diagnosis",
        //             description:
        //               "**Immediate findings on investigation:**\r\nHypoxic: saturation 85% on air\r\nImpaired lung function: PEFR 150 L/min (best 400)\r\nArterial blood gas on 40% oxygen\r\npH: 7.42; pO2: 10.3 kPa; pCO2: 4.3 kPa; BE 1.3 mEq/L",
        //             panelType: "question",
        //             questionPanel: {
        //               question:
        //                 "How do these findings refine your diagnostic thinking?",
        //               isMultiChoice: true,
        //               answers: [
        //                 {
        //                   text: "Mild respiratory tract infection",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "Respiratory failure",
        //                   isCorrect: true
        //                 },
        //                 {
        //                   text: "Septic chock",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "Asthma attack",
        //                   isCorrect: true
        //                 },
        //                 {
        //                   text: "Ventilatory failure",
        //                   isCorrect: false
        //                 }
        //               ],
        //               comment:
        //                 "This patient clearly shows features of beginning respiratory failure against the background of an asthma attack.\nA mild respiratory tract infection is per definition not associated with respiratory failure.\nAlthough there is tachycardia, the systolic blood pressure still is normal resulting in normal shock index.\nThe peak expiratory flow rate is severely decreased in line with an acute asthma attack."
        //             }
        //           },
        //           {
        //             title: "Management options",
        //             description:
        //               "Summarising the above, we see a pregnant woman with an acute asthma attack triggered by influenza A complicated by acute respiratory insufficiency. Immediate treatment initiation is important:",
        //             panelType: "question",
        //             questionPanel: {
        //               question:
        //                 "Which are the of the following would you choose?",
        //               isMultiChoice: false,
        //               answers: [
        //                 {
        //                   text: "Bronchodilator nebulizers alone",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "Nebulizers & broad-spectrum antibiotics",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "Non-Invasive Ventilation: BIPAP 12/5",
        //                   isCorrect: false
        //                 },
        //                 {
        //                   text: "Nebulizers, antibiotics and an antiviral",
        //                   isCorrect: true
        //                 }
        //               ],
        //               comment:
        //                 "With this serious presentation immediate initiation of Nebulizers, antibiotics and an antiviral is essential.\r\nBronchodilator nebulizers alone is not sufficient as are Nebulizers & broad-spectrum antibiotics beacuse of the high suspiscion of influenza clearly an antiviral is needed. Non-Invasive Ventilation: BIPAP 12/5 is not necessary at this stage because there is no ventilatory insufficiency but may be needed during the course of the disease in case of further deterioration"
        //             }
        //           },
        //           {
        //             title: "Management (what was really done)",
        //             description:
        //               "The following information is related to the management of the real case on admission.",
        //             panelType: "tabs",
        //             tabsPanel: [
        //               {
        //                 title: "Treatment",
        //                 description:
        //                   "Bronchodilator nebulisers\r\nIV, then oral antibiotics\r\nIV, then oral corticosteroids\r\nIV magnesium\r\nIV aminophylline\r\nOral antiviral (day 2 of admission)"
        //               },
        //               {
        //                 title: "Blood results",
        //                 description:
        //                   "CRP 11 WCC 11.6 (neutrophils 10) \r\nDDimer 728 Wells score 4"
        //               },
        //               {
        //                 title: "Chest x-ray day 2",
        //                 description:
        //                   "A chest x-ray was performed on day 2.\r\n\r\nClick on the image to enlage!"
        //               },
        //               {
        //                 title: "CTPA",
        //                 description:
        //                   "CT pulmonary angiography (CTPA) was performed.\r\n\r\nClick on the image to enlage!"
        //               }
        //             ]
        //           },
        //           {
        //             title: "Progress on day 2",
        //             description:
        //               "* Nasopharyngeal swab result: Influenza A confirmed \r\n* Sputum MC&S: oral flora\r\n* Oral antibiotics continued\r\n* Antiviral continued\r\n* Discharged after 5 days"
        //           }
        //         ]
        //       },
        //       {
        //         title: "Panel discussion video",
        //         panels: [
        //           {
        //             description:
        //               "Panel discussion: G. Rohde (Frankfurt, Germany), P. Openshaw (London, United Kingdom)",
        //             panelType: "video",
        //             videoPanel:
        //               "http://www.ers-education.org/ersMade/html/cme-online/flu-pneumo-vaccination/vaccination-discussion.mp4"
        //           }
        //         ]
        //       },
        //       {
        //         title: "Readings",
        //         panels: [
        //           {
        //             title: "Readings",
        //             panelType: "reference",
        //             referencePanel:
        //               "1. Petrarca L, Midulla F, Openshaw PJ. Vaccination policies in Europe: [Common goals, diverse approaches and public doubts.](https://onlinelibrary.wiley.com/doi/full/10.1002/eji.201870015) Eur J Immunol 2018; 48: 10-12\r\n\r\n2. Fraser CS, Jha A, Openshaw PJ. [Vaccines in the Prevention of Viral Pneumonia](https://www.ncbi.nlm.nih.gov/pubmed/28159157). Clin Chest Med 2017; 38: 155-169.\r\n\r\n3. Schwarze J, Openshaw P, Jha A, Del Giacco SR, Firinu D, Tsilochristou O, Roberts G, Selby A, Akdis C, Agache I, Custovic A, Heffler E, Pinna G, Khaitov M, Nikonova A, Papadopoulos N, Akhlaq A, Nurmatov U, Renz H, Sheikh A, Skevaki C. [Influenza burden, prevention, and treatment in asthma-A scoping review by the EAACI Influenza in asthma task force](https://onlinelibrary.wiley.com/doi/full/10.1111/all.13333).Allergy. 2018 Jun;73(6):1151-1181. \r\n\r\n4. Drijkoningen JJ, Rohde GG. [Pneumococcal infection in adults: burden of disease](https://www.clinicalmicrobiologyandinfection.com/article/S1198-743X\\(14\\)60175-0/fulltext). Clin Microbiol Infect. 2014 May;20 Suppl 5:45-5.\r\n\r\n5. Openshaw P, Gernot G.U. Rohde. [Pneumococcal and influenza vaccination. Respipedia](https://respipedia.ers-education.org/article/article/?idTopic=219), the respiratory wiki. 24.04.2018 09:57. Accessed: 17.10.2018 12:22.\r\n\r\n6. Bellinghausen C, Rohde GGU, Savelkoul PHM, Wouters EFM, Stassen FRM. [Viral-bacterial interactions in the respiratory tract](http://jgv.microbiologyresearch.org/content/journal/jgv/10.1099/jgv.0.000627#tab2). J Gen Virol. 2016 Dec;97(12):3089-3102. "
        //           }
        //         ]
        //       }
        //     ],
        //     flags: [
        //       {
        //         text: false,
        //         color: false
        //       }
        //     ],
        //     ebusDate: false,
        //     eventDate: false,
        //     eventEndDate: false,
        //     eventLocation: false,
        //     leadParagraph:
        //       "<p>In the latest CME Online module, Professors Gernot Rohde and Peter Openshaw will guide you through interactive cases on pneumococcal and influenza vaccination. </p>\n",
        //     body: false,
        //     articleOneColumn: false,
        //     displayModifiedOnDate: false,
        //     doNotDisplayCreatedOn: false,
        //     doNotDisplayCreatedOnOnHomepage: false,
        //     comments: false,
        //     image: false,
        //     imageDescription: false,
        //     itemImageAlignment: "center",
        //     itemImageBackgroundSize: "cover",
        //     imageSize: "small",
        //     highResImage: false,
        //     highResImageDescription: false,
        //     imageAlignment: false,
        //     video: false,
        //     author: false,
        //     category: {
        //       id: "8e1f9c610877206a850e",
        //       ref:
        //         "node://18dbd4f08d5f428ba9c2/607e97e4474d46e40345/b4fb47ddf6c57cff771c/8e1f9c610877206a850e",
        //       title: "CME Online",
        //       qname: "o:8e1f9c610877206a850e",
        //       typeQName: "ers:category"
        //     },
        //     category2: [
        //       {
        //         id: false,
        //         ref: false,
        //         title: false,
        //         qname: false,
        //         typeQName: false
        //       }
        //     ],
        //     related: false,
        //     deadline: false,
        //     earlybirdDeadline: false,
        //     extendedDeadline: false,
        //     openingDate: false,
        //     programme: false,
        //     programmeButtonText: false,
        //     programmeNotice: false,
        //     practicalInfo: false,
        //     practicalInfoButton: false,
        //     technicalInfo: false,
        //     popUp: false,
        //     popUpText: false,
        //     feeList: {
        //       junior: false,
        //       ersMember: false,
        //       nonErsMember: false,
        //       industry: false,
        //       liveStreaming: false
        //     },
        //     cancellationPolicy: false,
        //     travelInfo: false,
        //     organisers: false,
        //     faculty: false,
        //     sponsors: [
        //       {
        //         text: false,
        //         image: false
        //       }
        //     ],
        //     sponsorsAlliances: [
        //       {
        //         text: false,
        //         image: false
        //       }
        //     ],
        //     documents: false,
        //     disclosure: false,
        //     rulesAndRegulations: false,
        //     deadlines: {
        //       applicationDeadline: false,
        //       applicationDeadline2: false,
        //       notification: false,
        //       notification2: false,
        //       startDate: false,
        //       startDate2: false
        //     },
        //     venue: {
        //       name: false,
        //       url: false,
        //       streetAddress: false,
        //       streetAddress2: false,
        //       streetAddress3: false,
        //       city: false,
        //       postalCode: false,
        //       country: false,
        //       phoneNumber: false,
        //       info: false
        //     },
        //     ebusVenues: [
        //       {
        //         name: false,
        //         url: false,
        //         streetAddress: false,
        //         streetAddress2: false,
        //         streetAddress3: false,
        //         city: false,
        //         postalCode: false,
        //         country: false,
        //         phoneNumber: false,
        //         info: false
        //       }
        //     ],
        //     suggestedAccommodation: [
        //       {
        //         name: false,
        //         url: false,
        //         streetAddress: false,
        //         streetAddress2: false,
        //         streetAddress3: false,
        //         city: false,
        //         postalCode: false,
        //         country: false,
        //         phoneNumber: false,
        //         info: false
        //       }
        //     ],
        //     registerButton: {
        //       link: false,
        //       text: false
        //     },
        //     bursaryApplication: {
        //       text: false,
        //       deadline: false,
        //       notificationOfResults: false,
        //       applyButtonUrl: false
        //     },
        //     mentorship: {
        //       text: false,
        //       deadline: false,
        //       notificationOfResults: false,
        //       applyButtonUrl: false
        //     },
        //     abstracts: {
        //       text: false,
        //       deadline: false,
        //       notificationOfResults: false,
        //       applyButtonUrl: false
        //     },
        //     availableOnHomepage: false,
        //     mainNews: false,
        //     featuredCourse: false,
        //     featuredFunding: false,
        //     featuredCalendarItem: false,
        //     nonErsCalendarItem: false,
        //     ersEndorsedEvent: false,
        //     ersDeadline: false,
        //     fullyBooked: false,
        //     displayOrder: false,
        //     loc: {
        //       lat: false,
        //       long: false
        //     },
        //     eventDates: false,
        //     startDateTimestamp: false,
        //     startDate: false,
        //     endDate: false,
        //     createdOn: false,
        //     modifiedOn: false,
        //     calendar: {
        //       year: false,
        //       month: false,
        //       timestamp: false
        //     },
        //     ms: false,
        //     shortLead:
        //       "In the latest CME Online module, Professors Gernot Rohde and Peter Openshaw will guide you through interactive cases on pneumococcal and...",
        //     hasRelatedArticles: false,
        //     hasAuthor: false,
        //     salutation: false,
        //     firstName: false,
        //     lastName: false,
        //     url: false,
        //     uri: false,
        //     unPublished: false,
        //     _system: {
        //       deleted: false,
        //       changeset: "247619:b27e0fbf36e7a2de1733",
        //       created_on: {
        //         timestamp: "07-Dec-2018 08:25:52",
        //         year: 2018,
        //         month: 11,
        //         day_of_month: 7,
        //         hour: 8,
        //         minute: 25,
        //         second: 52,
        //         millisecond: 473,
        //         ms: 1544171152473,
        //         iso_8601: "2018-12-07T08:25:52Z"
        //       },
        //       created_by: "fblocklet",
        //       created_by_principal_id: "54933ca487265db31b1b",
        //       created_by_principal_domain_id: "869b74f51afe687b5b74",
        //       modified_on: {
        //         timestamp: "12-Dec-2018 15:51:40",
        //         year: 2018,
        //         month: 11,
        //         day_of_month: 12,
        //         hour: 15,
        //         minute: 51,
        //         second: 40,
        //         millisecond: 719,
        //         ms: 1544629900719,
        //         iso_8601: "2018-12-12T15:51:40Z"
        //       },
        //       modified_by: "fblocklet",
        //       modified_by_principal_id: "54933ca487265db31b1b",
        //       modified_by_principal_domain_id: "869b74f51afe687b5b74",
        //       edited_on: {
        //         timestamp: "12-Dec-2018 15:51:40",
        //         year: 2018,
        //         month: 11,
        //         day_of_month: 12,
        //         hour: 15,
        //         minute: 51,
        //         second: 40,
        //         millisecond: 719,
        //         ms: 1544629900719,
        //         iso_8601: "2018-12-12T15:51:40Z"
        //       },
        //       edited_by: "fblocklet",
        //       edited_by_principal_id: "54933ca487265db31b1b",
        //       edited_by_principal_domain_id: "869b74f51afe687b5b74",
        //       previousChangeset: "247613:1fe07a6f628bbfb566a7"
        //     },
        //     _qname: "o:2fb8df7c403fa8aba8ff",
        //     _statistics: {
        //       "a:has_role": 1,
        //       "a:has_role_INCOMING": 1,
        //       "ers:category-association": 1,
        //       "ers:category-association_OUTGOING": 1
        //     },
        //     moodleCmeId: {},
        //     diseases: ["Respiratory infections"],
        //     methods: ["Respiratory intensive care"],
        //     _doc: "2fb8df7c403fa8aba8ff"
        //},
        status: 200
      },
      questionStep: 0,
      key: 0,
      showAnswer: false,
      disabled: true,
      radioGroup: null,
      checkboxes: null
    };
  },
  computed: {
    popQuestionPanel() {
      console.log(this.apiResponse.data.cmeOnlineModule[1].panels);
      var panels = this.apiResponse.data.cmeOnlineModule[1].panels.filter(
        item => item.panelType === "question"
      );
      console.log(panels);
      return panels;
    }
  },
  methods: {
    goToNextStep(index) {
      console.log(index);
      // reset to default
      this.showAnswer = false;
      this.radioGroup = null;
      this.questionStep = index + 2;
      // return index + 1 + 1;
    }
  }
};
</script>

<template>
  <v-content>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
          <v-card>
            <v-card-text>
              <v-textarea
                v-model="text"
                name="input-7-1"
                label="Text to analyse"
                multi-line
              />
            </v-card-text>
            <v-card-actions>
              <v-btn @click="submit">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout row>
        <v-flex v-if="results.length > 0" xs12 sm12 md8 lg8 offset-md2 offset-lg2>
          <v-card>
            <v-card-title >
              Diseases
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-tile v-if="results">
                  <v-list-tile-action>
                    <v-tooltip bottom>
                      <v-icon slot="activator" color="indigo">s7-ticket</v-icon>
                    </v-tooltip>
                  </v-list-tile-action>
                  <v-list-tile-content style="height:max-content">
                    <v-list-tile-title style="overflow: auto; height: max-content;">
                      <v-chip v-for="(disease, key) in results" :key="`${key}-d`">{{disease}}</v-chip>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-for="(p, key) in predictions" :key="`${key}-d`">
                  <v-list-tile-content style="height:max-content">
                    <v-list-tile-title style="overflow: auto; height: max-content;">
                      {{p.label}}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>{{p.probability}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// import { DisplaCyENT } from 'displacy-ent'
import axios from "axios";

// const d = new DisplaCyENT('http://localhost:8000/analyse', {
//   container: '#displacy',
//   defaultEnts: ['person', 'org', 'date']
// })

const HTTP = axios.create({
  baseURL: "http://nlp-api.hidora.com/"
});

export default {
  name: "classifier",
  data() {
    return {
      text:
        "Background: Behavioural interventions focusing on physical training and healthy diet have been found to improve asthma control in obese asthma patients, but if these interventions also improve asthma control in non-obese patients remains unclear.\r \r Objective: In a randomised, controlled parallel-group design, we studied the effects of an 8-week intervention of either diet (high protein/low glycaemic index plus at least 6 servings of fruit and vegetables/day), exercise (high intensity interval training three times/week) or a combination of the two, on asthma control, quality of life and clinical outcomes in non-obese asthma patients.\r \r Methods: 149 non-obese adult asthma patients were randomised to one of four groups: an exercise group, a diet group, an exercise+diet group or a control group (usual care). Level of asthma control (ACQ), asthma related quality of life (AQLQ), forced expiratory volume in one second (FEV1), airway hyperresponsiveness (AHR) and fractional exhaled nitric oxide (FeNO) levels were measured pre- and post intervention.\r \r Results:  125 patients completed the study and were included in the data analysis. Patients in the exercise+diet group had a significant reduction in ACQ and a significant improvement in AQLQ (mean change (95%CI) compared to change in the control group (-0.6 (-1.0;-0.2), (p&lt;0.01) and (0.5 (0.1;0.9, p&lt;0.01), respectively. There were no significant changes within any groups in FEV1, AHR or FeNO.\r \r Conclusion: Eight weeks of combined exercise and diet improves asthma control in non-obese asthma patients, but does not affect objective measurements of airway pathophysiology.",
      text2:
        "Introduction: In prostate cancer prostate-specific membrane antigen (PSMA) serves as a target for antibody-based radioligand therapy. Although PSMA expression can be found in lung cancer tissues too, its therapeutic impact is not clarified, yet. Material and Methods: Against this background, immunohistochemical PSMA expression was performed in n = 275 NSCLC  tissue samples. Besides, PSMA expression in tumor associated neovasculature was investigated by means of CD34 co-expression. Next, PSMA expression was correlated with clinicopathologic and prognostic data. Results: Whereas PSMA was expressed by 6% of the investigated tissues, neovascular PSMA expression was found in 49% of the NSCLC samples. With regard to clinicopathologic correlations, we found high neovascular PSMA expression to be associated with higher tumor grading (G3/G4; p &lt; 0.001). For the entire study collective, no prognostic effects were found neither for PSMA tumor cell expression, nor for PSMA neovascular cell expression. Conclusion: The underlying study investigated the impact of PSMA expression as a basis for radioligand therapy in NSCLC, in future. Since PSMA was only expressed by a minority of NSCLC patients, our results could serve for the identification of patients who might benefit from this treatment.",
      text3:
        "Tight junctions (TJ) play key roles in the regulation of airway barrier function, which is implicated in the pathogenesis of airway diseases, and stabilization of TJ may improve lung health. G-protein coupled receptor 40 (GPR40) has been identified as a receptor of polyunsaturated fatty acids, which have been shown to have a protective effect against inflammation-induced destruction of intestinal barrier. However, the physiological role of GPR40 in barrier function remains unknown. This study was aimed to investigate the function of GPR40 in regulating TJ assembly in human airway epithelial Calu-3 cells. Disassembly and reassembly of TJ were induced using a calcium switch technique. Protein and functional expression of GPR40 was validated by immunocytochemistry, immunoblot and intracellular calcium measurements. We found that GW9508, an agonist of GPR40, augmented the recovery of transepithelial electrical resistance and localization of zonular occludens-1 to an intercellular area, and inhibitors of GPR40 and phospholipase C significantly suppressed the effect of GW9508. Interestingly, the GPR40 agonist enhanced TJ assembly in an AMP-activated protein kinase (AMPK)-dependent manner. Furthermore, GW9508 promoted AMPK phosphorylation in a dose-dependent and time-dependent manner. The GW9508-induced AMPK activation was mediated via GPR40 but not GPR120. Importantly, our results indicate that Ca2+/calmodulin-dependent protein kinase kinase β mediates the GPR40-induced AMPK activation and TJ assembly. Collectively, this study is the first to demonstrate the novel role of GPR40 in improving barrier integrity in airway epithelial cells as well as its underlying mechanisms involving AMPK.",
      results: [],
      predictions: []
    };
  },

  methods: {
    async submit() {
      // const r = await HTTP.get(`/analyse?text=${this.text}`)
      const r = await HTTP.post("/analyse", { text: this.text });

      this.results = r.data.diseases;
      this.predictions = r.data.predictions;
      console.log(this.results);
      // console.log(d.render(r.data.text, r.data.ents, ['person', 'org', 'date']))
    }
  }
};
</script>

<style>
</style>

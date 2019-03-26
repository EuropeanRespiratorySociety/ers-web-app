<template>
  <v-flex xs12 sm9>
    <v-flex xs12>
      <div>
        <v-card>
          <video
            v-video="playVideo"
            v-bind:src="cmeVideopath"
            class="video-responsive"
            controls
            autoplay
            muted
          />
          <!-- <div><button @click="playVideo=!playVideo">{{btnstate}}</button></div> -->
          <v-card-title>
            <p>Panel discussion video: {{ panelDiscussionAttendance }}}</p>
          </v-card-title>
        </v-card>
      </div>
    </v-flex>
    <v-flex xs12>
      <div>
        <v-card>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header" class="subheading font-weight-bold">{{ cmeVideoObjectiveTitle }}</div>
              <v-card>
                <v-card-text class="grey lighten-4">
                  <p>
                    <span v-html="cmeVideoObjectiveText"/>
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header" class="subheading font-weight-bold">{{ cmeVideoAudienceTitile }}</div>
              <v-card>
                <v-card-text class="grey lighten-4">
                  <p>
                    <span v-html="cmeVideoAudienceText"/>
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </div>
    </v-flex>
  </v-flex>
</template>

<script>
export default {
  name: "cme-panel-discussion-video-mock",
  data() {
    return {
      active: null,
      playVideo: false,
      cmeVideopath:
        "https://www.ers-education.org/ersMade/html/cme-online/topic-video/inhaler-technique/inhaler-technique-intro.mp4",
      cmeVideoObjectiveTitle: "Read the objectives of the module",
      cmeVideoObjectiveText:
        "After the completion of this module, you will be able to:<ul><ol>Identify tobacco use and exposure to second-hand tobacco smoke (SHS) as the main cause of respiratory diseases and the most preventable one, both in adults and children.</ol><ol>Identify tobacco use as an addiction and a chronic disease demanding a chronic disease approach, knowing that tobacco dependence treatment is evidence-based and effective: consists on a combination of behavioural counselling and pharmacologic treatment.</ol><ol>Make use of brief advice intervention as it has the most important impact in cessation knowing that all healthcare providers (HCPs) need specific training in brief intervention cessation skills.</ol><ol>Treat respiratory patients with intensive behavioural support and medication, once adequately trained in smoking cessation, and knowing that chronic respiratory patients often show a high dependence from nicotine and experience more difficulty to quit.</ol><ol>Use a patient-centered, empathic and motivational approach as it is the best way to engage patients in cessation.</ol><ol>Identify the key steps to approach smokers and how to intervene, both in smokers who are motivated to stop smoking (5 As) and in those who do not want to stop (5 Rs). Discuss barriers and opportunities to stop smoking among patients who suffer from a lung condition such asthma, COPD, lung cancer, tuberculosis or pneumonia.</ol></ul>",
      cmeVideoAudienceTitile: "Target audience",
      cmeVideoAudienceText:
        "All clinicians and healthcare professionals working in respiratory healthcare:<br/> Physicians, nurses, physiotherapists, pharmacists, psychologists, health counselors, social workers, allied health professionals; medical and health science students.",
      panelDiscussionAttendance:
        "J.C. Virchow (Rostock, Germany), R. Dekhuijzen (Nijmegen, Netherlands)"
    };
  }
  // computed: {
  //   btnstate() {
  //     return this.playVideo ? "■" : "▸";
  //   }
  // }
};
</script>

<style>
.video-responsive {
  width: 100% !important;
  height: auto !important;
}
</style>

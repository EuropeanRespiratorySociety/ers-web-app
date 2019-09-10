<template>
  <v-content style="background-color:#f4f4f4;">
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-title>
            <h4 class="headline py-4 pl-2">{{cmeModule.title}}</h4>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-container align-center>
      <v-layout>
        <v-flex>
          <!-- container for wrap starts-->
          <v-container fluid grid-list-lg>
            <v-btn :to="{ name: 'CmeModules'}" append dark style="background-color: #015291;">
              <v-icon dark left>arrow_back</v-icon>
              <strong>Back to List of Modules</strong>
            </v-btn>
            <v-layout wrap row>
              <v-flex d-flex md12 lg3>
                <v-layout row wrap>
                  <cme-timeline />
                  <cme-organisers class="hidden-sm-and-down" />
                </v-layout>
              </v-flex>
              <v-flex v-if="hasValue(currentPanel.panelType)" id="main" md12 lg9 sm12>
                <v-card>
                  <div v-if="currentStep.isSimulation && !currentPanel.startSimulation">
                    <v-stepper :value="currentPanel.selectedIndex">
                      <v-stepper-header>
                        <v-stepper-step
                          v-for="(panel, index) in currentStep.panels"
                          v-if="!panel.startSimulation"
                          :key="index"
                          :step="index"
                        />
                      </v-stepper-header>
                    </v-stepper>
                  </div>
                  <div v-else>
                    <v-card-text>
                      <h2>{{currentStep.title}}</h2>
                    </v-card-text>
                  </div>
                  <v-divider />
                  <component :is="buildCmeOnlineComponentName(currentPanel.panelType)" :key="currentStep.selectedIndex + currentPanel.selectedIndex" />
                  <v-divider />
                  <cmeNavigation />
                </v-card>
                <v-layout>
                  <cme-organisers class="hidden-md-and-up" />
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { formMixin } from "@/mixins/formMixin";
import { mapState } from "vuex";
import CmeTimeline from "@/components/cme-online/CmeTimeline";
import CmeOrganisers from "@/components/cme-online/CmeOrganisers";
import CmeTabsPanel from "@/components/cme-online/CmeTabsPanel";
import CmeQuestionPanel from "@/components/cme-online/CmeQuestionPanel";
import CmeVideoPanel from "@/components/cme-online/CmeVideoPanel";
import CmeReferencesPanel from "@/components/cme-online/CmeReferencesPanel";
import CmeTestPanel from "@/components/cme-online/CmeTestPanel";
import CmeNavigation from "@/components/cme-online/CmeNavigation";

export default {
  name: "cme-module-detail",
  metaInfo() {
    return {
      title: "ERS CME Online Module",
      link: [{ rel: "canonical", href: this.cmeModule.url }],
      meta: [{ name: "keywords", content: this.setMetaKeywords() }]
    };
  },
  components: {
    CmeTimeline,
    CmeOrganisers,
    CmeTabsPanel,
    CmeVideoPanel,
    CmeReferencesPanel,
    CmeQuestionPanel,
    CmeTestPanel,
    CmeNavigation
  },
  mixins: [formMixin],
  computed: {
    ...mapState("cmeOnline", ["cmeModule", "currentStep", "currentPanel"])
  },
  methods: {
    setMetaKeywords() {
      let interests = [];
      if (this.cmeModule.diseases && this.cmeModule.methods) {
        interests = this.cmeModule.diseases.concat(this.cmeModule.methods);
      }
      return interests.join();
    }
  }
};
</script>

<style>
.title-wrapper {
  padding-bottom: 0;
  height: 73px;
  align-items: flex-start;
}

.display-flex {
  display: flex;
}

.v-stepper,
.v-stepper__header {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>

<template>
  <transition mode="out-in">
    <v-content>
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
              <router-link :to="{ name: 'CmeModules'}" style="text-decoration: none;">
                <v-btn flat color="primary">Cme Online List</v-btn>
              </router-link>
              <h5 class="headline primary--text mb-3">{{currentStep.title}}</h5>
              <!--timeline and Director's info -->
              <v-layout wrap row>
                <v-flex d-flex xs12 sm3>
                  <v-layout row wrap>
                    <!-- timeline -->
                    <cme-timeline/>
                    <!-- Director's info -->
                    <v-flex>
                      <v-card>
                        <v-card-title>
                          <v-layout row wrap>
                            <v-flex xs12 style="padding-left: 33%;">
                              <v-avatar size="84" class="object-center">
                                <!-- <img :src="avatarModuleDirector"> -->
                              </v-avatar>
                            </v-flex>
                            <v-flex xs12>
                              <p class="subheading font-weight-bold text-xs-center">
                                G. Rohde, MD
                                <br>
                                <span class="grey--text font-weight-regular">Main Organiser</span>
                              </p>

                              <v-list two-line>
                                <v-list-tile avatar>
                                  <v-list-tile-content>
                                    <v-list-tile-title>C. Gregoretti</v-list-tile-title>
                                    <v-list-tile-sub-title>Organiser</v-list-tile-sub-title>
                                  </v-list-tile-content>
                                </v-list-tile>
                                <v-divider/>
                              </v-list>
                              <v-list two-line>
                                <v-list-tile avatar>
                                  <v-list-tile-content>
                                    <v-list-tile-title>C. Gregoretti</v-list-tile-title>
                                    <v-list-tile-sub-title>Organiser</v-list-tile-sub-title>
                                  </v-list-tile-content>
                                </v-list-tile>
                              </v-list>
                            </v-flex>
                          </v-layout>
                        </v-card-title>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex v-if="hasValue(currentStep.component)" xs12 sm9>
                  <component :is="buildCmeOnlineComponentName(currentStep.component)"/>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import { formMixin } from "@/mixins/formMixin";
import CmeTimeline from "@/components/cme-online/CmeTimeline";
import CmeTabsPanel from "@/components/cme-online/CmeTabsPanel";
import CmeVideoPanel from "@/components/cme-online/CmeVideoPanel";
import CmeReferencesPanel from "@/components/cme-online/CmeReferencesPanel";
import CmeSimulationPanel from "@/components/cme-online/CmeSimulationPanel";
import { mapState } from "vuex";

export default {
  name: "cme-module-detail",
  components: {
    CmeTimeline,
    CmeTabsPanel,
    CmeVideoPanel,
    CmeReferencesPanel,
    CmeSimulationPanel
  },
  mixins: [formMixin],
  computed: {
    ...mapState("cmeOnline", ["cmeModule", "currentStep"])
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
</style>

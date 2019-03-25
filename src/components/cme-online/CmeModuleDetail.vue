<template>
  <transition mode="out-in">
    <v-content>
      <v-layout>
        <v-flex>
          <v-card>
            <v-card-title>
              <h4 class="headline py-4 pl-2">Pneumococcal and influenza vaccination</h4>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <v-container align-center>
        <v-layout>
          <v-flex>
            <!-- container for wrap starts-->
            <v-container fluid grid-list-lg>
              <h5 class="headline primary--text mb-3">{{currentTitle}}</h5>

              <!--timeline and Director's info -->
              <v-layout wrap row>
                <v-flex d-flex xs12 sm3>
                  <v-layout row wrap>
                    <!-- timeline -->
                    <cme-timeline/>
                    <!-- <v-flex d-flex>
                      <v-card>
                        <v-card-text>
                          <v-timeline dense clipped>
                            <v-timeline-item
                              v-for="contentTitle in contentTitles"
                              :key="contentTitle.id"
                              class="mb-3"
                              small
                            >
                              <v-layout justify-space-between>
                                <button
                                  class="text-xs-left"
                                  @click="switchComponent(contentTitle.component); switchTitle(contentTitle.title); switchColor()"
                                >{{contentTitle.title}}</button>
                              </v-layout>
                            </v-timeline-item>
                          </v-timeline>
                        </v-card-text>
                      </v-card>
                    </v-flex>-->
                    <!-- Director's info -->
                    <v-flex>
                      <v-card>
                        <v-card-title>
                          <v-layout row wrap>
                            <v-flex xs12 style="padding-left: 33%;">
                              <v-avatar size="84" class="object-center">
                                <img :src="avatarModuleDirector">
                              </v-avatar>
                            </v-flex>
                            <v-flex xs12>
                              <p class="subheading font-weight-bold text-xs-center">G. Rohde, MD
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
                <!-- Tabs -->
                <component :is="currentComp"/>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import CmeTimeline from "./CmeTimeline";
import CmeIntroduction from "./CmeIntroduction";
import CmeSimulation from "./CmeSimulation";
import CmePanelDiscussionVideo from "./CmePanelDiscussionVideo";
import CmeReadings from "./CmeReadings";

export default {
  name: "cme-module-detail",
  components: {
    CmeTimeline,
    CmeIntroduction,
    CmeSimulation,
    CmePanelDiscussionVideo,
    CmeReadings
  },
  data() {
    return {
      currentComp: "cme-introduction",
      currentTitle: "Introduction",
      stepDefaultColor: "grey",
      stepActiveColor: "blue lighten-3",
      isActive: true,
      avatarModuleDirector:
        "https://www.ers-education.org/media/CmeAdmin/12_authorPicture.png",
      contentTitles: [
        {
          title: "Introduction",
          component: "cme-introduction"
        },
        {
          title: "Interactive case - Simulation",
          component: "cme-simulation"
        },
        {
          title: "Panel discussion video",
          component: "cme-panel-discussion-video"
        },
        {
          title: "Readings",
          component: "cme-readings"
        },
        {
          title: "TAKE THE CME TEST"
        }
      ],
      active: null
    };
  },

  methods: {
    switchComponent: function(comp) {
      this.currentComp = comp;
    },
    switchTitle: function(title) {
      this.currentTitle = title;
    },
    switchColor: function() {
      this.stepDefaultColor = this.stepActiveColor;
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
</style>

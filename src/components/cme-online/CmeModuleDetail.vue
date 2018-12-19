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
              <!--timeline and Director's info -->
              <v-layout wrap row>
                <v-flex d-flex xs12 sm3>
                  <v-layout row wrap>
                    <!-- Director's info -->
                    <v-flex>
                      <v-card>
                        <v-card-title>
                          <v-layout row wrap>
                            <v-flex xs12 style="padding-left: 33%;">
                              <v-avatar size="84" class="object-center">
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avatar">
                              </v-avatar>
                            </v-flex>
                            <v-flex xs12>
                              <p class="subheading font-weight-bold text-xs-center">G. Rohde, MD
                                <br>
                                <span class="grey--text font-weight-regular">Module Director</span>
                              </p>
                            </v-flex>
                          </v-layout>
                        </v-card-title>
                      </v-card>
                    </v-flex>
                    <!-- timeline -->
                    <v-flex d-flex>
                      <v-card>
                        <v-card-text>
                          <v-timeline dense clipped>
                            <v-timeline-item
                              class="mb-3"
                              color="grey"
                              icon-color="grey lighten-2"
                              small
                            >
                              <v-layout justify-space-between>Introduction</v-layout>
                            </v-timeline-item>

                            <v-timeline-item
                              class="mb-3"
                              color="grey"
                              icon-color="grey lighten-2"
                              small
                            >
                              <v-layout justify-space-between>
                                <strong>Interactive case - Simulation</strong>
                              </v-layout>
                            </v-timeline-item>

                            <v-timeline-item class="mb-3" small>
                              <v-layout justify-space-between>Panel discussion video</v-layout>
                            </v-timeline-item>

                            <v-timeline-item class="mb-3" color="grey" small>
                              <v-layout justify-space-between>Readings</v-layout>
                            </v-timeline-item>

                            <v-timeline-item fill-dot class="mb-1" color="orange" large>
                              <span slot="icon" class="white--text">JL</span>
                              <v-btn class="mx-0" color="white">Take the CME test</v-btn>
                            </v-timeline-item>
                          </v-timeline>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 sm9>
                  <div>
                    <v-tabs fixed-tabs class="elevation-1">
                      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
                      <v-tab-item v-for="text in texts" :key="text">
                        <v-card flat>
                          <v-card-text>{{ text }}</v-card-text>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </div>
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
export default {
  name: "cme-module-detail",
  data() {
    return {
      active: null,
      items: ["Introduction", "Educational objectives", "Target audience"],
      texts: [
        "Vaccination is amongst the most cost-effective measures available to us to improve health. The most notable example is the prevention of influenza by annual vaccination, but vaccination against pneumococcal pneumonia is also highly effective in selected populations.",
        "After the completion of this module, you will be able to",
        "Physicians caring for patients with lung infections"
      ]
    };
  }
};
</script>

<style>
.title-wrapper {
  padding-bottom: 0;
  height: 73px;
  align-items: flex-start;
}
,
.display-flex {
  display: flex;
}
</style>

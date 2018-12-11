<template>
  <transition mode="out-in">
    <v-content>
      <v-container align-center>
        <v-layout>
          <v-flex >
            <!-- container for wrap starts-->
            <v-container fluid grid-list-lg>
              <!-- 1st row-->
              <v-layout row wrap >
                <!-- 1st card -->
                <v-flex xs12 sm12 md4 lg4>
                  <v-card >
                    <v-card-title>
                      <v-layout wrap row>
                        <v-flex xs12>
                          <v-avatar size="40" class=" mr-1">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                          </v-avatar>
                          <span>method name</span>
                        </v-flex>
                        <v-flex xs12>
                          <div class="headline" >How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</div>
                        </v-flex>
                      </v-layout>
                      <div>
                        <p class="body-2">G. Rohde / P. Openshaw</p>
                        <v-chip label outline color="blue">Case Based</v-chip>
                      </div>
                      <!-- <v-layout xs12 style="margin-top:-15px;">
                        <v-flex>
                          <p class="body-2">G. Rohde / P. Openshaw</p>
                        </v-flex>
                      </v-layout> -->
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer/>
                      <v-btn flat primary-text right>MORE</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
                <!-- 2nd card -->
                <v-flex xs12 sm12 md4 lg4>
                  <v-card >
                    <v-card-title>
                      <v-layout wrap row>
                        <v-flex xs12>
                          <v-avatar size="40" class=" mr-1">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                          </v-avatar>
                          <span>method name</span>
                        </v-flex>
                        <v-flex xs12>
                          <div class="headline" >How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</div>
                        </v-flex>
                      </v-layout>
                      <div>
                        <p class="body-2">G. Rohde / P. Openshaw</p>
                        <v-chip label outline color="blue">Case Based</v-chip>
                      </div>
                      <!-- <v-layout xs12 style="margin-top:-15px;">
                        <v-flex>
                          <p class="body-2">G. Rohde / P. Openshaw</p>
                        </v-flex>
                      </v-layout> -->
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer/>
                      <v-btn flat primary-text right>MORE</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
                <!-- 3rd card -->
                <v-flex xs12 sm12 md4 lg4>
                  <v-card >
                    <v-card-title>
                      <v-layout wrap row>
                        <v-flex xs12>
                          <v-avatar size="40" class=" mr-1">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                          </v-avatar>
                          <span>method name</span>
                        </v-flex>
                        <v-flex xs12>
                          <div class="headline" >How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</div>
                        </v-flex>
                      </v-layout>
                      <div>
                        <p class="body-2">G. Rohde / P. Openshaw</p>
                        <v-chip label outline color="blue">Case Based</v-chip>
                      </div>
                      <!-- <v-layout xs12 style="margin-top:-15px;">
                        <v-flex>
                          <p class="body-2">G. Rohde / P. Openshaw</p>
                        </v-flex>
                      </v-layout> -->
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer/>
                      <v-btn flat primary-text right>MORE</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
              <!-- 2nd row-->
              <v-layout row wrap>
                <v-flex xs12 sm4>
                  <v-card >
                    <v-card-title class="title-wrapper">
                      <div>
                        <h6 class="subheading" style="line-height:1.2em;">How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</h6>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <v-layout>
                        <v-flex xs7>
                          <v-chip label outline color="blue">Case Based</v-chip>
                          <div class="grey--text">FG. Rohde <br>P. Openshaw</div>
                        </v-flex>
                        <v-flex xs5 align-center>
                          <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="100px" contain class="thumbnail"/>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm4>
                  <v-card >
                    <v-card-title class="title-wrapper">
                      <div>
                        <h6 class="subheading" style="line-height:1.2em;">Air pollution and respiratory health</h6>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <v-layout>
                        <v-flex xs7>
                          <div class="grey--text">FG. Rohde <br >P. Openshaw</div>
                        </v-flex>
                        <v-flex xs5 align-center>
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                            height="100px"
                            contain
                            class="thumbnail"
                          />
                        </v-flex>

                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm4>
                  <v-card >
                    <v-card-title class="title-wrapper">
                      <div>
                        <h6 class="subheading" style="line-height:1.2em;">How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</h6>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <v-layout>
                        <v-flex xs7>
                          <div class="grey--text">FG. Rohde <br >P. Openshaw</div>
                        </v-flex>
                        <v-flex xs5 align-center>
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                            height="100px"
                            contain
                            class="thumbnail"
                          />
                        </v-flex>

                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <!-- 3rd row-->
              <v-layout row wrap>
                <v-flex xs12 sm4>
                  <v-card >
                    <v-card-title class="title-wrapper">
                      <div>
                        <h6 class="subheading" style="line-height:1.2em;">How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</h6>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <v-layout>
                        <v-flex xs7>
                          <v-chip label outline color="blue">Case Based</v-chip>
                          <div class="grey--text">FG. Rohde <br>P. Openshaw</div>
                        </v-flex>
                        <v-flex xs5 align-center>
                          <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="100px" contain class="thumbnail"/>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm4>
                  <v-card >
                    <v-card-title class="title-wrapper">
                      <div>
                        <h6 class="subheading" style="line-height:1.2em;">Air pollution and respiratory health</h6>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <v-layout>
                        <v-flex xs7>
                          <div class="grey--text">FG. Rohde <br >P. Openshaw</div>
                        </v-flex>
                        <v-flex xs5 align-center>
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                            height="100px"
                            contain
                            class="thumbnail"
                          />
                        </v-flex>

                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm4>
                  <v-card >
                    <v-card-title class="title-wrapper">
                      <div>
                        <h6 class="subheading" style="line-height:1.2em;">How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</h6>
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <v-layout>
                        <v-flex xs7>
                          <div class="grey--text">FG. Rohde <br >P. Openshaw</div>
                        </v-flex>
                        <v-flex xs5 align-center>
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                            height="100px"
                            contain
                            class="thumbnail"
                          />
                        </v-flex>

                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <!-- title row -->
              <v-layout row wrap>
                <v-flex xs12 sm12>
                  <v-card >
                    <v-card-title class="title-wrapper">
                      <v-layout row wrap>
                        <v-flex xs12 sm12>
                          <h5 class="headline ml-3">Pneumococcal and influenza vaccination</h5>
                        </v-flex>

                      </v-layout>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>

              <!--timeline and Director's info -->
              <v-layout wrap row>
                <v-flex d-flex xs12 sm3>
                  <v-layout row wrap>
                    <!-- Director's info -->
                    <v-flex>
                      <v-card >
                        <v-card-title>
                          <v-layout row wrap>
                                
                            <v-flex xs12 style="padding-left: 33%;">
                              <v-avatar
                                size="84"
                                class="object-center"
                              >
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="avatar">
                              </v-avatar>
                            </v-flex>
                            <v-flex xs12>
                              <p class="subheading font-weight-bold text-xs-center">G. Rohde, MD<br><span class="grey--text font-weight-regular">Module Director</span></p>
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
                              <v-layout justify-space-between>
                                Introduction
                              </v-layout>
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

                            <v-timeline-item
                              class="mb-3"
                              small
                            >
                              <v-layout justify-space-between>
                                Panel discussion video
                              </v-layout>
                            </v-timeline-item>

                            <v-timeline-item
                              class="mb-3"
                              color="grey"
                              small
                            >
                              <v-layout justify-space-between>
                                Readings
                              </v-layout>
                            </v-timeline-item>
                
                            <v-timeline-item
                              fill-dot
                              class="mb-1"
                              color="orange"
                              large
                            >
                              <span slot="icon" class="white--text">JL</span>
                              <v-btn
                                class="mx-0"
                                color="white"
                              >
                                Take the CME test
                              </v-btn>
                            </v-timeline-item>

                          </v-timeline>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 sm9>
                  <div>
                    <v-tabs
                      fixed-tabs
                      class="elevation-1"
                    >
                      <v-tab
                        v-for="item in items"
                        :key="item"
                      >
                        {{  item  }}
                      </v-tab>
                      <v-tab-item
                        v-for="text in texts"
                        :key="text"
                      >
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
  name: "cme-course",
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

<template>
  <transition mode="out-in">
    <v-content>
      <cme-module-filter />
      <v-container align-center fluid grid-list-lg>
        <!-- container for wrap starts-->
        <!-- 1st row-->
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-title class="title-wrapper">
                <div>
                  <h6
                    class="subheading"
                    style="line-height:1.2em;"
                  ><a href="/cme-online/modules/module-detail">How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</a></h6>
                </div>
              </v-card-title>
              <v-card-text>
                <v-layout>
                  <v-flex xs7>
                    <v-chip label outline color="indigo darken-4">Case Based</v-chip>
                    <div class="grey--text">FG. Rohde
                      <br>P. Openshaw
                    </div>
                  </v-flex>
                  <v-flex xs5 align-center>
                    <v-img
                      :src="img" 
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
            <v-card>
              <v-card-title class="title-wrapper">
                <div>
                  <h6
                    class="subheading"
                    style="line-height:1.2em;"
                  ><a href="/cme-online/modules/module-detail">How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</a></h6>
                </div>
              </v-card-title>
              <v-card-text>
                <v-layout>
                  <v-flex xs7>
                    <v-chip label outline color="indigo darken-4">Case Based</v-chip>
                    <div class="grey--text">FG. Rohde
                      <br>P. Openshaw
                    </div>
                  </v-flex>
                  <v-flex xs5 align-center>
                    <v-img
                      :src="img" 
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
            <v-card>
              <v-card-title class="title-wrapper">
                <div>
                  <h6
                    class="subheading"
                    style="line-height:1.2em;"
                  ><a href="/cme-online/modules/module-detail">How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</a></h6>
                </div>
              </v-card-title>
              <v-card-text>
                <v-layout>
                  <v-flex xs7>
                    <v-chip label outline color="indigo darken-4">Case Based</v-chip>
                    <div class="grey--text">FG. Rohde
                      <br>P. Openshaw
                    </div>
                  </v-flex>
                  <v-flex xs5 align-center>
                    <v-img
                      :src="img" 
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
        <!-- 2nd row-->
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-title class="title-wrapper">
                <div>
                  <h6
                    class="subheading"
                    style="line-height:1.2em;"
                  ><a href="/cme-online/modules/module-detail">How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</a></h6>
                </div>
              </v-card-title>
              <v-card-text>
                <v-layout>
                  <v-flex xs7>
                    <v-chip label outline color="indigo darken-4">Case Based</v-chip>
                    <div class="grey--text">FG. Rohde
                      <br>P. Openshaw
                    </div>
                  </v-flex>
                  <v-flex xs5 align-center>
                    <v-img
                      :src="img" 
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
            <v-card>
              <v-card-title class="title-wrapper">
                <div>
                  <h6
                    class="subheading"
                    style="line-height:1.2em;"
                  ><a href="/cme-online/modules/module-detail">How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</a></h6>
                </div>
              </v-card-title>
              <v-card-text>
                <v-layout>
                  <v-flex xs7>
                    <v-chip label outline color="indigo darken-4">Case Based</v-chip>
                    <div class="grey--text">FG. Rohde
                      <br>P. Openshaw
                    </div>
                  </v-flex>
                  <v-flex xs5 align-center>
                    <v-img
                      :src="img" 
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
            <v-card>
              <v-card-title class="title-wrapper">
                <div>
                  <h6
                    class="subheading"
                    style="line-height:1.2em;"
                  ><a href="/cme-online/modules/module-detail">How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</a></h6>
                </div>
              </v-card-title>
              <v-card-text>
                <v-layout>
                  <v-flex xs7>
                    <v-chip label outline color="indigo darken-4">Case Based</v-chip>
                    <div class="grey--text">FG. Rohde
                      <br>P. Openshaw
                    </div>
                  </v-flex>
                  <v-flex xs5 align-center>
                    <v-img
                      :src="img" 
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


      </v-container>
    </v-content>
  </transition>
</template>

<script>
import CmeModuleFilter from "./components/CmeModuleFilter";

export default {
  name: "cme-modules",
  components: { CmeModuleFilter },
  data() {
    return {
      active: null,
      items: ["Introduction", "Educational objectives", "Target audience"],
      texts: [
        "Vaccination is amongst the most cost-effective measures available to us to improve health. The most notable example is the prevention of influenza by annual vaccination, but vaccination against pneumococcal pneumonia is also highly effective in selected populations.",
        "After the completion of this module, you will be able to",
        "Physicians caring for patients with lung infections"
      ],
      img:
        "https://www.ers-education.org/media/1009230/coverflow-image-background.jpg"
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

a {
  text-decoration: none;
}
</style>

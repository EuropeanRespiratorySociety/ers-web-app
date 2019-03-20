<template>
  <transition mode="out-in">
    <v-content>
      <cme-module-filter/>
      <v-container align-center fluid grid-list-lg>
        <!-- container for wrap starts-->
        <!-- 1st row-->
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-card>
              <v-card-title class="title-wrapper">
                <div>
                  <h6 class="subheading" style="line-height:1.2em;">
                    <a
                      href="/cme-online/modules/module-detail"
                    >How to diagnose primary ciliary dyskinesia according to ERS 2017 guidelines</a>
                  </h6>
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
                  <!-- <v-flex xs5 align-center>
                    <v-img :src="img" height="100px" contain class="thumbnail"/>
                  </v-flex>-->
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
import CmeModuleFilter from "./CmeModuleFilter";

export default {
  name: "cme-modules",
  components: { CmeModuleFilter },
  created() {
    this.$store.dispatch("cmeOnline/fetchCmeModules", null);
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

a {
  text-decoration: none;
}
</style>

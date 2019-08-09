<template>
  <div>
    <v-card flat class="mb-5">
      <div>
        <v-card-title v-if="hasValue(currentPanel.title)" primary-title>
          <h3 class="title mb-0">{{currentPanel.title}}</h3>
        </v-card-title>
        <div v-if="hasValue(currentPanel.description)" class="mx-3 mb-4">
          <span v-html="formatLinkTargetBlank(currentPanel.description)" />
        </div>
      </div>
      <v-tabs v-if="hasValue(currentPanel.tabs)" v-model="activeTab" fixed-tabs grow>
        <v-tab
          v-for="(tab, index) in currentPanel.tabs"
          :key="index"
          class="tab-active-background"
        >{{ tab.title }}</v-tab>
        <v-tab-item v-for="(tab, index) in currentPanel.tabs" :key="index">
          <v-card flat>
            <v-card-text>
              <v-container>
                <v-layout row wrap>
                  <v-flex :sm12="!hasValue(tab.media)" :sm7="hasValue(tab.media)" xs12>
                    <span v-html="formatLinkTargetBlank(tab.description)" />
                  </v-flex>
                  <v-flex v-if="hasValue(tab.media)" xs12 sm5>
                    <viewer ref="viewer" class="viewer" @inited="inited">
                      <img
                        v-if="tab.media==='image'"
                        :src="(imageSource(tab.imageBig, tab.externalImageBigLink)).src"
                        width="100%"
                      >
                      <vue-plyr v-else>
                        <video
                          :poster="(imageSource(tab.imageBig, tab.externalImageBigLink)).src"
                          :src="tab.mediaUrl"
                        >
                          <source :src="tab.mediaUrl" type="video/mp4" >
                        </video>
                      </vue-plyr>
                    </viewer>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable */
import { formMixin } from "@/mixins/formMixin";
import { mapState } from "vuex";
import Viewer from "v-viewer/src/component.vue";

export default {
  name: "cme-tabs-panel",
  components: {
    Viewer
  },
  mixins: [formMixin],
  data() {
    return {
      activeTab: 0
    };
  },
  computed: {
    ...mapState("cmeOnline", ["currentPanel"]),
    currentPanel() {
      const panel = this.$store.state.cmeOnline.currentPanel;
      this.activeTab = 0;
      return panel;
    }
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer;
    },
    show() {
      this.$viewer.show();
    }
  }
};
</script>

<style>
.tab-active-background a.v-tabs__item--active {
  background-color: rgba(227, 242, 253, 0.9);
  border-radius: 4px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
}
</style>

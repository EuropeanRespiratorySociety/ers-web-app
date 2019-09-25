<template>
  <div>
    <v-card flat class="mb-5">
      <div>
        <v-card-title
          v-if="hasValue(currentPanel.title)"
          :class="{ 'mb-0': currentPanel.description, 'mb-3': !currentPanel.description }"
          primary-title
        >
          <h3 class="title">{{currentPanel.title}}</h3>
        </v-card-title>
        <div
          v-if="hasValue(currentPanel.description)"
          :class="{'mt-3': !currentPanel.title }"
          class="mx-3 mb-4"
        >
          <span v-html="formatLinkTargetBlank(currentPanel.description)" />
        </div>
      </div>
      <v-tabs
        v-if="hasValue(currentPanel.tabs)"
        fixed-tabs
        grow
        class="tab-baseline"
      >
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
  computed: {
    ...mapState("cmeOnline", ["currentPanel"]),
    currentPanel() {
      const panel = this.$store.state.cmeOnline.currentPanel;
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
.tab-baseline .v-tabs__container:after {
  display: block;
  content: "";
  height: 2px;
  background: #ddd;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.tab-baseline .v-tabs__slider-wrapper {
  z-index: 1;
}

.tab-active-background a.v-tabs__item--active {
  background-color: rgba(227, 242, 253, 0.9);
  border-radius: 4px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
}

.plyr__poster {
  background-color: #fff;
}
</style>

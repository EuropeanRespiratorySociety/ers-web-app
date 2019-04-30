<template>
  <div>
    <v-card flat class="mb-5">
      <v-card-title v-if="hasValue(currentPanel.title)">
        <h3 class="title mb-0">{{ currentPanel.title }}</h3>
      </v-card-title>
      <v-card-text>
        <vue-plyr>
          <video :poster="currentPanel.image" :src="currentPanel.mediaUrl">
            <source :src="currentPanel.mediaUrl" type="video/mp4">
          </video>
        </vue-plyr>
        <p v-if="hasValue(currentPanel.description)">
          <span v-html="currentPanel.description"/>
        </p>
        <p>flash</p>
        <div class="video_frame">
          <iframe
            src="https://www.ers-education.org/ersMade/webcasts/cmeonline/sleep-studies/player.html"
            frameborder="0"
            allow="fullscreen"
          />
        </div>
        <p>No Flash</p>
        <div class="video_frame">
          <iframe
            src="https://www.ers-education.org/ersMade/webcasts/cmeonline/pseudomonas2/index.html"
            frameborder="0"
            allow="fullscreen"
          />
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { formMixin } from "@/mixins/formMixin";
import { mapState } from "vuex";

export default {
  name: "cme-video-panel",
  mixins: [formMixin],
  computed: {
    ...mapState("cmeOnline", ["currentPanel"])
  }
};
</script>

<style scoped>
.video_frame {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}
.video_frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

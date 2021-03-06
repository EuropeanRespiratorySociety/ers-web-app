<template>
  <div>
    <v-card flat class="mb-5">
      <v-card-title v-if="hasValue(currentPanel.title)">
        <h3 class="title mb-0">{{ currentPanel.title }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-if="hasValue(currentPanel.description)">
          <span v-html="formatLinkTargetBlank(currentPanel.description)" />
          <br >
        </p>
        <div v-if="currentPanel.mediaType === 'external'" class="video_frame">
          <iframe :src="currentPanel.mediaUrl" frameborder="0" allowfullscreen scrolling="no" />
        </div>
        <vue-plyr v-else ref="plyr">
          <video
            :poster="imageSource(currentPanel.image, currentPanel.externalImageLink)"
            :src="currentPanel.mediaUrl"
          >
            <source :src="currentPanel.mediaUrl" :type="currentPanel.mediaType" >
          </video>
        </vue-plyr>
        <div v-if="hasValue(currentPanel.timetable, true)" class="mt-4">
          <ul style="padding-left: 5px;">
            <li
              v-for="(item, index) in currentPanel.timetable"
              :key="index"
              class="pb-2"
              style="list-style-type: none; text-decoration: none; "
            >
              <v-icon style="vertical-align: middle;">playlist_play</v-icon>
              <a href="#" style="text-decoration: none;" @click.prevent="setCurrentTime(item.time)">
                <strong>{{ setLabelTime(item) }}</strong>
              </a>
            </li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { formMixin } from "@/mixins/formMixin";
import { mapState } from "vuex";
import moment from "moment";
// eslint-disable-next-line
import durationFormat from "moment-duration-format";

export default {
  name: "cme-video-panel",
  mixins: [formMixin],
  computed: {
    ...mapState("cmeOnline", ["currentStep", "currentPanel"]),
    player() {
      return this.$refs.plyr.player;
    }
  },
  methods: {
    setCurrentTime(second) {
      this.player.currentTime = second;
    },
    setLabelTime(item) {
      let duration = moment.duration({ seconds: item.time });
      let formatted = duration.format("mm:ss", {
        trim: false
      });
      return formatted + " - " + item.label;
    },
    imageSource(cdnImage, externalImage) {
      if (this.hasValue(cdnImage)) {
        return cdnImage.replace(
          "name=img500&size=500",
          "name=img1500&size=1500"
        );
      } else if (this.hasValue(externalImage)) {
        return externalImage;
      }
      return "";
    }
  }
};
</script>

<style scoped>
.video_frame {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
}
.video_frame iframe {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.plyr__poster {
  background-color: #fff;
}
</style>

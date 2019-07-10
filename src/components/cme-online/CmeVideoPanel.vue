<template>
  <div>
    <v-card flat class="mb-5">
      <v-card-title v-if="hasValue(currentPanel.title)">
        <h3 class="title mb-0">{{ currentPanel.title }}</h3>
      </v-card-title>
      <v-card-text>
        <p v-if="hasValue(currentPanel.description)">
          <span v-html="formatLinkTargetBlank(currentPanel.description)"/>
          <br>
        </p>
        <div v-if="currentPanel.mediaType === 'external'" class="video_frame">
          <iframe :src="currentPanel.mediaUrl" frameborder="0" allow="fullscreen"/>
        </div>
        <vue-plyr v-else ref="plyr">
          <video :poster="currentPanel.image" :src="currentPanel.mediaUrl">
            <source :src="currentPanel.mediaUrl" :type="currentPanel.mediaType">
          </video>
        </vue-plyr>
        <div v-if="hasValue(currentPanel.timetable, true)" class="mt-3">
          <ul>
            <li v-for="(item, index) in currentPanel.timetable" :key="index" class="pb-2">
              <!-- <button class="text-xs-left" @click="setCurrentTime(item.time)">{{ item.label }}</button> -->
              <a href="#" @click.prevent="setCurrentTime(item.time)">{{ item.label }}</a>
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

export default {
  name: "cme-video-panel",
  mixins: [formMixin],
  computed: {
    ...mapState("cmeOnline", ["currentPanel"]),
    player() {
      return this.$refs.plyr.player;
    }
  },
  methods: {
    setCurrentTime(second) {
      this.player.currentTime = second;
    }
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

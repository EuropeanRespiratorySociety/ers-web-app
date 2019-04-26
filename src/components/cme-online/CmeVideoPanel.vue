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
        <!-- <p>
          flash
          <iframe
            src="https://www.ers-education.org/ersMade/webcasts/cmeonline/sleep-studies/player.html"
            frameborder="0"
            allowfullscreen
          />
        </p>
        <p>
          No Flash
          <iframe
            src="https://www.ers-education.org/ersMade/webcasts/cmeonline/pseudomonas2/index.html"
            frameborder="0"
            allowfullscreen
          />
        </p>-->
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
</style>

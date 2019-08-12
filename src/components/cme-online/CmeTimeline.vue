<template>
  <transition mode="out-in">
    <v-flex d-flex>
      <v-card>
        <v-card-text>
          <v-timeline dense clipped>
            <v-timeline-item
              v-for="(step, index) in timeline"
              :key="index"
              :color="step.color"
              small
              class="mb-3"
            >
              <v-layout justify-space-between>
                <a href="#main" style="text-decoration:none" @click="fetchTimeline(index)">{{step.title}}</a>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-flex>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "cme-timeline",
  computed: {
    ...mapState("cmeOnline", ["cmeModule", "timeline"])
  },
  created() {
    this.$store.dispatch("cmeOnline/fetchTimeline", 0);
  },
  methods: {
    ...mapActions("cmeOnline", ["fetchTimeline"])
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
</style>

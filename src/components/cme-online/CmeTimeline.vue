<template>
  <transition mode="out-in">
    <v-flex d-flex>
      <v-card>
        <v-card-text>
          <v-timeline dense clipped>
            <v-timeline-item
              v-for="(step, index) in timeline"
              :key="index"
              class="mb-3"
              small
              color="step.color"
            >
              <v-layout justify-space-between>
                <button class="text-xs-left" @click="loadComponent(step)">{{step.title}}</button>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-flex>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "cme-timeline",
  computed: {
    ...mapState("cmeOnline", ["cmeModule"]),
    ...mapGetters("cmeOnline", ["timeline"])
  },
  methods: {
    ...mapMutations("cmeOnline", ["SET_CURRENT_STEP"]),
    loadComponent(step) {
      this.SET_CURRENT_STEP(step);
    }
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

<template>
  <transition mode="out-in">
    <v-flex d-flex>
      <v-card>
        <v-card-text>
          <v-timeline dense clipped>
            <v-timeline-item
              v-for="contentTitle in contentTitles"
              :key="contentTitle.id"
              class="mb-3"
              small
            >
              <v-layout justify-space-between>
                <button
                  class="text-xs-left"
                  @click="switchComponent(contentTitle.component); switchTitle(contentTitle.title); switchColor()"
                >{{contentTitle.title}}</button>
              </v-layout>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-flex>
  </transition>
</template>

<script>
export default {
  name: "cme-timeline",
  data() {
    return {
      currentComp: "cme-introduction",
      stepDefaultColor: "grey",
      stepActiveColor: "blue lighten-3",
      isActive: true,
      avatarModuleDirector:
        "https://www.ers-education.org/media/CmeAdmin/12_authorPicture.png",
      active: null
    };
  },

  methods: {
    switchComponent: function(comp) {
      this.currentComp = comp;
    },
    switchTitle: function(title) {
      this.currentTitle = title;
    },
    switchColor: function() {
      this.stepDefaultColor = this.stepActiveColor;
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

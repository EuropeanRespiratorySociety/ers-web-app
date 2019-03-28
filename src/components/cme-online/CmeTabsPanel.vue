<template>
  <div>
    <v-card>
      <div>
        <v-card-title v-if="hasValue(currentPanel.title)" primary-title>
          <h3 class="title mb-0">{{currentPanel.title}}</h3>
        </v-card-title>
        <div v-if="hasValue(currentPanel.description)" class="mx-3 mb-4">
          <span v-html="currentPanel.description"/>
        </div>
      </div>
      <v-tabs v-if="hasValue(currentPanel.tabs)" fixed-tabs>
        <v-tab v-for="(tabs, index) in currentPanel.tabs" :key="index">{{ tabs.title }}</v-tab>
        <v-tab-item v-for="(tabs, index) in currentPanel.tabs" :key="index">
          <v-card flat>
            <v-card-text>
              <span v-html="tabs.description"/>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
      <v-divider/>
    </v-card>
  </div>
</template>

<script>
import { formFieldMixin } from "@/mixins/formFieldMixin";
import { mapState } from "vuex";
export default {
  name: "cme-tabs-panel",
  mixins: [formFieldMixin],
  computed: {
    ...mapState("cmeOnline", ["currentPanel"])
  }
};
</script>

<style scoped>
</style>

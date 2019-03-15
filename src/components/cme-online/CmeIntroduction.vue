<template>
  <v-flex xs12 sm9>
    <div>
      <v-tabs fixed-tabs class="elevation-1">
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        <v-tab-item v-for="text in texts" :key="text">
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: "cme-introduction",
  data() {
    return {
      active: null,
      items: ["Introduction", "Educational objectives", "Target audience"],
      texts: [
        "Vaccination is amongst the most cost-effective measures available to us to improve health. The most notable example is the prevention of influenza by annual vaccination, but vaccination against pneumococcal pneumonia is also highly effective in selected populations.",
        "After the completion of this module, you will be able to",
        "Physicians caring for patients with lung infections"
      ]
    };
  }
};
</script>

<template>
  <div>
    <v-card>
      <div>
        <v-card-title primary-title>
          <h3 class="title mb-0">Here is your case:</h3>
        </v-card-title>
        <ul class="mx-3 mb-4">
          <li>34 year old asthmatic woman</li>
          <li>Middle of flu season</li>
          <li>Patient have been in hospital prior to the event</li>
        </ul>
      </div>
      <v-tabs fixed-tabs>
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        <v-tab-item v-for="text in texts" :key="text">
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
      <v-divider />
    </v-card>
  </div>
</template>

<script>
export default {
  name: "cme-simuration-intro",
  data() {
    return {
      active: null,
      items: [
        "Presentation",
        "Further clinical details",
        "Features on examination"
      ],
      texts: [
        "Vaccination is amongst the most cost-effective measures available to us to improve health. The most notable example is the prevention of influenza by annual vaccination, but vaccination against pneumococcal pneumonia is also highly effective in selected populations.",
        "After the completion of this module, you will be able to",
        "Physicians caring for patients with lung infections"
      ]
    };
  }
};
</script>

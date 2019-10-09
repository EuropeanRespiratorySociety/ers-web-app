<template>
  <v-toolbar app fixed class="elevation-1" color="white">
    <v-img
      src="https://cdn.ersnet.org/preview/node/o:b06e2f124d6aa270a069?name=image500&size=500"
      max-height="40"
      max-width="294"
      contain
    />
    <!-- <v-toolbar-title>ERS CME Online</v-toolbar-title> -->
    <v-spacer />
  </v-toolbar>
</template>

<script>
export default {
  name: "cme-header",
  data() {
    return {
      fixed: false
    };
  }
};
</script>

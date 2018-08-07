<template>
  <v-bottom-nav :value="true" class="elevation-5" app color="white">
    <v-btn href="https://forms.ersnet.org/feedback" target="_blank" flat value="register">
      <span>Feedback</span>
      <v-icon>s7-chat</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  name: "site-footer",
  data() {
    return {};
  }
};
</script>

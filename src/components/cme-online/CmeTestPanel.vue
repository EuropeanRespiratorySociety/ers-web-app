<template>
  <div>
    <v-card flat class="mb-5">
      <div>
        <v-card-title primary-title>
          <h3 class="title mb-0">Access to the CME test:</h3>
        </v-card-title>
        <div class="mx-3 mb-4">
          <span v-html="content"/>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "cme-test-panel",
  data() {
    return {
      content:
        "<p>NON Members:<br> Access is free of charge. However, you need to have an ERS account to access the CME test.<br> " +
        "Please go to <a href='https://my.ersnet.org/' target='_blank'>MyERS</a> to create one. No payment is required.</p>" +
        "<p>ERS Members:<br> Please use your <a href='https://my.ersnet.org/' target='_blank'>MyERS</a> password." +
        "If you change it in <a href='https://my.ersnet.org/' target='_blank'>MyERS</a> then only this new created password will be valid.</p>"
    };
  }
};
</script>

<style scoped>
</style>

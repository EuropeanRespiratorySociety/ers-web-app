<template>
  <v-carousel height="450">
    <v-carousel-item v-for="(image,i) in images" :key="i" :src="image.src" />
  </v-carousel>
</template>

<script>
export default {
  name: "cme-landing-carousel",
  data() {
    return {
      active: null,
      images: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>

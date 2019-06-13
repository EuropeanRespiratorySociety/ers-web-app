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
          //In CloudCMS folder cmeImage/carrousel1
          src:
            "https://cdn.ersnet.org/preview/node/o:a9a9b5faa0188c1b652f?name=image1800&size=1800"
        },
        {
          //In CloudCMS folder cmeImage/carrousel2
          src:
            "https://cdn.ersnet.org/preview/node/o:ccad7c64b95819c33cc9?name=image1800&size=1800"
        },
        {
          //In CloudCMS folder cmeImage/carrousel3
          src:
            "https://cdn.ersnet.org/preview/node/o:915cc06052da9f8add8f?name=image1800&size=1800"
        }
      ]
    };
  }
};
</script>

<style>
</style>

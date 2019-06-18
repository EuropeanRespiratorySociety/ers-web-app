<template>
  <v-carousel height="500" class="pt-4">
    <v-carousel-item v-for="image in images" :key="image.index" :src="image.src">
      <!-- <div class="carousel-title">
        <h1 :class="image.class">{{ image.title }}</h1>
      </div>-->
      <v-layout fill-height align-center class="carousel-title">
        <v-flex lg4 md5 sm6 xs10 offset-lg1 offset-sm1 offset-xs1>
          <h1 class="display-2 font-weight-thin">{{ image.title }}</h1>
        </v-flex>
      </v-layout>
    </v-carousel-item>
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
            // "https://cdn.ersnet.org/preview/node/o:a9a9b5faa0188c1b652f?name=image1800&size=1800",
            "https://cdn.ersnet.org/preview/node/o:2f0dbb4ad7a94041c3ff?name=image1800&size=1800",
          title: "Study at your rhythm with ERS experts"
        },
        {
          //In CloudCMS folder cmeImage/carrousel2
          src:
            "https://cdn.ersnet.org/preview/node/o:ccad7c64b95819c33cc9?name=image1800&size=1800",
          title: "Take up interactive case studies"
        },
        {
          //In CloudCMS folder cmeImage/carrousel3
          src:
            "https://cdn.ersnet.org/preview/node/o:915cc06052da9f8add8f?name=image1800&size=1800",
          title: "Test your knowledge and collect CME credits"
        }
      ]
    };
  }
};
</script>

<style scoped>
.v-carousel {
  height: 400px;
}

.carousel-title h1 {
  background: rgba(255, 255, 255, 0.3);
  padding: 20px 25px;
  line-height: 54px !important ;
}

@media (max-width: 959px) {
  .v-carousel {
    height: 200px;
  }
}
@media (max-width: 559px) {
  .carousel-title h1 {
    padding: 20px 25px;
    line-height: 42px !important ;
    font-size: 36px !important ;
  }
}
</style>

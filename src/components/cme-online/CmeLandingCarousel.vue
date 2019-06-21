<template>
  <v-carousel height="500" class="pt-4">
    <v-carousel-item v-for="image in carrouselImages" :key="image.index" :src="image.src">
      <v-layout fill-height align-center class="carousel-title">
        <v-flex lg4 md5 sm6 xs10 offset-lg1 offset-sm1 offset-xs1>
          <h1
            class="display-2 font-weight-thin text-lg-left text-md-left text-sm-left text-xs-center"
          >{{ image.title }}</h1>
        </v-flex>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "cme-landing-carousel",
  data() {
    return {
      active: null,
      images: [
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:a9a9b5faa0188c1b652f?name=image1800&size=1800",
          title: "Study at your rhythm with ERS experts",
          isMobile: true,
          isDesktop: false
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:2f0dbb4ad7a94041c3ff?name=image1800&size=1800",
          title: "Study at your rhythm with ERS experts",
          isMobile: false,
          isDesktop: true
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:207178f4556d074e8122?name=image1800&size=1800",
          title: "Take up interactive case studies",
          isMobile: true,
          isDesktop: true
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:915cc06052da9f8add8f?name=image1800&size=1800",
          title: "Test your knowledge and collect CME credits",
          isMobile: true,
          isDesktop: true
        }
      ]
    };
  },
  computed: {
    ...mapState("base", ["isMobile"]),
    carrouselImages() {
      if (this.isMobile) return this.images.filter(image => image.isMobile);
      return this.images.select(p => p.isDesktop);
    }
  }
};
</script>
<style scoped>
.v-carousel {
  height: 400px;
}

.carousel-title h1 {
  background: rgba(255, 255, 255, 0.5);
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

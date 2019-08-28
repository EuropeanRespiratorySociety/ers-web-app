<template>
  <v-carousel v-resize="onResize" height="500" class="pt-4">
    <v-carousel-item
      v-for="image in carrouselImages"
      :key="image.index"
      :src="image.src"
      :position="image.backgroundPosition"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <!-- <v-layout align-center justify-start row fill-height class="carousel-title"> -->
      <v-layout row class="carousel-title" white--text>
        <v-flex lg4 md6 sm6 xs10 offset-lg1 offset-md3 offset-sm3 offset-xs1>
          <div class="carousel-title-box">
            <h1
              class="font-weight-medium display-3 text-lg-left text-md-center text-sm-center text-xs-center mb-2"
            >{{ image.title }}</h1>

            <div class="text-lg-left text-md-center text-sm-center text-xs-center">
              <v-btn :to="{ name: 'CmeModules'}" large dark style="background-color: #015291;">
                <strong>Start</strong>
              </v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "cme-landing-carousel",
  data() {
    return {
      images: [
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:64f840924adec459f070?name=image1800&size=1800",
          // "https://cdn.ersnet.org/preview/node/o:a9a9b5faa0188c1b652f?name=image1800&size=1800",
          title: "Study at your rhythm with ERS experts",
          backgroundPosition: "center center",
          isMobile: true,
          isDesktop: false
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:2f0dbb4ad7a94041c3ff?name=image1800&size=1800",
          title: "Study at your rhythm with ERS experts",
          backgroundPosition: "center center",
          isMobile: false,
          isDesktop: true
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:65e935e1a0087a331d50?name=image1800&size=1800",
          title: "Take up interactive case studies",
          backgroundPosition: "center center",
          isMobile: true,
          isDesktop: false
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:3cae4cf7f0a1a83843ba?name=image1800&size=1800",
          title: "Take up interactive case studies",
          backgroundPosition: "center right",
          isMobile: false,
          isDesktop: true
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:915cc06052da9f8add8f?name=image1800&size=1800",
          title: "Test your knowledge and collect CME credits",
          backgroundPosition: "center center",
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
      return this.images.filter(image => image.isDesktop);
    },
    fontSizeLandingBanner() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "3em";
        default:
          return "5em";
      }
    }
  },
  methods: {
    ...mapActions("base", ["setMobile"]),
    onResize() {
      this.$vuetify.breakpoint.smAndDown
        ? this.setMobile(true)
        : this.setMobile(false);
      this.$forceUpdate();
    }
  }
};
</script>
<style scoped>
.carousel-title-box {
  position: relative;
  z-index: 1;
}

.carousel-title::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1); /* black filter on the carousel images*/
}

.carousel-title {
  position: relative;
}

.carousel-title {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 500px;
  box-sizing: border-box;
}

.carousel-title h1 {
  line-height: 65px !important ;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
}

.carousel-title-box {
  /* background: rgba(255, 255, 255, 0.7); */
  padding: 30px 30px;
}

@media (max-width: 959px) {
}
@media (max-width: 559px) {
  .carousel-title h1 {
    line-height: 42px !important ;
    font-size: 36px !important ;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>

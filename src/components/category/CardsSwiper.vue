<template>
  <v-container>
    <v-layout row wrap class="wide">
      <h3 v-if="title" class="section-header">{{title|caps}}</h3>
      <v-container :class="[bgColor]" :style="[titleStyle, otherPaddings, {transition: '0.5s padding ease-out'}]" grid-list-md>
        <div v-if="articles">
          <swiper :options="swiperOption" :ref="title|slug" @reachEnd="end" @reachBeginning="start">
            <swiper-slide v-for="(post, mainKey) in articles" :key="post.slug">
              <v-card
                :href="!parent ? post.page_url : null"
                :to="parent ? `${parent}/${post.slug}` : null"
                hover
              >
                <v-img v-if="post.image" :src="post.image" height="200px"/>
                <v-card-title v-if="post.title || post.abstractTitle" primary-title>
                  <div>
                    <h3 v-if="post.title" class="mb-0 truncate">{{post.title | truncate}}</h3>
                    <h3 v-if="post.abstractTitle" class="mb-0 truncate">{{post.abstractTitle | truncate}}</h3>
                  <!--<span><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</span>-->
                  </div>
                </v-card-title>

                <v-list>
                  <v-list-tile v-if="post.diseases">
                    <v-list-tile-action>
                      <v-tooltip bottom>
                        <v-icon slot="activator" color="indigo">s7-ticket</v-icon>
                        <span>Diseases</span>
                      </v-tooltip>
                    </v-list-tile-action>
                    <v-list-tile-content style="height:max-content">
                      <v-list-tile-title style="overflow: auto; height: max-content;">
                        <v-chip 
                          v-for="(disease, key) in post.diseases" 
                          v-if="disease !== 'No relevant'" 
                          :key="`${key}-${mainKey}-d`"
                        >
                          {{disease}}
                        </v-chip>
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile v-if="post.methods">
                    <v-list-tile-action>
                      <v-tooltip bottom>
                        <v-icon slot="activator" color="indigo">s7-ticket</v-icon>
                        <span>Methods</span>
                      </v-tooltip>
                    </v-list-tile-action>
                    <v-list-tile-content style="height:max-content">
                      <v-list-tile-title style="overflow: auto; height: max-content;">
                        <v-chip
                          v-for="(method, key) in post.methods" 
                          v-if="method !== 'No relevant'" 
                          :key="`${key}-${mainKey}-m`"
                        >
                          {{method}}
                        </v-chip>
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                
                <v-card-text class="truncate" style="width:auto;">
                  <span v-if="post.shortLead" v-html="post.shortLead"/>
                  <span v-if="post.abstractText" v-html="post.abstractText"/>
                  <span v-if="post.authors && !post.abstractText"> {{post.authors.join(', ')}}</span>
                </v-card-text>
              </v-card>
            </swiper-slide>
          </swiper>
        </div>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import { slugify, truncate, upperCase } from "../../filters";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "cards-swiper",

  filters: {
    truncate: string => truncate(string, 90),
    caps: string => upperCase(string),
    slug: string => slugify(string)
  },

  components: { swiper, swiperSlide },

  props: {
    articles: { type: Array, default: () => [] },
    title: { type: String | Boolean, default: false },
    color: { type: String, default: "grey lighten-1" },
    parent: { type: String, default: "news" }
  },

  data() {
    return {
      otherPaddings: {
        paddingLeft: "20px",
        paddingBottom: "20px",
        paddingRight: "0"
      },
      swiperOption: {
        spaceBetween: 20,
        slidesPerView: 2.5,
        grabCursor: true,
        keyboard: {
          enabled: true
        },
        breakpoints: {
          // when window width is <= 640px
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20
          }
        }
      }
    };
  },

  computed: {
    titleStyle() {
      return this.title.length > 0
        ? { paddingTop: "45px" }
        : { paddingTop: "20px" };
    },

    bgColor() {
      return this.color;
    },

    swiper() {
      return this.$refs[slugify(this.title)].swiper;
    }
  },

  methods: {
    padding(v) {
      this.otherPaddings =
        v === "end"
          ? { paddingLeft: "0", paddingBottom: "20px", paddingRight: "20px" }
          : { paddingLeft: "20px", paddingBottom: "20px", paddingRight: "0" };
    },

    end() {
      this.padding("end");
    },

    start() {
      this.padding("start");
    }
  }
};
</script>

<style scoped>
@import "../../../node_modules/swiper/dist/css/swiper.css";

.truncate {
  overflow: hidden;
  min-height: 72px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card__text {
  padding-top: 0;
}

.section-header {
  bottom: -52px;
  margin-top: -40px;
  position: relative;
  margin-left: 20px;
  z-index: 1;
}

.wide {
  margin-left: -32px !important;
  margin-right: -32px !important;
}
</style>

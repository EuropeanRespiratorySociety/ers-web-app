<template>
<v-container>
  <v-layout row wrap class="wide">
    <h3 class="section-header">{{title|caps}}</h3>
    <v-container grid-list-md :class="[bgColor]" :style="[titleStyle, otherPaddings, {transition: '0.5s padding ease-out'}]">
      <div v-if="articles">
        <swiper @reachEnd="end" @reachBeginning="start" :options="swiperOption" :ref="title|slug">
          <swiper-slide v-for="post of articles" :key="post.slug">
            <v-card
              hover
              :href="!parent ? post.page_url : null"
              :to="parent ? `${parent}/${post.slug}` : null"
            >
              <v-card-media v-if="post.image" :src="post.image" height="200px">
              </v-card-media>
              <v-card-title v-if="post.title" primary-title>
                <div>
                  <h3 class="mb-0 truncate">{{post.title | truncate}}</h3>
                  <!--<span><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</span>-->
                </div>
              </v-card-title>
              <v-card-text class="truncate" style="width:auto;">
                <span v-if="post.shortLead" v-html="post.shortLead"></span>
                <span v-if="post.authors"> {{post.authors.join(', ')}}</span>
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
import * as _ from 'lodash/truncate'
import slugify from '@sindresorhus/slugify'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'cards-swiper',

  props: ['articles', 'title', 'color', 'parent'],

  data () {
    return {
      otherPaddings: { paddingLeft: '20px', paddingBottom: '20px', paddingRight: '0' },
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
    }
  },

  computed: {
    titleStyle () {
      return this.title.length > 0
        ? { paddingTop: '45px' }
        : { paddingTop: '20px' }
    },

    bgColor () {
      return this.color
        ? this.color
        : 'grey lighten-1'
    },

    swiper () {
      return this.$refs[slugify(this.title)].swiper
    }

  },

  methods: {
    padding (v) {
      this.otherPaddings = v === 'end'
        ? { paddingLeft: '0', paddingBottom: '20px', paddingRight: '20px' }
        : { paddingLeft: '20px', paddingBottom: '20px', paddingRight: '0' }
    },

    end () {
      this.padding('end')
    },

    start () {
      this.padding('start')
    }
  },

  filters: {
    truncate: function (value) {
      return _(value, {length: 90, separator: '...'})
    },

    caps: function (value) {
      return value.toUpperCase()
    },

    slug: function (value) {
      return slugify(value)
    }
  },

  components: { swiper, swiperSlide }
}

</script>

<style scoped>
  @import '../../../node_modules/swiper/dist/css/swiper.css';

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
    margin-left: -32px!important;
    margin-right: -32px!important;
  }
</style>

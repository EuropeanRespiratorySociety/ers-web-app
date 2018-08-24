<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8>  
            <v-card>
              <v-card-text v-html="category.body"/>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md4 lg4>  
            <v-list v-for="(i, k) in interests" :key="k" subheader dense>
              <div v-if="i.title === 'diseases'">
                <v-subheader>{{"Filters" | upper}}</v-subheader>
                <v-list-tile v-for="(v, k) in i.values" :key="'value-' + k">
                  <v-list-tile-action>
                    <v-checkbox v-model="prefs" :value="v"/>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{v}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </div>
            </v-list>
          </v-flex>
        </v-layout>
        <v-radio-group v-model="type" row>
          <v-radio
            :key="'all'"
            :label="`All`"
            value="published"
          />
          <v-radio
            :key="'news'"
            :label="`News`"
            value="news"
          />
          <v-radio
            :key="'education'"
            :label="`Education`"
            value="education"
          />
        </v-radio-group>
        <v-layout row>
          <v-flex xs12>
            <cards-swiper
              v-if="articles.length > 0"
              :articles="articles"
              :parent="cpd"/>
          </v-flex>
        </v-layout>

        <cards :parent="'feed'" :articles="feed"/>
        <v-layout v-if="showPagination" justify-center>
          <v-pagination :length="pages" v-model="page" :total-visible="8"/>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { upperCaseFirstLetter } from "../../filters";
const CardsSwiper = () => import("@/components/category/CardsSwiper.vue");
const Cards = () => import("@/components/cpd/Cards.vue");

export default {
  name: "featured-cpd",
  filters: {
    upper: string => upperCaseFirstLetter(string)
  },
  components: {
    CardsSwiper,
    Cards
  },

  data() {
    return {
      prefs: []
    };
  },

  computed: {
    ...mapState("cpd", [
      "category",
      "articles",
      "feed",
      "pageNumber",
      "contentType",
      "skip",
      "limit",
      "total"
    ]),
    ...mapState("user", ["interests"]),

    pages: function() {
      return Math.ceil(this.total / this.limit);
    },

    page: {
      get() {
        console.log("pageNumber", this.pageNumber);
        return this.pageNumber;
      },

      set(value) {
        this.setPageNumber(value);
        this.getFeed(this.prefs);
      }
    },

    type: {
      get() {
        return this.contentType;
      },
      set(value) {
        console.log("type value:", value);
        this.setContentType(value);
        this.getFeed(this.prefs);
      }
    },

    showPagination() {
      return this.feed.length >= 10 || this.page > 1;
    }
  },

  watch: {
    prefs: function(v) {
      this.setPageNumber(1);
      this.getFeed(v);
    }
  },

  created() {
    this.fetchData();
  },

  metaInfo() {
    return {
      title: this.category.title
    };
  },

  methods: {
    ...mapActions("cpd", [
      "getCategory",
      "getFeed",
      "setPageNumber",
      "setContentType"
    ]),

    fetchData() {
      this.getCategory();
      this.getFeed(this.prefs);
    }
  }
};
</script>

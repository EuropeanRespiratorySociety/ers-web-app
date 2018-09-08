<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>  
            <v-card>
              <v-card-text v-html="category.body"/>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 sm12 md8 offset-md2 offset-lg2>
            <cards-swiper
              v-if="articles.length > 0"
              :articles="articles"
              :parent="'cpd'"/>
          </v-flex> 
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 offset-md2>
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
          <v-flex xs12 sm3 md2>
            <v-radio-group v-model="type">
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
          </v-flex>
          <v-flex xs12 sm3 md2>
            <v-switch :label="`Use my interests to recommend content`" v-model="myPrefs" value/>
            <v-btn :to="{'name': 'Preferences'}" small>Edit preferences</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
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
      "recommend",
      "skip",
      "limit",
      "total"
    ]),
    ...mapState("user", ["interests", "preferences"]),

    pages: function() {
      return Math.ceil(this.total / this.limit);
    },

    page: {
      get() {
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
        this.setContentType(value);
        this.getFeed(this.prefs);
      }
    },

    myPrefs: {
      get() {
        return this.recommend;
      },

      set(v) {
        this.prefs = v ? this.preferences.interests : [];
        this.setRecommend(v);
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
    this.prefs = this.myPrefs ? this.preferences.interests : this.prefs;
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
      "setContentType",
      "setRecommend"
    ]),

    fetchData() {
      this.getCategory();
      this.getFeed(this.prefs);
    }
  }
};
</script>

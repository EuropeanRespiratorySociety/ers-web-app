<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md6 lg6 offset-md3 offset-lg3>
            <congress-tools v-if="index.includes('congress')"/>
            <journal-tools v-if="index.includes('journal')"/>
            <v-container grid-list-md>
              <v-layout v-if="results" row wrap>
                <v-flex v-for="post in results" :key="post.id" xs12 sm12>
                  <card :post="post" />
                </v-flex>
              </v-layout>
            </v-container>
            <v-layout v-if="showPagination" justify-center>
              <v-pagination :length="pages" v-model="page" :total-visible="8"/>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import CongressTools from "./CongressTools.vue";
import JournalTools from "./JournalTools.vue";
import Card from "@/components/search/SearchCard.vue";
import { createNamespacedHelpers } from "vuex";

const { mapActions, mapState, mapGetters } = createNamespacedHelpers("search");

export default {
  name: "search-toolbar",
  components: { Card, CongressTools, JournalTools },
  data() {
    return {
      fixed: false
    };
  },
  metaInfo() {
    return {
      title: "ERS Search Engine"
    };
  },

  computed: {
    ...mapState({
      counters: state => state.counters,
      pageNumber: state => state.pageNumber
    }),

    ...mapGetters({
      results: "results",
      index: "index"
    }),

    showPagination() {
      return this.results.length >= 10 || this.page > 1;
    },

    pages() {
      const key = this.index.includes("congress") ? "congress" : this.index;
      return this.setPages(this.counters[key]);
    },

    page: {
      get() {
        return this.pageNumber;
      },
      set(value) {
        this.setPageNumber(value);
      }
    }
  },

  watch: {
    page(value) {
      this.setPageNumber(value);
      this.searchAll();
    }
  },

  created() {
    this.surveyMonkey();
  },

  methods: {
    ...mapActions(["setPageNumber", "searchAll"]),

    setPages(amount) {
      const f = amount => limit => Math.ceil(amount / limit);
      return f(amount)(this.$store.state.base.limit);
    },

    surveyMonkey() {
      (function(t, e, s, o) {
        var n, a, c;
        (t.SMCX = t.SMCX || []),
          e.getElementById(o) ||
            ((n = e.getElementsByTagName(s)),
            (a = n[n.length - 1]),
            (c = e.createElement(s)),
            (c.type = "text/javascript"),
            (c.async = !0),
            (c.id = o),
            (c.src = [
              "https:" === location.protocol ? "https://" : "http://",
              "widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd23T5PSOYBbHHr8dkWMsg_2B1COwL0pR7WrIQCsxQT1aPW.js"
            ].join("")),
            a.parentNode.insertBefore(c, a));
      })(window, document, "script", "smcx-sdk");
    }
  }
};
</script>

<style scoped>
.highlight {
  font-weight: bold;
  background-color: yellow;
}
</style>

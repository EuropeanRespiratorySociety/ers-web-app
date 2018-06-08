<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md6 lg6 offset-md3 offset-lg3>
            <congress-tools v-if="index.includes('congress')"></congress-tools>
            <journal-tools v-if="index.includes('journal')"></journal-tools>
            <v-container grid-list-md>
              <v-layout v-if="results" row wrap>
                <v-flex v-for="post in results" xs12 sm12 :key="post.id">
                  <card :post="post" />
                </v-flex>
              </v-layout>
            </v-container>
            <v-layout justify-center v-if="showPagination">
              <v-pagination :length="pages" v-model="page" :total-visible="8"></v-pagination>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import moment from 'moment'
import CongressTools from './CongressTools.vue'
import JournalTools from './JournalTools.vue'
import Card from '@/components/search/SearchCard.vue'
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapState, mapGetters } = createNamespacedHelpers('search')

export default {
  name: 'search-toolbar',
  data () {
    return {
      fixed: false
    }
  },
  metaInfo () {
    return {
      title: 'Search Engine'
    }
  },

  watch: {
    page (value) {
      this.setPageNumber(value)
      this.searchAll()
    }
  },

  computed: {
    ...mapState({
      counters: state => state.counters,
      pageNumber: state => state.pageNumber
    }),

    ...mapGetters({
      results: 'results',
      index: 'index'
    }),

    showPagination () {
      return this.results.length >= 10 || this.page > 1
    },

    pages () {
      const key = this.index.includes('congress') ? 'congress' : this.index
      return this.setPages(this.counters[key])
    },

    page: {
      get () {
        return this.pageNumber
      },
      set (value) {
        this.setPageNumber(value)
      }
    }
  },

  methods: {
    ...mapActions([
      'setPageNumber',
      'searchAll'
    ]),

    setPages (amount) {
      const f = amount => limit => Math.ceil(amount / limit)
      return f(amount)(this.$store.state.base.limit)
    }
  },

  filters: {
    moment: date => moment(date).format('MMMM Do YYYY, h:mm:ss a')
  },

  components: { Card, CongressTools, JournalTools }

}
</script>

<style scoped>
  .highlight {
    font-weight: bold;
    background-color: yellow;
  }

</style>

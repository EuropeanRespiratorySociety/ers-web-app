<template>
<transition mode="out-in">
  <v-content>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2 style="margin-top:-78px;">
          <v-card v-if="item" class="card--flex-toolbar">
            <v-toolbar card class="white">
              <v-toolbar-title v-if="item" class="headline grey--text">{{item.title}}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text v-if="item.body" >
              <span v-if="item.leadParagraph" v-html="item.leadParagraph"></span>
              <span v-if="item.body" v-html="item.body"></span>
            </v-card-text>
          </v-card>

        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Article',

  data () {
    return {
      previousPage: ''
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.previousPage = from
    })
  },

  created () {
    this.fetchData()
  },

  computed: {
    ...mapState('article', [
      'previous',
      'item'
    ])
  },

  methods: {
    ...mapActions('article', [
      'getArticle'
    ]),

    fetchData () {
      const payload = {
        slug: this.$route.params.slug,
        endpoint: this.$route.path.split('/')[1],
        previous: this.previousPage.path
      }
      this.getArticle(payload)
    }
  }

}
</script>

<style scoped lang="css">
  .published {
    font-size:18px!important;
    padding-right:5px;
  }

  ul {
    padding: 0 25px;
  }

</style>

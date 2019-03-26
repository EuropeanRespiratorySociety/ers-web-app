<template>
  <transition mode="out-in">
    <v-content>
      <cme-module-filter/>
      <v-container align-center fluid grid-list-lg>
        <!-- container for wrap starts-->
        <v-layout row wrap>
          <v-flex
            v-for="cmeModule in cmeModules"
            :key="cmeModule.slug"
            :module="cmeModule"
            xs12
            sm6
            md3
          >
            <v-card>
              <v-card-title class="title-wrapper">
                <div>
                  <h6 class="subheading" style="line-height:1.2em;">
                    <router-link
                      :to="{ name: 'CmeModule', params: { slug: cmeModule.slug } }"
                    >{{cmeModule.title}}</router-link>
                  </h6>
                </div>
              </v-card-title>
              <v-card-text>
                <v-layout>
                  <v-flex xs7>
                    <v-chip label outline color="indigo darken-4">{{cmeModule.cmeType}}</v-chip>
                    <div class="grey--text">
                      <span v-for="(organiser, index) in cmeModule.cmeOrganisers" :key="index">
                        <br v-if="index !== 0">
                        {{organiser.name}}
                      </span>
                    </div>
                  </v-flex>
                  <v-flex xs5 align-center>
                    <v-img
                      :src="mainOrganiserImage(cmeModule.cmeOrganisers)"
                      height="100px"
                      contain
                      class="thumbnail"
                    />
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout v-if="hasPagination" justify-center>
          <v-pagination :length="pagesTotal" v-model="page" :total-visible="8"/>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import CmeModuleFilter from "./CmeModuleFilter";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "cme-modules",
  components: { CmeModuleFilter },
  computed: {
    ...mapState("cmeOnline", [
      "cmeModules",
      "filters",
      "pageNumber",
      "cmeModulesTotal",
      "perPage"
    ]),
    ...mapGetters("cmeOnline", ["pagesTotal"]),
    page: {
      get() {
        return this.pageNumber;
      },
      set(value) {
        this.fetchCmeModulesForOnePage(value);
      }
    },
    hasPagination() {
      return this.cmeModulesTotal > this.perPage;
    }
  },
  created() {
    this.$store.dispatch("cmeOnline/fetchCmeModules");
  },
  methods: {
    ...mapActions("cmeOnline", ["fetchCmeModulesForOnePage"]),
    mainOrganiserImage(organisers) {
      let mainOrganiser = organisers.find(organiser => organiser.isMain);
      return mainOrganiser ? mainOrganiser.image : "";
    }
  }
};
</script>

<style>
.title-wrapper {
  padding-bottom: 0;
  height: 73px;
  align-items: flex-start;
}

.display-flex {
  display: flex;
}

a {
  text-decoration: none;
}
</style>

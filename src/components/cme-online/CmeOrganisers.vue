<template>
  <v-flex>
    <v-card>
      <v-card-title>
        <v-layout justify-center row wrap>
          <v-flex xs12 class="text-xs-center">
            <v-avatar
              v-if="(imageSource(mainOrganiser.image, mainOrganiser.externalImageLink)).isDefined"
              size="84"
              class="object-center"
            >
              <img :src="(imageSource(mainOrganiser.image, mainOrganiser.externalImageLink)).src">
            </v-avatar>
          </v-flex>
          <v-flex xs12>
            <p class="subheading font-weight-bold text-xs-center">
              {{ mainOrganiser.nameAndTitle }}
              <br>
              <span
                v-if="(hasValue(mainOrganiser.function))"
                class="grey--text font-weight-regular"
              >{{ mainOrganiser.function }}</span>
            </p>
            <v-list v-for="(subOrganiser, index) in subOrganisers" :key="index" two-line>
              <v-divider/>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="subOrganiser.image">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ subOrganiser.nameAndTitle }}</v-list-tile-title>
                  <v-list-tile-sub-title
                    v-if="(hasValue(subOrganiser.function))"
                  >{{ subOrganiser.function }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
import { formMixin } from "@/mixins/formMixin";
import { mapState } from "vuex";

export default {
  name: "cme-organisers",
  mixins: [formMixin],
  computed: {
    ...mapState("cmeOnline", ["cmeModule"]),
    mainOrganiser() {
      let main = this.cmeModule.cmeOrganisers.find(
        organiser => organiser.isMain
      );
      main.nameAndTitle = this.buildOrganiserNameAndTitle(main);
      return main;
    },
    subOrganisers() {
      let sub = this.cmeModule.cmeOrganisers.filter(
        organiser => !organiser.isMain
      );
      sub.map(
        organiser =>
          (organiser.nameAndTitle = this.buildOrganiserNameAndTitle(organiser))
      );
      return sub;
    }
  },
  methods: {
    buildOrganiserNameAndTitle(organiser) {
      return (
        organiser.name +
        (this.hasValue(organiser.title) ? ", " + organiser.title : "")
      );
    }
  }
};
</script>

<style scoped>
</style>

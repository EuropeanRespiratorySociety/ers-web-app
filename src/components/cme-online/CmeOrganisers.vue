<template>
  <v-flex>
    <v-card>
      <v-card-title>
        <v-layout justify-center row wrap>
          <v-flex xs12 class="text-xs-center">
            <v-flex xs12 class="text-xs-center">
              <img
                v-if="(imageSource(mainOrganiser.image, mainOrganiser.externalImageLink)).isDefined"
                :src="(imageSource(mainOrganiser.image, mainOrganiser.externalImageLink)).src"
                height="100px"
                contain
                class="circular--square"
              >
            </v-flex>
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
              <v-list-tile>
                <v-list-tile-action>
                  <img
                    v-if="(imageSource(subOrganiser.image, subOrganiser.externalImageLink)).isDefined"
                    :src="(imageSource(subOrganiser.image, subOrganiser.externalImageLink)).src"
                    height="48px"
                    contain
                    class="circular--square"
                  >
                </v-list-tile-action>
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
  data() {
    return {
      mainOrganiser: {},
      subOrganisers: []
    };
  },
  computed: {
    ...mapState("cmeOnline", ["cmeModule"])
  },
  mounted() {
    let main = this.cmeModule.cmeOrganisers.find(organiser => organiser.isMain);
    main.nameAndTitle = this.buildOrganiserNameAndTitle(main);
    this.mainOrganiser = main;
    let sub = this.cmeModule.cmeOrganisers.filter(
      organiser => !organiser.isMain
    );
    sub.map(
      organiser =>
        (organiser.nameAndTitle = this.buildOrganiserNameAndTitle(organiser))
    );
    this.subOrganisers = sub;
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
.circular--square {
  border-radius: 50%;
}
</style>

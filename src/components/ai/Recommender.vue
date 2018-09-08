<template>
  <v-content>
    <v-container fluid>
      <v-layout row>
        <v-flex v-if="abstract" xs8 offset-xs2>
          <v-btn color="success" @click="togglePersonalize">
            <span v-if="!similarityOnly">Only Similarity</span>
            <span v-if="similarityOnly">Personalize</span>
          </v-btn>
          <v-card>
            <v-card-title primary-title>
              <h3>{{ abstract.abstractTitle }}</h3>
              <p>{{ abstract._id }}</p>
            </v-card-title>
            <v-list>
              <v-list-tile v-if="abstract.diseases">
                <v-list-tile-action>
                  <v-tooltip bottom>
                    <v-icon slot="activator" color="indigo">s7-ticket</v-icon>
                    <span>Diseases</span>
                  </v-tooltip>
                </v-list-tile-action>
                <v-list-tile-content style="height:max-content">
                  <v-list-tile-title style="overflow: auto; height: max-content;">
                    <v-chip v-for="(disease, key) in abstract.diseases" :key="`${key}-d`">{{disease}}</v-chip>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile v-if="abstract.methods">
                <v-list-tile-action>
                  <v-tooltip bottom>
                    <v-icon slot="activator" color="indigo">s7-ticket</v-icon>
                    <span>Methods</span>
                  </v-tooltip>
                </v-list-tile-action>
                <v-list-tile-content style="height:max-content">
                  <v-list-tile-title style="overflow: auto; height: max-content;">
                    <v-chip v-for="(method, key) in abstract.methods" v-if="method !== 'No relevant'" :key="`${key}-m`">{{method}}</v-chip>
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-card-text v-html="abstract.abstractText"/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-layout row>
      <v-flex xs12>
        <cards-swiper
          v-if="recommended && recommended.length > 0"
          :articles="recommended"
          title="Recommended abstracts"/>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import { mapState } from "vuex";
import CardsSwiper from "@/components/category/CardsSwiper.vue";
import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:3030",
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  name: "visualiser",
  components: { CardsSwiper },
  data() {
    return {
      abstract: "",
      recommended: [],
      similarityOnly: true
    };
  },

  computed: {
    ...mapState("authentication", ["token"])
  },

  created() {
    this.getAbstract();
  },

  methods: {
    async getAbstract() {
      // const r = await HTTP.get(`/analyse?text=${this.text}`)
      const skip = Math.floor(Math.random() * 100 + 1);
      const a = await HTTP.get("/congress/abstracts", {
        params: {
          $limit: 1,
          $skip: skip,
          year: 2018
        },
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      this.abstract = a.data.data[0];

      const r = await HTTP.post(
        "/recommend",
        {
          abstract: this.abstract._id,
          similarityOnly: this.similarityOnly
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        }
      );
      this.recommended = r.data;
      console.log(r.data);

      // console.log(d.render(r.data.text, r.data.ents, ['person', 'org', 'date']))
    },

    togglePersonalize() {
      this.similarityOnly = !this.similarityOnly;
      this.recommended = [];
      this.getAbstract();
    }
  }
};
</script>

<style>
</style>

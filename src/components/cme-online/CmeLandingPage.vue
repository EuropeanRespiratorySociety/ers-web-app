<template>
  <transition mode="out-in">
    <v-content class="pt-4">
      <v-container>
        <section>
          <v-layout column wrap>
            <v-flex flex xs12>
              <v-btn :to="{ name: 'CmeModules'}" append flat color="primary">Visit the module list</v-btn>
              <h5 class="my-3 headline font-weight-medium">Official sponsors of ERS CME Online</h5>
              <p
                subheading
              >ERS CME Online modules are funded by an unrestricted grant. ERS alone is responsible for selecting the module topics and presenters.</p>
            </v-flex>
          </v-layout>
        </section>
        <!-- container for the sponsor's logo-->
        <v-container id="sponsor" fluid grid-list-lg class="mb-4">
          <v-layout row wrap>
            <v-flex v-for="(sponsor,key) in sponsors" :key="key" xs12 sm3>
              <v-card>
                <v-card-title>
                  <v-img :src="sponsor.src" width="150px" contain/>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
export default {
  name: "cme-modules",
  data() {
    return {
      active: null,
      sponsors: [
        {
          src: "https://www.ers-education.org/media/39646/astrazeneca.jpg"
        },
        {
          src:
            "https://www.ers-education.org/media/680607/pfizer_vaccines_web.png"
        },
        {
          src:
            "https://www.ers-education.org/media/103694/boehringe-logo-grey.jpg"
        },
        {
          src: "https://www.ers-education.org/media/75309/pulmonx.jpg"
        }
      ]
    };
  },
  metaInfo() {
    return {
      title: "ERS CME Online"
    };
  }
};
</script>

<style>
#sponsor .v-card {
  min-height: 120px;
}
</style>

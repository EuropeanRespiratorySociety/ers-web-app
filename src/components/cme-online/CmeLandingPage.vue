<template>
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
</template>

<script>
export default {
  name: "cme-modules",
  data() {
    return {
      active: null,
      sponsors: [
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:df2b29d2aed5e54396ef?name=image500&size=500"
          // Astra Zeneca
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:aafa1bbf3d61ecc0322e?name=image500&size=500"
          // Phizer
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:94d510ce112eecd73527?name=image500&size=500"
          // Boehringer
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:f34d05d5f9e820336904?name=image500&size=500"
          // Pulmon
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:017e82ddf405bd55a9f7?name=image500&size=500"
          // Roche
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:1c0b8a8fa26ca3ac92fa?name=image500&size=500"
          // Novartis
        },
        {
          src:
            "https://cdn.ersnet.org/preview/node/o:ab2e84dfaae07557bfc8?name=image500&size=500"
          // Teva
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
#sponsor .v-card .v-card__title {
  padding: 0;
}
</style>

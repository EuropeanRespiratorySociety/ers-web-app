<template>
  <v-content class="pt-4">
    <v-container>
      <v-container>
        <v-layout column row wrap>
          <v-flex xs12 class="px-5 mb-4">
            <router-link :to="{ name: 'CmeModules'}" class="module-link">
              <v-card dark style="background-color: #015291;">
                <v-card-text class="title">
                  <v-icon class="mr-2">assignment</v-icon>Visit the module list
                </v-card-text>
              </v-card>
            </router-link>
            <!-- <v-btn :to="{ name: 'CmeModules'}" append flat color="primary">Visit the module list</v-btn> -->
          </v-flex>
        </v-layout>
        <v-layout column wrap class="mt-4">
          <v-flex>
            <h5
              class="my-3 headline font-weight-medium text-xs-center"
            >Official sponsors of ERS CME Online</h5>
            <p
              subheading
              class="text-xs-center"
            >ERS CME Online modules are funded by an unrestricted grant. ERS alone is responsible for selecting the module topics and presenters.</p>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- container for the sponsor's logo-->
      <v-container id="sponsor" fluid grid-list-lg class="my-4">
        <v-layout row wrap>
          <v-flex v-for="(sponsor,key) in sponsors" :key="key" xs12 sm3>
            <v-card>
              <v-card-title>
                <v-img :src="sponsor.src" width="150px" contain />
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
#sponsor .v-image__image {
  background-size: 80%;
}

#sponsor .v-card .v-card__title {
  padding: 0;
}

a.module-link {
  text-decoration: none;
}
</style>

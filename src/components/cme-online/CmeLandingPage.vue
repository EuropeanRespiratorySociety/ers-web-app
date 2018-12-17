<template>
  <transition mode="out-in">
    <v-content class="pt-4">
      <v-container>
        <section>
          <v-layout align-center>
            <v-flex flex xs12 offset-lg1 lg10>
  
              <h1 display-2 class="mb-3">Welcome</h1>
              <p subheading>ERS CME Online modules provide free, open-access interactive cases, webcasts and video presentations led by experts on a range of topics in the respiratory field.<br > Each module is accredited with one CME credit. A CME certificate will
              only be awarded upon successful completion of the CME test at the end of each module.</p>
            </v-flex>
          </v-layout>
        </section>
  
        <section>
          <v-layout>
            <v-flex flex xs12>
              <h1 display-2 class="mb-3">Official sponsors of ERS CME Online</h1>
              <p subheading>ERS CME Online modules are funded by an unrestricted grant. ERS alone is responsible for selecting the module topics and presenters.</p>
            </v-flex>
          </v-layout>
        </section>
        <!-- sponsor's logo-->
        <v-container id="sponsor" align-center fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex v-for="(sponsor,i) in sponsors" :key="i" xs12 sm3>
              <v-card>
                <v-card-title>
                  <div>
                    <v-img :src="sponsor.src" width="150px" contain />
                  </div>
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
  }
};
</script>

<style>
#sponsor .v-card {
  min-height: 100px;
}
</style>

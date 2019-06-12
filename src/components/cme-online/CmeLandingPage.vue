<template>
  <transition mode="out-in">
    <v-content class="pt-4">
      <v-container>
        <section>
          <v-layout column wrap class="mb-5">
            <v-flex flex xs12>
              <h4 class="my-4 display-1">Welcome</h4>
              <p subheading>
                ERS CME Online modules provide free, open-access interactive cases, webcasts and video presentations led by experts on a range of topics in the respiratory field.
                <br>Each module is accredited with one CME credit. A CME certificate will only be awarded upon successful completion of the CME test at the end of each module.
              </p>
            </v-flex>
          </v-layout>
        </section>

        <section>
          <v-layout column wrap>
            <v-flex flex xs12>
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

        <section>
          <v-layout wrap>
            <v-flex xs12>
              <h5 class="my-3 headline font-weight-medium">Modules</h5>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12 lg8>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed eros eget nulla laoreet cursus sed at ex. Cras lacus lacus, fringilla in nisl vitae, condimentum accumsan magna. Sed at fermentum nulla, id iaculis ante. Sed sollicitudin
                iaculis velit in tristique. Praesent pretium ipsum purus, in egestas augue imperdiet nec. Praesent sit amet orci gravida, blandit mi id, aliquam lacus. Sed cursus libero vel gravida eleifend. Vestibulum nec odio fringilla, feugiat sem quis,
                feugiat augue. Nulla facilisi.
              </p>
              <div>
                <v-btn :to="{ name: 'CmeModules'}" append flat color="primary">Visit the module list</v-btn>
              </div>
            </v-flex>
            <v-flex xs12 lg4 class="pl-3">
              <v-img
                src="https://www.ers-education.org/media/39673/cmeonline_welcome_page_w-new-people.jpg"
              />
            </v-flex>
          </v-layout>
        </section>
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

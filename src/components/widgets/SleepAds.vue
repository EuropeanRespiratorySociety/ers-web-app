<template>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card color="yellow darken-3" class="white--text" href="http://www.ers-education.org/publications/handbook-series/ers-handbook-of-respiratory-sleep-medicine.aspx">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs8>
                <div>
                  <div class="headline">Sleep Medicine Textbook</div>
                  <p class="grey--text text--darken-2">Endorsed by ERS</p>
                  <p class="grey--text text--darken-3">Based on the <a target="_blank" href="http://onlinelibrary.wiley.com/doi/10.1111/jsr.12095/abstract">
                    Catalogue of knowledge and skills for sleep medicine
                  </a></p>
                </div>
              </v-flex>
              <v-flex xs4>
                <v-card-media
                  src="../../static/img/ESRS-Sleep-Medicine-Textbook_150.jpg"
                  height="215px"
                  contain
                ></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card color="yellow darken-3" class="white--text" href="http://www.ers-education.org/publications/handbook-series/ers-handbook-of-respiratory-sleep-medicine.aspx">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs8>
                <div>
                  <div class="headline">ERS Handbook of respiratory sleep medicine</div>
                  <p class="grey--text text--darken-2">Endorsed by ESRS</p>
                  <p class="grey--text text--darken-3">Accredited by European Board for Accreditation in Pneumology (EBAP)</p>
                </div>
              </v-flex>
              <v-flex xs4>
                <v-card-media
                  src="../../static/img/sleep-handbook.jpg"
                  height="215px"
                  contain
                ></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
</template>
<script>
export default {
  name: 'sleep-ads'
}
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>

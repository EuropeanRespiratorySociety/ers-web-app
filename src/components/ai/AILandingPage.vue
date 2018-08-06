<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
            <v-card class="card--flex-toolbar">
              <v-img
                height="200px"
                src="https://cdn.ersnet.org/preview/node/o:946048ac6aa505f8cc50?name=image6&size=600&v=56326:9222782a18"
              />
              <v-card-title primary-title>
                <h3 class="headline mb-0">The European Respiratory Society </h3>
              </v-card-title>
              <v-card-text>
                In order to help its members, the European Respiratory Society puts efforts in artificial intelligence.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container grid-list-md align-content-center>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 offset-md2>
            <v-card to="/ai/training-tool">
              <v-chip color="green" outline>New</v-chip>
              <v-card-title primary-title>
                <h3 class="headline mb-0" style="width:100%">Training Tool</h3>
                <div>Text classification</div>
              </v-card-title>
              <v-card-text>
                Help the European Respiratory Society to improve its text classifier
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-card class="grey lighten-2">
              <v-chip color="red" outline>Comming Soon</v-chip>
              <v-card-title primary-title>
                <h3 class="headline mb-0" style="width:100%">
                  Text classification
                </h3>
                <div>API and Web interface</div>
              </v-card-title>
              <v-card-text>
                Understand in which category, or class, an article belongs.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4 offset-md2>
            <v-card class="grey lighten-2">
              <v-chip color="red" outline>Comming Soon</v-chip>
              <v-card-title primary-title>
                <h3 class="headline mb-0" style="width:100%">Entity Extraction</h3>
              </v-card-title>
              <v-card-text>
                Analyse texts to extract useful information such as people, diseases, molecules, places, <i>etc.</i>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-card class="grey lighten-2">
              <v-chip color="red" outline>Comming Soon</v-chip>
              <v-card-title primary-title>
                <h3 class="headline mb-0">Recommender System</h3>
              </v-card-title>
              <v-card-text>
                The recommender system will be used to help improve search results and provide more relevant content.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

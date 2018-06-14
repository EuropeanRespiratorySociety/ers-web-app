<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="green lighten-4">
          <v-card-title class="title" style="height: 40px;min-height: 40px;">
            News from your network
          </v-card-title>
          <v-card-text>
              <v-layout row wrap>
                <v-flex xs12 v-for="i in 4" :key="i">
                  <v-card flat hover>
                    <v-card-title>
                      title
                    </v-card-title>
                    <v-card-text>
                      some text
                    </v-card-text>
                  </v-card>
                </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

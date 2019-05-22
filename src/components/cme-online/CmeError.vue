<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2 style="margin-top:78px;">
            <v-card class="card--flex-toolbar">
              <v-card-title primary-title>Whoops, looks like something went wrong.</v-card-title>
              <v-card-text>API doesn’t answer</v-card-text>
              <v-card-actions>
                <v-btn :to="{ name: 'CmeOnline'}" append block color="primary" outline>Go CME Online</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
export default {
  name: "cme-error"
};
</script>

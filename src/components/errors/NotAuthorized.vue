<template>
  <transition mode="out-in">
    <v-content>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2 style="margin-top:78px;">
            <v-card class="card--flex-toolbar">
              <v-card-title primary-title>
                401
              </v-card-title>
              <v-card-text>
                You are not authorized to view this page
              </v-card-text>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
export default {
  name: "not-authorized"
};
</script>

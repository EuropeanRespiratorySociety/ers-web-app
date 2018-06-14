<template>
  <v-bottom-nav class="elevation-1" app :value="true" :active.sync="e1">
    <!--  <v-btn flat value="recent">
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn flat value="favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-bottom-sheet v-model="sheet" inset>
      <v-btn slot="activator" flat value="register">
        <span>Register</span>
        <v-icon>place</v-icon>
      </v-btn>
      <v-container grid-list-md text-xs-center white>
        <v-layout row  style="height:200px" justify-center>
          <v-flex xs3 v-for="i in 3" :key="i">
            <v-card dark color="primary">
              <v-card-text class="px-0">4</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-bottom-sheet> -->
  </v-bottom-nav>
</template>

<script>
export default {
  name: 'site-footer',
  data () {
    return {
      e1: 'recent',
      sheet: false
    }
  }
}
</script>

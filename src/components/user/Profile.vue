<template>
  <transition mode="out-in">
  <v-content>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
            <v-container>
              <v-card>
              <v-card-media :src="photo" height="300px">
                <v-layout column class="media">
                    <v-card-title>
                      <v-spacer></v-spacer>
                      <v-btn icon dark class="mr-3" href="http://my.ersnet.org">
                        <v-icon>edit</v-icon>
                      </v-btn>
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-title v-if="name" :class="['white--text', ' pt-5']">
                      <div class="display-1 pt-5">{{name}}</div>
                    </v-card-title>
                  </v-layout>
                </v-card-media>
                <v-list two-line>
                  <v-list-tile v-if="user.Mobile">
                    <v-list-tile-action>
                      <v-icon color="indigo">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{user.Mobile}}</v-list-tile-title>
                      <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile v-if="user.Phone1">
                    <v-list-tile-action>
                      <v-icon v-if="!user.Mobile" color="indigo">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{user.Phone1}}</v-list-tile-title>
                      <v-list-tile-sub-title>Phone 1</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile v-if="user.Phone2">
                    <v-list-tile-action>
                      <v-icon v-if="!user.Mobile && !user.Phone1" color="indigo">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content v-if="user.Phone2">
                      <v-list-tile-title>{{user.Phone2}}</v-list-tile-title>
                      <v-list-tile-sub-title>Phone 2</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider inset></v-divider>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="indigo">mail</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content v-if="user.SmtpAddress1">
                      <v-list-tile-title>{{user.SmtpAddress1}}</v-list-tile-title>
                      <v-list-tile-sub-title>Main email</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                    </v-list-tile-action>
                    <v-list-tile-content v-if="user.SmtpAddress2">
                      <v-list-tile-title>{{user.SmtpAddress2}}</v-list-tile-title>
                      <v-list-tile-sub-title>Secondary email</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider inset></v-divider>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="indigo">location_on</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content v-if="street">
                      <v-list-tile-title>{{street}}</v-list-tile-title>
                      <v-list-tile-sub-title>{{user.MainPostalCode}} {{user.MainCity}}, {{user.MainCountryName}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                <div v-if="preferences.interests.length > 0">
                  <v-divider></v-divider>
                  <v-card-title primary-title>
                    Intersts
                  </v-card-title>
                  <v-card-text>
                    <v-chip v-for="i in preferences.interests" :key="i">{{i}}</v-chip>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn to="/preferences">Edit</v-btn>
                  </v-card-actions>
                </div>
                <div v-if="preferences.interests.length === 0">
                  <v-divider></v-divider>
                  <v-card-title primary-title>
                    Personalise your experience, add your interests
                  </v-card-title>
                  <v-card-actions>
                    <v-btn to="/preferences">Personalise</v-btn>
                  </v-card-actions>
                </div>
              </v-card>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </transition>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'user-profile',
  data () {
    return {
    }
  },

  metaInfo () {
    return {
      title: `${this.name}'s Profile`
    }
  },

  watch: {
    isAuthenticated: {
      immediate: true,
      handler (v) {
        if (!v) this.$router.push({ path: '/login' })
      }
    }
  },

  computed: {
    ...mapGetters('authentication', [
      'isAuthenticated'
    ]),

    ...mapState('user', [
      'preferences'
    ]),

    ...mapGetters('user', [
      'user',
      'name',
      'street'
    ]),

    photo () {
      if (this.user) {
        return this.user.PhotoUrl || 'https://source.unsplash.com/random/900x300'
      }
      return ''
    }
  }

}
</script>

<style scoped>
</style>

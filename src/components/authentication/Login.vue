<template>
<div>
<transition mode="out-in">
  <v-content>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm12 md6 lg4 offset-md3 offset-lg4>
          <v-container>
            <v-alert
              class="error"
              icon="warning"
              :value="alert"
              transition="scale-transition"
            >
              {{error}}
            </v-alert>
            <v-card color="grey lighten-4">
            <v-card-text>
            <v-form v-model="valid">
              <v-container fluid>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="MyERS Username"
                      v-model="username"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="input-10-2"
                      required
                      label="Enter your password"
                      hint="At least 4 characters"
                      min="4"
                      :append-icon="e2 ? 'visibility' : 'visibility_off'"
                      @click:append="() => (e2 = !e2)"
                      v-model="password"
                      :type="e2 ? 'password' : 'text'"
                      counter
                    ></v-text-field>
                        <v-btn
                          @click="submit"
                          :disabled="!valid"
                        > Login
                        </v-btn>
                        <v-btn
                          href="https://my.ersnet.org/Account/Register"
                          flat
                        > Sign up
                        </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
            </v-card-text>
          </v-card>
        </v-container>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm12 md6 lg4 offset-md3 offset-lg4>
          <v-container>
          <v-card flat>
            <v-card-text>
            <div class="body-1">
              Need a myERS account? <a href="https://my.ersnet.org/Account/Register" target="_blank">Sign up</a>
            </div>
            <div class="body-1">
              <a href="https://my.ersnet.org/Account/ForgotPassword" target="_blank">Forgotten your username or password?</a>
            </div>
              </v-card-text>
            </v-card>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</transition>
  <site-footer></site-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SiteFooter from '@/components/base/SiteFooter.vue'

export default {
  name: 'login',
  data () {
    return {
      valid: false,
      alert: false,
      e2: true,
      password: '',
      username: ''
      // emailRules: [
      //   (v) => !!v || 'E-mail is required',
      //   (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      // ]
    }
  },
  watch: {
    isAuthenticated (v) {
      if (v) {
        this.$router.push({ path: '/' })
      }
    },

    error (v) {
      if (v) this.alert = true
    }
  },

  computed: {
    ...mapGetters('authentication', [
      'isAuthenticated',
      'error'
    ])
  },

  methods: {
    ...mapActions('authentication', [
      'login'
    ]),

    submit () {
      // hint member@somewhere.com member
      const credentials = { username: this.username, password: this.password }
      this.login(credentials)
      if ('redirect' in this.$router.history.current.query) {
        this.$router.push({path: this.$router.history.current.query.redirect})
      }
    }
  },

  components: {
    SiteFooter
  }

}
</script>

<style scoped>
</style>

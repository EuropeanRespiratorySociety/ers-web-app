<template>
  <div>
    <transition mode="out-in">
      <v-content>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12 sm12 md6 lg4 offset-md3 offset-lg4>
              <v-container>
                <v-alert
                  :value="alert"
                  icon="warning"
                  class="error"
                  transition="scale-transition"
                >
                  {{error}}
                </v-alert>
                <v-card color="grey lighten-4">
                  <v-progress-linear v-if="loading" :indeterminate="loading"/>
                  <v-card-text>
                    <v-form v-model="valid">
                      <v-container fluid>
                        <v-layout row>
                          <v-flex xs12>
                            <v-text-field
                              v-model="username"
                              label="MyERS Username"
                              required
                            />
                          </v-flex>
                        </v-layout>
                        <v-layout row>
                          <v-flex xs12>
                            <v-text-field
                              :append-icon="e2 ? 'visibility' : 'visibility_off'"
                              :type="e2 ? 'password' : 'text'"
                              v-model="password"
                              name="input-10-2"
                              required
                              label="Enter your password"
                              hint="At least 4 characters"
                              min="4"
                              counter
                              @click:append="() => (e2 = !e2)"
                            />
                            <v-btn
                              :disabled="!valid"
                              @click="submit"
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
    <site-footer/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import SiteFooter from "@/components/base/SiteFooter.vue";

export default {
  name: "login",

  components: {
    SiteFooter
  },

  data() {
    return {
      valid: false,
      alert: false,
      e2: true,
      password: "",
      username: ""
      // emailRules: [
      //   (v) => !!v || 'E-mail is required',
      //   (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      // ]
    };
  },

  computed: {
    ...mapGetters("authentication", ["isAuthenticated", "error"]),
    ...mapState("authentication", ["loading"])
  },

  watch: {
    isAuthenticated(v) {
      if (v) {
        this.$router.push({ name: "Profile" });
      }
    },

    error(v) {
      if (v) this.alert = true;
    }
  },

  methods: {
    ...mapActions("authentication", ["login"]),

    async submit() {
      // hint member@somewhere.com member
      const credentials = { username: this.username, password: this.password };
      await this.login(credentials);
      if ("redirect" in this.$router.history.current.query) {
        this.$router.push({
          path: this.$router.history.current.query.redirect
        });
      } else {
        this.$router.push({
          name: "Profile"
        });
      }
    }
  }
};
</script>

<style scoped>
</style>

<script>
// import store from '@/vuex/store'
import SimpleHeader from "@/components/base/SimpleHeader.vue";
import Login from "@/components/authentication/Login.vue";
import UserPreferences from "@/components/user/Preferences.vue";
import SiteFooter from "@/components/base/SiteFooter.vue";
import { mapGetters } from "vuex";

export default {
  name: "preferences-app",
  components: { SimpleHeader, Login, UserPreferences, SiteFooter },
  computed: {
    ...mapGetters("authentication", ["isAuthenticated"])
  },

  render(h) {
    // store.dispatch('base/setParallaxImg', '', { root: false })
    const tag = this.isAuthenticated ? "user-preferences" : "login";
    return h(
      "div",
      {
        style: {
          width: "100%"
        }
      },
      [h("simple-header"), h(tag), h(SiteFooter)]
    );
  }
};
</script>

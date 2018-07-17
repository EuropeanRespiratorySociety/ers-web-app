<script>
// import store from '@/vuex/store'
import SimpleHeader from '@/components/base/SimpleHeader.vue'
import SiteFooter from '@/components/base/SiteFooter.vue'
import Login from '@/components/authentication/Login.vue'
import UserProfile from '@/components/user/Profile.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'profile-app',

  render (h) {
    // store.dispatch('base/setParallaxImg', '', { root: false })
    const tag = this.isAuthenticated ? 'user-profile' : 'login'
    return h('div', {
      style: {
        width: '100%'
      }
    }, [h('simple-header'), h(tag), h(SiteFooter)])
  },

  computed: {
    ...mapGetters('authentication', [
      'isAuthenticated'
    ])
  },

  components: { SimpleHeader, Login, UserProfile, SiteFooter }
}
</script>

<template>
    <v-navigation-drawer
      app
      v-model="drawer"
      light
      :mini-variant.sync="mini"
      disable-route-watcher
      v-resize="onResize"
    >

      <v-toolbar flat class="transparent" :style="!mini? 'margin-bottom:10px;' : ''">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <a style="color:transparent" href="https://www.ersnet.org">
                <i v-if="mini" class="icon-ers icon" style="font-size:50px; color:#d0043c;"></i>
              </a>
            </v-list-tile-avatar>
            <v-list-tile-content style="height:130px;padding: 10px 0">
              <v-list-tile-title style="height:100px;margin-top:30px">
              <div class="text-xs-center">
                <a style="color:transparent" href="https://www.ersnet.org">
                  <i class="icon-ers icon" style="font-size:80px; color:#d0043c;"></i>
                </a>
              </div>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.native.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list dense class="pt-3">
      <span v-for="(item, key) in items" :key="`${key}-${item}`">
        <v-list-tile
          v-if="displayItem(item)"
          :key="item.title"
          :to="!item.external ? item.path : null"
          :href="item.external ? item.path : null"
          :target="item.external ? '_blank' : null"
        >
          <v-list-tile-action :class="item.icon.length > 1 ? 'inline' : ''">
            <v-icon v-for="icon in item.icon" :key="icon">{{ icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-if="item.subtitle"> {{ item.subtitle }} </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          v-model="item.active"
          v-if="item.group"
          :key="item.title"
          :prepend-icon="item.icon[0]"
          no-action
        >
          <v-list-tile
            slot="activator"
            :to="!item.external ? item.path : null"
            :href="item.external ? item.path : null"
            :target="item.external ? '_blank' : null"
            >
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title v-if="item.subtitle"> {{ item.subtitle }} </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="!subItem.external ? `${item.path}${subItem.path}` : null"
            :href="subItem.external ? subItem.path : null"
            :target="subItem.external ? '_blank' : null"
          >
            <v-list-tile-action :class="subItem.icon.length > 1 ? 'inline' : ''">
              <v-icon v-for="icon in subItem.icon" :key="icon">{{ icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              <v-list-tile-sub-title v-if="subItem.subtitle"> {{ subItem.subtitle }} </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </span>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import paths from '@/router/paths'
// reminder this.$vuetify.breakpoint.mdAndUp -> let you know the size of screen (bool)

export default {
  name: 'site-navigation',
  data () {
    return {
      mini: false,
      items: paths,
      right: null
    }
  },

  created () {
    if (this.$vuetify.breakpoint.mdAndDown) {
      this.setMobile(true)
    }
  },

  methods: {
    ...mapActions('base', [
      'setDrawer',
      'setMobile'
    ]),

    displayItem (item) {
      /* eslint-disable */
      return item.group
        ? false
        : !item.group && !item.private && item.role === undefined
        ? true
        : item.private && this.isAuthenticated && item.role === undefined
        ? true
        : !item.private && this.isAuthenticated && this.hasRole(item.role, this.permissions)
        ? true
        : false
      /* eslint-enable */
    },

    hasRole (role, permissions) {
      return permissions.includes(role)
    },

    onResize () {
      this.$vuetify.breakpoint.mdAndDown
        ? this.setMobile(true)
        : this.setMobile(false)
    }
  },

  computed: {
    ...mapGetters('authentication', [
      'isAuthenticated'
    ]),

    ...mapGetters('user', [
      'permissions'
    ]),

    drawer: {
      get () {
        return this.$store.state.base.drawer
      },
      set (value) {
        this.setDrawer(value)
      }
    }
  }

}
</script>

<style scoped>
  @import '../../css/fonts.css';
  @import '../../../public/fonts/icomoon/style.css';

  .logo-title {
    height: 112px !important;
  }

  .navigation-drawer {
    max-height:100% !important;
  }

  .inline {
    display: block;
  }

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;

  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

.icon-parking:before {
  content: "\e915";
}
.icon-hlfl-1:before {
  content: "\e90d";
}
.icon-hlfl:before {
  content: "\e91e";
}
.icon-elf-2:before {
  content: "\e908";
}
.icon-elf:before {
  content: "\e909";
}
.icon-hlfl-2:before {
  content: "\e90c";
}
.icon-vision-2:before {
  content: "\e91b";
}
.icon-vision:before {
  content: "\e91c";
}
.icon-appointments:before {
  content: "\e900";
}
.icon-author:before {
  content: "\e901";
}
.icon-building:before {
  content: "\e902";
}
.icon-business-card:before {
  content: "\e903";
}
.icon-calender-check:before {
  content: "\e904";
}
.icon-calender-star:before {
  content: "\e905";
}
.icon-calender:before {
  content: "\e906";
}
.icon-e-learn:before {
  content: "\e907";
}
.icon-ers:before {
  content: "\e90a";
}
.icon-handout:before {
  content: "\e90b";
}
.icon-hotel:before {
  content: "\e90e";
}
.icon-Industry:before {
  content: "\e90f";
}
.icon-invitation:before {
  content: "\e910";
}
.icon-meal:before {
  content: "\e911";
}
.icon-menu_1:before {
  content: "\e912";
}
.icon-menu_2:before {
  content: "\e913";
}
.icon-my-ers:before {
  content: "\e914";
}
.icon-publications:before {
  content: "\e917";
}
.icon-sofa:before {
  content: "\e918";
}
.icon-taxi:before {
  content: "\e919";
}
.icon-train:before {
  content: "\e91a";
}
.icon-who:before {
  content: "\e91d";
}
</style>

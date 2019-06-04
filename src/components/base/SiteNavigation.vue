<template>
  <v-navigation-drawer
    v-resize="onResize"
    v-if="drawer"
    v-model="drawer"
    :mini-variant.sync="mini"
    style="max-height:100%!important"
    light
    disable-route-watcher
    app
  >
    <v-toolbar :style="!mini? 'margin-bottom:10px;' : ''" flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <a style="color:transparent" href="https://www.ersnet.org">
              <i v-if="mini" class="icon-ers icon" style="font-size:50px; color:#d0043c;"/>
            </a>
          </v-list-tile-avatar>
          <v-list-tile-content style="height:130px;padding: 10px 0">
            <v-list-tile-title style="height:100px;margin-top:30px">
              <div class="text-xs-center">
                <a style="color:transparent" href="https://www.ersnet.org">
                  <i class="icon-ers icon" style="font-size:80px; color:#d0043c;"/>
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
          v-if="!item.group && displayItem(item)"
          :key="item.title"
          :to="!item.external ? item.path : null"
          :href="item.external ? item.path : null"
          :target="item.external ? '_blank' : null"
        >
          <v-list-tile-action :class="item.icon.length > 1 ? 'inline' : ''">
            <v-icon v-for="icon in item.icon" :key="icon">{{ icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"/>
            <v-list-tile-sub-title v-if="item.subtitle">{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          v-if="item.group && displayItem(item)"
          v-model="item.active"
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
              <v-list-tile-sub-title v-if="item.subtitle">{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
            v-for="subItem in item.items"
            v-if="item.group && displayItem(subItem)"
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
              <v-list-tile-sub-title v-if="subItem.subtitle">{{ subItem.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </span>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import paths from "@/router/paths";
// reminder this.$vuetify.breakpoint.mdAndUp -> let you know the size of screen (bool)

export default {
  name: "site-navigation",
  data() {
    return {
      mini: false,
      items: paths,
      right: null
    };
  },

  computed: {
    ...mapGetters("authentication", ["isAuthenticated"]),

    ...mapGetters("user", ["permissions"]),

    drawer: {
      get() {
        return this.$store.state.base.drawer;
      },
      set(value) {
        console.log("here");
        this.setDrawer(value);
      }
    }
  },

  created() {
    if (this.$vuetify.breakpoint.mdAndDown) {
      this.setMobile(true);
    }
  },

  methods: {
    ...mapActions("base", ["setDrawer", "setMobile"]),

    displayItem(item) {
      /* eslint-disable */
      return !item.private && item.role === undefined
        ? true
        : item.private && this.isAuthenticated && item.role === undefined
        ? true
        : !item.private &&
          this.isAuthenticated &&
          this.hasRole(item.role, this.permissions)
        ? true
        : false;
      /* eslint-enable */
    },

    hasRole(role, permissions) {
      return role.reduce((a, i) => {
        if (permissions.includes(i)) a = true;
        return a;
      }, false);
    },

    onResize() {
      this.$vuetify.breakpoint.mdAndDown
        ? this.setMobile(true)
        : this.setMobile(false);
    }
  }
};
</script>

<style scoped>
.logo-title {
  height: 112px !important;
}

.inline {
  display: block;
}
</style>

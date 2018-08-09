import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import PreferencesApp from "@/components/user/PreferencesApp.vue";
import Vuetify from "vuetify";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

let store;
let getters;
describe("User - Preferences App", () => {
  describe("Authenticated", () => {
    beforeAll(() => {
      getters = {
        isAuthenticated: () => true
      };
      store = setStore(getters);
    });
    it("loads the user preferences page", () => {
      const wrapper = shallowMount(PreferencesApp, { store, localVue });
      expect(wrapper.find({ name: "user-preferences" }).exists()).toBe(true);
    });
  });

  describe("Not authenticated", () => {
    beforeAll(() => {
      getters = {
        isAuthenticated: () => false
      };
      store = setStore(getters);
    });

    it("loads the login page", () => {
      const wrapper = shallowMount(PreferencesApp, { store, localVue });
      expect(wrapper.find({ name: "login" }).exists()).toBe(true);
    });
  });
});

function setStore(getters) {
  return new Vuex.Store({
    modules: {
      authentication: {
        namespaced: true,
        getters
      }
    }
  });
}

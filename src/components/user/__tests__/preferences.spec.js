import Vuex from "vuex";
import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Preferences from "@/components/user/Preferences.vue";
import Vuetify from "vuetify";
import router from "../../../router";

const localVue = createLocalVue();
localVue.use(Vuetify, {
  vueRouter: router
});
localVue.use(Vuex);

let store;
let actions;
describe("User - Profile", () => {
  describe("Page", () => {
    beforeAll(() => {
      actions = {
        getInterestsList: jest.fn(),
        getPreferences: jest.fn()
      };
      store = setStore();
    });
    it("displays the preference list", () => {
      const wrapper = mount(Preferences, {
        store,
        localVue,
        stubs: {
          RouterLink: RouterLinkStub
        }
      });
      expect(wrapper.find({ name: "v-list" }).exists()).toBe(true);
      expect(wrapper.find({ name: "v-subheader" }).text()).toBe("Test");
      expect(wrapper.find(".v-card__text").text()).toBe("Nothing to save");
      expect(
        wrapper
          .findAll(".v-list__tile__title")
          .at(0)
          .text()
      ).toBe("Some value");
      expect(
        wrapper
          .findAll(".v-list__tile__title")
          .at(1)
          .text()
      ).toBe("Some second value");
    });
  });
});

function setStore() {
  return new Vuex.Store({
    modules: {
      user: {
        namespaced: true,
        actions,
        state: {
          interests: [
            {
              title: "test",
              values: ["Some value", "Some second value"],
              limits: {
                min: 1,
                max: 0
              }
            }
          ],
          preferences: {
            interests: []
          }
        }
      }
    }
  });
}

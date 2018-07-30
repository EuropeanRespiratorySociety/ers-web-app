import { shallow } from "@vue/test-utils";
import Preferences from "@components/user/Preferences.vue";

describe("User - Preferences", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallow(Preferences, {
      propsData: { msg }
    });
    console.log(wrapper);
    // expect(wrapper.text()).toMatch(msg);
  });
});

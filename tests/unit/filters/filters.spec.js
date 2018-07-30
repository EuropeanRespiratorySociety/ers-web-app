import { slugify } from "../../../filters";

describe("Filters - slugify", () => {
  it("Sulgifies string", () => {
    const string = "This is a String";
    expect(slugify(string)).toBe("this-is-a-string");
    // expect(wrapper.text()).toMatch(msg);
  });
});

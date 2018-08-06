import { slugify } from "../../../src/filters";

console.log(slugify);

describe("Filters - slugify", () => {
  it("Sulgifies string", () => {
    const string = "This is a String";
    expect(true).toBe(true);
    expect(slugify(string)).toBe("this-is-a-string");
    // expect(wrapper.text()).toMatch(msg);
  });
});

import { slugify } from "../../filters";

describe("Filters - slugify", () => {
  it("Sulgifies string", () => {
    const string = "This is a String";
    expect(slugify(string)).toBe("this-is-a-string");
  });

  it("Removes non url characters", () => {
    const string = "String with special characters?%$=";
    expect(slugify(string)).toBe("string-with-special-characters");
  });

  it("Handles non string variable", () => {
    const string = 123456;
    expect(slugify(string)).toBe("123456");
    const string2 = true;
    expect(slugify(string2)).toBe("true");
  });
});

import {
  upperCase,
  upperCaseEachWords,
  upperCaseFirstLetter
} from "../../filters";

describe("Filters - upperCase", () => {
  it("Upper Case string", () => {
    const string = "this is a lower case string";
    expect(upperCase(string)).toBe("THIS IS A LOWER CASE STRING");
  });

  it("Upper Case Each Words", () => {
    const string = "this is a lower case string";
    expect(upperCaseEachWords(string)).toBe("This Is A Lower Case String");
  });

  it("Upper case first letter", () => {
    const string = "this is a lower case string";
    expect(upperCaseFirstLetter(string)).toBe("This is a lower case string");
  });
});

import { truncate } from "../../filters";

describe("Filters - truncate", () => {
  it("Truncate string", () => {
    const string = "this is a lower case string";
    const r = truncate(string, 10);
    expect(r.length).toBeLessThanOrEqual(10);
    expect(r).toContain("...");
  });

  it("Truncate string adds custom elipsis", () => {
    const string = "this is a lower case string";
    const r = truncate(string, 10, "+++");
    expect(r.length).toBeLessThanOrEqual(10);
    expect(r).toContain("+++");
  });
});

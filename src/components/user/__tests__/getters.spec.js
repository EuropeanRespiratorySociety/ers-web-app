import {
  name,
  street,
  interestsDiseases,
  interestsMethods
} from "../store/getters";
import interests from "./interests.mock";

describe("User - getters", () => {
  describe("name", () => {
    it("gets the full name", () => {
      expect(
        name({
          data: {
            Title: "Title",
            FirstName: "First",
            LastName: "Last"
          }
        })
      ).toBe("Title First Last");
    });

    it("gets the title", () => {
      expect(
        name({
          data: {
            Title: "Title"
          }
        })
      ).toBe("Title");
    });

    it("gets the Title and FirstName", () => {
      expect(
        name({
          data: {
            Title: "Title",
            FirstName: "First"
          }
        })
      ).toBe("Title First");
    });

    it("gets the FirstName and LastName", () => {
      expect(
        name({
          data: {
            FirstName: "First",
            LastName: "Last"
          }
        })
      ).toBe("First Last");
    });

    it("returns false if no data is available", () => {
      expect(
        name({
          data: {}
        })
      ).toBe(false);
    });
  });

  describe("street", () => {
    it("returns an empty string if no data is available", () => {
      expect(
        street({
          data: {}
        })
      ).toBe("");
    });

    it("returns a full street", () => {
      expect(
        street({
          data: {
            MainStreet1: "S1",
            MainStreet2: "S2",
            MainStreet3: "S3",
            MainStreet4: "S4"
          }
        })
      ).toBe("S1, S2, S3, S4");
    });

    it("returns a partial street", () => {
      expect(
        street({
          data: {
            MainStreet1: "S1",
            MainStreet2: "S2"
          }
        })
      ).toBe("S1, S2");
    });
  });

  describe("prepares interests", () => {
    const state = { interests };
    it("returns a diseases list", () => {
      const r = interestsDiseases(state);
      expect(Array.isArray(r)).toBe(true);
      expect(r).toHaveLength(8);
      expect(r).toContain("Airway diseases");
      expect(r).not.toContain("Surgery");
    });

    it("returns a methods list", () => {
      const r = interestsMethods(state);
      expect(Array.isArray(r)).toBe(true);
      expect(r).toHaveLength(11);
      expect(r).not.toContain("Airway diseases");
      expect(r).toContain("Surgery");
    });
  });
});

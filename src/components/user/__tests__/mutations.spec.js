import mutations from "../store/mutations";
import store from "../store";

describe("User - Mutations", () => {
  it("sets user", () => {
    const data = {
      data: {
        ContactId: 123456,
        Title: "Mr.",
        LastName: "Last",
        FirstName: "First"
      },
      apiUserId: "s1t2r3i4n5g6",
      preferences: {
        interests: [
          "Thoracic oncology",
          "Respiratory intensive care",
          "Physiology",
          "Transplantation"
        ]
      },
      permissions: ["test", "test2"]
    };
    let state = { ...store.state };
    mutations.SET_USER(state, data);
    expect(state.apiUserId).toBe("s1t2r3i4n5g6");
    expect(state.preferences.interests).toEqual(
      expect.arrayContaining(data.preferences.interests)
    );
    expect(state.permissions).toEqual(expect.arrayContaining(data.permissions));
    expect(state.data.ContactId).toEqual(123456);
  });
});

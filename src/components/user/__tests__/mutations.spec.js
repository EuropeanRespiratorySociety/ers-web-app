import mutations from "../store/mutations";
import store from "../store";
import interests from "./interests.mock";

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

  it("Sets interests", () => {
    let state = { ...store.state };
    mutations.SET_INTERESTS(state, interests);
    expect(state.interests).toEqual(expect.arrayContaining(interests));
  });

  it("Sets preferences", () => {
    let state = { ...store.state };
    mutations.SET_PREFERENCES(state, {
      _id: "s1t2r3i4n5g6",
      interests: [
        "Thoracic oncology",
        "Respiratory intensive care",
        "Physiology",
        "Transplantation"
      ]
    });
    expect(state.preferences._id).toEqual("s1t2r3i4n5g6");
    expect(state.preferences.interests.length).toEqual(4);
  });

  it("Sets Status", () => {
    let state = { ...store.state };
    mutations.SET_STATUS(state, "Something happened");
    expect(state.status).toEqual("Something happened");
  });

  it("Sets an erro message", () => {
    let state = { ...store.state };
    mutations.SET_ERROR(state, { message: "Something went wrong" });
    expect(state.error).toEqual("Something went wrong");
  });

  it("Logs a user out", () => {
    let state = {
      data: {
        ContactId: 123456,
        Title: "Mr.",
        LastName: "Last",
        FirstName: "First"
      },
      error: "something",
      apiUserId: "s1t2r3i4n5g6",
      permissions: ["test", "test2"],
      preferences: {
        _id: "s1t2r3i4n5g6",
        interests: [
          "Thoracic oncology",
          "Respiratory intensive care",
          "Physiology",
          "Transplantation"
        ]
      }
    };
    mutations.LOGOUT(state);
    expect(Object.keys(state.data).length).toBe(0);
    expect(state.error).toBe(null);
    expect(state.apiUserId).toBe(null);
    expect(state.preferences._id).toBe(null);
    expect(state.permissions.length).toBe(0);
    expect(state.preferences.interests.length).toBe(0);
  });
});

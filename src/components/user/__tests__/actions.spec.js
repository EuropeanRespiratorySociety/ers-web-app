import {
  getInterestsList,
  getPreferences,
  setInterestsPreferences
} from "../store/actions";

let url = "";
let body = {};
let method = "";
let mockError = false;

jest.mock("axios", () => ({
  create: () => {
    return {
      get: _url => {
        return new Promise((resolve, reject) => {
          if (mockError) {
            reject({
              response: { data: { message: "something went wrong" } }
            });
          }
          url = _url;
          resolve({ data: { status: 200, data: { message: "some data" } } });
        });
      },
      post: (_url, _body) => {
        return new Promise((resolve, reject) => {
          if (mockError) {
            reject({
              response: { data: { message: "something went wrong" } }
            });
          }
          url = _url;
          body = _body;
          method = "post";
          resolve({ data: { status: 200, data: { message: "some data" } } });
        });
      },
      patch: (_url, _body) => {
        return new Promise((resolve, reject) => {
          if (mockError) {
            reject({
              response: { data: { message: "something went wrong" } }
            });
          }
          url = _url;
          body = _body;
          method = "patch";
          resolve({ data: { status: 200, data: { message: "some data" } } });
        });
      }
    };
  }
}));

describe("User - actions", () => {
  it("get a list of interests", async () => {
    const commit = jest.fn();
    await getInterestsList({ commit });

    expect(url).toBe("/interests");
    expect(commit).toHaveBeenCalledWith("SET_INTERESTS", {
      message: "some data"
    });
  });

  it("handles an error while geting the list of interests", async () => {
    mockError = true;
    const commit = jest.fn();
    await getInterestsList({ commit });

    expect(url).toBe("/interests");
    expect(commit).toHaveBeenCalledWith("SET_ERROR", {
      message: "something went wrong"
    });
  });

  it("gets a user's preferences", async () => {
    const commit = jest.fn();
    mockError = false;
    const state = {
      apiUserId: "s1t2r3i4n5g6"
    };
    const rootState = {
      authentication: {
        token: "thisIsAToken"
      }
    };
    await getPreferences({ commit, state, rootState });
    expect(url).toBe(`/preferences/${state.apiUserId}`);
    expect(commit).toHaveBeenCalledWith("SET_PREFERENCES", {
      data: { message: "some data" },
      status: 200
    });
  });

  it("handles an error while geting a user's preferences", async () => {
    const commit = jest.fn();
    mockError = true;
    const state = {
      apiUserId: "s1t2r3i4n5g6"
    };
    const rootState = {
      authentication: {
        token: "thisIsAToken"
      }
    };
    await getPreferences({ commit, state, rootState });
    expect(url).toBe(`/preferences/${state.apiUserId}`);
    expect(commit).toHaveBeenCalledWith("SET_ERROR", {
      message: "something went wrong"
    });
  });

  it("updates a user's interest", async () => {
    const commit = jest.fn();
    mockError = false;
    const state = {
      apiUserId: "s1t2r3i4n5g6",
      preferences: {
        _id: "s1t2r3i4n5g6",
        interests: ["Thoracic oncology", "Physiology"]
      }
    };
    const rootState = {
      authentication: {
        token: "thisIsAToken"
      }
    };
    await setInterestsPreferences(
      { commit, state, rootState },
      "Some interest"
    );
    expect(url).toBe(`/preferences/${state.apiUserId}`);
    expect(method).toBe("patch");
    expect(body).toEqual({ interests: "Some interest" });
    expect(commit.mock.calls.length).toBe(3);
    expect(commit.mock.calls[0][0]).toBe("SET_STATUS");
    expect(commit.mock.calls[0][1]).toBe("saving...");
    expect(commit.mock.calls[1][0]).toBe("SET_PREFERENCES");
    expect(commit.mock.calls[1][1]).toEqual({
      status: 200,
      data: { message: "some data" }
    });
    expect(commit.mock.calls[2][0]).toBe("SET_STATUS");
    expect(commit.mock.calls[2][1]).toBe("Saved a few instants ago...");
  });

  it("handles a failed update of a user's interest", async () => {
    const commit = jest.fn();
    mockError = true;
    const state = {
      apiUserId: "s1t2r3i4n5g6",
      preferences: {
        _id: "s1t2r3i4n5g6",
        interests: ["Thoracic oncology", "Physiology"]
      }
    };
    const rootState = {
      authentication: {
        token: "thisIsAToken"
      }
    };
    await setInterestsPreferences(
      { commit, state, rootState },
      "Some interest"
    );
    expect(url).toBe(`/preferences/${state.apiUserId}`);
    expect(method).toBe("patch");
    expect(body).toEqual({ interests: "Some interest" });
    expect(commit.mock.calls.length).toBe(3);
    expect(commit.mock.calls[0][0]).toBe("SET_STATUS");
    expect(commit.mock.calls[0][1]).toBe("saving...");
    expect(commit.mock.calls[1][0]).toBe("SET_ERROR");
    expect(commit.mock.calls[1][1]).toEqual({
      message: "something went wrong"
    });
    expect(commit.mock.calls[2][0]).toBe("SET_STATUS");
    expect(commit.mock.calls[2][1]).toBe("Saving failed...");
  });

  it("creates a user's interest", async () => {
    const commit = jest.fn();
    mockError = false;
    const state = {
      apiUserId: "s1t2r3i4n5g6",
      preferences: {
        _id: null,
        interests: []
      }
    };
    const rootState = {
      authentication: {
        token: "thisIsAToken"
      }
    };
    await setInterestsPreferences(
      { commit, state, rootState },
      "Some interest"
    );
    expect(url).toBe(`/preferences`);
    expect(method).toBe("post");
    expect(body).toEqual({ interests: "Some interest" });
    expect(commit.mock.calls.length).toBe(3);
    expect(commit.mock.calls[0][0]).toBe("SET_STATUS");
    expect(commit.mock.calls[0][1]).toBe("saving...");
    expect(commit.mock.calls[1][0]).toBe("SET_PREFERENCES");
    expect(commit.mock.calls[1][1]).toEqual({
      status: 200,
      data: { message: "some data" }
    });
    expect(commit.mock.calls[2][0]).toBe("SET_STATUS");
    expect(commit.mock.calls[2][1]).toBe("Saved a few instants ago...");
  });

  it("handles a failed update of a user's interest", async () => {
    const commit = jest.fn();
    mockError = true;
    const state = {
      apiUserId: "s1t2r3i4n5g6",
      preferences: {
        _id: null,
        interests: []
      }
    };
    const rootState = {
      authentication: {
        token: "thisIsAToken"
      }
    };
    await setInterestsPreferences(
      { commit, state, rootState },
      "Some interest"
    );
    expect(url).toBe(`/preferences`);
    expect(method).toBe("post");
    expect(body).toEqual({ interests: "Some interest" });
    expect(commit.mock.calls.length).toBe(3);
    expect(commit.mock.calls[0][0]).toBe("SET_STATUS");
    expect(commit.mock.calls[0][1]).toBe("saving...");
    expect(commit.mock.calls[1][0]).toBe("SET_ERROR");
    expect(commit.mock.calls[1][1]).toEqual({
      message: "something went wrong"
    });
    expect(commit.mock.calls[2][0]).toBe("SET_STATUS");
    expect(commit.mock.calls[2][1]).toBe("Saving failed...");
  });
});

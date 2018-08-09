import { login, logout } from "../store/actions";

let url = "";
let body = {};
let method = "";
let mockError = false;

jest.mock("axios", () => ({
  create: () => {
    return {
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
          resolve({
            data: {
              status: 200,
              data: { message: "some data" },
              accessToken: "token"
            }
          });
        });
      }
    };
  }
}));

describe("Authentication - actions", () => {
  it("logs a user in", async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    const payload = {
      username: "username",
      password: "password"
    };
    mockError = false;

    await login({ commit, dispatch }, payload);
    expect(url).toBe("/ers/contacts/login");
    expect(method).toBe("post");
    expect(body).toEqual(payload);
    expect(commit.mock.calls.length).toBe(5);
    expect(commit.mock.calls[0][0]).toBe("LOADING");
    expect(commit.mock.calls[1][0]).toBe("LOGIN");
    expect(commit.mock.calls[1][1]).toEqual("token");
    expect(commit.mock.calls[2][0]).toBe("user/SET_USER");
    expect(commit.mock.calls[2][1]).toEqual({
      status: 200,
      data: { message: "some data" },
      accessToken: "token"
    });
    expect(commit.mock.calls[2][2].root).toBe(true);
    expect(commit.mock.calls[3][0]).toBe("SET_ERROR");
    expect(commit.mock.calls[3][1]).toEqual({ message: null });
    expect(dispatch).toBeCalledWith(
      "user/getInterestsList",
      {},
      { root: true }
    );
    expect(commit.mock.calls[4][0]).toBe("LOADING");
  });

  it("handles an error while logging a user in", async () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    const payload = {
      username: "username",
      password: "password"
    };
    mockError = true;

    await login({ commit, dispatch }, payload);
    expect(url).toBe("/ers/contacts/login");
    expect(method).toBe("post");
    expect(body).toEqual(payload);
    expect(commit.mock.calls.length).toBe(3);
    expect(commit.mock.calls[0][0]).toBe("LOADING");
    expect(commit.mock.calls[1][0]).toBe("SET_ERROR");
    expect(commit.mock.calls[1][1]).toEqual({
      message: "something went wrong"
    });
    expect(commit.mock.calls[2][0]).toBe("LOADING");
  });

  it("logs a user out", async () => {
    const commit = jest.fn();
    mockError = false;
    await logout({ commit });
    expect(commit.mock.calls.length).toBe(2);
    expect(commit.mock.calls[0][0]).toBe("LOGOUT");
    expect(commit.mock.calls[1][0]).toBe("user/LOGOUT");
    expect(commit.mock.calls[1][1]).toBe(null);
    expect(commit.mock.calls[1][2]).toEqual({ root: true });
  });
});

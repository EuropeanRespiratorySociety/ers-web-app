import router from "../../router";
import { afterEach, beforeEach } from "../../router";
import mockStore from "../../store";

jest.mock("../../store", () => {
  return {
    state: {
      base: {
        isMobile: true
      },
      user: {
        permissions: ["test"]
      }
    },
    dispatch: jest.fn(),
    getters: {
      "authentication/isAuthenticated": true
    }
  };
});

const { routes, mode } = router.options;
describe("Router", () => {
  it("the correct mode to be set", () => {
    expect(mode).toBe("history");
  });

  it("sets the '/ai' route", () => {
    expect(filterByPath("/ai").path).toBe("/ai");
  });

  it("sets the '/ai/training-tool' route", () => {
    expect(filterByPath("/ai/training-tool").path).toBe("/ai/training-tool");
  });

  it("sets the '/ai/entity-extraction' route", () => {
    expect(filterByPath("/ai/training-tool").path).toBe("/ai/training-tool");
  });

  it("sets the '/news' route", () => {
    expect(filterByPath("/news").path).toBe("/news");
  });

  it("sets the '/news/:slug' route", () => {
    expect(filterByPath("/news/:slug").path).toBe("/news/:slug");
  });

  it("sets the '/search' route", () => {
    expect(filterByPath("/search").path).toBe("/search");
  });

  it("sets the '/user' route", () => {
    expect(filterByPath("/user").path).toBe("/user");
  });

  it("sets the '/user/login' route", () => {
    expect(filterByPath("/user/login").path).toBe("/user/login");
  });

  it("sets the '/not-authorized' route", () => {
    expect(filterByPath("/not-authorized").path).toBe("/not-authorized");
  });
});

describe("Router - afterEach guards", () => {
  it("automaticaly closes the menu after routing on mobile", () => {
    afterEach();
    expect(mockStore.dispatch).toHaveBeenCalledWith("base/setDrawer", false, {
      root: true
    });
  });

  it("does not close the menu after routing on desktop", async () => {
    jest.requireMock("../../store").state.base.isMobile = false;
    // reseting the mock function
    jest.requireMock("../../store").dispatch = jest.fn();
    afterEach();
    expect(mockStore.dispatch).not.toHaveBeenCalled();
  });
});

describe("Router - beforeEach guards", () => {
  it("checks if the user is authenticated", () => {
    const to = {
      matched: [{ meta: { requiresAuth: true } }],
      meta: {}
    };
    const next = jest.fn();
    beforeEach(to, undefined, next);
    expect(next.mock.calls[0].length).toBe(0);
  });

  it("Redirects a user not authenticated", () => {
    const to = {
      matched: [{ meta: { requiresAuth: true } }],
      meta: {},
      fullPath: "/full/path"
    };
    const next = jest.fn();
    jest.requireMock("../../store").getters[
      "authentication/isAuthenticated"
    ] = false;
    beforeEach(to, undefined, next);
    expect(next).toHaveBeenCalledWith({
      path: "/user/login",
      query: { redirect: "/full/path" }
    });
  });

  it("Grants access to a user who has a matching role", () => {
    const to = {
      matched: [{ meta: { requiresAuth: true } }],
      meta: { requiresRole: ["test"] }
    };
    const next = jest.fn();
    jest.requireMock("../../store").getters[
      "authentication/isAuthenticated"
    ] = true;
    beforeEach(to, undefined, next);
    expect(next.mock.calls[0].length).toBe(0);
  });

  it("Redirects a user does not have the right role", () => {
    const to = {
      matched: [{ meta: { requiresAuth: true } }],
      meta: { requiresRole: ["test"] },
      fullPath: "/full/path"
    };
    const next = jest.fn();
    jest.requireMock("../../store").getters[
      "authentication/isAuthenticated"
    ] = true;
    jest.requireMock("../../store").state.user.permissions = ["nope"];
    beforeEach(to, undefined, next);
    expect(next).toHaveBeenCalledWith({
      path: "/not-authorized",
      query: { redirect: "/full/path" }
    });
  });

  it("Asks the user to login although the role is correct (should not happen though...)", () => {
    const to = {
      matched: [{ meta: { requiresAuth: true } }],
      meta: { requiresRole: ["test"] },
      fullPath: "/full/path"
    };
    const next = jest.fn();
    jest.requireMock("../../store").getters[
      "authentication/isAuthenticated"
    ] = false;
    jest.requireMock("../../store").state.user.permissions = ["test"];
    beforeEach(to, undefined, next);
    expect(next).toHaveBeenCalledWith({
      path: "/user/login",
      query: { redirect: "/full/path" }
    });
  });
});

const filterByPath = (routes => path => routes.filter(r => r.path === path)[0])(
  routes
);

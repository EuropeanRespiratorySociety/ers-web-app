import router from "../../router";

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

const filterByPath = (routes => path => routes.filter(r => r.path === path)[0])(
  routes
);

import { sureThing, HTTP } from "../http";

const _HTTP = {
  get: function(arg) {
    return new Promise((resolve, reject) => {
      if (arg) resolve({ data: { test: "sucessful" } });
      reject({ response: { data: "something failed" } });
    });
  }
};

describe("HTTP - sureThing", () => {
  it("Returns OK and a response", async () => {
    const { ok, response } = await sureThing(_HTTP.get(true));
    expect(ok).toBe(true);
    expect(response.test).toEqual("sucessful");
  });

  it("Returns not OK and an error", async () => {
    const { ok, error } = await sureThing(_HTTP.get(false));
    expect(ok).toBe(false);
    expect(error).toEqual("something failed");
  });
});

describe("HTTP - HTTP", () => {
  it("is an Axios instance with defaults", async () => {
    expect(HTTP.defaults.headers["Content-Type"]).toBe("application/json");
  });
});

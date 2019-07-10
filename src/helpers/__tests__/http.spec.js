import { sureThing, HTTP } from "../http";

const _HTTP = {
  get: function(arg) {
    return new Promise((resolve, reject) => {
      if (arg)
        resolve({
          data: {
            test: "sucessful"
          }
        });
      reject({
        response: {
          data: "something failed"
        }
      });
    });
  }
};

const _HTTP2 = {
  get: function(arg) {
    return new Promise((resolve, reject) => {
      if (arg)
        resolve({
          data: {
            test: "sucessful"
          }
        });
      reject("something failed without response.data");
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

  it("Returns not OK and an error without data", async () => {
    const { ok, error } = await sureThing(_HTTP2.get(false));
    expect(ok).toBe(false);
    expect(error).toEqual("something failed without response.data");
  });
});

describe("HTTP - HTTP", () => {
  it("is an Axios instance with defaults", async () => {
    expect(HTTP.defaults.headers["Content-Type"]).toBe("application/json");
  });
});

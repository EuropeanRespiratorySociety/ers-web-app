import axios from "axios";
console.log(process.env.VUE_APP_ERS_API);
export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_ERS_API,
  // process.env.NODE_ENV === "production"
  //   ? "https://api.ersnet.org"
  //   : "http://localhost:3030",
  headers: { "Content-Type": "application/json" }
});

export const sureThing = promise =>
  promise
    .then(data => ({
      ok: true,
      response: data.data
    }))
    .catch(error => ({
      ok: false,
      error: error.response.data
    }));

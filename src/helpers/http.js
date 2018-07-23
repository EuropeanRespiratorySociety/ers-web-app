import axios from "axios";

export const HTTP = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.ersnet.org"
      : "http://localhost:3030",
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

import axios from "axios";
export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_ERS_API,
  headers: {
    "Content-Type": "application/json"
  }
});

export const sureThing = promise =>
  promise
    .then(data => ({
      ok: true,
      response: data.data
    }))
    .catch(error => {
      if (error.response && error.response.data) {
        return {
          ok: false,
          error: error.response.data
        };
      }
      return {
        ok: false,
        error: error
      };
    });

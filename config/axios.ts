// import { useStore } from "@/store";
import { TokenService } from "@/utils";
import axios from "axios";

const baseUrl = process.env.NEXT_BASE_URL;

const defaultOptions = {
  baseURL: baseUrl || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
};
console.log({ baseUrl, defaultOptions });
let instance = axios.create(defaultOptions);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if ([401, 403].includes(error.response.status)) {
      TokenService.clearStorage();
      // useStore().
      window.location.href = "/";
      console.log("unauthorized, logging out ...");
      //   await store.dispatch("Logout");
    }
    return Promise.reject(error.response);
  }
);

export { instance as axios };

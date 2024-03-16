import axios from "axios";
import AppStore from "../store";
import GLobalStore from "../store/slices/global-store.slice";

const http = axios.create({
  baseURL: "https://dummyjson.com/",
});
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    AppStore.store.dispatch(GLobalStore.actions.increaseRequestCount());
    return config;
  },
  (error) => {
    AppStore.store.dispatch(GLobalStore.actions.decreaseRequestCount());
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    AppStore.store.dispatch(GLobalStore.actions.decreaseRequestCount());
    return response;
  },
  (error) => {
    debugger;
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");
    }
    AppStore.store.dispatch(GLobalStore.actions.decreaseRequestCount());
    return Promise.reject(error);
  }
);

export default http;

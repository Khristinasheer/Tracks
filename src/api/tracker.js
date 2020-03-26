import axios from "axios";
// async storage deprecated
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "https://30e4051e.ngrok.io"
});

// every single time we make a request through our axios instance,
// if we have a token it will be automatically added into our request
// we don't need to do anything else inside our app to somehow authenticate ourselves
// it just all happens behind the scenes automatically
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;

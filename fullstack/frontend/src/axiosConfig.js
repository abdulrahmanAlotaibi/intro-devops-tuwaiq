import axios from "axios";

axios.defaults.withCredentials = true

const instance = axios.create({
  baseURL: `${"http://localhost:8000"}`,
  headers: {
    "Content-Type": "application/json",
  },

});

export default instance;
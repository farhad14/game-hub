import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6eadc4ef545242269d997c5f9d622215",
  },
});

export default apiClient;

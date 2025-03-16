import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // URL ของ API
});

// ดึง Token ทุกครั้งก่อน Request ออกไป
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

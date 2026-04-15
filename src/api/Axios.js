import axios from "axios";

// ✅ Add this line
export const BASE_URL = "https://food-delivery-app-server-w0i3.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
});

// ✅ Attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Handle 403
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      localStorage.removeItem("token");
      alert("Session expired. Please login again.");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
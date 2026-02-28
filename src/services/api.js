import axios from "axios";

const API = axios.create({
  baseURL: "https://grocery-list-manager-backend.onrender.com/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const getGroceries = () => API.get("/grocery");
export const addGrocery = (data) => API.post("/grocery", data);
export const updateGrocery = (id, data) => API.put(`/grocery/${id}`, data);
export const deleteGrocery = (id) => API.delete(`/grocery/${id}`);
export const addToPantry = (data) => API.post("/pantry", data);
export const getPantry = () => API.get("/pantry");
export const deletePantryItem = (id) => API.delete(`/pantry/${id}`);
export const getSuggestions = () => API.get("/recipes/suggestions");
export const getBudget = () => API.get("/grocery/total");

export default API;
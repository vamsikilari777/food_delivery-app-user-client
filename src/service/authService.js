import axios from "axios";

// const API_URL = "http://localhost:8080/api";
const API_URL = "https://food-delivery-app-server-w0i3.onrender.com/api";

export const registerUser = async (data) => {
    try {
        const response = await axios.post(API_URL + "/register", data);
        
        return response;
    } catch (error) {
        throw error.response?.data || "Registration failed";
    }
};

export const login = async (data) => {
    try {
        const response = await axios.post(API_URL + "/login", data);
        return response;
    } catch (error) {
        throw error.response?.data || "Login failed";
    }
};
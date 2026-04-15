import api from "../api/Axios.js"




export const registerUser = async (data) => {
    try {
        const response = await api.post("/register", data);
        
        return response;
    } catch (error) {
        throw error.response?.data || "Registration failed";
    }
};

export const login = async (data) => {
    try {
        const response = await api.post( "/login", data);
        return response;
    } catch (error) {
        throw error.response?.data || "Login failed";
    }
};
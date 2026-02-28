import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token) {
      setUser(userData ? JSON.parse(userData) : { token });
    }
    setLoading(false);
  }, []);

  const login = async ({ email, password }) => {
    const { data } = await axios.post(
      "https://grocery-list-manager-backend.onrender.com/api/auth/login",
      { email, password }
    );

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const register = async ({ name, email, password }) => {
    const { data } = await axios.post(
      "https://grocery-list-manager-backend.onrender.com/api/auth/register",
      { name, email, password }
    );

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { deleteUser, getloginUser } from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setloading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const getLoggedInUser = async () => {
    try {
      setLoggedIn(true);
      const token = localStorage.getItem("mylibrary-token");
      if (!token) {
        setLoggedIn(false);
        setloading(false);
        return;
      }
      const response = await getloginUser({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoggedIn(true);
      setUser(response.data.user);
      setloading(false);
    } catch (error) {
      console.error(error);
      setLoggedIn(false);
      setloading(false);
    }
  };
  const logout = async () => {
    try {
      const token = localStorage.getItem("mylibrary-token");
      if (!token) {
        setLoggedIn(false);
        setloading(false);
        return;
      }
      await deleteUser();
      setLoggedIn(false);
      setUser({});
      localStorage.setItem("mylibrary-token", "");
    } catch (error) {
      console.error(error);
      setLoggedIn(false);
      setloading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isLoading, user, getLoggedInUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

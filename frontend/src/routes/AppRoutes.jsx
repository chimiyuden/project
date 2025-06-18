import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profile from "../pages/auth/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;

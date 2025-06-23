import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import { useAuth } from "../contexts/AuthContext";
import Team from "../pages/auth/about/About";
import Profile from "../pages/auth/profile/Profile";
import Home from "../pages/home";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";

const ProtectedRoutes = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();
  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isLoggedIn) {
    return children;
  }
  return <Navigate to={"/about"} />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Home />{" "}
          </ProtectedRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<Team />} />
    </Routes>
  );
};

export default AppRoutes;

import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Loading from "../components/Loading";
import { useAuth } from "../contexts/AuthContext";
import Team from "../pages/About";
import Profile from "../pages/auth/Profile";
import Home from "../pages";

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

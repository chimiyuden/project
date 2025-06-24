import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import { useAuth } from "../contexts/AuthContext";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import DashBoard from "../pages/dashboard";
import Home from "../pages/home/Home";
import Team from "../pages/about/About";
import Profile from "../pages/profile/Profile";
import Footer from "../components/footer/Footer";

const ProtectedRoutes = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();
  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isLoggedIn) {
    return children;
  }
  return <Navigate to={"/home"} />;
};

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <DashBoard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />

        {/* public */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;

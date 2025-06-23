import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FiBook, FiUser, FiInfo, FiLogIn, FiLogOut } from "react-icons/fi";

import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, isLoading, user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false); // close menu on logout
  };

  const isActive = (path) => location.pathname === path;

  if (isLoading) {
    return null;
  }

  return (
    <nav>
      {/* Logo */}
      <Link
        to={isLoggedIn ? "/" : "/login"}
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        <FiBook size={24} />
        <span>LibraryPro</span>
      </Link>

      {/* Hamburger menu for small screens */}
      <div
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") toggleMenu();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="navContainer">
        {/* Navigation links */}
        <div
          className={`linksContainer navLinks ${menuOpen ? "" : "collapsed"}`}
        >
          <Link
            to="/about"
            className={`navLink ${isActive("/about") ? "activeLink" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <FiInfo size={18} />
            About
          </Link>

          {isLoggedIn && (
            <Link
              to="/profile"
              className={`navLink ${isActive("/profile") ? "activeLink" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              <FiUser size={18} />
              Profile
            </Link>
          )}
        </div>

        {/* Auth section */}
        <div className={`authContainer ${menuOpen ? "" : "collapsed"}`}>
          {isLoggedIn ? (
            <>
              <span className="userGreeting">
                Welcome, {user?.name || "User"}
              </span>
              <button onClick={handleLogout} className="logoutButton">
                <FiLogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogin();
                setMenuOpen(false);
              }}
            >
              <FiLogIn size={18} />
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

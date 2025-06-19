// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// const Nav = () => {
//   const navigate = useNavigate();
//   const { isLoggedIn, isLoading, user, logout, loggedIn } = useAuth();

//   const handleAuth = () => {
//     if (!loggedIn) {
//       navigate("/login");
//     } else {
//       toggleAuth();
//       navigate("/");
//     }
//   };

//   const handleLogout = () => {
//     logout();
//   };

//   const styles = {
//     nav: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       right: 0,
//       backgroundColor: "#ffffff",
//       boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//       padding: "1rem 2rem",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       zIndex: 1000,
//       borderBottom: "1px solid #f0f0f0",
//     },
//     logo: {
//       fontSize: "1.5rem",
//       fontWeight: "600",
//       textDecoration: "none",
//       color: "#2c3e50",
//       display: "flex",
//       alignItems: "center",
//       gap: "0.5rem",
//     },
//     navLinks: {
//       display: "flex",
//       alignItems: "center",
//       gap: "2rem",
//     },
//     link: {
//       color: "#4a5568",
//       textDecoration: "none",
//       fontWeight: "500",
//       fontSize: "1rem",
//       transition: "color 0.2s ease",
//       "&:hover": {
//         color: "#3182ce",
//       },
//     },
//     activeLink: {
//       color: "#3182ce",
//       fontWeight: "600",
//     },
//     userSection: {
//       display: "flex",
//       alignItems: "center",
//       gap: "1rem",
//     },
//     userName: {
//       color: "#4a5568",
//       fontSize: "0.9rem",
//     },
//     logoutButton: {
//       backgroundColor: "#e53e3e",
//       color: "white",
//       border: "none",
//       padding: "0.5rem 1rem",
//       borderRadius: "6px",
//       cursor: "pointer",
//       fontWeight: "500",
//       transition: "background-color 0.2s ease",
//       "&:hover": {
//         backgroundColor: "#c53030",
//       },
//     },
//     loginButton: {
//       backgroundColor: "#3182ce",
//       color: "white",
//       border: "none",
//       padding: "0.5rem 1rem",
//       borderRadius: "6px",
//       cursor: "pointer",
//       fontWeight: "500",
//       transition: "background-color 0.2s ease",
//       "&:hover": {
//         backgroundColor: "#2c5282",
//       },
//     },
//   };

//   if (isLoading || !isLoggedIn) {
//     return null;
//   }

//   return (
//     <nav style={styles.nav}>
//       <Link to="/" style={styles.logo}>
//         <span>📚</span>
//         <span>MyLibrary</span>
//       </Link>

//       <div style={styles.navLinks}>
//         <Link to="/about" style={styles.link}>
//           About
//         </Link>

//         {loggedIn && (
//           <Link to="/profile" style={styles.link}>
//             Profile
//           </Link>
//         )}
//       </div>

//       {/* <div>
//         <span>{user?.name || "User"}</span>
//         <button onClick={handleLogout}>Logout</button>
//       </div> */}

//       {!loggedIn ? (
//         <>
//           <button onClick={handleAuth} style={styles.button}>
//             Login
//           </button>
//         </>
//       ) : (
//         <>
//           <span style={styles.userText}>Hi, {userName} 💖</span>
//           <button
//             onClick={handleAuth}
//             style={{ ...styles.button, ...styles.buttonLogout }}
//           >
//             Logout
//           </button>
//           {/*
//           <span>{user?.name || "User"}</span>
//           <button onClick={handleLogout}>Logout</button> */}
//         </>
//       )}
//     </nav>
//   );
// };

// export default Nav;

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  FiBook,
  FiUser,
  FiInfo,
  FiLogIn,
  FiLogOut,
  FiSearch,
  FiHome,
} from "react-icons/fi";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, isLoading, user, logout } = useAuth();

  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  const styles = {
    nav: {
      position: "sticky",
      top: 0,
      backgroundColor: "rgba(255, 255, 255, 0.98)",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
      padding: "1rem 5%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 1000,
      borderBottom: "1px solid #f0f4f8",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "600",
      textDecoration: "none",
      color: "#3182ce",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      fontFamily: "'Merriweather', serif",
      transition: "color 0.2s ease",
      "&:hover": {
        color: "#2c5282",
      },
    },
    navContainer: {
      display: "flex",
      alignItems: "center",
      gap: "3rem",
    },
    linksContainer: {
      display: "flex",
      gap: "1.5rem",
    },
    link: {
      color: "#4a5568",
      textDecoration: "none",
      fontWeight: "500",
      fontSize: "0.95rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 0",
      borderBottom: "2px solid transparent",
      transition: "all 0.2s ease",
    },
    activeLink: {
      color: "#3182ce",
      borderBottom: "2px solid #3182ce",
    },
    searchContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    searchInput: {
      padding: "0.5rem 1rem 0.5rem 2.5rem",
      borderRadius: "6px",
      border: "1px solid #e2e8f0",
      backgroundColor: "#f8fafc",
      color: "#2d3748",
      outline: "none",
      width: "240px",
      transition: "all 0.2s ease",
      "&:focus": {
        borderColor: "#3182ce",
        boxShadow: "0 0 0 1px #3182ce",
      },
    },
    searchIcon: {
      position: "absolute",
      left: "1rem",
      color: "#a0aec0",
    },
    authContainer: {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
    },
    userGreeting: {
      color: "#4a5568",
      fontSize: "0.95rem",
      fontWeight: "500",
    },
    button: {
      padding: "0.5rem 1.25rem",
      borderRadius: "6px",
      border: "none",
      backgroundColor: "#3182ce",
      color: "white",
      cursor: "pointer",
      fontWeight: "500",
      fontSize: "0.95rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "#2c5282",
        transform: "translateY(-1px)",
      },
    },
    logoutButton: {
      backgroundColor: "#e53e3e",
      "&:hover": {
        backgroundColor: "#c53030",
      },
    },
  };

  if (isLoading) {
    return null;
  }

  return (
    <nav style={styles.nav}>
      {/* <Link to="/login" style={styles.logo}>
        <FiBook size={24} />
        <span>LibraryPro</span>
      </Link> */}
      {isLoggedIn ? (
        <>
          <Link to="/" style={styles.logo}>
            <FiBook size={24} />
            <span>LibraryPro</span>
          </Link>
        </>
      ) : (
        <Link to="/login" style={styles.logo}>
          <FiBook size={24} />
          <span>LibraryPro</span>
        </Link>
      )}

      <div style={styles.navContainer}>
        <div style={styles.linksContainer}>
          <Link
            to="/about"
            style={{
              ...styles.link,
              ...(isActive("/about") && styles.activeLink),
            }}
          >
            <FiInfo size={18} />
            About
          </Link>
          {isLoggedIn && (
            <Link
              to="/profile"
              style={{
                ...styles.link,
                ...(isActive("/profile") && styles.activeLink),
              }}
            >
              <FiUser size={18} />
              Profile
            </Link>
          )}
        </div>

        <div style={styles.authContainer}>
          {isLoggedIn ? (
            <>
              <span style={styles.userGreeting}>
                Welcome, {user?.name || "User"}
              </span>
              <button
                onClick={handleLogout}
                style={{ ...styles.button, ...styles.logoutButton }}
              >
                <FiLogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <button onClick={handleLogin} style={styles.button}>
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

import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import { useAuth } from "../../contexts/AuthContext";

import "./Home.css";

const Home = () => {
  const { user, isLoading, isLoggedIn } = useAuth() || {};

  console.log("User from context:", user);

  if (isLoading) {
    return (
      <>
        <Nav />
        <div className="home-container">
          <p>Loading user info...</p>
        </div>
      </>
    );
  }

  const username = user?.username || user?.name || null;

  return (
    <>
      <Nav />

      <div className="home-container">
        {isLoggedIn ? (
          <>
            <h1 className="home-heading">📚 Welcome back, {username}!</h1>
            <p className="home-subtext">Jump back into your book collection.</p>
            <Link to="/profile" className="btn btn-primary">
              Go to Profile
            </Link>
          </>
        ) : (
          <>
            <h1 className="home-heading">📚 Sengs_Library</h1>
            <p className="home-subtext">Your personal book tracker.</p>

            <p className="home-description">
              Organize your favorite reads, explore new genres, and keep track
              of your literary journey — all in one beautiful digital library.
              Whether you're a casual reader or a passionate bibliophile,
              Sengs_Library helps you log books you've read, review them, and
              discover what to read next.
            </p>

            <ul className="feature-list">
              <li> Add and manage your personal book collection</li>
              <li> Track genres, authors, and reading status</li>
              <li> View your reading profile and stats</li>
              <li> Simple, elegant, and library-themed interface</li>
            </ul>

            <div className="button-group">
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-secondary">
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;

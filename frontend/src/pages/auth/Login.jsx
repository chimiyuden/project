import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const initialData = {
  email: "",
  password: "",
};

const Login = () => {
  const { getLoggedInUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ ...initialData });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:3000/auth/signin",
        formData
      );
      console.log(response.data);
      setError("");
      setFormData({ ...initialData });
      localStorage.setItem("Tensal-token", response.data.token);

      await getLoggedInUser();
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "some error occured");
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        <label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </label>
        {error && <p className="register-error"> {error}</p>}
        <button type="submit">Login</button>
        <p className="login-link">
          Account doesnt exist? <Link to="/register"> Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

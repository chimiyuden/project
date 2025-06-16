import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  gender: "male",
};

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ ...initialData });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? (checked ? value : formData[name]) : value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        setError("Password and confirm password do not match");
        return;
      }

      const response = await axios.post("http://localhost:3000/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        gender: formData.gender,
      });

      console.log(response.data);
      setError("");
      setFormData({ ...initialData });
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="library-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="library-title">Join MyLibrary</h2>

        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Create a password"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            className="form-input"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Gender</label>
          <div
            className="radio-options"
            style={{ display: "flex", gap: "15px", marginTop: "8px" }}
          >
            <label
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        {error && <p className="register-error">{error}</p>}

        <div className="form-actions">
          <button type="submit" className="button primary-button">
            Create Account
          </button>
        </div>

        <p
          className="login-link"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

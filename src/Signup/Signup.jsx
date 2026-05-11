import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup:", formData);
  };

  return (
    <section className="auth-section">
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join us and start your journey today</p>
        </div>

        <div className="glitch-form-wrapper">
          <form className="glitch-card" onSubmit={handleSubmit}>
            <div className="card-header">
              <div className="card-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M12 11.5a3 3 0 0 0 -3 2.824v1.176a3 3 0 0 0 6 0v-1.176a3 3 0 0 0 -3 -2.824z" />
                </svg>
                <span>Sign up</span>
              </div>
              <div className="card-dots">
                <span style={{ background: "var(--accent-blue)" }} />
                <span style={{ background: "var(--accent-orange)" }} />
                <span style={{ background: "var(--accent-blue)" }} />
              </div>
            </div>
            <div className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required=""
                  placeholder=""
                  value={formData.name}
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className="form-label"
                  data-text="FULL NAME"
                >
                  FULL NAME
                </label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  required=""
                  placeholder=""
                  value={formData.username}
                  onChange={handleChange}
                />
                <label
                  htmlFor="username"
                  className="form-label"
                  data-text="USERNAME"
                >
                  USERNAME
                </label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required=""
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                />
                <label
                  htmlFor="email"
                  className="form-label"
                  data-text="E-MAIL"
                >
                  E-MAIL
                </label>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  required=""
                  placeholder=""
                  value={formData.password}
                  onChange={handleChange}
                />
                <label
                  htmlFor="password"
                  className="form-label"
                  data-text="PASSWORD"
                >
                  PASSWORD
                </label>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required=""
                  placeholder=""
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <label
                  htmlFor="confirmPassword"
                  className="form-label"
                  data-text="CONFIRM PASSWORD"
                >
                  CONFIRM PASSWORD
                </label>
              </div>

              <div className="auth-options">
                <label className="remember-me">
                  <input type="checkbox" required />
                  <span>I agree to the Terms & Conditions</span>
                </label>
              </div>

              <button data-text="SIGN UP" type="submit" className="submit-btn">
                <span className="btn-text">SIGN UP</span>
              </button>

              <div className="auth-divider">
                <span>OR</span>
              </div>

              <div className="auth-footer">
                <p>Already have an account?</p>
                <Link to="/login" className="auth-link">
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;

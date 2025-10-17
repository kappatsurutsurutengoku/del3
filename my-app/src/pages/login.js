import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../login.css";
import logo from "../images/logo.png";

const Login = ({ goHome }) => {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${tab === "login" ? "Logged in" : "Registered"} as: ${email}`);
  };

  return (
    <div className="login-container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="screen-logo" onClick={goHome} />

      <div className="login-box">
        <h2>Join the Ocean Movement</h2>
        <p className="login-desc">
          Get exclusive updates about <strong>events</strong>, <strong>volunteer meets</strong>, and <strong>cleanup programs</strong>.
        </p>

        {/* Tabs */}
        <div className="login-tabs">
          <button
            className={tab === "login" ? "active" : ""}
            onClick={() => setTab("login")}
          >
            Log In
          </button>
          <button
            className={tab === "register" ? "active" : ""}
            onClick={() => setTab("register")}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            {tab === "login" ? "Log In" : "Register"}
          </button>
        </form>

        <button onClick={goHome} className="back-home">⬅ Back to Home</button>
      </div>
    </div>
  );
};

export default Login;

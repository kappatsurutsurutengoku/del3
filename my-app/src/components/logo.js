// components/CornerLogo.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // React Router hook
import logoImg from "../images/logo.png";
import "./logo.css"; // assuming you keep your CSS here

const CornerLogo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Navigate to your App.js route
  };

  return (
    <img
      src={logoImg}
      alt="Logo"
      className="corner-logo"
      onClick={handleClick}
    />
  );
};

export default CornerLogo;

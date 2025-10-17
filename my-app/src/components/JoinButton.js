import React from "react";
import "./JoinButton.css";

const JoinButton = ({ label = "Join Us", onClick }) => {
  return (
    <a href="#" className="join-btn" onClick={onClick}>
      {label}
    </a>
  );
};

export default JoinButton;

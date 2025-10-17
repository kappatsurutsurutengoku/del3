import React, { useState } from "react";
import "./Header.css";

const Header = ({ onShowAbout, onShowCalendar, onShowLogin }) => {
  const [showTranslate, setShowTranslate] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-left">
        <a href="#" onClick={onShowAbout}>About Us</a>
        <a href="#" onClick={onShowCalendar}>Our Programs</a>
        <a href="#">The Latest</a>
      </nav>

      <div className="join-btn-container">
        <a href="#" className="join-btn" onClick={onShowLogin}>Join Us</a>
      </div>

      {/* Custom Translate UI */}
      <div className="google-translate-custom">
        <span
          className="translate-text"
          onClick={() => setShowTranslate(!showTranslate)}
          style={{ cursor: "pointer" }}
        >
          Translate ▶
        </span>
        <span className="translate-provider">Provided by Google Translate</span>
        <div className={`translate-dropdown ${showTranslate ? "show" : "hide"}`}>
          <div id="google_translate_element"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

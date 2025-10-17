import React from "react";
import "./Footer.css";
import logoImg from "../images/logo_white.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section footer-left">
        <h3>Ocean Conservancy</h3>
        <p>We couldn’t do our ocean work without you.</p>
      </div>

      <div className="footer-section footer-center">
        <h4>Contact Us</h4>
        <p>Phone: +123 456 789</p>
        <p>Email: info@ocean.com</p>
        <p>Office hours: 8:30 - 17:00</p>
      </div>

      <div className="footer-section footer-right">
        <h4>Latest Info Article</h4>
        <img src={logoImg} alt="info preview" className="footer-info-img" />
        <p>Help clean the ocean with us.</p>
      </div>
    </footer>
  );
}

export default Footer;

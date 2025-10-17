import React from "react";
import { Link } from "react-router-dom";
import "../om_oss.css";
import logoImg from "../images/logo.png";

const OmOss = ({ goHome }) => {
  return (
    <div className="om-oss-container">
      {/* Corner Logo */}
      <img src={logoImg} alt="Logo" className="corner-logo" onClick={goHome} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>About Us</h1>
            <p>
              We are dedicated to protecting our oceans and beaches, keeping them clean,
              and ensuring a thriving planet for everyone. Join our mission to make a lasting impact.
            </p>
            <button className="cta-button">Join Us</button>
          </div>
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We believe in the power of community and the importance of preserving our oceans.
          Our projects focus on beach cleanups, marine life conservation, and spreading awareness about ocean health.
        </p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <div className="values-cards">
          <div className="card">
            <h3>Environment</h3>
            <p>Protecting marine life and ecosystems is at the heart of everything we do.</p>
          </div>
          <div className="card">
            <h3>Community</h3>
            <p>We engage volunteers and communities to make a real difference together.</p>
          </div>
          <div className="card">
            <h3>Education</h3>
            <p>Raising awareness and educating others about the ocean’s importance.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to make a difference?</h2>
        <p>Your support can make a real impact. Become part of our mission today!</p>
        <button className="cta-button">Donate</button>
      </section>
    </div>
  );
};

export default OmOss;

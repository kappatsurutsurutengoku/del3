import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Calendar from "./pages/calendar.js";
import OmOss from "./pages/om_oss.js";
import Login from "./pages/login.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import homeTextImg from "./images/home_text.png";
import logoImg from "./images/logo_white.png";
import info1 from "./images/info_4.jpg";
import info2 from "./images/info_5.jpg";
import info3 from "./images/info_6.jpg";
import cleanImg from "./images/clean.jpg";
import heroBgImg from "./images/home_7.png";

import sponsor1 from "./images/sponsor_1.png";
import sponsor2 from "./images/sponsor_2.png";
import sponsor3 from "./images/sponsor_3.png";
import sponsor4 from "./images/sponsor_4.png";
import sponsor5 from "./images/sponsor_5.png";
import sponsor6 from "./images/sponsor_6.png";
import sponsor7 from "./images/sponsor_7.png";
import sponsor8 from "./images/sponsor_8.png";
import sponsor9 from "./images/sponsor_9.png";
import sponsor10 from "./images/sponsor_10.png";
import sponsor11 from "./images/sponsor_11.png";
import sponsor12 from "./images/sponsor_12.png";
import sponsor13 from "./images/sponsor_13.png";
import sponsor14 from "./images/sponsor_14.png";
import sponsor15 from "./images/sponsor_15.jpg";
import sponsor16 from "./images/sponsor_16.png";
import sponsor17 from "./images/sponsor_17.png";
import sponsor18 from "./images/sponsor_18.png";
import sponsor19 from "./images/sponsor_19.png";
import sponsor20 from "./images/sponsor_20.png";
import sponsor21 from "./images/sponsor_21.png";
import sponsor22 from "./images/sponsor_22.png";
import sponsor23 from "./images/sponsor_23.png";

const sponsors = [
  sponsor1, sponsor2, sponsor3, sponsor4, sponsor5,
  sponsor6, sponsor7, sponsor8, sponsor9, sponsor10,
  sponsor11, sponsor12, sponsor13, sponsor14, sponsor15,
  sponsor16, sponsor17, sponsor18, sponsor19, sponsor20,
  sponsor21, sponsor22, sponsor23,
];

function App() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showOmOss, setShowOmOss] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const goHome = () => {
    setShowCalendar(false);
    setShowOmOss(false);
    setShowLogin(false);
  };

  return (
    <div className="App">
      <Header
        onShowAbout={() => {
          setShowOmOss(true);
          setShowCalendar(false);
          setShowLogin(false);
        }}
        onShowCalendar={() => {
          setShowCalendar(true);
          setShowOmOss(false);
          setShowLogin(false);
        }}
        onShowLogin={() => {
          setShowLogin(true);
          setShowOmOss(false);
          setShowCalendar(false);
        }}
      />

      <main>
        {showCalendar ? (
          <Calendar goHome={goHome} />
        ) : showOmOss ? (
          <OmOss goHome={goHome} />
        ) : showLogin ? (
          <Login goHome={goHome} />
        ) : (
          <>
            <section className="hero">
              <div
                className="hero-bg"
                style={{ backgroundImage: `url(${heroBgImg})` }}
              ></div>

              <img
                src={homeTextImg}
                alt="Hero Text Overlay"
                className="hero-png-overlay"
              />
              <img src={logoImg} alt="Site Logo" className="hero-logo" />

              <div className="hero-subtext">
                <p>We couldn’t do our ocean</p>
                <p>work without you.</p>
                <a href="#" className="blue-btn">Donate</a>
              </div>
            </section>

            <div className="banner-full">
              <div className="sponsor-slider">
                <div className="sponsor-track">
                  {sponsors.concat(sponsors).map((src, index) => (
                    <div key={index} className="sponsor-slide">
                      <img src={src} alt={`sponsor ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="clean-image-section">
              <img src={cleanImg} alt="Clean Ocean" className="clean-img" />
              <div className="clean-text">
                <h2>Ocean Cleanup</h2>
                <p>Remove plastics and let marine life flourish naturally.</p>
              </div>
            </div>

            <div className="half-circle-sections">
              {[
                { img: info1, title: "Saving the Vaquita", text: "The vaquita is an endemic species of porpoise found only in a small region in Mexico’s Upper Gulf of California." },
                { img: info2, title: "Saving Marine Wildlife", text: "More than 20% of the fish taken out of the sea comes from illegal, unreported, and unregulated fishing." },
                { img: info3, title: "Sea Shepherd Science", text: "Sea Shepherd ships have assisted scientists to identify priority biodiversity hot spots and species of concern." }
              ].map((info, i) => (
                <div key={i} className="half-circle-card">
                  <div className="half-circle-img" style={{ backgroundImage: `url(${info.img})` }}></div>
                  <div className="half-circle-text">
                    <h3>{info.title}</h3>
                    <p>{info.text}</p>
                    <a href="#">Read more →</a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;

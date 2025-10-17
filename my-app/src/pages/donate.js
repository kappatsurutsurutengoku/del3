import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../donate.css";
import logo from "../images/logo.png"; 

const Donate = ({ goHome }) => {
  const [amount, setAmount] = useState("");
  const [custom, setCustom] = useState("");

  const presetAmounts = [5, 10, 25, 50, 100];

  const handleDonate = (e) => {
    e.preventDefault();
    const donation = custom || amount;
    if (!donation) return alert("Please select or enter an amount!");
    alert(`Thank you for donating $${donation}! 🌊`);
  };

  return (
    <div className="donate-container">
      <img src={logo} alt="Logo" className="screen-logo" onClick={goHome} />

      <div className="donate-box">
        <h2>Support Ocean Conservation</h2>
        <p className="donate-desc">
          Every dollar helps fund <strong>beach cleanups</strong>,{" "}
          <strong>wildlife protection</strong>, and{" "}
          <strong>awareness programs</strong>.
        </p>

        <div className="amount-options">
          {presetAmounts.map((val) => (
            <button
              key={val}
              className={`amount-btn ${amount === val ? "active" : ""}`}
              onClick={() => {
                setAmount(val);
                setCustom("");
              }}
            >
              ${val}
            </button>
          ))}
        </div>

        <div className="custom-amount">
          <input
            type="number"
            placeholder="Custom amount"
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value);
              setAmount("");
            }}
          />
        </div>

        <button className="donate-btn" onClick={handleDonate}>
          Donate {amount || custom ? `$${amount || custom}` : ""}
        </button>

        <button onClick={goHome} className="back-home">
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default Donate;

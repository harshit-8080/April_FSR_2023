import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/checkout.css";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cryptoName, setCryptoName] = useState("");
  const [units, setUnits] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target);

    const response = await emailjs.sendForm(
      "service_am4gelj",
      "template_n75fuve",
      e.target,
      "jkk_KN-0joWOKn5Ym"
    );
    console.log("Email Sent successfully ", response);
  };
  return (
    <div className="checkout">
      <h2>Buy Stock</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label> Buyer Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Buyer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label> Buyer Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Buyer Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label> Currency Name:</label>
          <input
            type="text"
            name="units"
            value={cryptoName}
            placeholder="BitCoin"
            onChange={(e) => setCryptoName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Units:</label>
          <input
            type="text"
            name="cryptoName"
            value={units}
            placeholder="10"
            onChange={(e) => setUnits(e.target.value)}
          />
        </div>

        <button type="submit" className="btn">
          Investment Confirm
        </button>
      </form>
    </div>
  );
}

export default Checkout;

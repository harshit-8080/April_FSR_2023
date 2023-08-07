import React from "react";
import "../styles/CryptoCard.css";

function CryptoCard({ name, symbol, price, marketCap }) {
  return (
    <div className="crypto-card">
      <h2>
        {name} {symbol}
      </h2>

      <p>Price: {price}</p>
      <p>Market Cap: {marketCap}</p>
    </div>
  );
}

export default CryptoCard;

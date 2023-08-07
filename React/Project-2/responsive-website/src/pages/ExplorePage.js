import React from "react";
import CryptoCard from "../components/CryptoCard";
import VideoCarousel from "../components/VideoCarousel";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

function ExplorePage() {
  const cryptoData = [
    {
      name: "BitCoin",
      symbol: "btc",
      price: 4300000,
      marketCap: 8000000000000,
    },
    {
      name: "Ethereum",
      symbol: "ETC",
      price: 300000,
      marketCap: 420000000000,
    },
    {
      name: "DogeCoin",
      symbol: "DGC",
      price: 6800000,
      marketCap: 100000000000,
    },
    {
      name: "BitCoin",
      symbol: "btc",
      price: 4300000,
      marketCap: 8000000000000,
    },
  ];
  const video = [
    { url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { url: "https://www.youtube.com/embed/BSOvXn0d8xI" },
    { url: "https://www.youtube.com/embed/7gXqHZdupD4" },
    { url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  ];
  return (
    <div>
      <Header />
      {cryptoData.map((item) => {
        return (
          <CryptoCard
            name={item.name}
            symbol={item.symbol}
            price={item.price}
            marketCap={item.marketCap}
          />
        );
      })}
      <VideoCarousel video={video} />
    </div>
  );
}

export default ExplorePage;

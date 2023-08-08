import React from "react";
import NavBar from "../components/NavBar";
import CryptoHeroSection from "../components/CryptoHeroSection";
import VideoCarousel from "../components/VideoCarousel";
import Footer from "../components/Footer";

function HomePage() {
  const video = [
    { url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { url: "https://www.youtube.com/embed/BSOvXn0d8xI" },
    { url: "https://www.youtube.com/embed/7gXqHZdupD4" },
    { url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  ];
  return (
    <>
      <NavBar />
      <CryptoHeroSection />
      <br />
      <br />
      <br />
      <br />
      <VideoCarousel video={video} />
      <Footer />
    </>
  );
}

export default HomePage;

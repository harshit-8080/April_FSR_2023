import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/VideoCarousel.css";

function VideoCarousel({ video }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="video-carousel">
      <Slider {...settings}>
        {video.map((video) => {
          return (
            <div>
              <iframe
                title="Crypto Guide"
                width="100%"
                height="auto"
                src={video.url}
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default VideoCarousel;

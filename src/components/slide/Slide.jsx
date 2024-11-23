import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";

const Slide = () => {
  const settings = {
    arrows: true, 
    autoplay: true,
    autoplaySpeed: 2000, 
    centerMode: false, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    dots: true, 
  };

  const images = [
    "/img/app dev.jpg",
    "/img/digital.jpg",
    "/img/web dev.png",
    "/img/whats.jpg",
    "/img/flat.png",
   
  ];

  return (
    <div className="slide">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide-item">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;

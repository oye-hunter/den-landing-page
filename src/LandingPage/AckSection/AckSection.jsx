import React, {useRef, useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../LandingPage.css";
import "./AckSection.css";

const AckSection = () => {
  useEffect(() => {

    // Setting up the interval
    const intervalId = setInterval(sliderRef.slickNext(), 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
      
  }, []);
  
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="lp-ack-section">
      <div className="lp-ack-section-text">
        <h3>Recognition & Acknowledgements</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking
        </p>
      </div>

      <div className="lp-ack-section-carousal">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div className="lp-ack-section-carousal-item">
            <img src={require("../../Assets/carousal-item-1.png")} alt="" />
          </div>
          <div className="lp-ack-section-carousal-item">
            <img src={require("../../Assets/carousal-item-1.png")} alt="" />
          </div>
          <div className="lp-ack-section-carousal-item">
            <img src={require("../../Assets/carousal-item-1.png")} alt="" />
          </div>
          <div className="lp-ack-section-carousal-item">
            <img src={require("../../Assets/carousal-item-1.png")} alt="" />
          </div>
          <div className="lp-ack-section-carousal-item">
            <img src={require("../../Assets/carousal-item-1.png")} alt="" />
          </div>
          <div className="lp-ack-section-carousal-item">
            <img src={require("../../Assets/carousal-item-1.png")} alt="" />
          </div>
        </Slider>
      </div>
        <div className="lp-ack-section-carousal-buttons">
          <button onClick={previous}>
          <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={next}>
          <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
    </div>
  );
};
export default AckSection;

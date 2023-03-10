import React from "react";
import styled from "styled-components";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import badging from "../assets/images/slider-badging.jpg";
import badag from "../assets/images/slider-badag.jpg";
import scale from "../assets/images/slider-scale.jpg";
import scales from "../assets/images/slider-scales.jpg";
function imgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={badging} alt="" />
      </Wrap>
      <Wrap>
        <img src={badag}alt="" />
      </Wrap>
      <Wrap>
        <img src={scale}alt="" />
      </Wrap>
       <Wrap>
        <img src={scales} alt="" />
      </Wrap>
    </Carousel>
  );
}

export default imgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

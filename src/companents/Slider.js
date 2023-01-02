import { Image } from "@chakra-ui/react";

import React from "react";
import MainImage from "../imgs/mainpic.jpg";
import SecondImage from "../imgs/image-product-2.jpg";
import ThirdImage from "../imgs/image-product-3.jpg";
import FourthImage from "../imgs/image-product-4.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function Slider() {
  return (
    <Carousel>
      <div>
        <img src={MainImage} />
      </div>
      <div>
        <img src={SecondImage} />
      </div>
      <div>
        <img src={ThirdImage} />
      </div>
      <div>
        <img src={FourthImage} />
      </div>
    </Carousel>
  );
}

export default Slider;

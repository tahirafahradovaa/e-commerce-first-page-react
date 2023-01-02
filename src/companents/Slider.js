import { Image } from "@chakra-ui/react";

import React from "react";
import MainImage from "../imgs/mainpic.jpg";
import SecondImage from "../imgs/image-product-2.jpg";
import ThirdImage from "../imgs/image-product-3.jpg";
import FourthImage from "../imgs/image-product-4.jpg";

function Slider() {
  return (
    <Image borderRadius={"25px"} p={2} boxSize={"400px"} src={MainImage} />
  );
}

export default Slider;
{
  /* <Box>
  <Provider>
    {" "}
    <Carousel gap={50}>
      <Image src={MainImage} />
      <Image src={PicTwo} />
      <Image src={PicThree} />
      <LeftButton />
      <RightButton />
    </Carousel>
  </Provider>
</Box>; */
}

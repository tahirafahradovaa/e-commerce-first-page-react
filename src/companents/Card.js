import { Flex, Box, Image, Text, HStack, Button } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import picture from "../imgs/image-product-1-thumbnail.jpg";
import { stateContext } from "./stateContext";

function Card() {
  let { price, setPrice } = useContext(stateContext);

  return (
    <>
      {price.map((element) => (
        <Box key={element} p={5}>
          <Flex gap={7}>
            <Box>
              <Image borderRadius={"10px"} boxSize={"70px"} src={picture} />
            </Box>
            <Box>
              <Flex flexDirection={"column"} gap={4}>
                <Text> Fall Limited Edition Sneakers</Text>
                <Text>
                  $125.00 x {element}
                  <Text as={"span"} fontWeight={700}>
                    $ {element * 125}
                  </Text>
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ))}
    </>
  );
}

export default Card;

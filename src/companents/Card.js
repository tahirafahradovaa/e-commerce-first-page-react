import { Flex, Box, Image, Text, HStack, Button } from "@chakra-ui/react";
import React, { useContext, useEffect, useId } from "react";
import picture from "../imgs/image-product-1-thumbnail.jpg";
import { stateContext } from "./stateContext";
import Delete from "../imgs/deleteicon.svg";
function Card() {
  let { price, setPrice } = useContext(stateContext);
  let { add, setAdd } = useContext(stateContext);
  const randomId = useId();
  const deleteItem = (item) => {
    let filteredData = price.filter((q) => q != item);
    setPrice(filteredData);
  };
  if (price.length === 0) {
    setAdd(false);
  }

  return (
    <>
      {price &&
        price.map((element, i) => (
          <Box key={i} position={"relative"} p={5}>
            <Flex gap={7}>
              <Image
                value={i}
                id={randomId}
                cursor={"pointer"}
                onClick={() => deleteItem(element)}
                top={10}
                right={10}
                position={"absolute"}
                src={Delete}
              />
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

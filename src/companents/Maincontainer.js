import { Box, Center, Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Information from "./Information";
import Slider from "./Slider";

function Maincontainer({ isLargerThan1280 }) {
  return (
    <>
      {isLargerThan1280 ? (
        <Center>
          {" "}
          <Box maxWidth={"1050px"}>
            <Flex
              px={3}
              gap={"80px"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Slider />
              <Information />
            </Flex>
          </Box>
        </Center>
      ) : (
        <Center>
          {" "}
          <Box maxWidth={"1050px"}>
            <Flex
              px={10}
              gap={"20px"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Slider />
              <Information />
            </Flex>
          </Box>
        </Center>
      )}
      {/* <Center>
        {" "}
        <Box maxWidth={"1050px"}>
          <Flex
            px={3}
            gap={"80px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Slider />
            <Information />
          </Flex>
        </Box>
      </Center> */}
    </>
  );
}

export default Maincontainer;

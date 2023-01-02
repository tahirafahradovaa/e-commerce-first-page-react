import {
  Button,
  Image,
  Text,
  Box,
  Heading,
  HStack,
  Flex,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Cart from "../imgs/Cart.svg";
import { stateContext } from "./stateContext";

function Information() {
  useEffect(() => {
    if (count < 0) {
      setCount(0);
    }
  });
  let { count, setCount } = useContext(stateContext);
  let { add, setAdd } = useContext(stateContext);
  let { price, setPrice } = useContext(stateContext);
  return (
    <Box px={10} py={10}>
      <Flex flexDirection={"column"} gap={5}>
        <Text fontWeight={600} color={"hsl(26, 100%, 55%)"} letterSpacing={2}>
          {" "}
          SNEAKER COMPANY
        </Text>
        <Heading> Fall Limited Sneakers</Heading>

        <Text color={"hsl(219, 9%, 45%)"}>
          {" "}
          Therse low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </Text>
        <HStack>
          <Heading> $125.00</Heading>
          <Text
            fontSize={12}
            p={"3px 7px"}
            borderRadius={"10px"}
            color={"hsl(26, 100%, 55%)"}
            backgroundColor={"hsl(25, 100%, 94%)"}
          >
            {" "}
            50%
          </Text>
        </HStack>

        <Text textDecoration={"line-through"} color={"hsl(220, 14%, 75%)"}>
          {" "}
          %250
        </Text>
        <HStack>
          <Button
            onClick={() => {
              setCount(count - 1);
            }}
            _hover={{
              color: "hsl(26, 100%, 55%)",
            }}
          >
            -
          </Button>
          <Text>{count}</Text>
          <Button
            _hover={{
              color: "hsl(26, 100%, 55%)",
            }}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              if (count == 0) {
              } else {
                setPrice([...price, count]);
                setAdd(true);
                setCount(0);
              }
            }}
            _hover={{
              backgroundColor: "hsl(26, 90%, 65%)",
            }}
            p={"20px 60px"}
            color={"white"}
            backgroundColor={"hsl(26, 100%, 55%)"}
          >
            {" "}
            <Image mx={"8px"} boxSize={"15px"} src={Cart} /> Add to Cart
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Information;

import React, { useContext } from "react";
import Cart from "../imgs/Cart.svg";
import IMG from "../imgs/Image-avatar.png";

import {
  HStack,
  chakra,
  Flex,
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Image,
  MenuDivider,
  Text,
  Box,
  useBoolean,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Card from "./Card";
import { stateContext } from "./stateContext";
function Header({ isLargerThan1280 }) {
  const [show, setShow] = useBoolean(false);
  let { count, setCount } = useContext(stateContext);
  let { add, setAdd } = useContext(stateContext);
  let { price, setPrice } = useContext(stateContext);
  return (
    <>
      {isLargerThan1280 ? (
        <>
          {" "}
          <div>
            <Menu position="relative">
              <chakra.header id="header">
                <Flex
                  mx={10}
                  w="100%"
                  px="20"
                  py="5"
                  align="center"
                  justify="space-between"
                >
                  <HStack mb={5}>
                    <Heading>sneakers</Heading>
                    <Text
                      fontWeight={700}
                      _hover={{
                        cursor: "pointer",
                        borderBottom: "3px solid orange",
                      }}
                    >
                      Collection
                    </Text>
                    <Text
                      fontWeight={700}
                      _hover={{
                        cursor: "pointer",
                        borderBottom: "3px solid orange",
                      }}
                    >
                      Men
                    </Text>
                    <Text
                      fontWeight={700}
                      _hover={{
                        cursor: "pointer",
                        borderBottom: "3px solid orange",
                      }}
                    >
                      Women
                    </Text>
                    <Text
                      fontWeight={700}
                      _hover={{
                        cursor: "pointer",
                        borderBottom: "3px solid orange",
                      }}
                    >
                      About
                    </Text>
                    <Text
                      fontWeight={700}
                      _hover={{
                        cursor: "pointer",
                        borderBottom: "3px solid orange",
                      }}
                    >
                      Contact
                    </Text>
                  </HStack>
                  <HStack>
                    <Image
                      p={"10px"}
                      boxSize={"40px"}
                      _hover={{
                        borderRadius: "50%",
                        cursor: "pointer",
                        border: "3px solid orange",
                      }}
                      src={Cart}
                      onClick={setShow.toggle}
                      alt="cart"
                    />{" "}
                    <Image
                      _hover={{
                        borderRadius: "50%",
                        cursor: "pointer",
                        border: "3px solid orange",
                      }}
                      boxSize={"10"}
                      src={IMG}
                      alt="avatar"
                    />
                  </HStack>
                </Flex>
              </chakra.header>
            </Menu>
          </div>
        </>
      ) : (
        <Menu>
          <Flex w="100%" px="10" py="5" align="center" justify="space-between">
            <MenuButton
              fontWeight={700}
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
            >
              sneakers <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem fontWeight={700}>Collection</MenuItem>
              <MenuItem fontWeight={700}>Men</MenuItem>
              <MenuItem fontWeight={700}>Women</MenuItem>
              <MenuDivider />
              <MenuItem fontWeight={700}>About</MenuItem>
              <MenuItem fontWeight={700}>Contact</MenuItem>
            </MenuList>
            <HStack>
              <Image
                boxSize={"30px"}
                overflow
                borderRadius="full"
                width={"100%"}
                p={"5px"}
                _hover={{
                  cursor: "pointer",
                  border: "1px solid orange",
                }}
                src={Cart}
                onClick={setShow.toggle}
                alt="cart"
              />{" "}
              <Image
                borderRadius={"50%"}
                _hover={{
                  cursor: "pointer",
                  border: "1px solid orange",
                }}
                boxSize={"30px"}
                src={IMG}
                alt="avatar"
              />
            </HStack>
          </Flex>
        </Menu>
      )}

      {show ? (
        <Box
          zIndex={100}
          borderRadius={"20px"}
          top={"80px"}
          right={5}
          boxShadow={" 20px 20px 80px #bebebe, -20px -20px 80px #ffffff"}
          backgroundColor={"white"}
          width={"400px"}
          position="absolute"
        >
          <Text ml={10} my={5}>
            {" "}
            Cart
          </Text>
          <hr />
          {add ? <Card /> : <Heading p={10}> Your Cart is empty</Heading>}
          <hr />
          <Button
            onClick={() => {
              setCount(0);
              setAdd(false);
              setPrice([]);
            }}
            mb={4}
            mt={3}
            ml={"260px"}
          >
            {" "}
            Clear
          </Button>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;

// <Modal isOpen={isOpen} onClose={onClose}>
//   <ModalOverlay />
//   <ModalContent>
//     <ModalHeader>Cart</ModalHeader>
//     <hr />
//     <ModalCloseButton />
//     <ModalBody>
//       <Heading> helloy</Heading>
//     </ModalBody>
//     <ModalFooter>
//       <Button px={"30px"} colorScheme="orange" mr={3} onClick={onClose}>
//         Checkout
//       </Button>
//     </ModalFooter>
//   </ModalContent>
// </Modal>;

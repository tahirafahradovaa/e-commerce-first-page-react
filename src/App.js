import "./App.css";
import theme from "./companents/theme";
import { ChakraProvider, useMediaQuery } from "@chakra-ui/react";

import Header from "./companents/Header";
import Maincontainer from "./companents/Maincontainer";
import { useState } from "react";

function App() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 660px)");
  const [count, setCount] = useState(1);

  return (
    <ChakraProvider>
      <Header isLargerThan1280={isLargerThan1280}></Header>
      <Maincontainer isLargerThan1280={isLargerThan1280} />
    </ChakraProvider>
  );
}

export default App;

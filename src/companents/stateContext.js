import { createContext, useState } from "react";
export const stateContext = createContext(null);
export const StateProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [add, setAdd] = useState(false);
  const [price, setPrice] = useState([]);
  const values = {
    count,
    setCount,
    add,
    setAdd,
    price,
    setPrice,
  };

  return (
    <stateContext.Provider value={values}>{children}</stateContext.Provider>
  );
};

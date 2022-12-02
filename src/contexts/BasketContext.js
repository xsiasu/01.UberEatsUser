import { createContext, useEffect, useState, useContext } from "react";
import { Auth, DataStore } from "aws-amplify";

import { Basket } from "../models";
import { useAuthContext } from "./AuthContext";

const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
  const [restaurant, setRestaruant] = useState(null);
  const [basket, setBasket] = useState(null);
  const { dbUser } = useAuthContext();

  const addDishToBasket = (dish, quantity) => {
    console.warn("addDishToBasket", dish, quantity);
  };
  return (
    <BasketContext.Provider value={{ addDishToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);

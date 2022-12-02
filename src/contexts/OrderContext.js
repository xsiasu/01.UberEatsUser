import { createContext, useEffect, useState, useContext } from "react";

const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
  const createOrder = () => {
    console.warn("abc");
  };
  return (
    <OrderContext.Provider value={{ createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);

import { createContext, useEffect, useState } from "react";

export const CartCounterContext = createContext(null);

const CartCounterProvider = ({ children }) => {
    const [cartCounter, setcartCounter] = useState(0);

    const increment = () => {
        setCounter(cartCounter + 1);
    };

    const value = {
        cartCounter,
        setcartCounter,
        increment,
    };

    return (
        <CartCounterContext.Provider value={value}>{children}</CartCounterContext.Provider>
        );
}; // HOC va a proveer a todo lo que sea children

export default CartCounterProvider;
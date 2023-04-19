import React from "react";
import { createContext, useContext, useState } from "react";
const Context = createContext();
export const StateContext = ({ children }) => {
    const [quantity, setQuantity] = useState(0);
    const qtyInc = () => {
        setQuantity((prev) => prev + 1);
    };
    const qtyDec = () => {
        setQuantity((prev) => {
            prev - 1 < 1 ? 1 : prev - 1;
        });
        return (
            <Context.Provider value={{ quantity, setQuantity, qtyInc, qtyDec }}>
                {children}
            </Context.Provider>
        );
    };
};
export const useStateContext = () => useContext(Context);

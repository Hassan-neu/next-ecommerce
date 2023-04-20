import React from "react";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
const Context = createContext();
export const StateContext = ({ children }) => {
    const [qty, setQty] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const qtyInc = () => {
        setQty((prev) => prev + 1);
    };
    const qtyDec = () => {
        setQty((prev) => (prev - 1 < 1 ? 1 : prev - 1));
    };
    const addToCart = (name, image, qty, id, price) => {
        const checkCart = cartItems.find((cartItem) => cartItem.id == id);
        if (checkCart) {
            setShowCart(true);
            return toast("item already in cart");
        }
        setTotalQuantity((prevTotal) => prevTotal + qty);
        const itemToAdd = { name, image, thisQty: qty, id, price };
        setCartItems((prevItems) => [...prevItems, itemToAdd]);
    };
    const removeFromCart = (id, thisQty) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
        setCartItems(newCartItems);
        setTotalQuantity((prevTotal) => prevTotal - thisQty);
    };
    return (
        <Context.Provider
            value={{
                qty,
                setQty,
                qtyInc,
                qtyDec,
                showCart,
                setShowCart,
                setTotalQuantity,
                totalQuantity,
                addToCart,
                cartItems,
                removeFromCart,
            }}
        >
            {children}
        </Context.Provider>
    );
};
export const useStateContext = () => useContext(Context);

import React from "react";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
const Context = createContext();
export const StateContext = ({ children }) => {
    const [qty, setQty] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
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
        setTotalPrice((prevTotalPrice) => prevTotalPrice + qty * price);
        setQty(1);
        toast.success("item added");
    };
    const removeFromCart = (id, price, thisQty) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
        setCartItems(newCartItems);
        setTotalQuantity((prevTotal) => prevTotal - thisQty);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - thisQty * price);
        toast.success("item removed");
    };
    const toggleCartQty = (id, action) => {
        const foundProduct = cartItems.find((cartItem) => cartItem.id === id);
        if (action === "inc") {
            setCartItems((prevItems) =>
                prevItems.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            thisQty: foundProduct.thisQty + 1,
                        };
                    }
                    return item;
                })
            );
            setTotalQuantity((prevTotal) => prevTotal + 1);
            setTotalPrice(
                (prevTotalPrice) => prevTotalPrice + foundProduct.price
            );
        } else if (action === "dec") {
            if (foundProduct.thisQty > 1) {
                setCartItems((prevItems) =>
                    prevItems.map((item) => {
                        if (item.id === id) {
                            return {
                                ...item,
                                thisQty: foundProduct.thisQty - 1,
                            };
                        }
                        return item;
                    })
                );
                setTotalQuantity((prevTotal) => prevTotal - 1);
                setTotalPrice(
                    (prevTotalPrice) => prevTotalPrice - foundProduct.price
                );
            }
        }
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
                toggleCartQty,
                totalPrice,
                setTotalPrice,
                setCartItems,
            }}
        >
            {children}
        </Context.Provider>
    );
};
export const useStateContext = () => useContext(Context);

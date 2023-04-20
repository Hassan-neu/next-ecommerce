import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useStateContext } from "@/hooks/context";
import CartList from "./cartList";
const Cart = () => {
    const { setShowCart, totalQuantity, cartItems } = useStateContext();
    return (
        <div className="nav_shopcart">
            <div className="cart-nav">
                <AiOutlineArrowLeft onClick={() => setShowCart(false)} />
                <h3>Your cart</h3>
                <span>You have ({totalQuantity}) items in your cart</span>
            </div>
            {cartItems?.map((item) => {
                return <CartList key={item.id} cartItem={item} />;
            })}
            <div className="nav-payment">
                <button type="button">Pay with stripe</button>
            </div>
        </div>
    );
};

export default Cart;

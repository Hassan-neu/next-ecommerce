import React from "react";
import { AiOutlineArrowLeft, AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/hooks/context";
import CartList from "./cartList";
import Link from "next/link";
const Cart = () => {
    const { setShowCart, totalQuantity, cartItems, totalPrice } =
        useStateContext();
    return (
        <div className="nav_shopcart">
            <div className="cart-nav">
                <AiOutlineArrowLeft onClick={() => setShowCart(false)} />
                <h3>Your cart</h3>
                <span>You have ({totalQuantity}) items in your cart</span>
            </div>
            {cartItems.length < 1 ? (
                <div className="cart-empty">
                    <AiOutlineShopping size={150} />
                    <Link href="/" onClick={() => setShowCart(false)}>
                        <div className="cart-empty-btn">
                            <button type="button">Continue Shopping</button>
                        </div>
                    </Link>
                </div>
            ) : (
                cartItems?.map((item) => {
                    return <CartList key={item.id} cartItem={item} />;
                })
            )}

            <div className="nav-payment">
                <div className="product-total">
                    <h4>
                        Total Price:
                        {totalPrice
                            .toFixed(2)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </h4>
                </div>
                <Link href="/paymentGateway">
                    <button type="button" onClick={() => setShowCart(false)}>
                        Pay
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;

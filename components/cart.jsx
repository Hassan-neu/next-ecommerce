import React from "react";
import {
    AiOutlineArrowLeft,
    AiOutlineMinus,
    AiOutlinePlus,
} from "react-icons/ai";
const Cart = () => {
    return (
        <div className="nav_shopcart">
            <div className="cart-nav">
                <AiOutlineArrowLeft />
            </div>
            <div className="cart-product">
                <div className="cart-img">Image</div>
                <div className="product-name">product name </div>
                <div className="prouct-qty">
                    <button type="button">
                        <AiOutlineMinus />
                    </button>
                    <span className="qty-value">0</span>
                    <button type="button">
                        <AiOutlinePlus />
                    </button>
                </div>
            </div>
            <div className="nav-payment">
                <button type="button">Pay with stripe</button>
            </div>
        </div>
    );
};

export default Cart;

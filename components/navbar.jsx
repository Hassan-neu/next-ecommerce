import React from "react";
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="nav_logo">
                <Image src="/logo.svg" alt="logo" width={40} height={40} />
            </div>
            <div className="nav_shopbag">
                <AiOutlineShopping size={40} />
                <span className="shop_count">0</span>
            </div>
            {/* <div className="nav_shopcart">
                <div className="cart-nav">
                    <AiOutlineArrowLeft />
                </div>
                <div className="cart-product">
                    <div className="product-img">Image</div>
                    <div className="product-name">product name </div>
                    <div className="prouct-qty">0</div>
                </div>
                <div className="cart-product">
                    <div className="product-img">Image</div>
                    <div className="product-name">product name </div>
                    <div className="prouct-qty">0</div>
                </div>
                <div className="nav-payment">
                    <button type="button">Pay with stripe</button>
                </div>
            </div> */}
        </div>
    );
};

export default NavBar;

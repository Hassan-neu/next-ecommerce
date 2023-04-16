import React from "react";
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="nav_logo">
                <Image src="logo.svg" alt="logo" width={40} height={40} />
            </div>
            <div className="nav_shopbag">
                <AiOutlineShopping size={40} />
                <span className="shop_count">0</span>
            </div>
        </div>
    );
};

export default NavBar;

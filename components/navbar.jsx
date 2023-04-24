import React from "react";
import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./cart";
import Link from "next/link";
import { useStateContext } from "@/hooks/context";
const NavBar = () => {
    const { showCart, setShowCart, totalQuantity } = useStateContext();
    return (
        <div className="navbar">
            <div className="nav_logo">
                <Link href="/">
                    {/* <Image src="/logo.svg" alt="logo" width={40} height={40} />
                     */}
                    <h3>NEUTER</h3>
                </Link>
            </div>
            <div className="nav_shopbag">
                <AiOutlineShopping
                    size={40}
                    onClick={() => setShowCart((prev) => !prev)}
                />
                {totalQuantity ? (
                    <p className="shop_count">{totalQuantity}</p>
                ) : (
                    ""
                )}
            </div>
            {showCart && <Cart />}
        </div>
    );
};

export default NavBar;

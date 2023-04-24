import Link from "next/link";
import React, { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { runConfetti } from "@/lib/confetti";
import { useStateContext } from "@/hooks/context";
const SuccessPage = () => {
    const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();
    useEffect(() => {
        runConfetti();
        setTotalPrice(0);
        setTotalQuantity(0);
        setCartItems([]);
    }, []);
    return (
        <div className="success_container">
            <div className="success-wrapper">
                <BsBagCheckFill size={80} />
                <div className="success-text">
                    Thanks for the patronage your order was successful
                </div>
                <div className="success-btn">
                    <Link href="/">
                        <button type="button"> continue shopping</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;

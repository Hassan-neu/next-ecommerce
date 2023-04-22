import React from "react";
import Image from "next/image";
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiOutlineMinusCircle,
} from "react-icons/ai";
import { urlFor } from "@/lib/client";
import { useStateContext } from "@/hooks/context";
const CartList = ({ cartItem }) => {
    const { image, name, thisQty, id, price } = cartItem;
    const { removeFromCart, toggleCartQty } = useStateContext();
    return (
        <div className="cart-product">
            <div className="cart-img">
                <Image
                    src={urlFor(image[0]).url()}
                    width={100}
                    height={100}
                    alt={name}
                />
            </div>
            <div className="cart-product-name">{name}</div>
            <div className="cart-ctrl">
                <div className="rmv-item">
                    <AiOutlineMinusCircle
                        onClick={() => removeFromCart(id, price, thisQty)}
                    />
                </div>
                <div className="product-qty">
                    <button
                        type="button"
                        onClick={() => toggleCartQty(id, "dec")}
                    >
                        <AiOutlineMinus />
                    </button>
                    <span className="qty-value">{thisQty}</span>
                    <button
                        type="button"
                        onClick={() => toggleCartQty(id, "inc")}
                    >
                        <AiOutlinePlus />
                    </button>
                </div>
                <div className="sub-total">
                    Subtotal: $
                    {(thisQty * price)
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
            </div>
        </div>
    );
};

export default CartList;

import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/client";
const ProductCard = ({ products }) => {
    const { name, price, description, image, brand } = products;
    return (
        <div className="product_card">
            <div className="product-img">
                <Image
                    src={urlFor(image && image[0]).url()}
                    width={200}
                    height={150}
                    alt={name}
                />
            </div>
            <div className="product-head">
                <h4>{name}</h4>
            </div>
            <div>
                <span>${price}</span>
            </div>
            <div className="product-desc">Brand: {brand}</div>
            <div className="product-btn">
                <button type="button">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;

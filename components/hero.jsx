import React from "react";
import { urlFor } from "@/lib/client";
import Image from "next/image";
const Hero = ({ products }) => {
    const newProduct = products.slice(0, 7);
    console.log(newProduct);
    return (
        <div className="hero_wrapper">
            <div className="hero_head">
                <h1>Step into greatness with our football boots</h1>
            </div>
            <div className="hero_img-container">
                {newProduct?.map((product) => {
                    return (
                        <div className="hero-img" key={product._id}>
                            <Image
                                src={urlFor(product.image[0]).url()}
                                width={300}
                                height={300}
                                alt={product.name}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Hero;

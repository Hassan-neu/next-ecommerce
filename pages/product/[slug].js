import Image from "next/image";
import React from "react";
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiFillStar,
    AiOutlineStar,
} from "react-icons/ai";
import { client, urlFor } from "@/lib/client";
import Link from "next/link";
const Product = ({ product, moreProducts }) => {
    const { image, name, description, price } = product;
    const slicedProducts = moreProducts.slice(0, 9);
    console.log({ slicedProducts });
    console.log(product);
    return (
        <div className="product_container">
            <div className="product_wrapper">
                <div className="solo-img">
                    <Image
                        src={urlFor(image[0]).url()}
                        alt={name}
                        width={300}
                        height={300}
                    />
                    <div className="img-rel">
                        <Image
                            src={urlFor(image[1]).url()}
                            alt={product.name}
                            width={70}
                            height={70}
                        />
                        <Image
                            src={urlFor(image[2]).url()}
                            alt={name}
                            width={70}
                            height={70}
                        />
                        <Image
                            src={urlFor(image[3]).url()}
                            alt={name}
                            width={70}
                            height={70}
                        />
                    </div>
                </div>
                <div className="product-details">
                    <div className="product-name">{name}</div>
                    <div className="product-rating">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <div className="product-desc">
                        <div className="desc-head">Details: </div>
                        <div className="desc-details">{description}</div>
                    </div>
                    <div className="producr-price">${price}</div>
                    <div className="product-qty">
                        <div className="qty-head">Quantity: </div>
                        <div className="qty-ctrl">
                            <button type="button">
                                <AiOutlineMinus />
                            </button>
                            <span className="qty-value">0</span>
                            <button type="button">
                                <AiOutlinePlus />
                            </button>
                        </div>
                    </div>
                    <div className="product-btn--buy">
                        <button type="button">Add to cart</button>
                        <button type="button">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="marquee">
                <div className="marquee-head">YOU MAY ALSO LIKE</div>
                <div className="marquee-images">
                    {slicedProducts?.map((slice) => {
                        return (
                            <div className="marquee-img" key={slice._id}>
                                <Link href={`/product/${slice.slug.current}`}>
                                    <Image
                                        src={urlFor(slice.image[0]).url()}
                                        alt={slice.name}
                                        width={200}
                                        height={200}
                                    />
                                    <div className="marquee-text">
                                        {slice.name}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const query = `*[_type=='products']`;
    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current,
        },
    }));

    return {
        paths,
        fallback: true,
    };
};
export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type=="products" && slug.current=='${slug}'][0]`;
    const product = await client.fetch(query);
    const moreQuery = `*[_type=='products']`;
    const moreProducts = await client.fetch(moreQuery);
    return {
        props: {
            product,
            moreProducts,
        },
    };
};
export default Product;

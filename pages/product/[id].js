import Image from "next/image";
import React from "react";
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiFillStar,
    AiOutlineStar,
} from "react-icons/ai";

const Product = () => {
    return (
        <div className="product_container">
            <div className="product_wrapper">
                <div className="solo-img">
                    <Image src="" alt="" width={300} height={300} />
                    <div className="img-rel">
                        <Image src="" alt="" width={70} height={70} />
                        <Image src="" alt="" width={70} height={70} />
                        <Image src="" alt="" width={70} height={70} />
                        <Image src="" alt="" width={70} height={70} />
                    </div>
                </div>
                <div className="product-details">
                    <div className="product-name">PRODUCT NAME</div>
                    <div className="product-rating">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <div className="product-desc">
                        <div className="desc-head">Details: </div>
                        <div className="desc-details">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptatem qui dignissimos necessitatibus,
                            quos voluptates id reiciendis sequi numquam quis.
                            Illo harum corporis enim inventore officia amet
                            voluptatem reprehenderit non quasi! Repudiandae
                            labore corporis maiores eveniet illum, veniam
                            assumenda laudantium eligendi debitis, dignissimos
                            dolore voluptatem quod suscipit voluptas aliquid
                            provident accusamus, reprehenderit ullam animi est?
                            Doloremque, dolore tenetur. Aspernatur harum quas
                            voluptas! Exercitationem accusantium laborum culpa!
                            Ullam rerum laudantium placeat qui, eligendi vel,
                            eveniet omnis, harum esse sequi blanditiis nostrum
                            unde?
                        </div>
                    </div>
                    <div className="producr-price">$1000</div>
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
                    <Image src="" alt="" width={200} height={200} />
                    <Image src="" alt="" width={200} height={200} />
                    <Image src="" alt="" width={200} height={200} />
                    <Image src="" alt="" width={200} height={200} />
                    <Image src="" alt="" width={200} height={200} />
                    <Image src="" alt="" width={200} height={200} />
                    <Image src="" alt="" width={200} height={200} />
                    <Image src="" alt="" width={200} height={200} />
                </div>
            </div>
        </div>
    );
};

export default Product;

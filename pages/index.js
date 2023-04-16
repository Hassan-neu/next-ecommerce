import Hero from "@/components/hero";
import Banner from "@/components/banner";
import Image from "next/image";
export default function Home() {
    return (
        <div className="container">
            <Hero />
            <div className="products_wrapper">
                {/*Products are to be dynamic*/}
                <div className="product_card">
                    <div className="product-img">
                        <Image src="" width={200} height={150} alt="" />
                    </div>
                    <div className="product-head">
                        <span>Gun 1</span>
                    </div>
                    <div className="product-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto magni adipisci deleniti accusantium
                        dolore! Dolorum tempore quod quasi aspernatur cum.
                    </div>
                    <div className="product-btn">
                        <button type="button">Add to cart</button>
                    </div>
                </div>
                <div className="product_card">
                    <div className="product-img">
                        <Image src="" width={200} height={150} alt="" />
                    </div>
                    <div className="product-head">
                        <span>Gun 1</span>
                        <span>$100</span>
                    </div>
                    <div className="product-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto magni adipisci deleniti accusantium
                        dolore! Dolorum tempore quod quasi aspernatur cum.
                    </div>
                    <div className="product-btn">
                        <button type="button">Add to cart</button>
                    </div>
                </div>
                <div className="product_card">
                    <div className="product-img">
                        <Image src="" width={200} height={150} alt="" />
                    </div>
                    <div className="product-head">
                        <span>Gun 1</span>
                        <span>$100</span>
                    </div>
                    <div className="product-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto magni adipisci deleniti accusantium
                        dolore! Dolorum tempore quod quasi aspernatur cum.
                    </div>
                    <div className="product-btn">
                        <button type="button">Add to cart</button>
                    </div>
                </div>
                <div className="product_card">
                    <div className="product-img">
                        <Image src="" width={200} height={150} alt="" />
                    </div>
                    <div className="product-head">
                        <span>Gun 1</span>
                        <span>$100</span>
                    </div>
                    <div className="product-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto magni adipisci deleniti accusantium
                        dolore! Dolorum tempore quod quasi aspernatur cum.
                    </div>
                    <div className="product-btn">
                        <button type="button">Add to cart</button>
                    </div>
                </div>
                <div className="product_card">
                    <div className="product-img">
                        <Image src="" width={200} height={150} alt="" />
                    </div>
                    <div className="product-head">
                        <span>Gun 1</span>
                        <span>$100</span>
                    </div>
                    <div className="product-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto magni adipisci deleniti accusantium
                        dolore! Dolorum tempore quod quasi aspernatur cum.
                    </div>
                    <div className="product-btn">
                        <button type="button">Add to cart</button>
                    </div>
                </div>
                <div className="product_card">
                    <div className="product-img">
                        <Image src="" width={200} height={150} alt="" />
                    </div>
                    <div className="product-head">
                        <span>Gun 1</span>
                        <span>$100</span>
                    </div>
                    <div className="product-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto magni adipisci deleniti accusantium
                        dolore! Dolorum tempore quod quasi aspernatur cum.
                    </div>
                    <div className="product-btn">
                        <button type="button">Add to cart</button>
                    </div>
                </div>
                <div className="product_card">
                    <div className="product-img">
                        <Image src="" width={200} height={150} alt="" />
                    </div>
                    <div className="product-head">
                        <span>Gun 1</span>
                        <span>$100</span>
                    </div>
                    <div className="product-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto magni adipisci deleniti accusantium
                        dolore! Dolorum tempore quod quasi aspernatur cum.
                    </div>
                    <div className="product-btn">
                        <button type="button">Add to cart</button>
                    </div>
                </div>
                <div className="product_card">
                    <div className="product-img">
                        <Image src="" width={200} height={150} alt="" />
                    </div>
                    <div className="product-head">
                        <span>Gun 1</span>
                        <span>$100</span>
                    </div>
                    <div className="product-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto magni adipisci deleniti accusantium
                        dolore! Dolorum tempore quod quasi aspernatur cum.
                    </div>
                    <div className="product-btn">
                        <button type="button">Add to cart</button>
                    </div>
                </div>
            </div>
            <Banner />
        </div>
    );
}

import React, { useEffect, useState } from "react";
import { useRef } from "react";
const Hero = () => {
    const containerRef = useRef();
    const [indx, setIndx] = useState(0);

    // useEffect(() => {
    //     const nodes = containerRef.current.childNodes;
    //     nodes[0].classList.add("active");
    //     setInterval(() => {
    //         if (indx >= 6) {
    //             setIndx(0);
    //         }
    //         setIndx((prevIndx) => prevIndx + 1);
    //     }, 3000);
    //     [...nodes].map(
    //         (node) =>
    //             node.classList.contains("active") &&
    //             node.classList.remove("active")
    //     );
    //     setTimeout(() => {
    //         nodes[indx].classList.add("active");
    //     }, 3000);
    // }, [indx]);

    return (
        <div className="hero_wrapper">
            <div className="hero_head">
                <h1>Step into greatness with our football boots</h1>
            </div>
            <div className="hero_img-container" ref={containerRef}>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
            </div>
        </div>
    );
};

export default Hero;

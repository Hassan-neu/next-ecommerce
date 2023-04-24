import React, { useEffect, useState } from "react";
import { useRef } from "react";
const Hero = () => {
    const [indx, setIndx] = useState(0);
    const heroSlide = useRef();
    useEffect(() => {
        const heroNodes = heroSlide.current.childNodes;
        [...heroNodes].map(
            (node) =>
                node.classList.contains("active") &&
                node.classList.remove("active")
        );

        if (indx >= 7) return setIndx(0);
        const interval = setInterval(() => setIndx(indx + 1), 3000);

        heroNodes[indx].classList.add("active");
        return () => clearInterval(interval);
    }, [indx]);
    return (
        <div className="hero_wrapper">
            <div className="hero_head">
                <h1>Step into greatness with our football boots</h1>
            </div>
            <div className="hero_img-container" ref={heroSlide}>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
                <div className="hero-img"></div>
                {/* <div className="switch plus">+</div>
                <div className="switch minus">-</div> */}
            </div>
        </div>
    );
};

export default Hero;

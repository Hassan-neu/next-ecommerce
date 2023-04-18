import React from "react";
import { urlFor } from "@/lib/client";
import Image from "next/image";
const Hero = () => {
    return (
        <div className="hero_wrapper">
            <div className="hero_head">
                <h1>Step into greatness with our football boots</h1>
            </div>
            <div className="hero_img-container">
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

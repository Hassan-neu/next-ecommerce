import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import Script from "next/script";
const Layout = ({ children }) => {
    return (
        <div className="layout_container">
            <Head>
                <title>Get your football gears</title>
            </Head>
            <Script src="https://js.paystack.co/v2/inline.js"></Script>
            <header>
                <NavBar />
            </header>
            <div className="layout_wrapper">{children}</div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;

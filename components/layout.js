import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
const Layout = ({ children }) => {
    return (
        <div className="layout_container">
            <Head>
                <title>GUN STORE</title>
            </Head>
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

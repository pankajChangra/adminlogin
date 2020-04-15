import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import homepage from "../../images/homepage1.jpg"

export default function Layout() {
    return (
        <React.Fragment>
            <Navbar />
                <img alt="homepage" src={homepage} className="homepage-bg-image img-fluid" />
            <Footer />
        </React.Fragment>
    )
}
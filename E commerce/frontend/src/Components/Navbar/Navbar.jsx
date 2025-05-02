import React from "react"
import "./Navbar.css" // Assuming you have a CSS file for styling
import logo from "../Assets/logo.png" // Path to your logo image
import cart_icon from "../Assets/cart_icon.png"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>ShopperMart</p>
            </div>
        </div>
    );
};

export default Navbar;
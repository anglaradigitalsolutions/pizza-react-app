import React from "react";
import { } from "@mui/material/colors";
import Vector from "../images/Group 6282 1.png";
import Cart from "../images/fi-rr-shopping-cart.png";

const NavBar = () => {
  return <div className="navbarMain">
    <img src={Vector} alt="logo" style={{ height: 60, width: 230 }} />
    <div className="navbar-skewd noTopMargin dflex">
      <ul>
        <li className="">Home</li>
        <li>Services </li>
        <li>Menu </li>
        <li>Testimonial</li>
        <li>Contact</li>
      </ul>
      {/* <div className="dflex"> */}
        <div className="cart-btn dflex">
        <img src={Cart} alt='cart' style={{marginInline: 5}}/>
          Cart
        </div>
        <div className="sign-btn">
          Sign in
        </div>
      {/* </div> */}
    </div>
  </div>;
};

export default NavBar;

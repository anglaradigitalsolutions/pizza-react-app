import React from "react";
import { } from "@mui/material/colors";
import Vector from "../images/Group 6282 1.png";
import Cart from "../images/fi-rr-shopping-cart.png";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";

const NavBar = () => {
  return <div className="navbarMain">
    <img src={Vector} alt="logo" style={{ height: 60, width: 230 }} />
    <div className="navbar-skewd noTopMargin dflex">
      <ul>

        <li className=""><NavLink to={'/dashboard'}>Home </NavLink> </li>
        <li>Services </li>
        <li>Menu </li>
        <li>Testimonial</li>
        <li>Contact</li>
      </ul>
      {/* <div className="dflex"> */}
      <NavLink to={'/cart'}>
        <div className="cart-btn dflex">
          <Badge badgeContent={4} style={{color: '#ff5e62'}} outline>
            <img src={Cart} alt='cart' style={{ marginInline: 10 }} /></Badge>
          Cart
        </div></NavLink>
      <div className="sign-btn">
        Sign in
      </div>
      {/* </div> */}
    </div>
  </div>;
};

export default NavBar;

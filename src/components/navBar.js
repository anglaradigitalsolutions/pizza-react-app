import React, { useState } from "react";
import { } from "@mui/material/colors";
import Vector from "../images/Group 6282 1.png";
import Cart from "../images/fi-rr-shopping-cart.png";
import drwerbtn from "../images/Group 5893.svg";
import { NavLink } from "react-router-dom";
import { Badge, Drawer } from "@mui/material";
import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
const NavBar = () => {


  const items = useSelector((state) => state.cartStore.items);
  const [isDrawer, setisDrawer] = useState(false)

  return <div className="navbarMain">
    <img src={Vector} alt="logo" style={{ height: 60, width: 230 }} />
    <img src={drwerbtn} onClick={() => setisDrawer(true)} alt="drawer" className="cursor-pointer drawer-btn" />
    <div className="navbar-skewd noTopMargin dflex">
      <ul>
        <li className=""><NavLink to={'/dashboard'}>Home </NavLink> </li>
        <li> Services </li>
        <li>Menu </li>
        <li>Testimonial</li>
        <li>Contact</li>
      </ul>
      {/* <div className="dflex"> */}
      <NavLink to={'/cart'}>
        <div className="cart-btn dflex">
          <Badge badgeContent={items.length} style={{ color: '#ff5e62' }} outline>
            <ShoppingCartIcon /></Badge>
          Cart
        </div></NavLink>
      <div className="sign-btn">
        Sign in
      </div>
      {/* </div> */}
    </div>
    <Drawer
      anchor={'left'}
      open={isDrawer}
      onClose={() => setisDrawer(!isDrawer)}
    >
      <ul className="mobile-Navbar">
        <li onClick={() => setisDrawer(!isDrawer)}><HomeIcon className="mobileNav-Icon" /><NavLink to={'/dashboard'}>  Home </NavLink> </li>
        <li onClick={() => setisDrawer(!isDrawer)}> <RoomServiceIcon className="mobileNav-Icon" /> Services </li>
        <li onClick={() => setisDrawer(!isDrawer)}> <SummarizeIcon className="mobileNav-Icon" /> Menu </li>
        <li onClick={() => setisDrawer(!isDrawer)}> <AddCommentIcon className="mobileNav-Icon" /> Testimonial</li>
        <li onClick={() => setisDrawer(!isDrawer)}><ConnectWithoutContactIcon className="mobileNav-Icon" /> Contact</li>
        <li onClick={() => setisDrawer(!isDrawer)}><NavLink to={'/cart'}><Badge badgeContent={items.length} className="mobileNav-Icon" outline>
          <ShoppingCartIcon /></Badge>Cart </NavLink></li>
        <li onClick={() => setisDrawer(!isDrawer)}><PersonIcon className="mobileNav-Icon" /> Sign In</li>
      </ul>
    </Drawer>
  </div>;
};

export default NavBar;

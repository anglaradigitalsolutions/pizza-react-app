import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Delivery from "../images/Group.svg";
import Takeaway from "../images/covered-food-tray-on-a-hand-of-hotel-room-service-svgrepo-com 1.svg";
import { Container } from "@mui/material";



const WelcomePage = () => {
  return (
    <Container>
      <div className="banner">
        <div style={{ width: "490px", marginTop: 200 }}>
          <div className="banner-text">
            Order Your <br />
            <span>Favourite </span> Pizza
          </div>
          <div className="banner-subtext">
            We promise you’ll enjoy every sweet moment to find your favorite.
            Eat what you love and save your time.
          </div>

          <div className="container-skewd welcomCard">
            <div className="lined-skew-btns">
              <div className="orange-btn">
                <img src={Delivery} className="btn-ico-logo" alt="Delivery" />
                Delivery</div>
              <div className="grey-btn">
                <img src={Takeaway} alt='Takeaway' className="btn-ico-logo" />
                Takeaway</div>
            </div>
            <div style={{ textAlign: "left" }}>
              <div className="banner-card-text">Contactless Delivery</div>
              <div className="banner-card-subtext">
                Contactless delivery is now available! Learn more
              </div>
            </div>
            <input type="text" placeholder="Enter your location" />

            <div
              className="banner-card-subtext"
              style={{ display: "flex", alignItems: "center" }}
            >
              <MyLocationIcon style={{ marginInline: "5px" }}></MyLocationIcon>{" "}
              Detect current location
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WelcomePage;

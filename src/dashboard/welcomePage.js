import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const WelcomePage = () => {
  return (
    <div className="banner">
      <div style={{ width: "490px", marginTop: 200}}>
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
            <div className="orange-btn">Delivery</div>
            <div className="grey-btn">Takeaway</div>
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
  );
};

export default WelcomePage;

import { Grid } from "@mui/material";
import React from "react";
import screen from "../images/Group 6288 1.png";
import facility1 from "../images/Group 6289 1.png";
import facility2 from "../images/Group 6290 1.png";
import facility3 from "../images/Group 6291 1.png";
import playstore from "../images/Group 1903 1.png";
import appstore from "../images/Group 5848 1.png";

const Advertisement = () => {
  return (
    <div className="advetize">
      <div className="global-shadow" style={{ paddingInline: 50 }}>
        <Grid container spacing={3}>
          <Grid item xs className="d-flex-center">
            <div
              className="banner-text"
              style={{
                fontSize: 34,
                textAlign: "left",
                alignSelf: "flex-start",
              }}
            >
              Download Our
              <span> Mobile App </span>
            </div>
            <div style={{ textAlign: "left" }}>
              Download Our app on google play & play store and get discount
              coupons every month, track your food status.
            </div>
            <div className="facility-images">
              <div>
                <img src={facility1} alt="facility" />
                <div>Follow Delivery <br /> Status</div>
              </div>
              <div>
                {" "}
                <img src={facility2} alt="facility" />
                <div>Discounts <br /> Every Month</div>
              </div>
              <div>
                {" "}
                <img src={facility3} alt="facility" />
                <div>Order from <br /> anywhere</div>
              </div>
            </div>
            <div className="appLink">
              <img src={playstore} alt="playstore" />
              <img src={appstore} alt="playstore" />
            </div>
          </Grid>
          <Grid
            item
            className="d-flex-center"
            style={{ justifyContent: "center" }}
          >
            <img
              src={screen}
              alt="screen"
              style={{ width: 500, height: 600 }}
            />{" "}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Advertisement;

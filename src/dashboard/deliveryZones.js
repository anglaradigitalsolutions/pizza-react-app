import { Grid } from "@mui/material";
import React from "react";
import Vector from "../images/Vector.png";
import Map from "../images/Group 6258.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DeliveryZones = () => {
  return (
    <div className="deliveryZones">
      <div>
        <h1 style={{ marginBottom: "0px" }}>Delivery Zones</h1>
        <div className="title-underline">
          <div className="line-1"></div>
          <img src={Vector} alt="vector" className="title-underline-img" />
          <div className="line-2"></div>
        </div>
      </div>
      <div className="global-shadow" style={{ padding: 30 }}>
        <Grid container spacing={3}>
          <Grid item xs style={{position: 'relative'}}>
            <img src={Map} alt="map" className="MapImg"/>
          </Grid>
          <Grid item xs={6} className="d-flex-center" style={{ 'justifyContent': 'center' }}>
            <div style={{ textAlign: 'left', paddingLeft: 40 }}>
              <div>Delivery Zones</div>
              <h2>Pizza Delivery Everywhere</h2>
              <div>
                <p>
                  We currently deliver whithin the highlighted area. But we are
                  willing to make consession on larger area. contact with us.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} sm={12} lg={2}>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{marginLeft: 5}}><b>Near by stores</b></h4>
              <div className="nearby-shadow">
                <h5>Pizza Xpress</h5>
                <div className="addresses">
                  <div>Nottingham, UK</div>
                  <div>+44 1800 55 88264</div>
                </div>
              </div>
              <div className="nearby-shadow">
                <h5>Pizza Xpress</h5>
                <div className="addresses">
                  <div>Nottingham, UK</div>
                  <div>+44 1800 55 88264</div>
                </div>
              </div>
              <div className="nearby-shadow">
                <h5>Pizza Xpress</h5>
                <div className="addresses">
                  <div>Nottingham, UK</div>
                  <div>+44 1800 55 88264</div>
                </div>
              </div>
              <div className="seeNearby">
                See all near by stores <ArrowForwardIosIcon className="nearbyArrow"/>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DeliveryZones;

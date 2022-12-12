import { Grid } from "@mui/material";
import React from "react";
import logo from "../images/Group 6282 1.png";
import playstore from "../images/Group 1903 1.png";
import appstore from "../images/Group 5848 1.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-img" style={{ top: -34 }}></div>
      <div className="footer-img" style={{ bottom: 0, left: 0 }}></div>
      <Grid container>
        <Grid xs={4} lg={4} sm={12} className="footer-opening">
          <div>
            <img src={logo} alt="logo" className="logoStyle leftSide" />
            <div className="leftSide" style={{ marginTop: 50 }}>
              <div>Open Hours: 09:00 - 23:00</div>
              <div>Delivery Time: 09:00 - 20:00</div>
            </div>
          </div>
          <div style={{ fontSize: 12 }} className="leftSide">
            All rights reserved
            <br />
            Designed with love by Anglara
          </div>
        </Grid>
        <Grid xs={8} lg={8} sm={12}>
          <div className="d-flex footerItemListing">
            <div className="footerItems">
              <h4>Order Now</h4>
              <div>
                <ul>
                  <li>Deals</li>
                  <li>Pizza</li>
                  <li>Vegetarian</li>
                  <li>Non - Vegetarian</li>
                </ul>
              </div>
            </div>
            <div className="footerItems">
              <h4>Our Policies</h4>
              <div>
                <ul>
                  <li>Privacy Policy </li>
                  <li>Refund Policy </li>
                  <li>T & C</li>
                  <li>Responsible disclosure</li>
                  <li>Feedback</li>
                  <li>FAQs & Help</li>
                </ul>
              </div>
            </div>
            <div className="footerItems">
              <h4>Contact us</h4>
              <div>
                <ul>
                  <li>Toll free - 1800 55 77244</li>
                  <li>Email: feedback@agestate.com</li>
                </ul>
              </div>
              <div className="margining">
                <h4>Connect with us</h4>
                <div className="appLink margining">
                  <FacebookRoundedIcon className="mr-4" />
                  <TwitterIcon className="mr-4" />
                  <InstagramIcon className="mr-4" />
                </div>
                <h4>Download the app</h4>
                <div className="appLink margining">
                  <img src={playstore} alt="playstore" />
                  <img src={appstore} alt="playstore" />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

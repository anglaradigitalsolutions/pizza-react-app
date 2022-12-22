import { Container } from "@mui/material";
import React from "react";
import Advertisement from "./advertisement";
import DeliveryZones from "./deliveryZones";
import ExploreMenu from "./exploreMenu";
import Offers from "./offers";
import WelcomePage from "./welcomePage";
import WhyChooseUs from "./whyChooseUs";

const Dashboard = () => {
    return (
        <>
            <div className="welcomebackground">
                <WelcomePage />
            </div>
            <div className="WhyChooseUsBG">
                <WhyChooseUs />
            </div>
            <div className="ExploreMenuBG">
                <ExploreMenu />
            </div>
            <div className="OffersBG">
                <Offers />
            </div>
            <div className="DeliveryZonesBG">
                <DeliveryZones />
            </div>
            <div className="AdvertisementBG">
                <Advertisement />
            </div>
        </>
    );
};

export default Dashboard;

import { Container } from '@mui/material';
import React from 'react'
import Advertisement from './advertisement';
import DeliveryZones from './deliveryZones';
import ExploreMenu from './exploreMenu';
import Offers from './offers';
import WelcomePage from './welcomePage';
import WhyChooseUs from './whyChooseUs';

const Dashboard = () => {
    return (
        <>

            <Container>
                <WelcomePage />
                <WhyChooseUs />
                <ExploreMenu />
                <Offers />
                <DeliveryZones />
                <Advertisement />
            </Container>
        </>
    )
}

export default Dashboard
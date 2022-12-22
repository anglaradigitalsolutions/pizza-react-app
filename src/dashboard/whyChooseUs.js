import React from "react";
import Vector from "../images/Vector.png";
import reason1 from "../images/Group 6279.png";
import reason2 from "../images/Group 6286.png";
import reason3 from "../images/pizzeria-food-svgrepo-com 1.png";
import { Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const WhyChooseUs = () => {
    return (
        <Container>
            <div style={{ marginTop: 300 }}>
                <h1 style={{ marginBottom: "0px" }}>Why Choose Us?</h1>
                <div className="title-underline">
                    <div className="line-1"></div>
                    <img src={Vector} alt="vector" className="title-underline-img" />
                    <div className="line-2"></div>
                </div>
                {window.innerWidth < 600 ?
                    <Carousel
                        navButtonsAlwaysVisible={false}
                        indicators={true}
                        animation={"slide"}
                        autoPlay={false}
                        height={350}
                        duration={500}
                        fullHeightHover={true}
                        IndicatorIcon={<></>}
                        indicatorIconButtonProps={{
                            style: {
                                marginInline: 10,
                                width: '24px',
                                height: '24px',
                                background: '#D9D9D9'
                            }
                        }}
                        activeIndicatorIconButtonProps={{
                            style: {
                                background: 'linear-gradient(180deg, #FF9966 0%, #FF5E62 100%)',
                                width: '24px',
                                height: '24px'
                            }
                        }}
                    >

                        <div className="boxes-today">
                            <div style={{ margin: "auto" }}>
                                <img src={reason1} alt="reason" />
                                <h2 style={{ marginTop: 10, marginBottom: 10 }}>Food Hygiene</h2>
                                <div className="reasonDesc">
                                    Providing quality and hygienic food has been our aim since our
                                    inception.
                                </div>
                            </div>
                        </div>
                        <div className="boxes-today">
                            <div style={{ margin: "auto" }}>
                                <img src={reason2} alt="reason" />
                                <h2 style={{ marginTop: 10, marginBottom: 10 }}>Outlets</h2>
                                <div className="reasonDesc">
                                    As of today, pizzeria has 500+ Outlets across the world.
                                </div>
                            </div>
                        </div>
                        <div className="boxes-today">
                            <div style={{ margin: "auto" }}>
                                <img src={reason3} alt="reason" />
                                <h2 style={{ marginTop: 10, marginBottom: 10 }}>Orders</h2>
                                <div className="reasonDesc">
                                    As of today, we have delivered 1m+ Pizzas across the world.
                                </div>
                            </div>
                        </div>
                    </Carousel>
                    :
                    <div className="second-banner">
                        <div className="boxes-today">
                            <div style={{ margin: "auto" }}>
                                <img src={reason1} alt="reason" />
                                <h2 style={{ marginTop: 10, marginBottom: 10 }}>Food Hygiene</h2>
                                <div className="reasonDesc">
                                    Providing quality and hygienic food has been our aim since our
                                    inception.
                                </div>
                            </div>
                        </div>
                        <div className="boxes-today" style={{ marginTop: 150 }}>
                            <div style={{ margin: "auto" }}>
                                <img src={reason2} alt="reason" />
                                <h2 style={{ marginTop: 10, marginBottom: 10 }}>Outlets</h2>
                                <div className="reasonDesc">
                                    As of today, pizzeria has 500+ Outlets across the world.
                                </div>
                            </div>
                        </div>
                        <div className="boxes-today">
                            <div style={{ margin: "auto" }}>
                                <img src={reason3} alt="reason" />
                                <h2 style={{ marginTop: 10, marginBottom: 10 }}>Orders</h2>
                                <div className="reasonDesc">
                                    As of today, we have delivered 1m+ Pizzas across the world.
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </Container>
    );
};

export default WhyChooseUs;

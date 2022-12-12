import { CardContent, CardMedia } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";
import { Card } from "reactstrap";
import Vector from "../images/Vector.png";
import freshPizz from "../images/pizza_21_veg 1.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";

// import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    margin: "10px 10px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    flexGrow: 1,
  },
  media: {
    height: 250,
    borderRadius: "50%",
  },
  paper: {
    width: 300,
  },
  image: {
    width: "100%",
  },
  typo: {
    textAlign: "left",
  },
  mx: {
    margin: "6px 0px",
  },
  card: {
    width: 240,
    height: 469,
    background:
      "linear - gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #FFFFFF",
    "box-shadow": "0px 0px 12px 2px rgba(255, 94, 98, 0.45)",
    "border-radius": 25,
    fontFamily: "Poppins",
  },
});

const tutorialSteps = [{}, {}, {}];

const cuurentPage = [{}, {}, {}, {}, {}, {}, {}, {}];

function CardSwipeable(props) {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {cuurentPage.map((ele, index) => {
        return (
          <div classes={classes.root}>
            <Card className={`${classes.root} ${classes.card}`}>
              <CardMedia
                className={classes.media}
                image={freshPizz}
                title="Contemplative Reptile"
              />
              <CardContent style={{ padding: "15px 15px 0px 15px" }}>
                <div style={{ textAlign: "left", position: "relative" }}>
                  <h2>Golden Corn</h2>
                  <div>
                    <h5>Corn with all mozzarella cheese & cheddar cheese</h5>
                  </div>
                  <div className="pizCard-cutoization">
                    <div>Size:</div>
                    <div>Crust:</div>
                  </div>
                  <div className="pizCard-price">$ 3.25</div>
                  <div className="pizCard-btn">Customise as per your test</div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
const ExploreMenu = () => {
  const classes = useStyles();
  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <h1 style={{ marginBottom: "0px" }}>Explore Menu</h1>
        <div className="title-underline">
          <div className="line-1"></div>
          <img src={Vector} alt="vector" className="title-underline-img" />
          <div className="line-2"></div>
        </div>
        <div className="container-skewd navbar-skewd">
          <ul>
            <li className="orange-btn">BESTSELLERS</li>
            <li>VEG PIZZA </li>
            <li>NON VEG PIZZA </li>
            <li>BEVERAGES</li>
            <li>SIDES</li>
            <li>COMBOS</li>
          </ul>
        </div>
      </div>
      <Carousel
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "transparent",
            borderRadius: 0,
            color: "grey",
            top: "47% !important"
          },
        }}
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIos />}
        height={"1000px"}
        navButtonsAlwaysVisible={true}
        indicators={false}
        animation={"slide"}
        autoPlay={false}
        duration={1000}
        classeName={classes.root}
        fullHeightHover={true}
      >
        {tutorialSteps.map((item, i) => (
          <CardSwipeable key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

export default ExploreMenu;

import {
  CardContent,
  CardMedia,
  Container,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";
import { Card } from "reactstrap";
import Vector from "../images/Vector.png";
import red from "../images/Group 6178.svg";
import green from "../images/Group 6172.svg";
import freshPizz from "../images/pizza_21_veg 1.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import menus from "../common/menus";

// import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    margin: "20px 10px",
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

const ExploreMenu = () => {
  const classes = useStyles();
  const [pizzList, setPizzList] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('BESTSELLERS')


  function CardSwipeable(props) {
    const classes = useStyles();
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {pizzList.map((ele, index) => {
          return ele.type === selectedMenu ? (<div classes={classes.root}>
            <Card className={`${classes.root} ${classes.card}`} style={{ position: "relative" }}>
              {/* <CardMedia
                className={classes.media}
                image={freshPizz}
                title="Contemplative Reptile"
              /> */}
              <div className="explore-pizza-container">
                <div className="explore-pizza-img-container">
                  <img src={freshPizz} alt="pizz" style={{ height: 230, width: 230 }} />
                </div>
              </div>
              <CardContent style={{ padding: "15px 15px 0px 15px", marginBottom: 60 }}>
                <div style={{ textAlign: "left" }}>
                  <div className="d-flex">
                    <h2>{ele.name}
                      <img style={{ marginLeft: 5 }} src={ele.isVeg ? green : red} alt="veg" /></h2>
                  </div>
                  <div>
                    <h5>{ele.desc}</h5>
                  </div>
                  <div className="pizCard-cutoization">
                    <div className="dflex-align-center pizzaSize-selection">
                      Size:
                      <select defaultValue={ele.size}>
                        <option value={"S"}>S</option>
                        <option value={"M"}>M</option>
                        <option value={"L"}>L</option>
                      </select>
                    </div>
                    <div className="dflex-align-center pizzaSize-selection">Crust:
                      <select defaultValue={ele.crust}>
                        <option value={"Thin"}>Thin</option>
                        <option value={"Medium"}>Medium</option>
                        <option value={"Regular"}>Regular</option>
                      </select>
                    </div>
                  </div>
                  <div className="pizCard-price">{ele.price_sign} {ele.price}</div>
                </div>
              </CardContent>
              <div className="pizCard-btn">Customise as per your test</div>
            </Card>
          </div>) : null;
        })}
      </div>
    );
  }

  useEffect(() => {
    fetch("http://localhost:3000/pizzData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPizzList(data);
      });
  }, []);
  return (
    <Container>
      <div style={{ marginBottom: "50px" }}>
        <h1 style={{ marginBottom: "0px" }}>Explore Menu</h1>
        <div className="title-underline">
          <div className="line-1"></div>
          <img src={Vector} alt="vector" className="title-underline-img" />
          <div className="line-2"></div>
        </div>
        <div className="container-skewd navbar-skewd">
          <ul>
            {menus.map((ele, index) => {
              return (
                <li key={index} className={ele.value === selectedMenu ? "orange-btn" : ''} onClick={() => setSelectedMenu(ele.value)}>{ele.text}</li>
              )
            })}
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
            top: "47% !important",
          },
        }}
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIos />}
        navButtonsAlwaysInvisible={true}
        indicators={false}
        animation={"slide"}
        autoPlay={false}
        duration={1000}
        classeName={classes.root}
        fullHeightHover={true}
      >
        <CardSwipeable />
      </Carousel>
    </Container>
  );
};

export default ExploreMenu;

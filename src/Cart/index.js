import {
  Card,
  CardContent,
  Checkbox,
  Container,
  Fade,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Delivery from "../images/Group.svg";
import Takeaway from "../images/covered-food-tray-on-a-hand-of-hotel-room-service-svgrepo-com 1.svg";
import freshPizz from "../images/pizza_21_veg 1.png";
import applyoffer from "../images/Group 6252.svg";
import specialIsn from "../images/Group 6249.svg";
import filter from "../images/filter-svgrepo-com (1) 1.svg";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import red from "../images/Group 6178.svg";
import green from "../images/Group 6172.svg";
import Subtract from "../images/Subtract.svg";
import Add from "../images/Add.svg";

const Cart = () => {
  const [checked, setChecked] = useState(false);
  const [pizzList, setPizzList] = useState([]);

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
    <Container maxWidth="xl">
      <Grid container marginBottom={"100px"}>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
      <div className="cart-page-container">
        <div style={{ maxWidth: 960, position: "relative" }}>
          <div
            onClick={() => setChecked(!checked)}
            className="dflex-align-center top-right cursor-pointer"
          >
            <img src={filter} alt="filter" /> <b>Filter</b>
          </div>
          <Fade in={checked}>
            <div className="filter-box">
              <div className="dflex-justifyBetween">
                Filter By
                <span>
                  <b>Clear all</b>
                </span>
              </div>
              <div className="filters">
                <h4>Sort by:</h4>
                <label>
                  <Checkbox
                    className="filter-check"
                    icon={<RadioButtonUncheckedIcon color="black" />}
                    checkedIcon={<RadioButtonCheckedIcon color="black" />}
                  />
                  Newest
                </label>

                <h4>Avialability :</h4>
                <label>
                  <Checkbox
                    className="filter-check"
                    icon={<RadioButtonUncheckedIcon color="black" />}
                    checkedIcon={<RadioButtonCheckedIcon color="black" />}
                  />
                  In stock (20)
                </label>
                <label>
                  <Checkbox
                    className="filter-check"
                    icon={<RadioButtonUncheckedIcon color="black" />}
                    checkedIcon={<RadioButtonCheckedIcon color="black" />}
                  />
                  Not avialable (2)
                </label>
                <h4>Dimension :</h4>
                <label>
                  <Checkbox
                    className="filter-check"
                    icon={<RadioButtonUncheckedIcon color="black" />}
                    checkedIcon={<RadioButtonCheckedIcon color="black" />}
                  />
                  4.33cm ✖ 17.7cm
                </label>
                <label>
                  <Checkbox
                    className="filter-check"
                    icon={<RadioButtonUncheckedIcon color="black" />}
                    checkedIcon={<RadioButtonCheckedIcon color="black" />}
                  />
                  22.5cm ✖ 30cm
                </label>
                <label>
                  <Checkbox
                    className="filter-check"
                    icon={<RadioButtonUncheckedIcon color="black" />}
                    checkedIcon={<RadioButtonCheckedIcon color="black" />}
                  />
                  45.9cm ✖ 61.8cm
                </label>
              </div>
            </div>
          </Fade>
          <h1 style={{ textAlign: "left", marginTop: 0, paddingLeft: 50 }}>
            <b>BESTSELLERS</b>
          </h1>
          <div>
            <Grid
              paddingLeft={"20px"}
              spacing={4}
              paddingRight={"20px"}
              container
              justifyContent="start"
              className="margining-3"
            >
              {pizzList.map((element) => {
                return (
                  <Grid item xs={6}>
                    <div className="container-skewd cart-skewd">
                      <div className="cart-pizz-img-container">
                        <div className="cart-skwed-pizza">
                          <img src={freshPizz} alt="pizz" />
                        </div>
                      </div>
                      <div
                        style={{ textAlign: "left", marginBottom: 35 }}
                        className="cart-skwed-pizza-detail"
                      >
                        <div className="d-flex">
                          <h5>{element.name}</h5>
                          <img
                            style={{ marginLeft: 5 }}
                            src={element.isVeg ? green : red}
                            alt="veg"
                          />
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            lineHeight: "16px",
                            marginBottom: 15,
                          }}
                        >
                          <p style={{ fontSize: 12, margin: 0 }}>
                            {element.desc}
                          </p>
                        </div>
                        <div
                          className="pizCard-cutoization"
                          style={{ fontSize: 16 }}
                        >
                          <div className="dflex-align-center pizzaSize-selection">
                            Size:
                            <select defaultValue={element.size}>
                              <option value={"S"}>S</option>
                              <option value={"M"}>M</option>
                              <option value={"L"}>L</option>
                            </select>
                          </div>
                          <div className="dflex-align-center pizzaSize-selection">
                            Crust:
                            <select defaultValue={element.crust}>
                              <option value={"Thin"}>Thin</option>
                              <option value={"Medium"}>Medium</option>
                              <option value={"Regular"}>Regular</option>
                            </select>
                          </div>
                        </div>
                        <div className="pizCard-price">
                          {element.price_sign} {element.price}
                        </div>
                      </div>
                      <div className="pizCard-btn">
                        Customise as per your test
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
        <div style={{ maxWidth: 480, marginTop: 0 }} className="global-shadow">
          <Card style={{ boxShadow: "none", borderRadius: "30px" }}>
            <CardContent>
              <Typography
                gutterBottom
                fontFamily={"Poppins"}
                textAlign={"left"}
                component="div"
                marginBottom={"30px"}
                marginTop={"10px"}
                fontSize={"30px"}
              >
                <b>Your Cart</b>
              </Typography>
              <div className="lined-skew-btns">
                <div className="orange-btn">
                  <img src={Delivery} className="btn-ico-logo" alt="Delivery" />
                  <h3>Delivery</h3>
                </div>
                <div className="grey-btn">
                  <img src={Takeaway} alt="Takeaway" className="btn-ico-logo" />
                  <h3>Takeaway</h3>
                </div>
              </div>
              <div className="margining-3">
                <div className="container-skewd cart-skewd margining-2">
                  <div className="cart-pizz-img-container">
                    <div className="cart-skwed-pizza">
                      <img src={freshPizz} alt="pizz" />
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "left" }}
                    className="cart-skwed-pizza-detail"
                  >
                    <div className="d-flex">
                      <h5>Golden Corn</h5>
                      <img style={{ marginLeft: 5 }} src={green} alt="veg" />
                    </div>
                    <div
                      style={{
                        marginBottom: 15,
                      }}
                    >
                      <p style={{ fontSize: 12, margin: 0 }}>
                        Corn with all mozzarella cheese & cheddar cheese
                      </p>
                    </div>
                    <div
                      className="pizCard-cutoization"
                      style={{ fontSize: 16 }}
                    >
                      <div className="dflex-align-center pizzaSize-selection">
                        Size:
                        <select defaultValue={"L"}>
                          <option value={"S"}>S</option>
                          <option value={"M"}>M</option>
                          <option value={"L"}>L</option>
                        </select>
                      </div>
                      <div className="dflex-align-center pizzaSize-selection">
                        Crust:
                        <select defaultValue={"Thin"}>
                          <option value={"Thin"}>Thin</option>
                          <option value={"Medium"}>Medium</option>
                          <option value={"Regular"}>Regular</option>
                        </select>
                      </div>
                    </div>
                    <div className="dflex-justifyBetween margining">
                      <div className="pizCard-price">$ 3.25</div>
                      <div className="d-flex dflex-justifyBetween qty-control">
                        <img src={Subtract} alt="Subtract" />
                        &nbsp;&nbsp; 1 &nbsp;&nbsp;
                        <img src={Add} alt="Add" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dflex-align-center">
                <img
                  style={{ marginRight: 10 }}
                  src={applyoffer}
                  alt="appliedCoupon"
                />
                Applied coupon
              </div>
              <div className="specialInstruction margining-3">
                Special delivery instructions
                <div className="dflex-align-center">
                  <img
                    style={{ marginRight: 10 }}
                    src={specialIsn}
                    alt="specialIsn"
                  />
                  abcd
                </div>
              </div>
              <div>
                <h3 className="margining" style={{ textAlign: "left" }}>
                  <b>Bill details</b>
                </h3>
                <div className="globalShadow">
                  <table>
                    <tr>
                      <td className="title">Subtotal</td>
                      <td>:</td>
                      <td className="value">6.94</td>
                    </tr>
                    <tr>
                      <td className="title">Delivery</td>
                      <td>:</td>
                      <td className="value">Free</td>
                    </tr>
                    <tr>
                      <td className="title">Discount</td>
                      <td>:</td>
                      <td className="value">-</td>
                    </tr>
                    <tr>
                      <td className="title">Taxes & Charges</td>
                      <td>:</td>
                      <td className="value">15.02</td>
                    </tr>
                    <tr>
                      <td
                        colSpan="100%"
                        style={{ borderBottom: "2px solid gainsboro" }}
                      ></td>
                    </tr>
                    <tr>
                      <td className="title">
                        <h3>Grand Total</h3>
                      </td>
                      <td>:</td>
                      <td className="value">
                        <h3>21.96</h3>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="margining-3">
                <div className="orange-btn" style={{ padding: 10 }}>
                  <h2>CHECKOUT</h2>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Cart;

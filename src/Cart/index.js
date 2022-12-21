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
import menus from "../common/menus";
import CustomizeModal from "../components/customizeModal";
import { useDispatch, useSelector } from "react-redux";
import { incrementItem } from "../features/counter/cart"

const Cart = () => {
  const [checked, setChecked] = useState(false);
  const [pizzList, setPizzList] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("BESTSELLERS");
  const [slides, setSlides] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [pizzaDetail, setpizzaDetail] = useState({});
  const items = useSelector((state) => state.cartStore.items);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();




  const groupBy = (array, property) => {
    let hash = {};
    for (let i = 0; i < array.length; i++) {
      if (!hash[array[i][property]]) hash[array[i][property]] = [];
      hash[array[i][property]].push(array[i]);
    }
    return hash;
  };

  const goToViolation = (id) => {
    const violation = document.getElementById(id);
    window.scrollTo({
      top: violation.offsetTop,
      behavior: "smooth"
    });
  };

  const openCustomizeModal = (item) => {
    setpizzaDetail(item);
    setIsOpen(true);
  }

  function GenerateSlides() {
    return Object.keys(slides).map((key, i) => {
      return (<div key={i}>
        <h1 style={{ textAlign: "left", marginTop: 0, paddingLeft: 10 }}>
          <b>{key.replaceAll("_", " ")}</b>
        </h1>
        <div id={key}>
          <Grid
            paddingLeft={"20px"}
            spacing={4}
            paddingRight={"20px"}
            container
            justifyContent="start"
            className="margining-3"
          >
            {slides[key].map((element, index) => {
              return (
                <Grid item xs={12} sm={12} md={6} key={index}>
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
                    <div className="pizCard-btn" onClick={() => openCustomizeModal(element)}>
                      Customise as per your test
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>);
    });
  };



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
        setPizzList(data);
        let temp = groupBy(data, "type");
        setSlides(temp);
      });
    setProducts(items);
  }, []);

  useEffect(() => {
    setProducts(items);
  }, [items])

  return (
    <Container maxWidth="xl">
      <Grid container marginBottom={"50px"}>
        <Grid item xs={12}>
          <div className="container-skewd navbar-skewd">
            <ul>
              {menus.map((ele, index) => {
                return (
                  <li
                    key={index}
                    className={ele.value === selectedMenu ? "orange-btn" : ""}
                    onClick={() => {
                      goToViolation(ele.value)
                      setSelectedMenu(ele.value)
                    }}
                  >
                    {ele.text}
                  </li>
                );
              })}
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
          <GenerateSlides />
        </div>
        <div style={{ maxWidth: 480, marginTop: 0, position: 'sticky', top: 10, height: 'fit-content' }} className="global-shadow">
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
                {
                  products.map((ele, index) =>
                  (
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
                          <h5>{ele.name}</h5>
                          <img style={{ marginLeft: 5 }} src={ele.isVeg ? green : red} alt="veg" />
                        </div>
                        <div
                          style={{
                            marginBottom: 15,
                          }}
                        >
                          <p style={{ fontSize: 12, margin: 0 }}>
                            {ele.desc}
                          </p>
                        </div>
                        <div
                          className="pizCard-cutoization"
                          style={{ fontSize: 16 }}
                        >
                          <div className="dflex-align-center pizzaSize-selection">
                            Size:
                            <select defaultValue={ele.size}>
                              <option value={"S"}>S</option>
                              <option value={"M"}>M</option>
                              <option value={"L"}>L</option>
                            </select>
                          </div>
                          <div className="dflex-align-center pizzaSize-selection">
                            Crust:
                            <select defaultValue={ele.crust}>
                              <option value={"Thin"}>Thin</option>
                              <option value={"Medium"}>Medium</option>
                              <option value={"Regular"}>Regular</option>
                            </select>
                          </div>
                        </div>
                        <div className="dflex-justifyBetween margining">
                          <div className="pizCard-price">{ele.price_sign} {ele.price}</div>
                          <div className="d-flex dflex-justifyBetween qty-control">
                            <img src={Subtract} alt="Subtract" />
                            &nbsp;&nbsp; {ele.qty} &nbsp;&nbsp;
                            <img src={Add} alt="Add" onClick={()=> { console.log(items); dispatch(incrementItem(ele.id))}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="margining-3">
                <h3 className="margining" style={{ textAlign: "left" }}>
                  <b>Have a coupon?</b>
                </h3>
                <div className="dflex-justifyBetween">
                  {/* <img
                  style={{ marginRight: 10 }}
                  src={applyoffer}
                  alt="appliedCoupon"
                />
                Applied coupon */}
                  <input value={'PIZZ123'} className="inputs" />
                  <button className="apply-orange"> Apply</button>
                </div>
              </div>
              <div className="margining-3">
                <h3 className="margining" style={{ textAlign: "left" }}>
                  <b>Special delivery instructions:</b>
                </h3>
                <div>
                  <input className="inputs specialInstruction" placeholder="Mention your special instructions here..." />
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
      <CustomizeModal isOpen={isOpen} pizzaDetail={pizzaDetail} onCloseCustomize={() => setIsOpen(false)} />
    </Container>
  );
};

export default Cart;

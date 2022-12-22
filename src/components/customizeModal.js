import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import uncheckd from "../images/Shape.svg";
import checked from "../images/Ellipse 37.svg";
import sizes from "../common/sizes";
import crustes from "../common/crusts";
import avialableCheeseOptions from "../common/cheeseOptions";
import avialableToppingOptions from "../common/toppingsOptions";
import red from "../images/Group 6178.svg";
import green from "../images/Group 6172.svg";
import freshPizz from "../images/pizza_21_veg 1.png";
import { incrementByAmount } from "../features/counter/cart"
import { useDispatch, useSelector } from "react-redux";

const CustomizeModal = (props) => {
  // console.log(props.isOpen);
  const [detail, setDetail] = useState(props.pizzaDetail);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartStore.items);
  const [checkcheese, setcheckcheese] = useState([]);
  const [checkToppings, setcheckToppings] = useState([]);
  const [size, setSize] = useState(2.22);
  const [crust, setCrust] = useState(3.25);



  const addToCart = () => {
    dispatch(incrementByAmount(props.pizzaDetail));
    setTimeout(() => {
      console.log(items);
    }, 3000);
    localStorage.setItem("pizzaCart", JSON.stringify(items));
    handleClose();
  }
  const handleClose = () => {
    props.onCloseCustomize();
  };

  const hadnleCheckCheese = (event, ele) => {
    const { name, checked } = event.target;
    if (checked) {
      setcheckcheese([...new Set([...checkcheese, ele])])
    }
    else {
      setcheckcheese(checkcheese.filter(x => x.text !== ele.text))
    }
  }

  const hadnleCheckTopping = (event, ele) => {
    const { name, checked } = event.target;
    if (checked) {
      setcheckToppings([...new Set([...checkToppings, ele])])
    }
    else {
      setcheckToppings(checkToppings.filter(x => x.text !== ele.text))
    }
  }

  const getTotal = () => {
    let totalToppings = 0;
    checkToppings.forEach((e) => {
      totalToppings = totalToppings + parseFloat(e.price);
    })
    let totalCheese = 0;
    checkcheese.forEach((e) => {
      totalCheese = totalCheese + parseFloat(e.price);
    })
    return (totalToppings + totalCheese + size + crust).toFixed(2);
  }

  return (
    <Dialog
      maxWidth={"md"}
      fullWidth
      disableEscapeKeyDown={false}
      open={props.isOpen}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      scroll="body"
    >
      <DialogContent>
        <Container maxWidth="lg">
          <div
            style={{
              maxWidth: "500px",
              margin: "auto",
            }}
          >
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
                    <h5>{props.pizzaDetail.name}</h5>
                    <img
                      style={{ marginLeft: 5 }}
                      src={props.pizzaDetail.isVeg ? green : red}
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
                      {props.pizzaDetail.desc}
                    </p>
                  </div>
                  <div className="pizCard-cutoization" style={{ fontSize: 16 }}>
                    <div className="dflex-align-center pizzaSize-selection">
                      Size:
                      <select defaultValue={props.pizzaDetail.size}>
                        <option value={"S"}>S</option>
                        <option value={"M"}>M</option>
                        <option value={"L"}>L</option>
                      </select>
                    </div>
                    <div className="dflex-align-center pizzaSize-selection">
                      Crust:
                      <select defaultValue={props.pizzaDetail.crust}>
                        <option value={"Thin"}>Thin</option>
                        <option value={"Medium"}>Medium</option>
                        <option value={"Regular"}>Regular</option>
                      </select>
                    </div>
                  </div>
                  <div className="pizCard-price">
                    {props.pizzaDetail.price_sign} {getTotal()}
                  </div>
                </div>
              </div>
            </Grid>
          </div>
          <div style={{ width: "fit-content" }}>
            <div className="dflex-justifyBetween">
              <div className="dflex-align-center customize-section">
                <div className="customize-section-title ">Size</div>
                <span>Select any one option</span>
              </div>
              <div style={{ marginRight: 20 }}>Required</div>
            </div>
            <RadioGroup
              style={{ display: "flex", flexDirection: "row" }}
              aria-labelledby="demo-radio-buttons-group-label"
              value={size}
              name="radio-buttons-group"
            >
              {sizes.map((ele, index) => (
                <div className="customize-section-box">
                  <div className="dflex-space-between">
                    <div className="p-5">
                      {ele.text} <br />({ele.size} cm)
                      <div className="dflex-align-center customize-section mb-0">
                        <div className="customize-section-title ">
                          {ele.currency} {ele.price}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Radio
                        onChange={() => setSize(ele.price)}
                        value={ele.price}
                        checkedIcon={<img src={uncheckd} alt={"unck"} />}
                        icon={<img src={checked} alt={"unck"} />}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div style={{ width: "fit-content" }}>
            <div className="dflex-justifyBetween">
              <div className="dflex-align-center customize-section">
                <div className="customize-section-title ">Crust</div>
                <span>Select any one option</span>
              </div>
              <div style={{ marginRight: 20 }}>Required</div>
            </div>
            <RadioGroup
              style={{ display: "flex", flexDirection: "row" }}
              aria-labelledby="demo-radio-buttons-group-label"
              value={crust}
              name="radio-buttons-group"
            >
              {" "}
              {crustes.map((ele, index) => (
                <div className="customize-section-box">
                  <div className="dflex-space-between">
                    <div className="p-5">
                      {ele.text}
                      <div className="dflex-align-center customize-section mb-0">
                        <div className="customize-section-title ">
                          {ele.currency} {ele.price}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Radio
                        onChange={() => setCrust(ele.price)}
                        value={ele.price}
                        checkedIcon={<img src={uncheckd} alt={"unck"} />}
                        icon={<img src={checked} alt={"unck"} />}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="dflex-space-between">
            <div style={{ minWidth: "250px" }}>
              <div className="dflex-justifyBetween">
                <div className="dflex-align-center customize-section">
                  <div className="customize-section-title ">Toppings</div>
                </div>
              </div>
              <div className="customize-section-box">
                {avialableToppingOptions.map((ele, i) => {
                  return (
                    <div className="dflex-justifyBetween" key={i}>
                      <span>{ele.text}</span>{" "}
                      <FormControlLabel
                        value="Start"
                        control={
                          <Checkbox
                            onChange={(event) => hadnleCheckTopping(event, ele)}
                            name={ele.text}
                            checked={ele.checked}
                            checkedIcon={<img src={uncheckd} alt={"unck"} />}
                            icon={<img src={checked} alt={"unck"} />}
                          />
                        }
                        label={ele.currency + " " + ele.price}
                        labelPlacement="start"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ minWidth: "250px" }}>
              <div className="dflex-justifyBetween">
                <div className="dflex-align-center customize-section">
                  <div className="customize-section-title ">Cheese</div>
                </div>
              </div>
              <div className="customize-section-box">
                {avialableCheeseOptions.map((ele, index) => {
                  return (
                    <div className="dflex-justifyBetween" key={index}>
                      <span>{ele.text}</span>{" "}
                      <FormControlLabel
                        value="Start"
                        control={
                          <Checkbox
                            onChange={(event) => hadnleCheckCheese(event, ele)}
                            name={ele.text}
                            checkedIcon={<img src={uncheckd} alt={"unck"} />}
                            icon={<img src={checked} alt={"unck"} />}
                          />
                        }
                        label={ele.currency + " " + ele.price}
                        labelPlacement="start"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ minWidth: "250px" }}>
              <div className="dflex-justifyBetween">
                <div className="dflex-align-center customize-section">
                  <div className="customize-section-title ">Total</div>
                </div>
              </div>
              <div className="customize-section-box">
                <div className="dflex-justifyBetween">
                  $ {getTotal()}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <div className="margining-3 cursor-pointer" onClick={() => addToCart()}>
          <div className="orange-btn" style={{ padding: 10 }}>
            <h2 style={{ marginInline: 30 }}>ADD TO CART</h2>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default CustomizeModal;

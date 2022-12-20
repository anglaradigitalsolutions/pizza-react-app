import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import uncheckd from "../images/Shape.svg";
import checked from "../images/Ellipse 37.svg";

const CustomizeModal = (props) => {
    // console.log(props.isOpen);
    const handleClose = () => {
        props.onCloseCustomize();
    };
    const avialableCheeseOptions = [
        { text: "Mozzarella", price: 5.33 },
        { text: "Cheddar", price: 5.33 },
        { text: "Gouda", price: 5.33 },
        { text: "Parmesan", price: 5.33 },
        { text: "Feta", price: 5.33 },
        { text: "Brie", price: 5.33 },
    ];
    const avialableToppingOptions = [
        { text: "Green Pepper", price: 5.33 },
        { text: "Onios", price: 5.33 },
        { text: "Mashrooms", price: 5.33 },
        { text: "Green Pepper", price: 5.33 },
        { text: "Black Olives", price: 5.33 },
        { text: "Fresh Garlic", price: 5.33 },
        { text: "Fresh Basil", price: 5.33 },
        { text: "Pepperoni", price: 5.33 },
        { text: "Becon", price: 5.33 },
        { text: "Sausage", price: 5.33 },
    ];
    return (
        <Dialog
            maxWidth={"xl"}
            fullWidth
            disableEscapeKeyDown={false}
            open={props.isOpen}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            scroll="body"
        >
            <DialogContent>
                <Container maxWidth="lg">
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
                            defaultValue="small"
                            name="radio-buttons-group"
                        >
                            <div className="customize-section-box">
                                <div className="dflex-space-between">
                                    <div className="p-5">
                                        Small <br />
                                        (17.7 cm)
                                        <div className="dflex-align-center customize-section mb-0">
                                            <div className="customize-section-title ">$ 2.22</div>
                                        </div>
                                    </div>
                                    <div>
                                        <Radio
                                            value="small"
                                            checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                            icon={<img src={checked} alt={"unck"} />}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="customize-section-box">
                                <div className="dflex-space-between">
                                    <div className="p-5">
                                        Medium <br />
                                        (24.5 cm)
                                        <div className="dflex-align-center customize-section mb-0">
                                            <div className="customize-section-title ">$ 4.45</div>
                                        </div>
                                    </div>
                                    <div>
                                        <Radio
                                            value="medium"
                                            checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                            icon={<img src={checked} alt={"unck"} />}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="customize-section-box">
                                <div className="dflex-space-between">
                                    <div className="p-5">
                                        Large <br />
                                        (33 cm)
                                        <div className="dflex-align-center customize-section mb-0">
                                            <div className="customize-section-title ">$ 3.12</div>
                                        </div>
                                    </div>
                                    <div>
                                        <Radio
                                            value="large"
                                            checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                            icon={<img src={checked} alt={"unck"} />}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="customize-section-box">
                                <div className="dflex-space-between">
                                    <div className="p-5">
                                        Extra Large <br />
                                        (45.7 cm)
                                        <div className="dflex-align-center customize-section mb-0">
                                            <div className="customize-section-title ">$ 6.15</div>
                                        </div>
                                    </div>
                                    <div>
                                        <Radio
                                            value="extra_large"
                                            checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                            icon={<img src={checked} alt={"unck"} />}
                                        />
                                    </div>
                                </div>
                            </div>
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
                            defaultValue="thin"
                            name="radio-buttons-group"
                        >
                            <div className="customize-section-box">
                                <div className="dflex-space-between">
                                    <div className="p-5">
                                        Thin
                                        <div className="dflex-align-center customize-section mb-0">
                                            <div className="customize-section-title ">$ 2.22</div>
                                        </div>
                                    </div>
                                    <div>
                                        <Radio
                                            value="thin"
                                            checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                            icon={<img src={checked} alt={"unck"} />}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="customize-section-box">
                                <div className="dflex-space-between">
                                    <div className="p-5">
                                        Regular
                                        <div className="dflex-align-center customize-section mb-0">
                                            <div className="customize-section-title ">$ 4.45</div>
                                        </div>
                                    </div>
                                    <div>
                                        <Radio
                                            value="medium"
                                            checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                            icon={<img src={checked} alt={"unck"} />}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="customize-section-box">
                                <div className="dflex-space-between">
                                    <div className="p-5">
                                        Thick
                                        <div className="dflex-align-center customize-section mb-0">
                                            <div className="customize-section-title ">$ 3.12</div>
                                        </div>
                                    </div>
                                    <div>
                                        <Radio
                                            value="large"
                                            checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                            icon={<img src={checked} alt={"unck"} />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="dflex-space-between" style={{ maxWidth: 800 }}>
                        <div style={{ minWidth: "350px" }}>
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
                                                    <Radio
                                                        checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                                        icon={<img src={checked} alt={"unck"} />}
                                                    />
                                                }
                                                label={ele.price}
                                                labelPlacement="start"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div style={{ minWidth: "350px" }}>
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
                                                    <Radio
                                                        checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                                        icon={<img src={checked} alt={"unck"} />}
                                                    />
                                                }
                                                label={ele.price}
                                                labelPlacement="start"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Container>
            </DialogContent>
            <DialogActions style={{ justifyContent: "center" }}>
                <div className="margining-3 cursor-pointer" onClick={handleClose}>
                    <div className="orange-btn" style={{ padding: 10 }}>
                        <h2 style={{ marginInline: 30 }}>ADD TO CART</h2>
                    </div>
                </div>
            </DialogActions>
        </Dialog>
    );
};

export default CustomizeModal;

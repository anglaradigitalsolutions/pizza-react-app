import {
    Button,
    Checkbox,
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
import sizes from "../common/sizes";
import crustes from "../common/crusts";
import avialableCheeseOptions from "../common/cheeseOptions";
import avialableToppingOptions from "../common/toppingsOptions";




const CustomizeModal = (props) => {
    // console.log(props.isOpen);
    const handleClose = () => {
        props.onCloseCustomize();
    };
    return (
        <Dialog
            maxWidth={"lg"}
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
                            {
                                sizes.map((ele, index) => (
                                    <div className="customize-section-box">
                                        <div className="dflex-space-between">
                                            <div className="p-5">
                                                {ele.text} <br />
                                                ({ele.size} cm)
                                                <div className="dflex-align-center customize-section mb-0">
                                                    <div className="customize-section-title ">{ele.currency} {ele.price}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <Radio
                                                    value={ele.value}
                                                    checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                                    icon={<img src={checked} alt={"unck"} />}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
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
                        > {
                                crustes.map((ele, index) => (
                                    <div className="customize-section-box">
                                        <div className="dflex-space-between">
                                            <div className="p-5">
                                                {ele.text}
                                                <div className="dflex-align-center customize-section mb-0">
                                                    <div className="customize-section-title ">{ele.currency} {ele.price}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <Radio
                                                    value={ele.value}
                                                    checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                                    icon={<img src={checked} alt={"unck"} />}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
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
                                                    <Checkbox
                                                        checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                                        icon={<img src={checked} alt={"unck"} />}
                                                    />
                                                }
                                                label={ele.currency + " "  + ele.price}
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
                                                    <Checkbox
                                                        checkedIcon={<img src={uncheckd} alt={"unck"} />}
                                                        icon={<img src={checked} alt={"unck"} />}
                                                    />
                                                }
                                                label={ele.currency + " "  +  ele.price}
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

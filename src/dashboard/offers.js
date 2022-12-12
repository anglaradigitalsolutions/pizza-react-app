import React from "react";
import Vector from "../images/Vector.png";

const Offers = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "0px" }}>Offers</h1>
      <div className="title-underline">
        <div className="line-1"></div>
        <img src={Vector} alt="vector" className="title-underline-img" />
        <div className="line-2"></div>
      </div>
    </div>
  );
};

export default Offers;

import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Vector from "../images/Vector.png";
import Card1 from "../images/Group 6162.png";
import Card2 from "../images/Group 6163.png";
import { Card, Container } from "@mui/material";

const Offers = () => {

  const [imgs, setimgs] = useState([Card1, Card2, Card1, Card2, Card1, Card2]);

  const chunkArray = (array, chunkSize) => {
    const numberOfChunks = Math.ceil(array.length / chunkSize)

    return [...Array(numberOfChunks)]
      .map((value, index) => {
        return array.slice(index * chunkSize, (index + 1) * chunkSize)
      })
  }


  return (
    <Container>
      <div>
        <h1 style={{ marginBottom: "0px" }}>Offers</h1>
        <div className="title-underline">
          <div className="line-1"></div>
          <img src={Vector} alt="vector" className="title-underline-img" />
          <div className="line-2"></div>
        </div>
      </div>
      <div
        style={{ marginTop: 50 }} >
        <Carousel
          navButtonsAlwaysVisible={false}
          indicators={true}
          animation={"slide"}
          autoPlay={false}
          height={300}
          duration={1000}
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
          {
            chunkArray(imgs, window.innerWidth < 600 ? 1 : 2).map((item, i) => {
              return (
                <div key={i} className="d-flex" style={{ justifyContent: 'space-around' }}>
                  {item.map((ele, ie) => (
                    <img key={ie} src={ele} alt="offer" className="offerIMG" />
                  ))}
                </div>
              )
            })
          }

        </Carousel>
      </div>
    </Container>
  );
};

export default Offers;

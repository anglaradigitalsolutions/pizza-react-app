import { CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card } from "reactstrap";
import Vector from "../images/Vector.png";
const useStyles = makeStyles({
  root: {
    margin: "10px 10px",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    flexGrow: 1,
  },
  media: {
    height: 200
  },
  paper: {
    width: 300
  },
  image: {
    width: "100%"
  },
  typo: {
    textAlign: "center"
  },
  mx: {
    margin: "6px 0px"
  },
  card: {
    width: 300
  }
});
const tutorialSteps = [
  {
    label: 'SAMSUNG 21',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    c: "512",
    desc: "this is a TV of 32 inch not for you"
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    c: "312",
    desc: "this is a TV of 32 inch not for you"
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    c: "412",
    desc: "this is a TV of 32 inch not for you"
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    c: "132",
    desc: "this is a TV of 32 inch not for you"
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    c: "112",
    desc: "this is a TV of 32 inch not for you"
  },
];




function CardSwipeable(props) {
  const classes = useStyles()
  return (
    <div classes={classes.root}>
      <Card className={`${classes.root} ${classes.card}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.item.imgPath}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={classes.typo} gutterBottom variant="h6" component="h6" color="secondary">
              ${props.item.c}
            </Typography>
            <Typography className={`${classes.typo} ${classes.mx}`} variant="h5" color="inherit" component="h3">
              {props.item.label}
            </Typography>
            <Typography className={classes.typo} color="textSecondary" component="p">
              {props.item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={`${classes.root} ${classes.card}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.item.imgPath}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={classes.typo} gutterBottom variant="h6" component="h6" color="secondary">
              ${props.item.c}
            </Typography>
            <Typography className={`${classes.typo} ${classes.mx}`} variant="h5" color="inherit" component="h3">
              {props.item.label}
            </Typography>
            <Typography className={classes.typo} color="textSecondary" component="p">
              {props.item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={`${classes.root} ${classes.card}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.item.imgPath}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={classes.typo} gutterBottom variant="h6" component="h6" color="secondary">
              ${props.item.c}
            </Typography>
            <Typography className={`${classes.typo} ${classes.mx}`} variant="h5" color="inherit" component="h3">
              {props.item.label}
            </Typography>
            <Typography className={classes.typo} color="textSecondary" component="p">
              {props.item.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
const ExploreMenu = () => {
  const classes = useStyles();
  return (
    <>
      <div>
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
      <Carousel classeName={classes.root}>
        {
          tutorialSteps.map((item, i) => <CardSwipeable key={i} item={item} />)
        }
      </Carousel>
    </>
  );
};

export default ExploreMenu;

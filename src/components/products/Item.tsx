import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import productImg from "../../img/product.jpg";
import { renderRating } from "../helpers/ratingHelper";

const useStyles = makeStyles({
  root: {
    width: "260px",
    height: "340px",
    borderRadius: "8px",
  },
  media: {
    height: "145px",
  },
  content: {
    height: "80px",
  },
  action: {
    height: "35px",
  },
  button: {
    textTransform: "unset",
  },
  promoLabelContainer: {
    position: "relative",
    top: "10px",
    left: 0,
    width: "75px",
    height: "24px",
    background: "#F9A52B",
  },
  promoLabelTitle: {
    matgin: 0,
  },
  description: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

type ItemProps = {
  id: string;
  title: string;
  description: string;
  rating: number;
  isInStock: boolean;
  isPromo: boolean;
  onClick: (e: React.MouseEvent) => void
};

export const Item: React.FC<ItemProps> = ({
  id,
  title,
  description,
  rating,
  isInStock,
  isPromo,
  onClick
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={productImg}
          title="Contemplative Reptile"
        >
          {isPromo && (
            <Grid
              container
              justify="center"
              className={classes.promoLabelContainer}
            >
              <Typography className={classes.promoLabelTitle}>Promo</Typography>
            </Grid>
          )}
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="body1"
            color="textPrimary"
            component="p"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {description}
          </Typography>
          <div>{renderRating(rating)}</div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        {isInStock ? (
          <Button
            id={id}
            className={classes.button}
            variant="contained"
            color="primary"
            fullWidth={true}
            onClick={onClick}
          >
            Show details
          </Button>
        ) : (
          <Button
            className={classes.button}
            disabled={true}
            variant="contained"
            color="secondary"
            fullWidth={true}
          >
            Unavailable
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

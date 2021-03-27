import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import { theme } from "../../theme";
import { renderRating } from "../../helpers/rating";
import productImg from "../../img/product.png";

const useStyles = makeStyles({
  root: {
    width: "260px",
    height: "340px",
    borderRadius: "8px",
    margin: "auto",
  },
  media: {
    height: "140px",
  },
  promoMedia: {
    height: "140px",
    filter: "grayscale(100%)",
  },
  content: {
    height: "200px",
    padding: "5%",
    background: theme.palette.background.default,
  },
  button: {
    textTransform: "unset",
    height: "35px",
  },
  promoLabelContainer: {
    position: "relative",
    top: "10px",
    left: 0,
    width: "75px",
    height: "22px",
    background: theme.palette.secondary.main,
  },
  promoLabelTitle: {
    matgin: 0,
    color: theme.palette.text.hint,
  },
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "25px",
  },
  description: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "80px",
    lineHeight: "16px",
  },
  rating: {
    height: "30px",
  },
});

type ItemProps = {
  id: string;
  title: string;
  description: string;
  rating: number;
  isInStock: boolean;
  isPromo: boolean;
  onClick: (e: React.MouseEvent) => void;
};

export const Item: React.FC<ItemProps> = ({
  id,
  title,
  description,
  rating,
  isInStock,
  isPromo,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={clsx({
          [classes.media]: isInStock,
          [classes.promoMedia]: !isInStock,
        })}
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
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {description}
        </Typography>
        <div className={classes.rating}>{renderRating(rating)}</div>
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
      </CardContent>
    </Card>
  );
};

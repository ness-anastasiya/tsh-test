import { Grid } from "@material-ui/core";
import { ActiveStar } from "./icons";
import { Star } from "./icons";

const shortid = require("shortid");

type RatingType = {
  [key in string]: boolean[];
};

export const RATING: RatingType = {
  0: [false, false, false, false, false],
  1: [true, false, false, false, false],
  2: [true, true, false, false, false],
  3: [true, true, true, false, false],
  4: [true, true, true, true, false],
  5: [true, true, true, true, true],
};

export const renderRating = (rating: number) => {
  const ratingArr = RATING[rating];

  return (
    <Grid container direction="row">
      {ratingArr.map((item: boolean, index: number) => {
        if (item === true) {
          return (
            <div key={shortid.generate()}>
              <ActiveStar />
            </div>
          );
        } else {
          return (
            <div key={shortid.generate()}>
              <Star />
            </div>
          );
        }
      })}
    </Grid>
  );
};

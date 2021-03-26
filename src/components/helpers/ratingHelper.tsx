import { Grid } from "@material-ui/core";

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
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00001 10.5133L11.12 12.9999L10.0267 8.31325L13.6667 5.15992L8.87334 4.75325L7.00001 0.333252L5.12668 4.75325L0.333344 5.15992L3.97334 8.31325L2.88001 12.9999L7.00001 10.5133Z"
                  fill="#F9A52B"
                />
              </svg>
            </div>
          );
        } else {
          return (
            <div key={shortid.generate()}>
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.87331 4.74659L13.6666 5.15992L10.0333 8.31325L11.12 12.9999L6.99998 10.5133L2.87998 12.9999L3.97331 8.31325L0.333313 5.15992L5.12665 4.75325L6.99998 0.333252L8.87331 4.74659ZM4.49331 10.7799L6.99998 9.26659L9.51331 10.7866L8.84665 7.93325L11.06 6.01325L8.13998 5.75992L6.99998 3.06659L5.86665 5.75325L2.94665 6.00659L5.15998 7.92659L4.49331 10.7799Z"
                  fill="#B1B5C9"
                />
              </svg>
            </div>
          );
        }
      })}
    </Grid>
  );
};

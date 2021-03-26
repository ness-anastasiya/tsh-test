import React from "react";
import { makeStyles, Grid, Button, Typography } from "@material-ui/core";

import { Pagination as PaginationMU } from "@material-ui/lab";
import { theme } from "../../theme";

const useStyles = makeStyles({
  button: {
    textTransform: "unset",
    marginTop: "-3px",
  },
  disabledText: {
    color: theme.palette.text.secondary,
  },
});

type PaginationProps = {
  noOfPages: number;
  page: number;
  handleChange: (_: any, value: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  noOfPages,
  page,
  handleChange,
}) => {
  const classes = useStyles();

  const isFirsPageActive = page !== 1 ? true : false;
  const isLastPageActive = page !== noOfPages ? true : false;

  return (
    <Grid container>
      <Button
        disabled={!isFirsPageActive}
        className={classes.button}
        onClick={(_: React.MouseEvent) => handleChange(_, 1)}
      >
        {isFirsPageActive ? (
          <Typography variant="body1">First</Typography>
        ) : (
          <Typography variant="body1" className={classes.disabledText}>
            First
          </Typography>
        )}
      </Button>
      <PaginationMU
        count={noOfPages}
        siblingCount={0}
        page={page}
        onChange={handleChange}
        defaultPage={1}
        size="small"
      />
      <Button
        disabled={!isLastPageActive}
        className={classes.button}
        onClick={(_: React.MouseEvent) => handleChange(_, noOfPages)}
      >
        {isLastPageActive ? (
          <Typography variant="body1">Last</Typography>
        ) : (
          <Typography variant="body1" className={classes.disabledText}>
            Last
          </Typography>
        )}
      </Button>
    </Grid>
  );
};

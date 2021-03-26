import React from "react";
import { makeStyles, Grid, Button } from "@material-ui/core";
import { Pagination as PaginationMU } from "@material-ui/lab";

const useStyles = makeStyles({
  button: {
    textTransform: "unset",
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

  return (
    <Grid container>
      <Button
        className={classes.button}
        onClick={(_: React.MouseEvent) => handleChange(_, 1)}
      >
        First
      </Button>
      <PaginationMU
        // renderItem={(item) => <PaginationItem {...item} />}
        count={noOfPages}
        siblingCount={0}
        page={page}
        onChange={handleChange}
        defaultPage={1}
        // color="primary"
        // size="large"
        // classes={{ ul: classes.paginator }}
      />{" "}
      <Button
        className={classes.button}
        onClick={(_: React.MouseEvent) => handleChange(_, noOfPages)}
      >
        Last
      </Button>
    </Grid>
  );
};

import { Card, Typography, Grid, makeStyles } from "@material-ui/core";

import { theme } from "../../theme";
import { Shape } from "../../helpers/icons";

const useStyles = makeStyles({
  root: {
    width: "340px",
    height: "340px",
    margin: "7% auto",
    background: theme.palette.background.default,
    [theme.breakpoints.up("sm")]: {
      width: "600px",
    },
  },
  content: {
    margin: "30% 2%",
    [theme.breakpoints.up("sm")]: {
      margin: "15% 2%",
    },
  },
  header: {
    margin: "20px 0 4px 0",
  },
});

export const EmptyCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.content}
      >
        <Shape />
        <Typography variant="h3" className={classes.header}>
          Ooops... It's empty here
        </Typography>
        <Typography variant="subtitle1">
          There are no products on the list
        </Typography>
      </Grid>
    </Card>
  );
};

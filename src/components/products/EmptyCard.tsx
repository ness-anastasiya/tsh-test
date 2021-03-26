import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Typography, Grid } from "@material-ui/core";
import { theme } from "../../theme";

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
    margin: "20px 0 4px 0"
  }
});

export const EmptyCard = () => {
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
          <svg
            width="38"
            height="48"
            viewBox="0 0 38 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.5 9.02197H34C35.6569 9.02197 37 10.3651 37 12.022V43.522C37 45.1788 35.6569 46.522 34 46.522H4C2.34315 46.522 1 45.1788 1 43.522V12.022C1 10.3651 2.34315 9.02197 4 9.02197H11.5C11.5 4.87984 14.8579 1.52197 19 1.52197C23.1421 1.52197 26.5 4.87984 26.5 9.02197Z"
              stroke="#B9BDCF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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

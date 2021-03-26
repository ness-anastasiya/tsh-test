import { Link } from "react-router-dom";
import { Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
  },
  container: {
    maxWidth: "500px",
    maxHeight: "500px",
    margin: "10% auto"
  },
  button: {
    textTransform: "unset",
    cursor: "pointer",
    height: "48px",
    width: "400px",
    marginBottom: "40px"
  },
  buttonLink: {
    textDecoration: "none",
    color: "#FFFFFF",
    width: "400px",
  },
});
export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
      <Link to="/login" className={classes.buttonLink}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <Typography variant="body2">Go to Login</Typography>
        </Button>
      </Link>
      <Link to="/products" className={classes.buttonLink}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
        >
          <Typography variant="body2">Go to Products</Typography>
        </Button>
      </Link>
      </div>
    </div>
  );
};

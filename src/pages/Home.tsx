import { Link } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";

import { PrimaryButton } from "../components/common/PrimaryButton";
import logoImg from "../img/logo.png";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
  },
  container: {
    maxWidth: "300px",
    margin: "10% auto",
  },
  button: {
    textTransform: "unset",
    cursor: "pointer",
    height: "48px",
    width: "300px",
    marginBottom: "40px",
  },
  buttonLink: {
    textDecoration: "none",
    color: "#FFFFFF",
  },
  img: {
    width: "180px",
    padding: "0 60px",
  },
});
export const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img src={logoImg} alt="Login avatar" className={classes.img} />
        <Link to="/login" className={classes.buttonLink}>
          <PrimaryButton className={classes.button}>
            <Typography variant="body2">Go to Login</Typography>
          </PrimaryButton>
        </Link>
        <Link to="/products" className={classes.buttonLink}>
          <PrimaryButton className={classes.button}>
            <Typography variant="body2">Go to Products</Typography>
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

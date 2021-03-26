import { Link } from "react-router-dom";
import { Grid, makeStyles, Typography } from "@material-ui/core";

import { theme } from "../theme";
import { StyledTextField } from "../components/common/StyledTextField";
import { PrimaryButton } from "../components/common/PrimaryButton";
import mainImg from "../img/main.jpg";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
  },
  imgContainer: {
    overflow: "hidden",
    width: 0,
    [theme.breakpoints.up("sm")]: {
      width: "48%",
    },
  },
  button: {
    textTransform: "unset",
    cursor: "pointer",
    marginTop: "40px",
    marginBottom: "12px",
    height: "48px",
    maxWidth: "500px",
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  buttonLink: {
    textDecoration: "none",
    color: "#FFFFFF",
  },
  label: {
    paddingBottom: "7px",
  },
  login: {
    paddingBottom: "30px",
  },
  username: {
    marginBottom: "20px",
  },
  textField: {
    fontSize: "14px",
    height: "48px",
    borderRadius: "8px",
    maxWidth: "500px",
  },
  main: {
    width: "100%",
    margin: "15% 7%",
    [theme.breakpoints.up("sm")]: {
      width: "45%",
      margin: "4% 10%",
    },
  },
  form: {
    marginTop: "30%",
    [theme.breakpoints.up("sm")]: {
      marginTop: "20%",
    },
  },
});

export const LoginPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid className={classes.imgContainer}>
        <img src={mainImg} alt="Login avatar" className={classes.img} />
      </Grid>
      <Grid className={classes.main}>
        <Typography variant="h2">join.tsh.io</Typography>

        <form className={classes.form}>
          <Typography variant="h1" className={classes.login}>
            Login
          </Typography>
          <Grid container direction="column">
            <Typography variant="body1" className={classes.label}>
              Username
            </Typography>
            <StyledTextField
              className={classes.username}
              placeholder="Enter username"
              variant="outlined"
              size="small"
              InputProps={{
                className: classes.textField,
              }}
            />
          </Grid>
          <Grid container direction="column">
            <Typography variant="body1" className={classes.label}>
              Password
            </Typography>
            <StyledTextField
              placeholder="Enter password"
              variant="outlined"
              size="small"
              InputProps={{
                className: classes.textField,
              }}
            />
          </Grid>
          <Link to="/products" className={classes.buttonLink}>
            <PrimaryButton className={classes.button}>
              <Typography variant="body2">Log in</Typography>
            </PrimaryButton>
          </Link>
          <Link to="/">
            <Typography variant="subtitle1">Forgot password?</Typography>
          </Link>
        </form>
      </Grid>
    </Grid>
  );
};

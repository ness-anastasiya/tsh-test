import React from "react";

import { Link } from "react-router-dom";

import {
  TextField,
  Typography,
  Menu,
  MenuItem,
  Grid,
  Hidden,
} from "@material-ui/core";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import mainImg from "../../img/main.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: theme.palette.background.default,
      height: "250px",
      [theme.breakpoints.up("md")]: {
        height: "100px",
      },
    },
    container: {
      [theme.breakpoints.up("md")]: {
        margin: "0 2%",
      },
    },
    search: {
      maxWidth: "400px",
      marginRight: "10px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "8px",
        marginBottom: "10px",
      },
    },
    searchField: {
      color: theme.palette.text.primary,
      fontSize: "14px",
      height: "48px",
      border: "1px solid #E0E2EA",
      borderRadius: "8px",
      maxWidth: "400px",
    },
    checkbox: {
      transform: "scale(1.1)",
      color: "red",
    },
    iconButton: {
      right: 0,
    },
    img: {
      height: "50px",
      width: "50px",
      objectFit: "cover",
      borderRadius: "50%",
    },
  })
);
type ToolBarProps = {
  search: string;
  checkboxData: {
    isActive: boolean;
    isPromo: boolean;
  };
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeState: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const ToolBar: React.FC<ToolBarProps> = ({
  search,
  checkboxData,
  handleSearch,
  handleChangeState,
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Toolbar className={classes.appBar}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.container}
      >
        <Hidden mdUp>
        <Grid container direction="row" justify="space-between" alignItems="center">
            <Typography variant="h2">join.tsh.io</Typography>
            <AvatarImg handleClick={handleClick} />
        </Grid>
        </Hidden>

        <Hidden smDown>
          <Grid item md={2} xs={12}>
            <Typography variant="h2">join.tsh.io</Typography>
          </Grid>
        </Hidden>

        <Grid item md={8} xs={12} container direction="row" spacing={1}>
          <Grid item xs={12} md={6}>
            <TextField
              className={classes.search}
              fullWidth
              placeholder="Search"
              variant="outlined"
              size="small"
              value={search}
              onChange={handleSearch}
              InputProps={{
                className: classes.searchField,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxData.isActive}
                    onChange={handleChangeState}
                    name="isActive"
                    color="primary"
                    style={{
                      transform: "scale(1.2)",
                    }}
                  />
                }
                label={<Typography variant="body1">Active</Typography>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxData.isPromo}
                    onChange={handleChangeState}
                    name="isPromo"
                    color="primary"
                    style={{
                      transform: "scale(1.2)",
                    }}
                  />
                }
                label={<Typography variant="body1">Promo</Typography>}
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Hidden smDown>
          <Grid item md={1} xs={12}>
            <AvatarImg handleClick={handleClick} />
          </Grid>
        </Hidden>
      </Grid>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
            }}
          >
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </Toolbar>
  );
};

type AvatarProps = {
  handleClick: (event: React.BaseSyntheticEvent) => void;
};
const AvatarImg: React.FC<AvatarProps> = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <IconButton
      className={classes.iconButton}
      edge="end"
      aria-haspopup="true"
      color="inherit"
      onClick={handleClick}
    >
      <img src={mainImg} alt="Login avatar" className={classes.img} />
    </IconButton>
  );
};

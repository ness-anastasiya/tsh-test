import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Menu,
  MenuItem,
  Grid,
  Hidden,
  InputAdornment,
  makeStyles,
  Theme,
  createStyles,
  Toolbar,
  FormGroup,
} from "@material-ui/core";

import { StyledTextField } from "../common/StyledTextField";
import { AvatarImg } from "./AvatarImg";
import { CheckBox } from "../common/CheckBox";
import { Search } from "../../helpers/icons";

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
      fontSize: "14px",
      height: "48px",
      borderRadius: "8px",
      maxWidth: "400px",
    },
    menuItem: {
      width: "180px",
      height: "50px",
      background: "#ffffff",
    },
    menu: {
      margin: "50px 0 0 -30px",
      [theme.breakpoints.up("sm")]: {
        margin: "50px 0 0 -80px",
      },
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
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
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
            <StyledTextField
              className={classes.search}
              fullWidth
              placeholder="Search"
              variant="outlined"
              size="small"
              value={search}
              onChange={handleSearch}
              InputProps={{
                className: classes.searchField,
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormGroup row>
              <CheckBox
                checked={checkboxData.isActive}
                onChange={handleChangeState}
                name="isActive"
                label="Active"
              />
              <CheckBox
                checked={checkboxData.isPromo}
                onChange={handleChangeState}
                name="isPromo"
                label="Promo"
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
        className={classes.menu}
        MenuListProps={{ disablePadding: true }}
      >
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            padding: 0,
          }}
        >
          <MenuItem className={classes.menuItem}>
            <Typography variant="body1">Logout</Typography>
          </MenuItem>
        </Link>
      </Menu>
    </Toolbar>
  );
};

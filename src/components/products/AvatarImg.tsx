import React from "react";
import { IconButton, makeStyles, createStyles, Theme } from "@material-ui/core";

import mainImg from "../../img/main.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

type AvatarProps = {
  handleClick: (event: React.BaseSyntheticEvent) => void;
};

export const AvatarImg: React.FC<AvatarProps> = ({ handleClick }) => {
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

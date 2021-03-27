import React from "react";
import {
  makeStyles,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { theme } from "../../theme";
import lostImage from "../../img/product.png";

const useStyles = makeStyles({
  wrapper: {
    height: "600px",
    wigth: "530px",
    borderRadius: "8px",
    marginTop: "22%",
    [theme.breakpoints.up("sm")]: {
      marginTop: "10%",
    },
  },
  root: {
    padding: 0,
    backgroundSize: "cover",
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  img: {
    height: "370px",
    width: "600px",
    objectFit: "cover",
  },
  imgContainer: {
    height: "370px",
    width: "600px",
  },
  article: {
    height: "175px",
    overflow: "hidden",
    padding: "4% 5%",
    background: theme.palette.background.default,
  },
  description: {
    lineHeight: "24px",
    marginTop: "2%",
  },
});

type ModalDescriptionProps = {
  open: boolean;
  title: string;
  description: string;
  handleClose: () => void;
};

export const ModalDescription: React.FC<ModalDescriptionProps> = ({
  open,
  title,
  description,
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.wrapper}
        BackdropProps={{ style: { opacity: 0.4 } }}
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogContent className={classes.root}>
          <div className={classes.imgContainer}>
            <img src={lostImage} className={classes.img} alt="Product" />
          </div>
          <div className={classes.article}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h4" className={classes.description}>
              {description}
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

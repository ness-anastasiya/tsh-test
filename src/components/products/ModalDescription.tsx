import React from "react";
import {
  makeStyles,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import lostImage from "../../img/product.jpg";

const useStyles = makeStyles({
  wrapper: {
    borderRadius: "8px",
  },
  root: {
    margin: 0,
    padding: 0,
  },
  closeButton: {
    position: "absolute",
    right: 0,
    top: 0,
  
  },
  article: {
    padding: "10px",
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
      BackdropProps={{ style: { opacity: "0.4" } }}
      >
        <IconButton
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent className={classes.root}>
          <div>
            <img src={lostImage} width="100%" alt="Product" />
          </div>
          <div className={classes.article}>
            <Typography gutterBottom>{title}</Typography>
            <Typography gutterBottom>{description}</Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

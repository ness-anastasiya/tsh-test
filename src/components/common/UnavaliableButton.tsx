import { Button, withStyles } from "@material-ui/core";

import { theme } from "../../theme";

export const UnavaliableButton = withStyles({
  root: {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.text.hint,
    textTransform: "unset",
    height: "35px",
  },
  label: {
    "$disabled &": {
      backgroundColor: theme.palette.text.secondary,
      color: theme.palette.text.hint,
      textTransform: "unset",
      height: "35px",
    },
  },
  disabled: {},
})(Button);

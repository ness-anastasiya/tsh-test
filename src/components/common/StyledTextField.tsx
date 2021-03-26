import { TextField, withStyles } from "@material-ui/core";

export const StyledTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      border: "1px solid #E0E2EA",
    },
    "& input:invalid + fieldset": {
      border: "1px solid #E0E2EA",
    },
    "& input:valid:focus + fieldset": {
      border: "2px solid #4460F7",
      padding: "0px !important",
    },
  },
})(TextField);

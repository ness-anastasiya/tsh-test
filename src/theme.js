import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          fieldset: {
            border: 0,
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#4460F7", // blue
      },
      secondary: {
        main: "#F9A52B", // orange
      },
      text: {
        primary: "#1A1B1D", // black
        secondary: "#9194A5", // gray
        hint: "#FFFFFF", // white
        disabled: "#E0E2EA", // blue
      },
      background: {
        paper: "#F2F2F2", // gray
        default: "#FFFFFF", // light-gray
      },
    },
    typography: {
      h1: {
        color: "#1A1B1D",
        fontSize: "30px"
      },
      h2: {
        color: "#1A1B1D",
        fontSize: "24px"
      },
      h3: {
        color: "#1A1B1D",
        fontSize: "18px"
      },
      h4: {
        color: "#9194A5",
        fontSize: "16px"
      },
      body1: {
        color: "#1A1B1D",
        fontSize: "14px"
      },
      body2: {
        color: "#FFFFFF",
        fontSize: "16px"
      },
      subtitle1: {
        color: "#9194A5",
        fontSize: "14px"
      },
      subtitle2: {
        color: "#9194A5",
        fontSize: "18px"
      },
    },
  });
  
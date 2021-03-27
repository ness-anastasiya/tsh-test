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
        main: "#4460F7",
      },
      secondary: {
        main: "#F9A52B",
      },
      text: {
        primary: "#1A1B1D",
        secondary: "#9194A5",
        hint: "#FFFFFF",
        disabled: "#E0E2EA",
      },
      background: {
        paper: "#F2F2F2",
        default: "#FFFFFF",
      },
    },
    typography: {
      h1: {
        color: "#1A1B1D",
        fontSize: "30px",
        fontFamily: "Nunito"
      },
      h2: {
        color: "#1A1B1D",
        fontSize: "24px",
        fontFamily: "Nunito"
      },
      h3: {
        color: "#1A1B1D",
        fontSize: "18px",
        fontFamily: "Nunito"
      },
      h4: {
        color: "#9194A5",
        fontSize: "16px",
        fontFamily: "Nunito"
      },
      h5: {
        color: "#1A1B1D",
        fontSize: "16px",
        fontFamily: "Nunito"
      },
      h6: {
        color: "#9194A5",
        fontSize: "13px",
        fontFamily: "Nunito"
      },
      body1: {
        color: "#1A1B1D",
        fontSize: "14px",
        fontFamily: "Nunito"
      },
      body2: {
        color: "#FFFFFF",
        fontSize: "16px",
        fontFamily: "Nunito"
      },
      subtitle1: {
        color: "#9194A5",
        fontSize: "14px",
        fontFamily: "Nunito"
      },
      subtitle2: {
        color: "#9194A5",
        fontSize: "18px",
        fontFamily: "Nunito"
      },
      button: {
        fontFamily: "Nunito",
        color: "#FFFFFF"
      }
    },
  });
  
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { theme } from "./theme";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>,
  document.getElementById("root")
);

reportWebVitals();

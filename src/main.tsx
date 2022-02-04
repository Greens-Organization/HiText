import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChooseThemeProvider } from "./contexts/ChooseThemeContext";

import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <ChooseThemeProvider>
      <App />
    </ChooseThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

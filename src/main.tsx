import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeContextWrapper } from "./contexts/theme/ThemeContextWrapper";

import "./styles/global.scss";

ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./feature/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/globalStyle/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

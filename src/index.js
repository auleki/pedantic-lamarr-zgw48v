import { StrictMode } from "react";
import ReactDOM from "react-dom";

import LoginFormComponent from "./LoginFormComponent";
import "./container.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="container">
      <LoginFormComponent />
    </div>
  </StrictMode>,
  rootElement
);

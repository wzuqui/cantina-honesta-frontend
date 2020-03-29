import * as React from "react";
import { render } from "react-dom";

import "./global.css";
import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import { trigger } from "./events";

import App from "./App";

const openButton = document.getElementById("open-button");
openButton.addEventListener("click", function() {
  trigger("openButton:click");
});

ReactDOM.render(<App />, document.getElementById("root"));

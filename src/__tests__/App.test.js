import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

it("renders App", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from "react";
// connects our application to React

import ReactDOM from "react-dom";
// interacts with the document object model in the browser

import App from "./App";

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById("root")
);

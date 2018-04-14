import React from "react";
// eslint-disable-next-line
import ReactDOM, { render } from "react-dom";
import "./css/style.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import $ from "jquery";

render(<App />, document.getElementById("root"));
registerServiceWorker();

$(window).scroll(function() {
  $(".main-image").css(
    "background-position",
    "50% " + $(this).scrollTop() / 1.1 + "px"
  );
  // $(".background-image").css(
  //   "background-position",
  //   "50% " + $(this).scrollTop() / 1.1 + "px"
  // );
});

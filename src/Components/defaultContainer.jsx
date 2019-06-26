import React from "react";
import { Route } from "react-router-dom";
import About from "./about";
import NavBar from "./navBar";
import Portfolio from "./portfolio";
import Contact from "./contact";

const DefaultContainer = () => (
  <div>
    <NavBar />
    <Route exact path="/about/" component={About} />
    <Route exact path="/portfolio/" component={Portfolio} />
    <Route exact path="/contact/" component={Contact} />
  </div>
);

export default DefaultContainer;

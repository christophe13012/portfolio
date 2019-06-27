import React from "react";
import Homepage from "./Components/homepage.jsx";
import NotFound from "./Components/notFound.jsx";
import About from "./Components/about.jsx";
import Contact from "./Components/contact.jsx";
import Portfolio from "./Components/portfolio.jsx";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/portfolio/" component={Portfolio} />
        <Route exact path="/contact/" component={Contact} />
        <Route path="/notFound/" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </React.Fragment>
  );
}

export default App;

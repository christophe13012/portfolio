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
        <Route exact path="/portfolio/" component={Homepage} />
        <Route exact path="/portfolio/about/" component={About} />
        <Route exact path="/portfolio/portfolio/" component={Portfolio} />
        <Route exact path="/portfolio/contact/" component={Contact} />
        <Route path="/portfolio/notFound/" component={NotFound} />
        <Redirect to="/portfolio/notFound" />
      </Switch>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import Homepage from "./Components/homepage.jsx";
import NotFound from "./Components/notFound.jsx";
import About from "./Components/about";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about/" component={About} />
      <Route exact path="/notFound/" component={NotFound} />
      <Redirect to="/notFound" />
    </Switch>
  );
}

export default App;

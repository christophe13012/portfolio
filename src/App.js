import React from "react";
import Homepage from "./Components/homepage.jsx";
import NotFound from "./Components/notFound.jsx";
import DefaultContainer from "./Components/defaultContainer.jsx";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route component={DefaultContainer} />
        <Route path="/notFound/" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </React.Fragment>
  );
}

export default App;

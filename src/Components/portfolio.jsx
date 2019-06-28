import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import NavBar from "./navBar";
import Tabs from "./tabs";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div style={styles.main}>
          <Jumbotron className="text-center">
            <h1 className="display-4">Mon récent travail</h1>
            <hr className="my-2" />
            <p className="lead">
              Voici mon récent travail, selon la technologie utilisée, que ce
              soit pour ma formation Openclassrooms et d'autres besoins ou
              envies
            </p>
            <p className="lead" />
          </Jumbotron>
          <Tabs />
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    backgroundColor: "white"
  }
};

export default Portfolio;

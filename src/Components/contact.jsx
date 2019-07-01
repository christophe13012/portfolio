import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import NavBar from "./navBar";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div style={styles.main}>
          <Jumbotron className="text-center">
            <h1 className="display-4">Me contacter</h1>
            <hr className="my-2" />
            <p className="lead">
              Voici les liens vers les differents moyen pour communiquer avec
              moi, dans l'attente de vous lire.
            </p>
            <p className="lead" />
          </Jumbotron>
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

export default Contact;

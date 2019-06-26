import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div style={styles.container}>
        <p style={styles.p}>
          Bonjour, je suis <span style={styles.nom}>Christophe Caillet</span>
        </p>
        <p style={styles.p}>votre futur developpeur Web ?</p>
        <Link to="/about">
          <Button style={styles.button} color="primary" size="lg">
            Voici mon travail
          </Button>
        </Link>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "#0d47a1",
    color: "white",
    fontSize: 40,
    fontFamily: "Open Sans, sans-serif",
    height: "100vh",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  p: {
    margin: 2,
    padding: 0,
    lineHeight: 1
  },
  nom: {
    color: "#f50057",
    fontWeight: "bold"
  },
  button: { marginTop: 20 }
};
export default Homepage;

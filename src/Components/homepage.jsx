import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.phrases}>
          <div style={styles.p}>
            Bonjour, je suis{" "}
            <Bounce style={styles.nom}>
              <span>Christophe Caillet</span>
            </Bounce>
          </div>
          <p style={styles.p}>votre futur developpeur Web ?</p>
          <Link to="/about">
            <a
              href="https://christophe13012.github.io/plateauReact/"
              className="btn btn-lg btn-primary"
              role="button"
            >
              Voici mon travail
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    color: "white",
    fontSize: 40,
    fontFamily: "Open Sans, sans-serif",
    height: "100vh",
    minHeight: "100vh",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  p: {
    padding: 0,
    lineHeight: 1
  },
  nom: {
    color: "#f50057",
    fontWeight: "bold",
    display: "inline-block"
  }
};
export default Homepage;

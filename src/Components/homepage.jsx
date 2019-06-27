import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import Background from "../images/2.jpg";

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.p}>
          Bonjour, je suis{" "}
          <Bounce style={styles.nom}>
            <span>Christophe Caillet</span>
          </Bounce>
        </div>
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
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
    fontWeight: "bold",
    display: "inline-block"
  },
  button: { marginTop: 20 }
};
export default Homepage;

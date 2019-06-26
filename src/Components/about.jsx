import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <p style={styles.p}>
            Salut. Je suis Christophe, un marseillais de 36 ans.
          </p>
          <p style={styles.p}>
            Recemment diplomé en developpement Front-End, je suis à la recherche
            de mon premier poste de developpeur !
          </p>
          <p style={styles.p}>Voici mon histoire ...</p>
        </header>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Open Sans, sans-serif"
  },
  header: {
    fontSize: 25,
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: "25px 100px"
  },
  p: {
    margin: 0,
    padding: 0,
    lineHeight: 1
  }
};

export default About;

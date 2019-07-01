import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import {
  FaPhoneSquare,
  FaEnvelopeSquare,
  FaLinkedin,
  FaFile
} from "react-icons/fa";
import NavBar from "./navBar";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div style={styles.main}>
        <NavBar />
        <div>
          <Jumbotron className="text-center">
            <h1 className="display-4">Me contacter</h1>
            <hr className="my-2" />
            <p className="lead">
              Voici les liens vers les differents moyen pour communiquer avec
              moi, dans l'attente de vous lire.
            </p>
            <p className="lead" />
          </Jumbotron>
          <div style={styles.contacts} className="container">
            <div className="row text-center">
              <div className="col-sm">
                <p>
                  <FaPhoneSquare size={70} />
                </p>
                <p className="alert alert-dark" role="alert">
                  0667280298
                </p>
              </div>
              <div className="col-sm">
                <p>
                  <FaEnvelopeSquare size={70} />
                </p>
                <p className="alert alert-dark" role="alert">
                  christophecaillet@icloud.com
                </p>
              </div>
              <div className="col-sm">
                <p>
                  <FaLinkedin size={70} />
                </p>
                <p className="alert alert-dark" role="alert">
                  <a
                    className="alert-link"
                    href="https://fr.linkedin.com/in/christophe-caillet-01969863"
                  >
                    Cliquer ici
                  </a>
                </p>
              </div>
              <div className="col-sm">
                <p>
                  <FaFile size={70} />
                </p>
                <p className="alert alert-dark" role="alert">
                  <a
                    className="alert-link"
                    href="https://fr.linkedin.com/in/christophe-caillet-01969863"
                  >
                    Voir C.V
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    backgroundColor: "white",
    height: "100%"
  },
  contacts: {
    paddingTop: 35,
    paddingBottom: 100
  }
};

export default Contact;

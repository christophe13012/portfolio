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
          <div className="container pt-0 pb-5">
            <div className="row text-center pb-3">
              <div className="col-md-6 mt-5">
                <p>
                  <FaPhoneSquare size={70} />
                </p>
                <p className="alert alert-dark" role="alert">
                  0667280298
                </p>
              </div>
              <div className="col-md-6 mt-5">
                <p>
                  <FaEnvelopeSquare size={70} />
                </p>
                <p className="alert alert-dark" role="alert">
                  christophecaillet@icloud.com
                </p>
              </div>
              <div className="col-md-6 mt-5">
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
              <div className="col-md-6 mt-5">
                <p>
                  <FaFile size={70} />
                </p>
                <p className="alert alert-dark" role="alert">
                  <a className="alert-link" href="cvdev.pdf">
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
  }
};

export default Contact;

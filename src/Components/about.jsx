import React, { Component } from "react";
import { Jumbotron, Progress } from "reactstrap";
import NavBar from "./navBar";
import Slide from "react-reveal/Slide";
import "../about.scss";

class About extends Component {
  state = {};
  render() {
    return (
      <div style={styles.container}>
        <NavBar />
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">Je suis Christophe, un marseillais de 36 ans.</p>
          <hr className="my-2" />
          <p>
            Recemment diplomé en developpement Front-End, je suis à la recherche
            de mon premier poste de developpeur !
          </p>
          <p className="lead" />
        </Jumbotron>
        <div>
          <span>test</span>
          <Progress animated value={2 * 5} />
          <Progress animated color="success" value="25" />
          <Progress animated color="info" value={50} />
          <Progress animated color="warning" value={75} />
          <Progress animated color="danger" value="100" />
        </div>
        <div style={styles.about}>
          <Slide left cascade>
            <section style={styles.main}>
              <section style={styles.histoire}>
                <p style={styles.titre}>Histoire : </p>
                <p>
                  Apres avoir fait des études de sciences économiques à la
                  sortie d'un bac ES, je me suis orienté dans la logistique
                  jusque occuper maintenant un poste de responsable d'équipe.
                  Mais il y a 3 ans j'ai découvert avec passion le developpement
                  web pour un besoin professionnel, et c'est la révélation, je
                  veux en faire mon métier.
                </p>
                <p>
                  j'ai donc suivi de nombreux cours notamment sur Openclassrooms
                  et décidé de m'orienter en Front. Openclassrooms propose de
                  suivre des parcours diplomants et je m'inscris en juillet 2018
                  en parallele de mon emploi au parcours Développeur
                  d'application - Frontend délivrant un Diplôme RCNP niveau
                  Bac+3/4, que j'ai validé en mars 2019. j'ai décidé ensuite de
                  me perfectionner durant quelques mois avant de checher
                  activement un emploi dans ce domaine.
                </p>
                <p>
                  J'ai décidé de me spécialiser sur React, j'ai donc suivi des
                  cours et fait beaucoup de projets, vous pourrez voir les plus
                  aboutis dans la section Porfolio, et j'ai également fait
                  quelques applications en React Native, étant passioné des
                  produits Apple, c'est un bel aboutissement pour moi.
                </p>
                <p>Au plaisir de pouvoir discuter avec vous.</p>
              </section>
              <section style={styles.comp}>
                <p>Compétences : </p>
                <div className="bar-container">
                  <div style={styles.language}>HTML</div>
                  <div className="bar bar_0">
                    <span>75%</span>
                  </div>
                  <br />
                  <div style={styles.language}>CSS</div>
                  <div className="bar bar_1">
                    <span>75%</span>
                  </div>
                  <br />
                  <div style={styles.language}>JAVASCRIPT</div>
                  <div className="bar bar_2">
                    <span>80%</span>
                  </div>
                  <br />
                  <div style={styles.language}>REACT</div>
                  <div className="bar bar_3">
                    <span>75%</span>
                  </div>
                  <br />
                  <div style={styles.language}>REACT NATIVE</div>
                  <div className="bar bar_4">
                    <span>65%</span>
                  </div>
                  <br />
                  <div style={styles.language}>JQUERY</div>
                  <div className="bar bar_5">
                    <span>65%</span>
                  </div>
                  <br />
                  <div style={styles.language}>NODEJS</div>
                  <div className="bar bar_6">
                    <span>50%</span>
                  </div>
                  <br />
                  <div style={styles.language}>GIT</div>
                  <div className="bar bar_7">
                    <span>50%</span>
                  </div>
                  <br />
                  <div style={styles.language}>PHP</div>
                  <div className="bar bar_8">
                    <span>30%</span>
                  </div>
                </div>
              </section>
            </section>
          </Slide>
          <Slide right cascade>
            <section style={styles.formation}>
              <p>Voici ma formation : </p>
              <p>
                2019 : Diplôme "Développeur d'application FRONT END" enregistré
                au Répertoire National des Certifications Professionnelles.
                Diplôme niveau Bac+3/4 - Openclassrooms 75010 Paris
              </p>
              <p>
                2005 : Maitrise sciences économiques, management et gestion de
                l’entreprise - Université Aix Marseille 3
              </p>
              <p>
                2001 : Baccalauréat Sciences économiques et sociales - Lycée
                Michelet à Marseille
              </p>
            </section>
          </Slide>
          <Slide left cascade>
            <section style={styles.experience}>
              <p>Ainsi que mon expérience :</p>
              <p>
                2015 à ce jour : Responsable équipe logistique AVENIR TELECOM
                Marseille
              </p>
              <p>
                2013 à 2015 : Responsable équipe logistique Internity | AVENIR
                TELECOM Marseille
              </p>
              <p>
                2008-2013 : Gestionnaire logistique Internity | AVENIR TELECOM
                Marseille
              </p>
            </section>
          </Slide>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Open Sans, sans-serif",
    backgroundColor: "white"
  },
  header: {
    fontSize: 20,
    backgroundColor: "#F7F5F3",
    textTransform: "uppercase",
    color: "black",
    padding: "50px 150px"
  },
  p: {
    margin: 0,
    padding: 0,
    lineHeight: 1.2
  },
  main: {
    marginTop: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  histoire: {
    textAlign: "left",
    width: "45%",
    fontSize: 15
  },
  comp: {
    width: "45%",
    textAlign: "left",
    fontSize: 15
  },
  language: {
    fontSize: 15,
    paddingTop: 3,
    paddingLeft: 5,
    width: 110,
    display: "inline-block",
    height: 30,
    backgroundColor: "rgba(218, 21, 47, 0.7)"
  },
  formation: {
    textAlign: "left",
    paddingLeft: 50,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 75,
    backgroundColor: "#F7F5F3"
  },
  experience: {
    textAlign: "left",
    paddingLeft: 50,
    paddingTop: 30,
    paddingBottom: 40,
    marginTop: 10
  }
};

export default About;

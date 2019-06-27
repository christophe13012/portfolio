import React, { Component } from "react";
import NavBar from "./navBar";
import "../about.scss";

class About extends Component {
  state = {};
  render() {
    return (
      <div style={styles.container}>
        <NavBar />
        <div style={styles.about}>
          <header style={styles.header}>
            <p style={styles.p}>
              Salut. Je suis Christophe, un marseillais de 36 ans.
            </p>
            <p style={styles.p}>
              Recemment diplomé en developpement Front-End, je suis à la
              recherche de mon premier poste de developpeur !
            </p>
            <p style={styles.p}>Voici mon histoire ...</p>
          </header>
          <section style={styles.main}>
            <section style={styles.histoire}>
              Apres avoir fait des études de sciences économiques à la sortie
              d'un bac ES, je me suis orienté dans la logistique jusque occuper
              maintenant un poste de responsable d'équipe. J'ai toujours
              regretté de ne pas avoir fait d'étude en informatique mais cela me
              semblait compliqué de me relancer dans ce domaine passé la
              trentaine. Puis pour mon emploi actuel, le besoin d'un nouvel
              outil et les limites d'Excel ont fait que j'ai suivi quelques
              cours sur Openclassrooms dans l'année 2017 pour améliorer notre
              productivité.
              <br />
              D'abord HTML, CSS, puis PHP et Javascript, pour pouvoir faire un
              site de suivi transport hebergé sur un Nas Synology. Et c'est la
              révélation, je veux en faire mon metier. j'ai donc suivi encore de
              nombreux cours et décidé de m'orienter en Front. Openclassrooms
              propose justement de suivre des parcours diplomants et je
              m'inscris en juillet 2018 en parallele de mon emploi au parcours
              Développeur d'application - Frontend délivrant un Diplôme RCNP
              niveau Bac+3/4, que j'ai validé en mars 2019. j'ai décidé ensuite
              de me perfectionner durant quelques mois avant de checher
              activement un emploi dans ce domaine.
              <br />
              J'ai décidé de me spécialiser sur React, j'ai donc suivi beaucoup
              de cours et fait beaucoup de projets, vous pourrez voir les plus
              aboutis dans la section Porfolio, et j'ai également fait quelques
              applications en React Native, etant passioné des produits Apple,
              c'est un bel aboutissement pour moi
              <br />
            </section>
            <section style={styles.comp}>
              <div className="bar-container">
                <div style={styles.language}>HTML</div>
                <div className="bar bar_0">
                  <span>50%</span>
                </div>
                <br />
                <div style={styles.language}>CSS</div>
                <div className="bar bar_1">
                  <span>50%</span>
                </div>
                <br />
                <div style={styles.language}>JAVASCRIPT</div>
                <div className="bar bar_2">
                  <span>50%</span>
                </div>
                <br />
                <div style={styles.language}>REACT</div>
                <div className="bar bar_3">
                  <span>50%</span>
                </div>
                <br />
                <div style={styles.language}>REACT NATIVE</div>
                <div className="bar bar_4">
                  <span>50%</span>
                </div>
                <br />
                <div style={styles.language}>JQUERY</div>
                <div className="bar bar_5">
                  <span>50%</span>
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
                  <span>50%</span>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Open Sans, sans-serif"
  },
  about: {
    backgroundImage:
      "linear-gradient(to bottom, #2e2e2e, #5a5959, #898888, #bcbbb9, #f0f0ee)"
  },
  header: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "white",
    paddingTop: 100,
    margin: "0px 150px"
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
    width: "45%",
    fontSize: 15
  },
  comp: {
    width: "45%",
    textAlign: "left",
    color: "white"
  },
  language: {
    fontSize: 16,
    width: 100,
    display: "inline-block",
    height: 30,
    backgroundColor: "rgba(218, 21, 47, 0.89)"
  }
};

export default About;

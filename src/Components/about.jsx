import React, { Component } from "react";
import { Jumbotron, Progress, Badge } from "reactstrap";
import NavBar from "./navBar";
import Slide from "react-reveal/Slide";

class About extends Component {
  state = {};
  render() {
    return (
      <div style={styles.container}>
        <NavBar />
        <Jumbotron className="text-center">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">Je suis Christophe, un marseillais de 36 ans.</p>
          <hr className="my-2" />
          <p>
            Recemment diplomé en developpement Front-End, je suis à la recherche
            de mon premier poste de developpeur !
          </p>
          <p className="lead" />
        </Jumbotron>
        <div>
          <Slide left cascade>
            <section className="container">
              <div className="row">
                <section className="col-lg mt-3" style={styles.histoire}>
                  <h3>
                    <Badge color="secondary">Histoire :</Badge>
                  </h3>
                  <p className="mt-4">
                    Apres avoir fait des études de sciences économiques à la
                    sortie d'un bac ES, je me suis orienté dans la logistique
                    jusque occuper maintenant un poste de responsable d'équipe.
                    Mais il y a 3 ans j'ai découvert avec passion le
                    developpement web pour un besoin professionnel, et c'est la
                    révélation, je veux en faire mon métier.
                  </p>
                  <p>
                    J'ai donc suivi de nombreux cours notamment sur
                    Openclassrooms et décidé de m'orienter en Front.
                    Openclassrooms propose de suivre des parcours diplomants et
                    je m'inscris en juillet 2018 en parallele de mon emploi au
                    parcours Développeur d'application - Frontend délivrant un
                    Diplôme RCNP niveau Bac+3/4, que j'ai validé en mars 2019.
                    j'ai décidé ensuite de me perfectionner durant quelques mois
                    avant de checher activement un emploi dans ce domaine.
                  </p>
                  <p>
                    J'ai décidé de me spécialiser sur React, j'ai donc suivi des
                    cours et fait beaucoup de projets, vous pourrez voir les
                    plus aboutis dans la section Porfolio, et j'ai également
                    fait quelques applications en React Native, étant passioné
                    des produits Apple, c'est un bel aboutissement pour moi.
                  </p>
                  <p>Au plaisir de pouvoir discuter avec vous.</p>
                </section>
                <section className="col-lg mt-3" style={styles.comp}>
                  <h3>
                    <Badge color="secondary">Compétences :</Badge>
                  </h3>
                  <div>
                    <div className="text-center">HTML</div>
                    <Progress animated color="success" value="75">
                      75%
                    </Progress>
                    <div className="text-center mt-3">CSS</div>
                    <Progress animated color="success" value="75">
                      75%
                    </Progress>
                    <div className="text-center mt-3">JAVASCRIPT</div>
                    <Progress animated color="primary" value="80">
                      80%
                    </Progress>
                    <div className="text-center mt-3">REACT</div>
                    <Progress animated color="info" value="75">
                      75%
                    </Progress>
                    <div className="text-center mt-3">REACT NATIVE</div>
                    <Progress animated color="info" value="65">
                      65%
                    </Progress>
                    <div className="text-center mt-3">JQUERY</div>
                    <Progress animated color="warning" value="65">
                      65%
                    </Progress>
                    <div className="text-center mt-3">NODEJS</div>
                    <Progress animated color="warning" value="50">
                      50%
                    </Progress>
                    <div className="text-center mt-3">GIT</div>
                    <Progress animated color="danger" value="50">
                      50%
                    </Progress>
                    <div className="text-center mt-3">PHP</div>
                    <Progress animated color="danger" value="30">
                      30%
                    </Progress>
                  </div>
                </section>
              </div>
            </section>
          </Slide>
          <Slide right cascade>
            <section className="bg-light pt-5 pb-5 pl-5 mt-5">
              <h3>
                <Badge color="secondary">Voici ma formation :</Badge>
              </h3>
              <p className="mt-4">
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
            <section className="pt-5 pb-5 pl-5">
              <h3>
                <Badge color="secondary">Ainsi que mon expérience :</Badge>
              </h3>
              <p className="mt-4">
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
    backgroundColor: "white"
  }
};

export default About;

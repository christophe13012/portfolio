import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="m-5">
        <Nav pills className="nav justify-content-center">
          <NavItem>
            <NavLink
              href="#"
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              REACTJS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              REACT NATIVE
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              JAVASCRIPT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              NODEJS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              WORDPRESS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={classnames({ active: this.state.activeTab === "6" })}
              onClick={() => {
                this.toggle("6");
              }}
            >
              BOOTSTRAP
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row className="mt-3">
              <Col sm="6">
                <Card body className="m-2">
                  <CardTitle>Jeux de plateau</CardTitle>
                  <CardText>
                    Créer un jeu en ligne en React dans lequel 2 joueurs
                    évoluent chacun leur tour pour s'affronter.
                  </CardText>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://github.com/christophe13012/plateauReact"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="m-2">
                  <CardTitle>A vos avis</CardTitle>
                  <CardText>
                    Créer un site React simple et utile qui permet d'avoir des
                    avis sur des restaurants autour de soi.
                  </CardText>
                  <a
                    href="https://christophe13012.github.io/avosavisReact/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://github.com/christophe13012/avosavisReact"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm="6">
                <Card body className="m-2">
                  <CardTitle>Vidly</CardTitle>
                  <CardText>
                    Creer un site React sur le cinéma, avec la liste de ses
                    films préférés selon les genres et les notes.
                  </CardText>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://github.com/christophe13012/plateauReact"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="m-2">
                  <CardTitle>Portfolio</CardTitle>
                  <CardText>
                    Creer un Portfolio en React avec notamment reactstrap et
                    react-dom-router
                  </CardText>
                  <a
                    href="https://christophe13012.github.io/portfolio/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://github.com/christophe13012/portfolio"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm="6">
                <Card body className="m-2">
                  <CardTitle>Emoji search</CardTitle>
                  <CardText>
                    Site pour rechercher des emojis selon un mot clé
                  </CardText>
                  <a
                    href="https://christophe13012.github.io/emojiSearch/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://github.com/christophe13012/emojiSearch"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="m-2">
                  <CardTitle>En cours</CardTitle>
                  <CardText>...</CardText>
                  <a
                    href="https://christophe13012.github.io/portfolio/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://github.com/christophe13012/portfolio"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="mt-3">
              <Col sm="6">
                <Card body className="m-2">
                  <CardTitle>Movies and me</CardTitle>
                  <CardText>Application IOS/ANDROID sur le cinéma</CardText>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-info disabled"
                    role="button"
                  >
                    L'application
                  </a>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
              <Col sm="6">
                <Card body className="m-2">
                  <CardTitle>Goalala</CardTitle>
                  <CardText>
                    Application IOS/ANDROID de livescore football
                  </CardText>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-info"
                    role="button"
                  >
                    L'application
                  </a>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row className="mt-3">
              <Col sm="4">
                <Card body className="m-2">
                  <CardTitle>Générateur de citations</CardTitle>
                  <CardText>
                    Générateur de citations, construites aléatoirement en
                    assemblant des morceaux de phrase.
                  </CardText>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
              <Col sm="4">
                <Card body className="m-2">
                  <CardTitle>Jeux de plateau</CardTitle>
                  <CardText>
                    Créer un jeu en ligne en Javascript dans lequel 2 joueurs
                    évoluent chacun leur tour pour s'affronter.
                  </CardText>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
              <Col sm="4">
                <Card body className="m-2">
                  <CardTitle>A vos avis</CardTitle>
                  <CardText>
                    Créer un site Javascript simple et utile qui permet d'avoir
                    des avis sur des restaurants autour de soi.
                  </CardText>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row className="mt-3">
              <Col sm="6">
                <Card body className="m-2">
                  <CardTitle>API vidly</CardTitle>
                  <CardText>Api pour alimenter le site Vidly</CardText>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row className="mt-3">
              <Col sm="6">
                <Card body className="m-2">
                  <CardTitle>Chalets et caviar</CardTitle>
                  <CardText>
                    L'agence "Chalets et caviar" à Courchevel nous a missionné
                    pour créer son site web. Elle possède une quinzaine de
                    chalets de luxe à la vente ainsi que d'autres chalets de
                    luxe en location.
                  </CardText>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://christophe13012.github.io/plateauReact/"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row className="mt-3">
              <Col sm="6">
                <Card body className="m-2">
                  <CardTitle>Festival des Films de Plein Air</CardTitle>
                  <CardText>
                    Besoin d'un client : communiquer en ligne sur son festival,
                    d'annoncer les films projetés et de recueillir les
                    réservations. <br /> Livrables : Document de spécification
                    technique du projet + prototype du site en Bootstrap
                  </CardText>
                  <a
                    href="https://christophe13012.github.io/pleinair/"
                    className="btn btn-info"
                    role="button"
                  >
                    Le site
                  </a>
                  <a
                    href="https://github.com/christophe13012/pleinair/"
                    className="btn btn-secondary mt-1"
                    role="button"
                  >
                    Repo GITHUB
                  </a>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

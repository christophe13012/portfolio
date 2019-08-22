import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import HeadShake from "react-reveal/HeadShake";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <HeadShake>
            <Link
              style={styles.nom}
              to="/portfolio"
              className="navbar-brand"
              href="#"
            >
              Christophe Caillet
            </Link>{" "}
          </HeadShake>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  style={styles.lien}
                  to="/portfolio/about"
                  className="nav-link"
                  href="#"
                >
                  A propos de moi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={styles.lien}
                  to="/portfolio/portfolio"
                  className="nav-link"
                  href="#"
                >
                  Mon portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={styles.lien}
                  to="/portfolio/contact"
                  className="nav-link"
                  href="#"
                >
                  Me contacter
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const styles = {
  navbar: { marginBottom: 0 },
  lien: {
    fontSize: 18,
    margin: "0px 20px"
  },
  nom: {
    fontFamily: "'Homemade Apple', cursive"
  }
};

export default NavBar;

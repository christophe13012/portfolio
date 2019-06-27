import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={styles.navbar}
      className="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <Link style={styles.nom} to="/" className="navbar-brand" href="#">
        Christophe Caillet
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <NavLink
            style={styles.lien}
            to="/about"
            className="nav-link"
            href="#"
          >
            A propos de moi
          </NavLink>
          <NavLink
            style={styles.lien}
            to="/portfolio"
            className="nav-link"
            href="#"
          >
            Mon portfolio
          </NavLink>
          <NavLink
            style={styles.lien}
            to="/contact"
            className="nav-link"
            href="#"
          >
            Me contacter
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: { marginBottom: 0 },
  lien: {
    fontSize: 18,
    margin: "0px 20px"
  }
};

export default NavBar;

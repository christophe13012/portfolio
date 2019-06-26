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
            A PROPOS DE MOI
          </NavLink>
          <NavLink
            style={styles.lien}
            to="/portfolio"
            className="nav-link"
            href="#"
          >
            MON PORTFOLIO
          </NavLink>
          <NavLink
            style={styles.lien}
            to="/contact"
            className="nav-link"
            href="#"
          >
            ME CONTACTER
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    borderBottom: "3px solid #4285F4"
  },
  lien: {
    fontSize: 18,
    fontWeight: "bold",
    margin: "0px 20px"
  }
};

export default NavBar;

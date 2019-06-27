import React from "react";
import NavBar from "./navBar";

const Contact = () => {
  return (
    <div style={styles.container}>
      <NavBar />
      <h1>Contact</h1>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Open Sans, sans-serif"
  }
};
export default Contact;

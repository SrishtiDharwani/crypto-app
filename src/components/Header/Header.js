import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <h1 style={{ "fontSize": "50px" }}>Crypto</h1>
      <h1 style={{ "fontSize": "25px" }}>The open currency</h1>
      <p style={{ "fontWeight": "500" }}>
        Find all you need about crypto, at one place.
      </p>
    </div>
  );
}

export default Header;

import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <h2 style={{ "fontSize": "80px" ,"margin":"10px"}}>Crypto</h2>
      <h1 style={{ "fontSize": "25px" }}>The open currency</h1>
      <p style={{ "fontWeight": "500" }}>
        Find all you need about crypto, at one place.
      </p>
    </div>
  );
}

export default Header;

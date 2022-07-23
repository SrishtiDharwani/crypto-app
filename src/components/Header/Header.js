import React from 'react'
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
        <h1 style={{"font-size":"50px"}}>Crypto</h1>
        <h1 style={{"font-size":"25px"}}>The open currency</h1>
        <p style={{"font-weight":"500"}}>Find all you need about crypto, at one place.</p>
    </div>
  )
}

export default Header;
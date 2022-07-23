import React from "react";
import classes from "./Row.module.css";

function Row({
  id,
  symbol,
  name,
  image,
  current_price,
  market_cap,
  priceChange,
}) {

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <h2>{name}</h2>
        {/* <div>{symbol}</div> */}
        <img src={image} alt={symbol}/>
        <div>{current_price}</div> 
        <div>{market_cap}</div>
        <div>{priceChange}</div>
        <button>Know more></button>
      </div>
    </div>
  
  );
  
}

export default Row;

import React from "react";
import classes from "./Row.module.css";
import { Link } from "react-router-dom";

const Row = ({
  id,
  symbol,
  name,
  image,
  current_price,
  market_cap,
  priceChange,
}) => {

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <h2>{name}</h2>
        {/* <div>{symbol}</div> */}
        <img src={image} alt={symbol} />
        <div>{current_price}</div>
        <div>{market_cap}</div>
        <div>{priceChange}</div>
        <Link to={`/${id}`}>
          <button type="button">Know more</button>
        </Link>

      </div>
    </div>
  );
};
export default Row;

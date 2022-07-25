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
        <div className={classes.coinData}>
          <div className={classes.coin}>
            <img className={classes.icon} src={image} alt={symbol} />
            <h1 className={classes.coinName}>{name}</h1>
            <p className={classes.symbol}>{symbol}</p>
            <p className={classes.current}>
              $ {current_price.toLocaleString()}
            </p>
            {/* <p className={classes.change}>{priceChange.toFixed(2)}%</p> */}
            {priceChange < 0 ? (
              <p className={`${classes.change} ${classes.red}`}>
                {priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className={`${classes.change} ${classes.green}`}>
                {priceChange.toFixed(2)}%
              </p>
            )}
            <p className={classes.cap}>$ {market_cap.toFixed(2)}</p>
            <Link to={`/${id}`}>
              <button className={classes.button} type="button">Know more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Row;

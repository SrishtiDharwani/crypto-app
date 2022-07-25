import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./Individual.module.css";
import { Helmet } from "react-helmet";

function Individual() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [er, setEr] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  let { coinId } = params;

  const returnHandler = (event) => {
    event.preventDefault();
    navigate("/", { replace: true });
  };

  const fetchInfo = useCallback(() => {
    setLoading(true);
    const fetchDetails = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      setDetails(responseData);
      setLoading(false);
      console.log("sdf");
    };
    fetchDetails().catch((error) => {
      setLoading(false);
      setEr(error.message);
    });
  }, [coinId]);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  if (loading) {
    return (
      <div className={classes.error}>
        <p className={classes.text}>Getting data...</p>
      </div>
    );
  }

  if (er) {
    console.log(er);
    return (
      <div className={classes.error}>
        <p className={classes.text}>{er}</p>
      </div>
    );
  }
  let query = coinId.charAt(0).toUpperCase() + coinId.slice(1);
  let info = <p>No data found</p>;
  if (details) {
    return (
      <div className={classes.fcontainer}>
        <Helmet>
          <title>Crypto | {query}</title>
        </Helmet>
        <div className={classes.data}>
          <h1>{details.name}</h1>
          <img
            className={classes.img}
            src={details.image.large}
            alt="img"
          ></img>
          <div className={classes.coin}>
            {/* <img src={details.image.large} alt="img"></img> */}
            {/* <h1>{details.name}</h1> */}
            <div className={classes.symbol}>{details.symbol}</div>
            <p>
              Current price: ${" "}
              {details.market_data.current_price.usd.toFixed(2)}
            </p>
            <p>Market cap: $ {details.market_data.market_cap.usd.toFixed(2)}</p>
            <p>
              Total volume: $ {details.market_data.total_volume.usd.toFixed(2)}
            </p>
            <p>24 Hour high: $ {details.market_data.high_24h.usd.toFixed(2)}</p>
            <p>24 Hour low: $ {details.market_data.low_24h.usd.toFixed(2)}</p>
            {details.tickers[6].trust_score === "green" ? (
              <p style={{ color: "green" }}>
                Trust score: {details.tickers[6].trust_score}
              </p>
            ) : (
              <p style={{ color: "red" }}>
                Trust score: {details.tickers[6].trust_score}
              </p>
            )}

            <div className={classes.controls}>
              <a
                className={classes.button1}
                href={details.links.homepage[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website
              </a>
              <button className={classes.button2} onClick={returnHandler}>
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>{info}</div>;
  }
}

export default Individual;

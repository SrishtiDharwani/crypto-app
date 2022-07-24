import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  },[coinId]);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);


  if (loading) {
    return (
      <section>
        <p>Getting data...</p>
      </section>
    );
  }

  if (er) {
    console.log(er);
    return (
      <section>
        <p>{er}</p>
      </section>
    );
  }

  let info = <p>No data found</p>;
  if (details) {
    return (
      <div>
        <h1>{details.name}</h1>
        <img src={details.image.large} alt="img"></img>
        <div>{details.symbol}</div>
        <a
          href={details.links.homepage[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          site
        </a>
        <div>{details.market_data.current_price.usd}</div>
        <div>{details.market_data.market_cap.usd}</div>
        <div>{details.market_data.total_volume.usd}</div>
        <div>{details.market_data.high_24h.usd}</div>
        <div>{details.market_data.low_24h.usd}</div>
        <p>{details.tickers[6].trust_score}</p>
        <button onClick={returnHandler}>Go back</button>
      </div>
    );
    } else {
      return <div>{info}</div>;
  }
}

export default Individual;

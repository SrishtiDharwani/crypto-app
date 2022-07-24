import React, { useEffect, useState } from "react";
import classes from "./Default.module.css";
import Row from "../Row/Row";
import Header from "../Header/Header";
import refresh from "../../assets/search.png";

function Default() {
  const [coins, setCoins] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");
  const [err, setErr] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const searchHandler = (event) => {
    event.preventDefault();
    setSearchedWord(event.target.value);
  };

  const filteredData = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchedWord.toLowerCase())
  );

  const refreshHandler = (event) => {
    event.preventDefault();
    window.location.reload();
  };

  useEffect(() => {
    refreshPage();
  }, []);

  const refreshPage = () => {
    setIsLoading(true);
    const fetchCoins = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      if (!response.ok) {
        console.log("error");
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      setCoins(responseData);
      setIsLoading(false);
    };
    fetchCoins().catch((error) => {
      setIsLoading(false);
      setErr(error.message);
    });
  };

  if (isLoading) {
    return (
      <div className={classes.error}>
        <p className={classes.text}>Getting data...</p>
      </div>
    );
  }

  if (err) {
    console.log(err);
    return (
      <div className={classes.error}>
        <p className={classes.text}>{err}</p>
      </div>
    );
  }

  let data = (
    <div className={classes.notFound}>
      <p className={classes.text}>No coins found. Try entering something else!</p>
    </div>
  );
  if (filteredData.length !== 0) {
    data = filteredData.map((coin) => (
      <Row
        id={coin.id}
        symbol={coin.symbol}
        name={coin.name}
        image={coin.image}
        current_price={coin.current_price}
        market_cap={coin.market_cap}
        priceChange={coin.price_change_percentage_24h}
      />
    ));
  }

  return (
    <React.Fragment>
      <Header />
      <div className={classes.search}>
        <input
          className={classes.searchbar}
          placeholder="Search..."
          type="text"
          onChange={searchHandler}
        />
        <img
          className={classes.icon}
          src={refresh}
          alt="refresh"
          onClick={refreshHandler}
        />
      </div>
      <ul>{data}</ul>
    </React.Fragment>
  );
}

export default Default;

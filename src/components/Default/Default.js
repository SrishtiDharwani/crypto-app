import React, { useEffect, useState } from "react";
// import classes from "./Default.module.css";
import Row from "../Row/Row";

function Default() {
  const [coins, setCoins] = useState([]);
  const [err, setErr] = useState();

  useEffect(() => {
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
    };
    fetchCoins().catch((error) => {
      //   setIsLoading(false);
      setErr(error.message);
    });
  }, []);
  //   if (isLoading) {
  //     return (
  //       <section className={classes.mealsLoading}>
  //         <p>Loading...</p>
  //       </section>
  //     );
  //   }

//   if (err) {
//     console.log(err);
//     return (
//       <section>
//         <p>{err}</p>
//       </section>
//     );
//   }
// coins.map((coin) => {console.log(coin.id)});
 
  const data=coins.map((coin) => (
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
return (
  <ul>{data}</ul>
)
}

export default Default;

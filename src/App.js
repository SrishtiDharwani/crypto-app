import React from "react";
import { Routes,Route } from "react-router-dom";
import Default from "./components/Default/Default";
import Individual from "./components/Coin/Individual";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="card">
          <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/:coinId" element={<Individual />}></Route>
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

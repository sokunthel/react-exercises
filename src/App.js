import React from "react";
import "./App.css";
import Countries from "./Countries";
import Calculator from "./Calculator/Calculator";
import CalculatorV2 from "./CalculatorV2/CalculatorV2";

const App = () => {
  return (
    <div className="App">
      <CalculatorV2 />
      {/* <Calculator /> */}
      {/* <Countries /> */}
    </div>
  );
};

export default App;

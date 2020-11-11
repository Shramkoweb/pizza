import React from "react";

import PizzaConfigurator from "../pizza-configurator/PizzaConfigurator";

function App() {
  return (
    <div>
      <img src="https://via.placeholder.com/150" width={150} height={150} alt="Pizza"/>
      <h1>Маргарита</h1>
      <p>30 см на толстом тесте</p>
      <p>Томатный соус • Моцарелла • Томаты</p>

      <PizzaConfigurator/>
    </div>
  );
}

export default App;

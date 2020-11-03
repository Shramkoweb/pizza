import React from "react";

import Configurator from "../configurator/Configurator";

function App() {
  return (
    <div>
      <img src="https://via.placeholder.com/150" width={150} height={150} alt="Pizza"/>
      <h1>Маргарита</h1>
      <p>30 см на толстом тесте</p>
      <p>Томатный соус • Моцарелла • Томаты</p>

      <Configurator/>
    </div>
  );
}

export default App;

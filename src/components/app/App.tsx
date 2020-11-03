import React from "react";
import Configurator from "../configurator/Configurator";

function App() {
  const [order, setOrder] = React.useState({});

  const getTotalPrice = (order:any) => {
    const BASE_PRICE = 200;
    const {size} = order;

    // console.log(Object.entries(order));

    console.log(order);
  };

  React.useEffect(() => {
    getTotalPrice(order);
  }, [order])


  return (
    <div>
      <img src="https://via.placeholder.com/150" width={150} height={150} alt="Pizza"/>
      <h1>Маргарита</h1>
      <p>30 см на толстом тесте</p>
      <p>Томатный соус • Моцарелла • Томаты</p>


      <Configurator setOrder={setOrder}/>
    </div>
  );
}

export default App;

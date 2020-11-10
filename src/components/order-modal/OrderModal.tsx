import React from "react";
import { getIngredientName, IngridientName } from "../../utils";

type OrderModalProps = {
  dough: IngridientName,
  size: string,
  sauce: IngridientName,
  fillings: IngridientName[],
};

const OrderModal = (props: OrderModalProps) => {
  const { dough, size, sauce, fillings } = props;

  return (
    <div>
      (
      <div className='modal'>
        <h2>Маргарита</h2>
        <p>{size} см на {getIngredientName(dough)} тесте</p>

        <p>
          {getIngredientName(sauce)} соус -
          {
            fillings.map((filling) => {
              return getIngredientName(filling);
            }).join(", ")
          }
        </p>
      </div>
      )
    </div>
  );
};

export default OrderModal;

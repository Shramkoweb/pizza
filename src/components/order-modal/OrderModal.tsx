import React from "react";
import { getIngredientName } from "../../utils";

type OrderModalProps = {
  dough: string,
  size: string,
  sauce: string,
  fillings: string[],
};

const OrderModal = (props: OrderModalProps) => {
  const { dough, size, sauce, fillings } = props;

  return (
    <div>
      (
      <div className='modal'>
        <h2>Маргарита</h2>
        {/*@ts-ignore*/}
        <p>{size} см на {getIngredientName(dough)} тесте</p>

        <p>
          {/*@ts-ignore*/}
          {getIngredientName(sauce)} соус -
          {
            fillings.map((filling) => {
              // @ts-ignore
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

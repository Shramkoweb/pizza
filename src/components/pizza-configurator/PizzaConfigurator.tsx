import React, { FC } from "react";

import "./index.css";

import RadioGroup from "../radio-group/RadioGroup";
import CheckboxGroup from "../checkbox-group/CheckboxGroup";
import OrderModal from "../order-modal/OrderModal";
import {
  BIG_PIZZA_PRICE,
  DEFAULT_PIZZA_PRICE,
  FILLING_PRICE,
} from "../../constants";
import {
  cheeses,
  dough,
  meat,
  sauces,
  sizes,
  vegetables,
} from "../../mocks";
import { getPizzaPrice } from "../../utils";

const DEFAULT_PIZZA = {
  size: "30",
  dough: "thin",
  sauce: "ketchup",
  fillings: [],
};

type Pizza = {
  size: string,
  dough: string,
  sauce: string,
  fillings: string[],
}

const PizzaConfigurator: FC = () => {
  const [price, setPrice] = React.useState(DEFAULT_PIZZA_PRICE);
  const [constructor, setConstructor] = React.useState<Pizza>(DEFAULT_PIZZA);
  const [isModalVisible, showModal] = React.useState(false);

  // TODO THINK move handler to RadioGroup?
  const handleRadioInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setConstructor(prevState => {
      return {
        ...prevState,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  const handleCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    const fillingExists = constructor.fillings.find((filling) => value === filling);

    if (!fillingExists) {
      setConstructor(prevState => {
        return {
          ...prevState,
          fillings: [...prevState.fillings, value],
        };
      });
    } else {
      setConstructor(prevState => {
        const filteredArray = prevState.fillings.filter((item) => item !== value);

        return {
          ...prevState,
          fillings: filteredArray,
        };
      });
    }
  };

  const handleFormSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    showModal(true);
  };

  React.useEffect(() => {
    const fillingsAmount = constructor.fillings.length;
    const isBigPizza = constructor.size === "35";

    const pizzaPrice = getPizzaPrice(fillingsAmount, isBigPizza, FILLING_PRICE, {
      big: BIG_PIZZA_PRICE,
      small: DEFAULT_PIZZA_PRICE,
    });

    setPrice(pizzaPrice);
  }, [constructor]);

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        action="https://echo.htmlacademy.ru"
        method="POST"
      >
        <div>
          <RadioGroup
            legend="Размер"
            onInputChange={handleRadioInputChange}
            groupName="size"
            values={sizes}
          />

          <RadioGroup
            legend="Тесто"
            onInputChange={handleRadioInputChange}
            groupName="dough"
            values={dough}
          />

          <RadioGroup
            legend="Выберите соус"
            onInputChange={handleRadioInputChange}
            groupName="sauce"
            values={sauces}
          />

          <CheckboxGroup
            legend={"Добавьте сыр"}
            onInputChange={handleCheckboxChange}
            groupName='cheese'
            values={cheeses}
          />

          <CheckboxGroup
            legend={"Добавьте овощи"}
            onInputChange={handleCheckboxChange}
            groupName='vegetables'
            values={vegetables}
          />

          <CheckboxGroup
            legend={"Добавьте мясо"}
            onInputChange={handleCheckboxChange}
            groupName='meat'
            values={meat}
          />

          <button type="submit">Заказать за {price} руб</button>
        </div>
      </form>


      {
        isModalVisible &&
        <OrderModal
          dough={constructor.dough}
          fillings={constructor.fillings}
          sauce={constructor.sauce}
          size={constructor.size}
        />
      }
    </div>
  );
};

export default PizzaConfigurator;

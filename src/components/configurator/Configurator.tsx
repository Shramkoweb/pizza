import React, { FC } from "react";

import "./index.css";

// TODO InputValue move to shared types
import RadioGroup, { InputValue } from "../radio-group/RadioGroup";
import CheckboxGroup from "../checkbox-group/CheckboxGroup";

const DEFAULT_PIZZA_PRICE = 200;
const BIG_PIZZA_PRICE = 250;
const FILLING_PRICE = 29;
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

const namingsByInputValues: { [index: string]: string } = {
  thin: "Тонком",
  lush: "Толстом",
  ketchup: "Томатный",
  white: "Белый",
  acute: "Острый",
  mozzarella: "Моцарелла",
  cheddar: "Чеддер",
  blue: "Дор Блю",
  tomato: "Помидор",
  mushrooms: "Грибы",
  paper: "Перец",
  bacon: "Бекон",
  pepperoni: "Пепперони",
  ham: "Ветчина",
};

const Configurator: FC = () => {
  const [price, setPrice] = React.useState(DEFAULT_PIZZA_PRICE);
  const [constructor, setConstructor] = React.useState<Pizza>(DEFAULT_PIZZA);
  const [isModalVisible, setModalVisible] = React.useState(false);

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
    const isFillingExisting = constructor.fillings.find((filling) => value === filling);

    if (!isFillingExisting) {
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

  const handleFormSubmit = (evt: any) => {
    evt.preventDefault();

    setModalVisible(true);
  };

  const getPizzaPrice = (
    fillingsCount: number,
    isBigPizza: boolean,
    defaultPrices: { small: number, big: number },
  ): number => {
    const fillingsTotalPrice = fillingsCount * FILLING_PRICE;

    if (isBigPizza) {
      return defaultPrices.big + fillingsTotalPrice;
    }

    return defaultPrices.small + fillingsTotalPrice;
  };

  React.useEffect(() => {
    const fillingsAmount = constructor.fillings.length;
    const isBigPizza = constructor.size === "35";

    const pizzaPrice = getPizzaPrice(fillingsAmount, isBigPizza, {
      big: BIG_PIZZA_PRICE,
      small: DEFAULT_PIZZA_PRICE,
    });

    setPrice(pizzaPrice);
  }, [constructor]);

  // TODO remove on get data from server
  const sizes: InputValue[] = [
    {
      id: "0",
      value: "30",
      label: "30 см",
      isChecked: true,
    },
    {
      id: "1",
      value: "35",
      label: "35 см",
    },
  ];
  const dough: InputValue[] = [
    {
      id: "2",
      value: "thin",
      label: "Тонкое",
      isChecked: true,
    },
    {
      id: "3",
      value: "lush",
      label: "Пышное",
    },
  ];
  const sauces: InputValue[] = [
    {
      id: "4",
      value: "ketchup",
      label: "Томатный",
      isChecked: true,
    },
    {
      id: "5",
      value: "white",
      label: "Белый",
    },
    {
      id: "6",
      value: "acute",
      label: "Острый",
    },
  ];
  const cheeses: InputValue[] = [
    {
      id: "7",
      value: "mozzarella",
      label: "Моцарелла",
    },
    {
      id: "8",
      value: "cheddar",
      label: "Чеддер",
    },
    {
      id: "9",
      value: "blue",
      label: "Дор Блю",
    },
  ];
  const vegetables: InputValue[] = [
    {
      id: "10",
      value: "tomato",
      label: "Помидор",
    },
    {
      id: "11",
      value: "mushrooms",
      label: "Грибы",
    },
    {
      id: "12",
      value: "paper",
      label: "Перец",
    },
  ];
  const meat: InputValue[] = [
    {
      id: "13",
      value: "bacon",
      label: "Бекон",
    },
    {
      id: "14",
      value: "pepperoni",
      label: "Пепперони",
    },
    {
      id: "15",
      value: "ham",
      label: "Ветчина",
    },
  ];

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
        isModalVisible && (
          <div className='modal'>
            <h2>Маргарита</h2>
            <p>{constructor.size} см на {namingsByInputValues[constructor.dough]} тесте</p>

            <p>
              {namingsByInputValues[constructor.sauce]} соус -
              {
                constructor.fillings.map(filling => {
                  return namingsByInputValues[filling];
                }).join(", ")
              }
            </p>
          </div>
        )
      }
    </div>
  );
};

export default Configurator;

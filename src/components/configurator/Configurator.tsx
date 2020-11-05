import React, { FC } from "react";

import "./index.css";

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

  React.useEffect(() => {
    const fillingsAmount = constructor.fillings.length;
    const isBigPizza = constructor.size === "35";

    if (isBigPizza) {
      setPrice(() => {
        return BIG_PIZZA_PRICE + fillingsAmount * FILLING_PRICE;
      });
    } else {
      setPrice(() => {
        return DEFAULT_PIZZA_PRICE + fillingsAmount * FILLING_PRICE
          ;
      });
    }
  }, [constructor]);

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        action="https://echo.htmlacademy.ru"
        method="POST"
      >
        <div>
          <fieldset>
            <legend>Размер</legend>

            <ul style={{ listStyle: "none" }}>
              <li>
                <label htmlFor="30">30 см</label>

                <input
                  onChange={handleRadioInputChange}
                  type="radio"
                  id="30"
                  name='size'
                  value='30'
                  defaultChecked
                />
              </li>

              <li>
                <label htmlFor="35">35 см</label>

                <input
                  onChange={handleRadioInputChange}
                  type="radio"
                  id="35"
                  name='size'
                  value='35'
                />
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Тесто</legend>

            <ul style={{ listStyle: "none" }}>
              <li>
                <label htmlFor="thin">Тонкое</label>

                <input
                  onChange={handleRadioInputChange}
                  type="radio"
                  id="thin"
                  name='dough'
                  value='thin'
                  defaultChecked
                />
              </li>

              <li>
                <label htmlFor="lush">Пышное</label>

                <input
                  onChange={handleRadioInputChange}
                  type="radio"
                  id="lush"
                  name='dough'
                  value='lush'
                />
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Выберите соус</legend>

            <ul style={{ listStyle: "none" }}>
              <li>
                <label htmlFor="ketchup">Томатный</label>

                <input
                  onChange={handleRadioInputChange}
                  type="radio"
                  id="ketchup"
                  name='sauce'
                  value='ketchup'
                  defaultChecked
                />
              </li>

              <li>
                <label htmlFor="white">Белый</label>

                <input
                  onChange={handleRadioInputChange}
                  type="radio"
                  id="white"
                  name='sauce'
                  value='white'
                />
              </li>

              <li>
                <label htmlFor="acute">Острый</label>

                <input
                  onChange={handleRadioInputChange}
                  type="radio"
                  id="acute"
                  name='sauce'
                  value='acute'

                />
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Добавьте сыр</legend>

            <ul style={{ listStyle: "none" }}>
              <li>
                <label htmlFor="mozzarella">Моцарелла</label>

                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  id="mozzarella"
                  name='cheese'
                  value='mozzarella'
                />
              </li>

              <li>
                <label htmlFor="cheddar">Чеддер</label>

                <input
                  onChange={handleCheckboxChange}

                  type="checkbox"
                  id="cheddar"
                  name='cheese'
                  value='cheddar'
                />
              </li>

              <li>
                <label htmlFor="blue">Дор Блю</label>

                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  id="blue"
                  name='cheese'
                  value='blue'
                />
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Добавьте овощи</legend>

            <ul style={{ listStyle: "none" }}>
              <li>
                <label htmlFor="tomato">Помидор</label>

                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  id="tomato"
                  name='vegetable'
                  value='tomato'
                />
              </li>

              <li>
                <label htmlFor="mushrooms">Грибы</label>


                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  id="mushrooms"
                  name='vegetable'
                  value='mushrooms'
                />
              </li>

              <li>
                <label htmlFor="paper">Перец</label>

                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  id="paper"
                  name='vegetable'
                  value='paper'
                />
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Добавьте мясо</legend>

            <ul style={{ listStyle: "none" }}>
              <li>
                <label htmlFor="bacon">Бекон</label>

                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  id="bacon"
                  name='meat'
                  value='bacon'
                />
              </li>

              <li>
                <label htmlFor="pepperoni">Пепперони</label>

                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  id="pepperoni"
                  name='meat'
                  value='pepperoni'
                />
              </li>

              <li>
                <label htmlFor="ham">Ветчина</label>

                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  id="ham"
                  name='meat'
                  value='ham'
                />
              </li>
            </ul>
          </fieldset>

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

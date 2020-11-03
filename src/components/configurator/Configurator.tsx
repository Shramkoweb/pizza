import React, { FC } from "react";
import "./index.css";

type ConfiguratorProps = any;

type PizzaConstructor = {
  size: string,
  dough: string,
  souse: string,
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

const Configurator: FC<ConfiguratorProps> = () => {
  const [price, setPrice] = React.useState(200);
  const [pizza, setPizza] = React.useState<PizzaConstructor>({
    size: "30",
    dough: "thin",
    souse: "ketchup",
    fillings: [],
  });
  const [isModalVisible, setModalVisible] = React.useState(false);

  const handleSizeInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPizza(prevState => {
      return {
        ...prevState,
        size: evt.target.value,
      };
    });
  };

  const handleDoughInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPizza(prevState => {
      return {
        ...prevState,
        dough: evt.target.value,
      };
    });
  };

  const handleSouseInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPizza(prevState => {
      return {
        ...prevState,
        souse: evt.target.value,
      };
    });
  };

  const handleCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    const isFillingExist = pizza.fillings.find((filling) => value === filling);

    if (!isFillingExist) {
      setPizza(prevState => {
        return {
          ...prevState,
          fillings: [...prevState.fillings, value],
        };
      });
    } else {
      setPizza(prevState => {
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
    const fillingsAmount = pizza.fillings.length;
    const isBigPizza = pizza.size === "35";

    if (isBigPizza) {
      setPrice(() => {
        return 250 + fillingsAmount * 29;
      });
    } else {
      setPrice(() => {
        return 200 + fillingsAmount * 29;
      });
    }
  }, [pizza]);

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

                <input onChange={handleSizeInputChange} type="radio" id="30" name='size' value='30' defaultChecked/>
              </li>

              <li>
                <label htmlFor="35">35 см</label>

                <input onChange={handleSizeInputChange} type="radio" id="35" name='size' value='35'/>
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Тесто</legend>

            <ul style={{ listStyle: "none" }}>
              <li>
                <label htmlFor="thin">Тонкое</label>

                <input
                  onChange={handleDoughInputChange}
                  type="radio"
                  id="thin"

                  name='dough'
                  value='thin'
                  defaultChecked
                />
              </li>

              <li>
                <label htmlFor="lush">Пышное</label>

                <input onChange={handleDoughInputChange} type="radio" id="lush" name='dough' value='lush'/>
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Выберите соус</legend>

            <ul style={{ listStyle: "none" }}>
              <li>
                <label htmlFor="ketchup">Томатный</label>

                <input onChange={handleSouseInputChange} type="radio" id="ketchup" name='souse' value='ketchup'
                       defaultChecked/>
              </li>

              <li>
                <label htmlFor="white">Белый</label>

                <input onChange={handleSouseInputChange} type="radio" id="white" name='souse' value='white'/>
              </li>

              <li>
                <label htmlFor="acute">Острый</label>

                <input onChange={handleSouseInputChange} type="radio" id="acute" name='souse' value='acute'/>
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Добавьте сыр</legend>

            <ul style={{ listStyle: "none" }}>
              <li>
                <label htmlFor="mozzarella">Моцарелла</label>

                <input onChange={handleCheckboxChange} type="checkbox" id="mozzarella" name='cheese'
                       value='mozzarella'/>
              </li>

              <li>
                <label htmlFor="cheddar">Чеддер</label>

                <input onChange={handleCheckboxChange} type="checkbox" id="cheddar" name='cheese' value='cheddar'/>
              </li>

              <li>
                <label htmlFor="blue">Дор Блю</label>

                <input onChange={handleCheckboxChange} type="checkbox" id="blue" name='cheese' value='blue'/>
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Добавьте овощи</legend>

            <ul style={{ listStyle: "none" }}>
              <li>
                <label htmlFor="tomato">Помидор</label>

                <input onChange={handleCheckboxChange} type="checkbox" id="tomato" name='vegetable' value='tomato'/>
              </li>

              <li>
                <label htmlFor="mushrooms">Грибы</label>

                <input onChange={handleCheckboxChange} type="checkbox" id="mushrooms" name='vegetable'
                       value='mushrooms'/>
              </li>

              <li>
                <label htmlFor="paper">Перец</label>

                <input onChange={handleCheckboxChange} type="checkbox" id="paper" name='vegetable' value='paper'/>
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Добавьте мясо</legend>

            <ul style={{ listStyle: "none" }}>
              <li>
                <label htmlFor="bacon">Бекон</label>

                <input onChange={handleCheckboxChange} type="checkbox" id="bacon" name='meat' value='bacon'/>
              </li>

              <li>
                <label htmlFor="pepperoni">Пепперони</label>

                <input onChange={handleCheckboxChange} type="checkbox" id="pepperoni" name='meat' value='pepperoni'/>
              </li>

              <li>
                <label htmlFor="ham">Ветчина</label>

                <input onChange={handleCheckboxChange} type="checkbox" id="ham" name='meat' value='ham'/>
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
            <p>{pizza.size} см на {namingsByInputValues[pizza.dough]} тесте</p>

            <p>
              {namingsByInputValues[pizza.souse]} соус -
              {
                pizza.fillings.map(filling => {
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

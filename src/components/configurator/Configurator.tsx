import React, {
  ChangeEvent,
  FC,
} from "react";

import RadioGroup from "../radio-group/RadioGroup";

type ConfiguratorProps = any;

// Подумать над именем
enum PizzaSetting {
  Size = "Size",
  Dough = "Dough",
  Souse = "Souse",
  Cheese = "Cheese",
  Vegetable = "Vegetable",
  Meet = "Meet",
}

const Configurator: FC<ConfiguratorProps> = (props) => {
  const { setOrder } = props;
  // TODO add legend & fieldsets
  // fieldset is RadioGroup
  // legend is RadioGroup.props.title
  const handleFormChange = (evt: ChangeEvent<HTMLFormElement>) => {
    if (evt.target["type"] === "radio") {
      setOrder((prevState: any) => {
        return {
          ...prevState,
          [evt.target.name]: {
            [evt.target.value]: evt.target.checked,
          },
        };
      });
    } else {
      setOrder((prevState: any) => {
        return {
          ...prevState,
          [evt.target.name]: {
            ...prevState[evt.target.name],
            [evt.target.value]: evt.target.checked,
          },
        };
      });
    }
  };

  const [configuratorState, setConfiguratorState] = React.useState({
    [PizzaSetting.Size]: {
      "30cm": true,
      "35cm": false,
    },
    [PizzaSetting.Dough]: {
      "Тонкое": true,
      "Пышное": false,
    },
    [PizzaSetting.Souse]: {
      "Томатный": true,
      "Белый": false,
      "Острый": false,
    },
    [PizzaSetting.Cheese]: {
      "Моцарелла": false,
      "Чеддер": false,
      "Дор Блю": false,
    },
    [PizzaSetting.Vegetable]: {
      "Помидор": false,
      "Грибы": false,
      "Перец": false,
    },
    [PizzaSetting.Meet]: {
      "Бекон": false,
      "Пепперони": false,
      "Ветчина": false,
    },
  });

  return (
    <div>
      <form
        onChange={handleFormChange}
        action="https://echo.htmlacademy.ru"
        method="POST"
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <RadioGroup
            title={"Размер"}
            groupName={PizzaSetting.Size}
            values={configuratorState[PizzaSetting.Size]}
          />

          <RadioGroup
            title={"Тесто"}
            groupName={PizzaSetting.Dough}
            values={configuratorState[PizzaSetting.Dough]}
          />

          <RadioGroup
            title={"Выберите соус"}
            groupName={PizzaSetting.Souse}
            values={configuratorState[PizzaSetting.Souse]}
          />

          {/*<CheckboxGroup*/}
          {/*  title='Добавьте сыр'*/}
          {/*  groupName='cheese'*/}
          {/*  values={[*/}
          {/*    {*/}
          {/*      name: "Моцарелла",*/}
          {/*      image: "https://via.placeholder.com/30",*/}
          {/*      price: 11,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "Чеддер",*/}
          {/*      image: "https://via.placeholder.com/30",*/}
          {/*      price: 23,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "Дор Блю",*/}
          {/*      image: "https://via.placeholder.com/30",*/}
          {/*      price: 14,*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*/>*/}

          {/*<CheckboxGroup*/}
          {/*  title='Добавьте овощи'*/}
          {/*  groupName='vegetable'*/}
          {/*  values={[*/}
          {/*    {*/}
          {/*      name: "Помидор",*/}
          {/*      image: "https://via.placeholder.com/30",*/}
          {/*      price: 41,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "Грибы",*/}
          {/*      image: "https://via.placeholder.com/30",*/}
          {/*      price: 16,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "Перец",*/}
          {/*      image: "https://via.placeholder.com/30",*/}
          {/*      price: 33,*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*/>*/}

          {/*<CheckboxGroup*/}
          {/*  title='Добавьте мясо'*/}
          {/*  groupName='meat'*/}
          {/*  values={[*/}
          {/*    {*/}
          {/*      name: "Бекон",*/}
          {/*      image: "https://via.placeholder.com/30",*/}
          {/*      price: 64,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "Пепперони",*/}
          {/*      image: "https://via.placeholder.com/30",*/}
          {/*      price: 15,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      name: "Ветчина",*/}
          {/*      image: "https://via.placeholder.com/30",*/}
          {/*      price: 26,*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*/>*/}
        </div>

        <button type="submit">123123</button>
      </form>
    </div>
  );
};

export default Configurator;

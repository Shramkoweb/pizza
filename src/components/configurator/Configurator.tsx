import React, {
  ChangeEvent,
  FC,
} from "react";

import RadioGroup from "../radio-group/RadioGroup";
import CheckboxGroup from "../checkbox-group/Checkbox-group";

type ConfiguratorProps = any;

const Configurator: FC<ConfiguratorProps> = (props) => {
  const { setOrder } = props;
  // TODO add legend & fieldsets
  // fieldset is RadioGroup
  // legend is RadioGroup.props.title
  const handleFormChange = (evt: ChangeEvent<HTMLFormElement>) => {
    if (evt.target["type"] === "checkbox") {
      setOrder((prevState: any) => {
        return {
          ...prevState,
          [evt.target.name]: {
            ...prevState[evt.target.name],
            [evt.target.value]: evt.target.checked,
          },
        };
      });
    } else {
      setOrder((prevState: any) => {
        return {
          ...prevState,
          [evt.target.name]: evt.target.value,
        };
      });
    }
  };

  const [configuratorState, setConfiguratorState] = React.useState({
    size: '30cm',
    dough: "Тонкое",
    souse: 'Томатный',
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
            groupName={"size"}
            values={["30cm", "35cm"]}
          />

          <RadioGroup
            title={"Тесто"}
            groupName={"dough"}
            values={["Тонкое", "Пышное"]}
          />

          <RadioGroup
            title={"Выберите соус"}
            groupName={"souse"}
            values={["Томатный", "Белый", "Острый"]}
          />

          <CheckboxGroup
            title='Добавьте сыр'
            groupName='cheese'
            values={[
              {
                name: "Моцарелла",
                image: "https://via.placeholder.com/30",
                price: 11,
              },
              {
                name: "Чеддер",
                image: "https://via.placeholder.com/30",
                price: 23,
              },
              {
                name: "Дор Блю",
                image: "https://via.placeholder.com/30",
                price: 14,
              },
            ]}
          />

          <CheckboxGroup
            title='Добавьте овощи'
            groupName='vegetable'
            values={[
              {
                name: "Помидор",
                image: "https://via.placeholder.com/30",
                price: 41,
              },
              {
                name: "Грибы",
                image: "https://via.placeholder.com/30",
                price: 16,
              },
              {
                name: "Перец",
                image: "https://via.placeholder.com/30",
                price: 33,
              },
            ]}
          />

          <CheckboxGroup
            title='Добавьте мясо'
            groupName='meat'
            values={[
              {
                name: "Бекон",
                image: "https://via.placeholder.com/30",
                price: 64,
              },
              {
                name: "Пепперони",
                image: "https://via.placeholder.com/30",
                price: 15,
              },
              {
                name: "Ветчина",
                image: "https://via.placeholder.com/30",
                price: 26,
              },
            ]}
          />
        </div>

        <button type="submit">123123</button>
      </form>
    </div>
  );
};

export default Configurator;

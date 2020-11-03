import React, { FC } from "react";

type CheckboxValue = {
  name: string,
  price: number,
  image: string,
};

type CheckboxGroupProps = {
  title: string,
  groupName: string,
  values: CheckboxValue[],
};

const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const { title, values, groupName } = props;

  return (
    <div>
      <h2>{title}</h2>

      <div>
        <ul>
          {
            values.map(((value) => {
              const { image, name, price } = value;

              // TODO remove after add CSS
              return (
                <li
                  key={name}
                  style={{
                    width: 150,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <img src={image} alt={image}/>

                  <label htmlFor={name}>{name}</label>

                  <span>{price}</span>

                  <input
                    type="checkbox"
                    value={name}
                    name={groupName}
                    id={name}
                  />
                </li>
              );
            }))
          }
        </ul>
      </div>
    </div>
  );
};

export default CheckboxGroup;

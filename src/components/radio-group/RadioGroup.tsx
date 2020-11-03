import React, { FC } from "react";


type RadioGroupProps = {
  title: string,
  groupName: string,
  values: {
    [key: string]: boolean
  }
};

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { title, values, groupName } = props;

  const inputValues = Object.entries(values);

  // TODO defaultChecked from props not index
  return (
    <div>
      <h2>{title}</h2>

      <div>
        <ul>
          {
            inputValues.map(((value) => {
              const [name, checked] = value;

              return (
                // TODO remove after add CSS
                <li
                  key={name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <label htmlFor={name}>{name}</label>

                  <input
                    type="radio"
                    value={name}
                    name={groupName}
                    id={name}
                    defaultChecked={checked}
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

export default RadioGroup;

import React, { FC } from "react";

type RadioGroupProps = {
  title: string,
  groupName: string,
  values: string[],
};

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { title, values, groupName } = props;

  // TODO defaultChecked from props not index
  return (
    <div>
      <h2>{title}</h2>

      <div>
        <ul>
          {
            values.map(((value, index) => {
              return (
                // TODO remove after add CSS
                <li style={{
                  display: "flex",
                  alignItems: "center",
                }}>
                  <label htmlFor={value}>{value}</label>

                  <input
                    type="radio"
                    value={value}
                    name={groupName}
                    id={value}
                    defaultChecked={index === 0}
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

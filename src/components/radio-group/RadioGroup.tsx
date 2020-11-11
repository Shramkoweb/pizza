import React, { FC } from "react";

// TODO InputValue move to shared types
export type InputValue = {
  id: string,
  value: string,
  label: string,
  isChecked?: boolean,
};

type RadioGroupProps = {
  legend: string,
  onInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  groupName: string,
  values: InputValue[],
};

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { legend, onInputChange, groupName, values } = props;

  return (
    <fieldset>
      <legend>{legend}</legend>

      <ul style={{ listStyle: "none" }}>
        {
          values.map((input) => {
            const { id, label, value, isChecked } = input;

            return (
              <li key={id}>
                <label htmlFor={id}>{label}</label>
                <input
                  onChange={onInputChange}
                  type="radio"
                  id={id}
                  value={value}
                  name={groupName}
                  defaultChecked={isChecked}
                />
              </li>
            );
          })
        }
      </ul>
    </fieldset>
  );
};

export default RadioGroup;

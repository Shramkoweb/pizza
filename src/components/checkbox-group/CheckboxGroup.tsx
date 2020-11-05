import React, { FC } from "react";
import { InputValue } from "../radio-group/RadioGroup";

type CheckboxGroupProps = {
  legend: string,
  onInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  groupName: string,
  values: InputValue[],
};

const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
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
                  type='checkbox'
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

export default CheckboxGroup;

import React from "react";
import { InputElement } from "../commonStyles";
import { IInputSearch } from "../InputTypes";

export const InputSearch: React.FC<IInputSearch> = ({
  name,
  onchange,
  ariaLabel,
  placeholder,
  setFocus,
}) => {
  return (
    <InputElement
      paddingDirection="right"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholder={placeholder}
      aria-label={ariaLabel}
      type="search"
      name={name}
      id={name}
      onChange={onchange}
    />
  );
};

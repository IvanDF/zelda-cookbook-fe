import React, { useState } from "react";
import { IInputElement } from "./IInputType";
import {
  BottomCorners,
  InputElement,
  InputWrapper,
  TopCorners,
} from "./InputStyles";

export const Input: React.FC<IInputElement> = ({
  name,
  type,
  onchange,
  ariaLabel,
  placeholder,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <InputWrapper>
      <TopCorners focused={focused} />
      <InputElement
        onFocus={() => setFocused(!focused)}
        onBlur={() => setFocused(!focused)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        type={type}
        name={name}
        id={name}
        onChange={onchange}
      />
      <BottomCorners focused={focused} />
    </InputWrapper>
  );
};

import React, { useEffect, useState } from "react";
import useOutsideClickRef from "../../../../hooks/useOutsideClick";
import { IInputSelect, IOptionList } from "../InputTypes";
import {
  Options,
  SelectElement,
  SelectWrapper,
  Option,
} from "./InputSelectStyles";

export const InputSelect: React.FC<IInputSelect> = ({
  name,
  ariaLabel,
  setFocus,
  optionsList,
  setHideBottom,
}) => {
  // Set dropdowns state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownRef] = useOutsideClickRef(setIsOpen);
  // Select value
  const [valueSelected, setValueSelected] = useState<{
    label: string;
    value: string;
  }>({ label: optionsList[0].label, value: optionsList[0].value });

  useEffect(
    () => setHideBottom && setHideBottom(isOpen),
    [isOpen, setHideBottom]
  );

  return (
    <SelectWrapper ref={dropdownRef}>
      <SelectElement
        paddingDirection="left"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        aria-label={ariaLabel}
        id={name}
        onClick={() => setIsOpen(!isOpen)}
      >
        {valueSelected.label}
      </SelectElement>
      <Options isOpen={isOpen}>
        {optionsList.map((option: IOptionList, i: number) => {
          return (
            <Option
              key={`${option.value}_${i}`}
              onClick={() => {
                setValueSelected({ label: option.label, value: option.value });
                setIsOpen(!isOpen);
              }}
            >
              {option.label}
            </Option>
          );
        })}
      </Options>
    </SelectWrapper>
  );
};

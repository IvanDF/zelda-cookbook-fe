import React, { useMemo, useState } from "react";
import useOutsideClickRef from "../../../hooks/useOutsideClick";
import { Icon } from "../icon/Icon";
import { IconType } from "../icon/IconType";
import {
  BottomCorners,
  IconWrapper,
  InputWrapper,
  TopCorners,
  Wrapper,
} from "./commonStyles";
import { InputSearch } from "./inputSearch/InputSearch";
import { InputSelect } from "./inputSelect/InputSelect";
import { IInputSearch, IInputSelect, IInputType } from "./InputTypes";

const Input: React.FC<{
  attributes: IInputSearch | IInputSelect;
  icon?: IconType;
  isIconRight?: boolean;
}> = ({ attributes, icon, isIconRight }) => {
  // Set state for input focus
  const [focused, setFocused] = useState<boolean>(false);
  // Show/hide input state
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  // Show/hide bottom
  const [hideBottom, setHideBottom] = useState<boolean>(false);

  const [inputRef] = useOutsideClickRef(setIsInputVisible);

  // Memo select input type
  const InputTypeHandler = useMemo(() => {
    switch (attributes.InputType) {
      case IInputType.SEARCH:
        return <InputSearch {...attributes} setFocus={setFocused} />;
      case IInputType.SELECT:
        return (
          <InputSelect
            {...attributes}
            setFocus={setFocused}
            setHideBottom={setHideBottom}
          />
        );
    }
  }, [attributes]);

  return (
    <Wrapper isIconRight={isIconRight} ref={inputRef}>
      {icon && (
        // Icon Wrapper
        <IconWrapper
          isInputVisible={isInputVisible}
          isIconRight={isIconRight}
          onClick={() => setIsInputVisible(true)}
        >
          <Icon name={icon} />
        </IconWrapper>
      )}
      <InputWrapper
        hideBottom={hideBottom}
        isVisible={!icon ? true : isInputVisible}
      >
        {/* Top corners */}
        <TopCorners focused={focused} />

        {/* Memo select input type */}
        {InputTypeHandler}

        {/* Bottom corners */}
        <BottomCorners focused={focused} />
      </InputWrapper>
    </Wrapper>
  );
};

export default Input;

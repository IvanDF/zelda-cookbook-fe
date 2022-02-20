import React, { useState } from "react";
import { Theme } from "../../costants/Theme";
import useOutsideClickRef from "../../hooks/useOutsideClick";
import { Container } from "../../styles/globalStyle/GlobalStyle";
import { IconType } from "../ui/icon/IconType";
import Input from "../ui/input/Input";
import { IInputType } from "../ui/input/InputTypes";
import { TextType } from "../ui/text/IText";
import Text from "../ui/text/Text";
import {
  Circle,
  InputSearchWrapper,
  InputSelectWrapper,
  LeftWrapper,
  MenuCirlceNav,
  MenuWrapper,
  RightWrapper,
  Wrapper,
} from "./TopBarStyles";

export const TopBar: React.FC = () => {
  // States for show/hide inputs
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [showSelect, setShowSelect] = useState(false);

  // References for show/hide inputs
  const [searchRef] = useOutsideClickRef(setShowSearchbar);
  const [selectRef] = useOutsideClickRef(setShowSelect);

  return (
    <Wrapper>
      <Container>
        {/* Left Wrapper */}
        <LeftWrapper ref={searchRef} isSearchbarActive={showSearchbar}>
          {/* Searchbar Wrapper */}
          <InputSearchWrapper showNavbar={showSearchbar}>
            <Input
              icon={IconType.SEARCH}
              isIconRight
              attributes={{
                InputType: IInputType.SEARCH,
                ariaLabel: "searchbar",
                name: "searchbar",
                placeholder: "Cerca la ricetta",
                setFocus: (e) => setShowSearchbar(e),
                onchange: (e) => console.log(e),
              }}
            />
          </InputSearchWrapper>
        </LeftWrapper>

        {/* Menu Wrapper */}
        <MenuWrapper>
          <Text
            color={Theme.color.active}
            textType={TextType.TEXT}
            fontSize={Theme.font.size.s24}
            text="Borsa"
            uppercase
          />

          {/* Menu navbar Wrapper */}
          <MenuCirlceNav>
            <Circle />
            <Circle active />
            <Circle />
          </MenuCirlceNav>
        </MenuWrapper>

        {/* Right Wrapper */}
        <RightWrapper ref={selectRef} isSelectActive={showSelect}>
          {/* Icon Wrapper */}

          <InputSelectWrapper showNavbar={showSelect}>
            <Input
              icon={IconType.FILTERS}
              attributes={{
                InputType: IInputType.SELECT,
                ariaLabel: "select",
                name: "select",
                setFocus: (e) => setShowSelect(e),
                optionsList: [
                  {
                    label: "Tutti",
                    value: "ALL",
                  },
                  {
                    label: "Alfabetico",
                    value: "az",
                  },
                  {
                    label: "Nome",
                    value: "name",
                  },
                ],
              }}
            />
          </InputSelectWrapper>
        </RightWrapper>
      </Container>
    </Wrapper>
  );
};

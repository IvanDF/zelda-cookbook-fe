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
  LeftWrapper,
  MenuCirlceNav,
  MenuWrapper,
  RightWrapper,
  Wrapper,
} from "./TopBarStyles";

const TopBar: React.FC = () => {
  // States for show/hide inputs
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [showSelect, setShowSelect] = useState(false);

  // References for show/hide inputs
  const [searchRef] = useOutsideClickRef(setShowSearchbar);
  const [selectRef] = useOutsideClickRef(setShowSelect);

  return (
    <Wrapper>
      <Container>
        {/* Searchbar Wrapper */}
        <LeftWrapper ref={searchRef} isSearchbarActive={showSearchbar}>
          <Input
            icon={IconType.SEARCH}
            isIconRight
            attributes={{
              InputType: IInputType.SEARCH,
              ariaLabel: "searchbar",
              name: "searchbar",
              placeholder: "Cerca la ricetta",
              setFocus: (e) => setShowSearchbar(e),
              onchange: (e) => console.log(e.target.value),
            }}
          />
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

        {/* Select Wrapper */}
        <RightWrapper ref={selectRef} isSelectActive={showSelect}>
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
        </RightWrapper>
      </Container>
    </Wrapper>
  );
};

export default TopBar;

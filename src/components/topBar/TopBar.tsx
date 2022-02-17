import React, { useState } from "react";
import { Theme } from "../../costants/Theme";
import useOutsideClickRef from "../../hooks/useOutsideClick";
import { Container } from "../../styles/globalStyle/GlobalStyle";
import { Icon } from "../ui/icon/Icon";
import { IconType } from "../ui/icon/IconType";
import { Input } from "../ui/input/Input";
import { TextType } from "../ui/text/IText";
import Text from "../ui/text/Text";
import {
  IconWrapper,
  InputSearchWrapper,
  LeftWrapper,
  MenuWrapper,
  RightWrapper,
  Wrapper,
} from "./TopBarStyles";

export const TopBar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { ref } = useOutsideClickRef(setShowNavbar);

  return (
    <Wrapper>
      <Container>
        {/* Left Wrapper */}
        <LeftWrapper onClick={() => console.log("")} ref={ref}>
          {/* Searchbar Wrapper */}
          <InputSearchWrapper showNavbar={showNavbar}>
            <Input
              ariaLabel="searcbar"
              name="searcbar"
              onchange={(e) => console.log(e)}
              type="searchbar"
              placeholder="Cerca"
            />
          </InputSearchWrapper>
          {/* Icon Wrapper */}
          <IconWrapper
            showNavbar={showNavbar}
            onClick={() => setShowNavbar(true)}
          >
            <Icon name={IconType.SEARCH} />
          </IconWrapper>
        </LeftWrapper>
        {/* Meny Wrapper */}
        <MenuWrapper>
          <Text
            color={Theme.color.active}
            textType={TextType.TEXT}
            fontSize={Theme.font.size.s24}
            text="Borsa"
            uppercase
          />
        </MenuWrapper>
        {/* Right Wrapper */}
        <RightWrapper onClick={() => console.log("")}>
          <Icon name={IconType.FILTERS} />
        </RightWrapper>
      </Container>
    </Wrapper>
  );
};

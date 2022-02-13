import React from "react";
import { Theme } from "../../costants/Theme";
import { Container } from "../../styles/globalStyle/GlobalStyle";
import { Icon } from "../ui/icon/Icon";
import { IconType } from "../ui/icon/IconType";
import { TextType } from "../ui/text/IText";
import Text from "../ui/text/Text";
import {
  LeftWrapper,
  MenuWrapper,
  RightWrapper,
  Wrapper,
} from "./TopBarStyles";

export const TopBar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <LeftWrapper>
          <Icon name={IconType.SEARCH} />
        </LeftWrapper>
        <MenuWrapper>
          <Text
            color={Theme.color.active}
            textType={TextType.TEXT}
            fontSize={Theme.font.size.s24}
            text="Borsa"
            uppercase
          />
        </MenuWrapper>
        <RightWrapper>
          <Icon name={IconType.FILTERS} />
        </RightWrapper>
      </Container>
    </Wrapper>
  );
};

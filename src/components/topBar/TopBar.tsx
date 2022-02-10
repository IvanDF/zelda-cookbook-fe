import React from "react";
import { Container } from "../../styles/globalStyle/GlobalStyle";
import { Icon } from "../ui/icon/Icon";
import { IconType } from "../ui/icon/IconType";
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
        <MenuWrapper>menu</MenuWrapper>
        <RightWrapper>
          <Icon name={IconType.SEARCH} />
        </RightWrapper>
      </Container>
    </Wrapper>
  );
};

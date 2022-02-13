import styled from "styled-components";
import { Theme, ThemeExtra } from "../../costants/Theme";
import { Container, Cursor, DFlex } from "../../styles/globalStyle/GlobalStyle";
import { CursorType, IDFlex } from "../../styles/globalStyle/IGlobalStyle";

export const Wrapper = styled.div`
  ${DFlex()}
  width: 100%;
  height: 80px;
  background: ${ThemeExtra.background.bgBlack02};
  backdrop-filter: ${ThemeExtra.blur.b10};
  ${Container} {
    ${DFlex(IDFlex.SB)}
    color: ${Theme.color.active};
  }
`;

export const LeftWrapper = styled.div`
  ${Cursor(CursorType.POINT)}
`;
export const MenuWrapper = styled.div`
  ${Cursor(CursorType.POINT)}
`;
export const RightWrapper = styled.div``;

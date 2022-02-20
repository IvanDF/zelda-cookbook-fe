import styled from "styled-components";
import { Theme, ThemeExtra } from "../../costants/Theme";
import { Container, DFlex } from "../../styles/globalStyle/GlobalStyle";
import { IDFlex } from "../../styles/globalStyle/IGlobalStyle";

export const Wrapper = styled.div`
  ${DFlex()}
  width: 100%;
  height: 40px;
  background: ${ThemeExtra.background.bgBlack02};
  backdrop-filter: ${ThemeExtra.blur.b10};
  ${Container} {
    ${DFlex(IDFlex.SB)}
    color: ${Theme.color.active};
  }
`;

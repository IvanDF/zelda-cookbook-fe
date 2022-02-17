import styled from "styled-components";
import { Theme, ThemeExtra } from "../../costants/Theme";
import { Container, Cursor, DFlex } from "../../styles/globalStyle/GlobalStyle";
import { CursorType, IDFlex } from "../../styles/globalStyle/IGlobalStyle";

// Main wrapper
export const Wrapper = styled.div`
  ${DFlex()}
  width: 100%;
  height: 80px;
  background: ${ThemeExtra.background.bgBlack02};
  backdrop-filter: ${ThemeExtra.blur.b10};
  ${Container} {
    overflow: hidden;
    ${DFlex(IDFlex.SB)}
    color: ${Theme.color.active};
  }
`;

// Left wrapper
export const LeftWrapper = styled.div`
  ${DFlex(IDFlex.CENTER)}
  svg {
    position: relative;
    top: 2px;
    left: -33px;
    z-index: 3;
    ${Cursor(CursorType.POINT)}
  }
`;

// Menu wrapper
export const MenuWrapper = styled.div`
  ${Cursor(CursorType.POINT)}
`;

// Right wrapper
export const RightWrapper = styled.div`
  ${DFlex(IDFlex.CENTER)}
`;

//Searchbar Wrapper
export const InputSearchWrapper = styled.div<{ showNavbar: boolean }>`
  position: relative;
  left: ${(p) => (p.showNavbar ? "0" : "-100%")};
  transition: left 200ms ease;
`;

// Icon
export const IconWrapper = styled.div<{ showNavbar: boolean }>`
  position: relative;
  left: ${(p) => (p.showNavbar ? "0" : "-80%")};
  transition: left 200ms ease;
`;

import styled from "styled-components";
import { hexToRgba, Theme, ThemeExtra } from "../../costants/Theme";
import {
  Container,
  Cursor,
  DFlex,
  Position,
} from "../../styles/globalStyle/GlobalStyle";
import {
  CursorType,
  IDFlex,
  PositionPosEnum,
  PositionTypePosEnum,
} from "../../styles/globalStyle/IGlobalStyle";

// Main wrapper
export const Wrapper = styled.div`
  position: relative;
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

// Left wrapper
export const LeftWrapper = styled.div<{ isSearchbarActive: boolean }>`
  ${DFlex(IDFlex.CENTER)}
  svg {
    position: relative;
    top: 2px;
    /* left: ${(p) => (p.isSearchbarActive ? "-33px" : "0")}; */
    z-index: 3;
    transition: all 200ms ease;
    ${Cursor(CursorType.POINT)};
  }
`;

// Menu wrapper
export const MenuWrapper = styled.div`
  ${DFlex(IDFlex.CENTER)}
  flex-direction: column;
  ${Cursor(CursorType.POINT)}
  ${Position(PositionTypePosEnum.AB, PositionPosEnum.XY)}
`;

export const MenuCirlceNav = styled.span`
  ${DFlex(IDFlex.CENTER)}
  gap: 5px;
`;

export const Circle = styled.span<{ active?: boolean }>`
  display: block;
  width: ${(p) => (p.active ? "5px" : "4px")};
  height: ${(p) => (p.active ? "5px" : "4px")};
  border-radius: 50%;
  background-color: ${(p) =>
    p.active
      ? Theme.color.active
      : hexToRgba(Theme.color.active, Theme.opacity.o6)};
`;

// Right wrapper
export const RightWrapper = styled.div<{ isSelectActive: boolean }>`
  ${DFlex(IDFlex.CENTER)}

  svg {
    position: relative;
    top: 2px;
    /* left: ${(p) => (p.isSelectActive ? "33px" : "0")}; */
    z-index: 3;
    transition: all 200ms ease;
    ${Cursor(CursorType.POINT)}
  }
`;

//Searchbar Wrapper
export const InputSearchWrapper = styled.div<{ showNavbar: boolean }>`
  position: relative;
  /* left: ${(p) => (p.showNavbar ? "0" : "-200%")}; */
  transition: left 200ms ease;
`;

//Searchbar Wrapper
export const InputSelectWrapper = styled.div<{ showNavbar: boolean }>`
  position: relative;
  /* left: ${(p) => (p.showNavbar ? "0" : "200%")}; */
  transition: left 200ms ease;
`;

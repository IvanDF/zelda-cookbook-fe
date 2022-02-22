import styled from "styled-components";
import { hexToRgba, Theme, ThemeExtra } from "../../../../costants/Theme";
import {
  Cursor,
  DFlex,
  Position,
} from "../../../../styles/globalStyle/GlobalStyle";
import {
  CursorType,
  IDFlex,
  PositionPosEnum,
  PositionTypePosEnum,
} from "../../../../styles/globalStyle/IGlobalStyle";

// Select wrapper
export const SelectWrapper = styled.span`
  ${DFlex(IDFlex.CENTER)}
  position: relative;
  flex-direction: column;
`;

// Input Elemnt
export const SelectElement = styled.div<{
  paddingDirection: "right" | "left";
}>`
  ${Position(PositionTypePosEnum.RL)}
  ${DFlex(IDFlex.CENTER)}
  width: 100%;
  color: ${Theme.color.white};
  background: ${ThemeExtra.background.bgDark06};
  backdrop-filter: ${ThemeExtra.blur.b10};
  transition: all 300ms ease;
  z-index: 2;
  padding: ${(p) =>
    p.paddingDirection === "right"
      ? "5px 5px 5px 35px"
      : p.paddingDirection === "left" && "5px 35px"};
  ${Cursor(CursorType.POINT)}
  &::placeholder {
    color: ${hexToRgba(Theme.color.active, Theme.opacity.o3)};
  }
`;

// Options
export const Options = styled.span<{ isOpen: boolean }>`
  ${Position(PositionTypePosEnum.AB, PositionPosEnum.X)}
  ${DFlex(IDFlex.CENTER)};
  flex-direction: column;
  top: 33px;
  width: 103.3%;
  border: ${(p) => (p.isOpen ? `solid ${Theme.color.dark} 3px` : "0")};
  padding: 1px;
  padding-top: 0;
  border-top: 0;
  text-align: center;
  height: ${(p) => (p.isOpen ? "105px" : "0")};
  overflow: ${(p) => (p.isOpen ? "auto" : "hidden")};
  z-index: 10;
  transition: all 300ms ease;
  & span {
    visibility: ${(p) => (p.isOpen ? "visible" : "hidden")};
    transition: all 150ms ease;
  }
`;

// Option
export const Option = styled.span`
  padding: 5px 0;
  width: 100%;
  background: ${ThemeExtra.background.bgDark06};
  transition: background 300ms ease;
  ${Cursor(CursorType.POINT)}
  &:hover {
    background: ${ThemeExtra.background.bgBlack05};
  }
`;

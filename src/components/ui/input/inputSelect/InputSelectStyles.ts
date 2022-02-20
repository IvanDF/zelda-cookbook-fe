import styled, { css } from "styled-components";
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

// Corners base styles
export const corners = (focused: boolean) => css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: ${focused ? "scale(1)" : "scale(0.8)"};
  opacity: ${focused ? 1 : 0};
  border: solid ${Theme.color.active} 2px;
  z-index: 1;
  transition: all 300ms ease;
  &::after {
    content: "";
    position: absolute;
    left: -5px;
    top: calc(100% - 13px + 5px);
  }
  &::before {
    content: "";
    position: absolute;
    left: calc(100% - 13px + 5px);
    top: calc(100% - 13px + 5px);
  }
`;

// Top corners
export const TopCorners = styled.div<{ focused: boolean }>`
  ${(p) => corners(p.focused)};
  &::after {
    top: -5px;
    border-bottom: 13px solid transparent;
    border-left: 13px solid ${Theme.color.active};
  }
  &::before {
    top: -5px;
    border-bottom: 13px solid transparent;
    border-right: 13px solid ${Theme.color.active};
  }
`;

// Bottom corners
export const BottomCorners = styled.div<{ focused: boolean }>`
  ${(p) => corners(p.focused)};
  &::after {
    top: calc(100% - 13px + 5px);
    border-top: 13px solid transparent;
    border-left: 13px solid ${Theme.color.active};
  }
  &::before {
    top: calc(100% - 13px + 5px);
    border-top: 13px solid transparent;
    border-right: 13px solid ${Theme.color.active};
  }
`;

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
  height: ${(p) => (p.isOpen ? "103px" : "0")};
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

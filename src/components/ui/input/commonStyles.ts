import styled, { css } from "styled-components";
import { hexToRgba, Theme, ThemeExtra } from "../../../costants/Theme";
import {
  DFlex,
  Position,
  ResetInput,
} from "../../../styles/globalStyle/GlobalStyle";
import {
  IDFlex,
  PositionTypePosEnum,
} from "../../../styles/globalStyle/IGlobalStyle";

// Input Wrapper
export const Wrapper = styled.div<{ isIconRight?: boolean }>`
  ${DFlex(IDFlex.CENTER)}
  flex-direction: ${(p) => p.isIconRight && "row-reverse"};
`;

// Corners base styles
export const corners = (focused: boolean) => css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: ${focused ? "scale(1)" : "scale(0.8)"};
  opacity: ${focused ? 1 : 0};
  border: solid ${Theme.color.active} 1px;
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

// Input Wrapper
export const InputWrapper = styled.div<{
  hideBottom: boolean;
  isVisible: boolean;
}>`
  ${Position(PositionTypePosEnum.RL)}
  width: ${(p) => (p.isVisible ? "250px" : "0px")};
  overflow: ${(p) => (p.isVisible ? "visible" : "hidden")};
  padding: ${(p) => (p.isVisible ? "1px" : "none")};
  border: ${(p) => (p.isVisible ? `solid ${Theme.color.dark} 3px` : "none")};
  transition: all 300ms ease-out;
  ${(p) =>
    p.hideBottom &&
    `
  border-bottom: 0;
  padding-bottom: 0;
  top: -2px;
  `}
`;

// Input Wrapper
export const IconWrapper = styled.div<{
  isInputVisible: boolean;
  isIconRight?: boolean;
}>`
  ${Position(PositionTypePosEnum.RL)}
  left: ${(p) => (p.isInputVisible ? (p.isIconRight ? "-34px" : "34px") : "0")};
  transition: left 300ms ease-in-out;
`;

// Input Elemnt
export const InputElement = styled.input<{
  paddingDirection: "right" | "left";
}>`
  ${ResetInput}
  width: 100%;
  position: relative;
  color: ${Theme.color.white};
  background: ${ThemeExtra.background.bgDark06};
  backdrop-filter: ${ThemeExtra.blur.b10};
  padding: 5px;
  transition: all 300ms ease;
  z-index: 2;
  ${(p) => `padding-${p.paddingDirection}: 35px`};
  &::placeholder {
    color: ${hexToRgba(Theme.color.active, Theme.opacity.o3)};
  }
`;

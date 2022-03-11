import styled, { createGlobalStyle, css } from "styled-components";
import { Theme, ThemeExtra } from "../../costants/Theme";
import {
  CursorType,
  IDFlex,
  PositionPosEnum,
  PositionTypePosEnum,
} from "./IGlobalStyle";

// Fill
export const Fill = () => css`
  width: 100%;
  height: 100%;
`;

// Base style
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    // RESET STYLES
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // SETTING GLOBAL FONT
    font-family: 'Kodchasan', sans-serif;
    font-size: ${Theme.font.size.s18};
    font-weight: ${Theme.font.weight.regular};
  }

  body {
    width: 100vw;
    height: 100vh;
    background: url("https://nintendon.it/wp-content/uploads/2020/05/Zelda-wallpaper-nintendon.jpg");
    backdrop-filter: ${ThemeExtra.blur.b15};
    background-size: cover;
    background-repeat: no-repeat;
    #root {
      height: 100%;
    }
  }`;

// Display flex handler
export const DFlex = (type?: IDFlex) => css`
  display: flex;
  ${type === IDFlex.CENTER
    ? `
    justify-content: center;
    align-items: center;`
    : type === IDFlex.LEFT
    ? `
    justify-content: center;
    align-items: center;`
    : type === IDFlex.RIGHT
    ? `
    justify-content: flex-end;
    align-items: center;`
    : type === IDFlex.SB &&
      `
    justify-content: space-between;
    align-items: center;`}
`;

// Position handler
export const Position = (
  type: PositionTypePosEnum,
  pos?: PositionPosEnum
) => css`
  position: ${type === PositionTypePosEnum.AB
    ? "absolute"
    : type === PositionTypePosEnum.RL
    ? "relative"
    : type === PositionTypePosEnum.FX && "fixed"};
  ${pos === PositionPosEnum.XY
    ? `
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      `
    : pos === PositionPosEnum.X
    ? `
      left: 50%;
      transform: translateX(-50%);
      `
    : pos === PositionPosEnum.Y &&
      `
      top: 50%;
      transform: translateY(-50%);
      `}
`;

// Reset default input styles
export const ResetInput = () => css`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
`;

// Cursor handler
export const Cursor = (type: CursorType) => css`
  cursor: ${type === CursorType.POINT
    ? "pointer"
    : type === CursorType.NOT_ALWD && "not-allowed"};
`;

// Container
export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

// Corners base styles
export const corners = (focused: boolean, borderWidth: number) => css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: ${focused ? "scale(1)" : "scale(0.8)"};
  opacity: ${focused ? 1 : 0};
  border: ${`solid ${Theme.color.active} ${borderWidth}px`};
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
export const TopCorners = styled.div<{ focused: boolean; borderWidth: number }>`
  ${(p) => corners(p.focused, p.borderWidth)};
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
export const BottomCorners = styled.div<{
  focused: boolean;
  borderWidth: number;
}>`
  ${(p) => corners(p.focused, p.borderWidth)};
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

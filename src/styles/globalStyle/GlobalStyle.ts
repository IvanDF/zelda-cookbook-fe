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
    background: url("https://wallpaperaccess.com/full/1193446.jpg");
    backdrop-filter: ${ThemeExtra.blur.b10};
    background-size: cover;
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
    ? "position: relative"
    : type === PositionTypePosEnum.FX && "position: fixed"};
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

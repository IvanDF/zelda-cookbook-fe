import { createGlobalStyle, css } from "styled-components";
import { Theme } from "../../costants/Theme";

export const Fill = () => css`
  width: 100%;
  height: 100%;
`;

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
    font-size: ${Theme.font.size.s18} + "px";
    font-weight: ${Theme.font.weight.regular};
  }
  
  body {
    ${Fill}
    background: ${Theme.color.dark};
  }`;

enum DFlexEnum {
  CENTER = "CENTER",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  SB = "SB",
}

export const DFlex = (type?: DFlexEnum) => css`
  display: flex;
  ${type === DFlexEnum.CENTER
    ? `
    justify-content: center;
    align-items: center;`
    : type === DFlexEnum.LEFT
    ? `
    justify-content: center;
    align-items: center;`
    : type === DFlexEnum.RIGHT
    ? `
    justify-content: flex-end;
    align-items: center;`
    : type === DFlexEnum.SB &&
      `
    justify-content: space-between;
    align-items: center;`}
`;

enum PositionPosEnum {
  XY = "XY",
  X = "X",
  Y = "Y",
}

enum PositionTypePosEnum {
  AB = "AB",
  RL = "RL",
  FX = "FX",
}

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

export const ResetInput = () => css`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
`;

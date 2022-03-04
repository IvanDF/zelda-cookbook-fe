import styled from "styled-components";
import { Theme, ThemeExtra } from "../../costants/Theme";
import { Cursor, DFlex, Position } from "../../styles/globalStyle/GlobalStyle";
import {
  CursorType,
  IDFlex,
  PositionTypePosEnum,
} from "../../styles/globalStyle/IGlobalStyle";

export const BorderWrapper = styled.div<{ isActive: boolean; device: string }>`
  ${Position(PositionTypePosEnum.RL)}
  ${DFlex(IDFlex.CENTER)}
  width: ${(p) => (p.device === "DESKTOP" ? "140px" : "80px")};
  height: ${(p) => (p.device === "DESKTOP" ? "140px" : "80px")};
  padding: 2px;
  border-radius: 7px;
  border: solid ${Theme.color.dark} 3px;
  transition: padding 200ms ease;
  ${Cursor(CursorType.POINT)}
  ${(p) =>
    !p.isActive &&
    `
  &:hover {
    padding: 4px;
  }
  `}
`;

export const BoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${ThemeExtra.background.bgDark06};
  border-radius: 4px;
  box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 0.4);
`;

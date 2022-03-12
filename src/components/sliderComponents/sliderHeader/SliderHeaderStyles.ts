import styled from "styled-components";
import { Theme } from "../../../costants/Theme";
import { DFlex, Cursor } from "../../../styles/globalStyle/GlobalStyle";
import { IDFlex, CursorType } from "../../../styles/globalStyle/IGlobalStyle";

export const SubMenu = styled.div`
  display: flex;
  gap: 20px;
`;

export const BagMenu = styled.div<{ isActive?: boolean }>`
  ${DFlex(IDFlex.CENTER)}
  flex-direction: column;
  gap: 10px;
  padding: 0 15px;
  width: 100%;
  ${Cursor(CursorType.POINT)}
  svg {
    opacity: 0.7;
    transition: all 340ms ease;
  }
  p {
    opacity: 0.7;
    transition: all 340ms ease;
  }
  ${({ isActive }) =>
    isActive &&
    `
  svg {
    opacity: 1;
    transform: scale(1.15);
    transition: all 340ms ease;
    path {
      fill:  ${Theme.color.active};
    }
  }
  p {
    opacity: 1;
    transform: scale(1.15);
    color: ${Theme.color.active};
    transition: all 340ms ease;
  }
`}
`;

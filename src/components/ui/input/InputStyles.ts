import styled, { css } from "styled-components";
import { hexToRgba, Theme, ThemeExtra } from "../../../costants/Theme";
import { ResetInput } from "../../../styles/globalStyle/GlobalStyle";

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

// Input Wrapper
export const InputWrapper = styled.div`
  position: relative;
  padding: 2px;
  border: solid ${Theme.color.dark} 2px;
`;

// Input Elemnt
export const InputElement = styled.input`
  ${ResetInput}
  position: relative;
  color: ${Theme.color.white};
  background: ${ThemeExtra.background.bgDark06};
  backdrop-filter: ${ThemeExtra.blur.b10};
  padding: 5px;
  transition: all 300ms ease;
  z-index: 2;
  padding-right: 35px;
  &::placeholder {
    color: ${hexToRgba(Theme.color.active, Theme.opacity.o3)};
  }
`;

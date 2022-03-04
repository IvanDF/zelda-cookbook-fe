import styled from "styled-components";
import { Theme, ThemeExtra } from "../../../costants/Theme";
import { IBreakpoint } from "../../../hooks/useWindowSize";
import {
  Cursor,
  DFlex,
  Fill,
  Position,
} from "../../../styles/globalStyle/GlobalStyle";
import {
  CursorType,
  IDFlex,
  PositionPosEnum,
  PositionTypePosEnum,
} from "../../../styles/globalStyle/IGlobalStyle";

export const Wrapper = styled.div`
  ${DFlex(IDFlex.CENTER)}
  ${Fill}
  width: 1600px;
  max-width: 100%;
`;

export const BagWrapper = styled.div<{ device: IBreakpoint }>`
  ${DFlex(IDFlex.CENTER)}
  height: 100%;
  width: ${(p) => (p.device === "DESKTOP" ? "70%" : "100%")};
  flex-direction: column;
`;

export const DetailWrapperDesktop = styled.div`
  ${DFlex(IDFlex.RIGHT)}
  height: 100%;
  width: 30%;
  flex-direction: column;
`;

export const BoxWrapperBorder = styled.div`
  align-self: flex-end;
  padding: 2px;
  margin-bottom: 100px;
  border-width: 2px;
  border-style: solid;
  border-image-source: ${ThemeExtra.background.gradient.darkToNone};
  border-image-slice: 1;
`;

export const BoxWrapper = styled.div`
  ${Position(PositionTypePosEnum.RL)}
  ${DFlex(IDFlex.RIGHT)}
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background: ${ThemeExtra.background.gradient.darkToNone};
  backdrop-filter: ${ThemeExtra.blur.b10};
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 350px;
`;

export const Img = styled.img`
  display: block;
  height: auto;
  width: 100%;
`;

export const Heart = styled.span`
  ${Position(PositionTypePosEnum.RL)}
  display: inline-block;
  margin: 20px 10px 10px 7px;
  height: 15px;
  width: 15px;
  background: ${Theme.color.red};
  transform: rotate(45deg);
  &::after {
    content: "";
    ${Position(PositionTypePosEnum.AB)}
    left: -10px;
    top: 0px;
    width: 20px;
    height: 15px;
    background: ${Theme.color.red};
    border-radius: 50%;
  }
  &::before {
    content: "";
    ${Position(PositionTypePosEnum.AB)}
    left: 0px;
    bottom: 5px;
    width: 15px;
    height: 20px;
    background: ${Theme.color.red};
    border-radius: 50%;
  }
`;

export const DescriptionWrapper = styled.div``;

export const DetailModal = styled.div<{ device: string; isOpen: boolean }>`
  ${Position(PositionTypePosEnum.AB, PositionPosEnum.XY)}
  ${DFlex(IDFlex.CENTER)}
  flex-direction: column;
  width: ${(p) => (p.isOpen ? "100%" : "0")};
  height: ${(p) => (p.isOpen ? "100%" : "0")};
  overflow: ${(p) => (p.isOpen ? "visible" : "hidden")};
  background: ${ThemeExtra.background.bgDark06};
  backdrop-filter: ${ThemeExtra.blur.b10};
  transition: all 250ms ease;
  z-index: 2;
  & > svg:first-child {
    ${Position(PositionTypePosEnum.AB)}
    right: 20px;
    top: 20px;
    ${Cursor(CursorType.POINT)}
  }
  ${BoxWrapperBorder} {
    opacity: ${(p) => (p.isOpen ? 1 : 0)};
    margin-bottom: 0;
    align-self: auto;
    width: ${(p) => (p.device === "MOBILE" ? "95%" : "60%")};
    text-align: center;
    backdrop-filter: 0;
    transition: opacity 200ms 150ms ease;
    ${DescriptionWrapper} {
      & > * {
        margin: 15px 10px;
      }
    }
  }
`;

export const BagMenu = styled.div`
  ${DFlex(IDFlex.CENTER)}
  height: 60px;
  width: 100%;
`;

export const BagSlider = styled.div`
  ${DFlex(IDFlex.CENTER)}
  width: 100%;
  padding: 10px;
`;

export const Slider = styled.div<{ device: IBreakpoint }>`
  display: grid;
  grid-template-columns: ${(p) =>
    p.device === "DESKTOP" ? "repeat(5, 1fr)" : "repeat(3, 1fr)"};
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 15px;
  margin: 0 10px;
`;

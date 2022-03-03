import styled from "styled-components";
import { Theme, ThemeExtra } from "../../../costants/Theme";
import { IBreakpoint } from "../../../hooks/useWindowSize";
import { DFlex, Fill, Position } from "../../../styles/globalStyle/GlobalStyle";
import {
  IDFlex,
  PositionTypePosEnum,
} from "../../../styles/globalStyle/IGlobalStyle";

export const Wrapper = styled.div`
  ${DFlex(IDFlex.CENTER)}
  ${Fill}
`;

export const BagWrapper = styled.div<{ device: IBreakpoint }>`
  ${DFlex(IDFlex.CENTER)}
  height: 100%;
  width: ${(p) => (p.device === "DESKTOP" ? "70%" : "100%")};
  flex-direction: column;
`;

export const DetailWrapperDesktop = styled.div`
  ${DFlex(IDFlex.RIGHT)}
  flex-direction: column;
  width: 30%;
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
  height: 600px;
  background: #000;
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

export const DetailWrapperMobile = styled.div`
  position: absolute;
  display: none;
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

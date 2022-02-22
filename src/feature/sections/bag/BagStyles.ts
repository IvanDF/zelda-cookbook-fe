import styled from "styled-components";
import { IBreakpoint } from "../../../hooks/useWindowSize";
import { DFlex, Fill } from "../../../styles/globalStyle/GlobalStyle";
import { IDFlex } from "../../../styles/globalStyle/IGlobalStyle";

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
  height: 100%;
  width: 30%;
  padding: 20px;
`;

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

export const Slider = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 15px;
  margin: 0 10px;
`;

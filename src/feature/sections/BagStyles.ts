import styled from "styled-components";
import { DFlex, Fill } from "../../styles/globalStyle/GlobalStyle";
import { IDFlex } from "../../styles/globalStyle/IGlobalStyle";

export const Wrapper = styled.div`
  ${DFlex(IDFlex.CENTER)}
  ${Fill}
`;

export const BagWrapper = styled.div`
  ${DFlex(IDFlex.CENTER)}
  height: 100%;
  width: 70%;
  flex-direction: column;
  border: solid red 1px;
`;

export const DetailWrapper = styled.div`
  ${DFlex(IDFlex.RIGHT)}
  flex-direction: column;
  height: 100%;
  width: 30%;
  padding: 20px;
  border: solid red 1px;
`;

export const BagMenu = styled.div`
  ${DFlex(IDFlex.CENTER)}
  height: 60px;
  width: 100%;
  border: solid black 1px;
`;

export const BagSlider = styled.div`
  ${DFlex(IDFlex.CENTER)}
  width: 100%;
  border: solid black 1px;
  padding: 10px;
`;

export const Slider = styled.div`
  ${DFlex(IDFlex.CENTER)}
  width: 100%;
  height: 500px; // DEBUG
  padding: 20px;
  border: solid blanchedalmond 1px;
  margin: 0 10px;
`;

import React from "react";
import {
  BottomCorners,
  TopCorners,
} from "../../styles/globalStyle/GlobalStyle";
import { BorderWrapper, BoxWrapper } from "./SliderBoxStyles";

const SliderBox: React.FC<{
  onClick: () => void;
  isActive: boolean;
}> = ({ onClick, isActive }) => {
  return (
    <BorderWrapper isActive={isActive} onClick={onClick}>
      <TopCorners focused={isActive} borderWidth={2} />
      <BoxWrapper></BoxWrapper>
      <BottomCorners focused={isActive} borderWidth={2} />
    </BorderWrapper>
  );
};

export default SliderBox;

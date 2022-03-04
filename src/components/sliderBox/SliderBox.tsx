import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
  BottomCorners,
  TopCorners,
} from "../../styles/globalStyle/GlobalStyle";
import { BorderWrapper, BoxWrapper } from "./SliderBoxStyles";

const SliderBox: React.FC<{
  onClick: () => void;
  isActive: boolean;
}> = ({ onClick, isActive }) => {
  const { breakpoint } = useWindowSize();
  return (
    <BorderWrapper device={breakpoint} isActive={isActive} onClick={onClick}>
      <TopCorners focused={isActive} borderWidth={2} />
      <BoxWrapper></BoxWrapper>
      <BottomCorners focused={isActive} borderWidth={2} />
    </BorderWrapper>
  );
};

export default SliderBox;

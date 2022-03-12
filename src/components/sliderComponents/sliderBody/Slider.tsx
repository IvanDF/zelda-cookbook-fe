import React from "react";
import { IBreakpoint } from "../../../hooks/useWindowSize";
import SliderBox from "./sliderBox/SliderBox";
import { SliderWrapper } from "./SliderStyles";

export const Slider: React.FC<{
  breakpoint: IBreakpoint;
  list: any[];
  sliderIndex: number;
  setIndex: (arg: number) => void;
  setIsModalOpen: (arg: boolean) => void;
  isModalOpen: boolean;
  setItemActive: (arg: string) => void;
  itemActive: string;
}> = ({
  breakpoint,
  list,
  sliderIndex,
  setIndex,
  setIsModalOpen,
  isModalOpen,
  setItemActive,
  itemActive,
}) => {
  return (
    <SliderWrapper device={breakpoint}>
      {list[sliderIndex].map((el: any, i: number) => {
        return (
          <SliderBox
            onClick={() => {
              setIndex(i);
              setIsModalOpen(!isModalOpen);
              // TO SET TO ID WITH API
              setItemActive(el.name);
            }}
            isActive={itemActive === el.name}
            key={i}
          >
            <img src={el.img} alt="" />
            {el.name}
          </SliderBox>
        );
      })}
    </SliderWrapper>
  );
};

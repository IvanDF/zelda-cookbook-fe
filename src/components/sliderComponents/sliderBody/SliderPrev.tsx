import React from "react";
import SliderBox from "./sliderBox/SliderBox";
import { TextType } from "../../ui/text/IText";
import Text from "../../ui/text/Text";
import { Theme } from "../../../costants/Theme";
import { IBreakpoint } from "../../../hooks/useWindowSize";
import { SliderWrapper } from "./SliderStyles";

export const SliderPrev: React.FC<{
  breakpoint: IBreakpoint;
  actveElement: "INGREDIENTS" | "RECIPES";
  sliderIndex: number;
  list: any[];
  setIndex: (arg: number) => void;
  setIsModalOpen: (arg: boolean) => void;
  isModalOpen: boolean;
  index: number | null;
}> = ({
  breakpoint,
  actveElement,
  sliderIndex,
  list,
  setIndex,
  setIsModalOpen,
  isModalOpen,
  index,
}) => {
  return (
    <SliderWrapper
      device={breakpoint}
      hide={actveElement === "INGREDIENTS" && sliderIndex === 0}
    >
      {list[sliderIndex === 0 ? list.length - 1 : sliderIndex - 1].map(
        (el: any, i: number) => {
          return (
            <SliderBox
              onClick={() => {
                setIndex(i);
                setIsModalOpen(!isModalOpen);
              }}
              isActive={index === i}
              key={i}
            >
              <img src={el.img} alt="" />
              <Text
                fontSize={Theme.font.size.s14}
                text={el.name}
                textType={TextType.TEXT}
              />
            </SliderBox>
          );
        }
      )}
    </SliderWrapper>
  );
};

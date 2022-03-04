import React from "react";
import SliderBox from "../../../../components/sliderBox/SliderBox";
import { Icon } from "../../../../components/ui/icon/Icon";
import { IconType } from "../../../../components/ui/icon/IconType";
import { IBreakpoint } from "../../../../hooks/useWindowSize";
import { BagMenu, BagSlider, BagWrapper, Slider } from "../BagStyles";

export const BagItems: React.FC<{
  list: any[];
  index: number | null;
  setIndex: any;
  isModalOpen: boolean;
  setIsModalOpen: any;
  breakpoint: IBreakpoint;
}> = ({ list, index, setIndex, setIsModalOpen, isModalOpen, breakpoint }) => {
  return (
    <BagWrapper device={breakpoint}>
      <BagMenu>Menu</BagMenu>
      <BagSlider>
        <Icon name={IconType.PREV_ICON} width={64} height={64} />
        <Slider device={breakpoint}>
          {list.map((el: number, i: number) => {
            return (
              <SliderBox
                onClick={() => {
                  setIndex(i);
                  setIsModalOpen(!isModalOpen);
                }}
                isActive={index === i}
                key={i}
              >
                {el}
              </SliderBox>
            );
          })}
        </Slider>
        <Icon name={IconType.NEXT_ICON} width={64} height={64} />
      </BagSlider>
    </BagWrapper>
  );
};

import React, { useState } from "react";
import SliderBox from "../../../../components/sliderBox/SliderBox";
import { Icon } from "../../../../components/ui/icon/Icon";
import { IconType } from "../../../../components/ui/icon/IconType";
import { TextType } from "../../../../components/ui/text/IText";
import Text from "../../../../components/ui/text/Text";
import { Theme } from "../../../../costants/Theme";
import { IBreakpoint } from "../../../../hooks/useWindowSize";
import {
  BagMenu,
  BagSlider,
  BagWrapper,
  Slider,
  SliderGroup,
  SubMenu,
} from "../BagStyles";

export const BagItems: React.FC<{
  list: any;
  index: number | null;
  setIndex: any;
  isModalOpen: boolean;
  setIsModalOpen: any;
  breakpoint: IBreakpoint;
}> = ({ list, index, setIndex, setIsModalOpen, isModalOpen, breakpoint }) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <BagWrapper device={breakpoint}>
      <SubMenu>
        <BagMenu>Ingredienti</BagMenu>
        <BagMenu>Ricette</BagMenu>
        <BagMenu>Preferiti</BagMenu>
      </SubMenu>
      <BagSlider>
        <Icon
          name={IconType.PREV_ICON}
          width={64}
          height={64}
          onClick={() =>
            setSliderIndex(
              sliderIndex === 0 ? list.length - 1 : sliderIndex - 1
            )
          }
        />
        <SliderGroup>
          <Slider device={breakpoint}>
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
          </Slider>
          <Slider device={breakpoint}>
            {list[sliderIndex].map((el: any, i: number) => {
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
                  {el.name}
                </SliderBox>
              );
            })}
          </Slider>
          <Slider device={breakpoint}>
            {list[sliderIndex === list.length - 1 ? 0 : sliderIndex + 1].map(
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
                    {el.name}
                  </SliderBox>
                );
              }
            )}
          </Slider>
        </SliderGroup>
        <Icon
          name={IconType.NEXT_ICON}
          width={64}
          height={64}
          onClick={() => {
            setSliderIndex(
              sliderIndex === list.length - 1 ? 0 : sliderIndex + 1
            );
          }}
        />
      </BagSlider>
    </BagWrapper>
  );
};

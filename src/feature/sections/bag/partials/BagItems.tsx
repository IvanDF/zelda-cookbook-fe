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
  ingredients: any;
  recipes: any;
  index: number | null;
  setIndex: any;
  isModalOpen: boolean;
  setIsModalOpen: any;
  breakpoint: IBreakpoint;
}> = ({
  ingredients,
  recipes,
  index,
  setIndex,
  setIsModalOpen,
  isModalOpen,
  breakpoint,
}) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [list, setList] = useState<any[]>(ingredients);
  const [actveElement, setActiveElement] = useState("INGREDIENTS");

  return (
    <BagWrapper device={breakpoint}>
      <SubMenu>
        <BagMenu
          isActive={actveElement === "INGREDIENTS"}
          onClick={() => {
            if (actveElement !== "INGREDIENTS") {
              setList(ingredients);
              setSliderIndex(0);
              setActiveElement("INGREDIENTS");
            }
          }}
        >
          Ingredienti
        </BagMenu>
        <BagMenu
          isActive={actveElement === "RECIPES"}
          onClick={() => {
            if (actveElement !== "RECIPES") {
              setList(recipes);
              setSliderIndex(0);
              setActiveElement("RECIPES");
            }
          }}
        >
          Ricette
        </BagMenu>
      </SubMenu>
      <BagSlider>
        <Icon
          name={IconType.PREV_ICON}
          width={64}
          height={64}
          onClick={() => {
            if (sliderIndex === 0) {
              list[sliderIndex].map((el: any) => {
                if (el.name.includes("Ricetta")) {
                  setSliderIndex(list.length - 1);
                  setList(ingredients);
                  setActiveElement("INGREDIENTS");
                } else {
                  console.log("FINE");
                }
              });
            } else {
              setSliderIndex(sliderIndex - 1);
            }
          }}
        />
        <SliderGroup>
          <Slider
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
          <Slider
            device={breakpoint}
            hide={actveElement === "RECIPES" && sliderIndex === list.length - 1}
          >
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
            if (sliderIndex === list.length - 1) {
              list[sliderIndex].map((el: any) => {
                if (!el.name.includes("Ricetta")) {
                  setSliderIndex(0);
                  setList(recipes);
                  setActiveElement("RECIPES");
                } else {
                  console.log("FINE");
                }
              });
            } else {
              setSliderIndex(sliderIndex + 1);
            }
          }}
        />
      </BagSlider>
    </BagWrapper>
  );
};

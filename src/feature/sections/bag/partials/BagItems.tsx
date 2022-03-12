import React, { useEffect, useState } from "react";
import { Slider } from "../../../../components/sliderComponents/sliderBody/Slider";
import { SliderNext } from "../../../../components/sliderComponents/sliderBody/SliderNext";
import { SliderPrev } from "../../../../components/sliderComponents/sliderBody/SliderPrev";
import { SliderHeader } from "../../../../components/sliderComponents/sliderHeader/SliderHeader";
import { Icon } from "../../../../components/ui/icon/Icon";
import { IconType } from "../../../../components/ui/icon/IconType";
import { IBreakpoint } from "../../../../hooks/useWindowSize";
import { BagSlider, BagWrapper, SliderGroup } from "../BagStyles";

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
  const [isIconHide, setIsIconHide] = useState<"" | "NEXT" | "PREV">("");
  const [itemActive, setItemActive] = useState<string>("");
  const [actveElement, setActiveElement] = useState<"INGREDIENTS" | "RECIPES">(
    "INGREDIENTS"
  );

  useEffect(() => {
    if (actveElement === "INGREDIENTS" && sliderIndex === 0) {
      setIsIconHide("PREV");
    } else if (actveElement === "RECIPES" && sliderIndex === list.length - 1) {
      setIsIconHide("NEXT");
    } else {
      setIsIconHide("");
    }
  }, [actveElement, list.length, sliderIndex]);

  return (
    <BagWrapper device={breakpoint}>
      {/* Slider header*/}
      <SliderHeader
        actveElement={actveElement}
        setList={setList}
        setSliderIndex={setSliderIndex}
        setActiveElement={setActiveElement}
        ingredients={ingredients}
        recipes={recipes}
      />
      <BagSlider isIconHide={isIconHide} device={breakpoint}>
        {/* Nav prev Icon */}
        {breakpoint === "DESKTOP" && (
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
                  }
                });
              } else {
                setSliderIndex(sliderIndex - 1);
              }
            }}
          />
        )}
        <SliderGroup device={breakpoint}>
          {/* Slider prev preview */}
          {breakpoint === "DESKTOP" && (
            <SliderPrev
              breakpoint={breakpoint}
              actveElement={actveElement}
              sliderIndex={sliderIndex}
              list={list}
              setIndex={setIndex}
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
              index={index}
            />
          )}

          {/* Slider */}
          <Slider
            breakpoint={breakpoint}
            list={list}
            sliderIndex={sliderIndex}
            setIndex={setIndex}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            setItemActive={setItemActive}
            itemActive={itemActive}
          />

          {/* Slider next preview */}
          {breakpoint === "DESKTOP" && (
            <SliderNext
              breakpoint={breakpoint}
              actveElement={actveElement}
              sliderIndex={sliderIndex}
              list={list}
              setIndex={setIndex}
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
              index={index}
            />
          )}
        </SliderGroup>
        {/* Nav next Icon */}
        {breakpoint === "DESKTOP" && (
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
                    setIsIconHide("NEXT");
                  }
                });
              } else {
                setSliderIndex(sliderIndex + 1);
              }
            }}
          />
        )}
      </BagSlider>
    </BagWrapper>
  );
};

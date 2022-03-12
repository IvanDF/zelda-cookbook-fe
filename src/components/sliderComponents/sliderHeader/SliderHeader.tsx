import React from "react";
import { Icon } from "../../ui/icon/Icon";
import { IconType } from "../../ui/icon/IconType";
import { TextType } from "../../ui/text/IText";
import Text from "../../ui/text/Text";
import { SubMenu, BagMenu } from "./SliderHeaderStyles";

export const SliderHeader: React.FC<{
  actveElement: "INGREDIENTS" | "RECIPES";
  setList: (arg: any[]) => void;
  setSliderIndex: (arg: number) => void;
  setActiveElement: (arg: "INGREDIENTS" | "RECIPES") => void;
  ingredients: any[];
  recipes: any[];
}> = ({
  actveElement,
  setList,
  setSliderIndex,
  setActiveElement,
  ingredients,
  recipes,
}) => {
  return (
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
        <Icon name={IconType.INGREDIENTS} height={50} width={50} />
        <Text text="Ingredienti" textType={TextType.TEXT} />
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
        <Icon name={IconType.RECEPES} height={50} width={50} />
        <Text text="Ricette" textType={TextType.TEXT} />
      </BagMenu>
    </SubMenu>
  );
};

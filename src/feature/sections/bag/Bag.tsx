import { useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
// MOCK
import Ingredients from "../../../mocks/ingredients.json";
import Recipes from "../../../mocks/recipes.json";
import { Wrapper } from "./BagStyles";
import { BagItemDetail } from "./partials/BagItemDetail";
import { BagItems } from "./partials/BagItems";

const Bag: React.FC = () => {
  const { breakpoint } = useWindowSize();

  // Mobile modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [index, setIndex] = useState<number | null>(null);

  const sliderArrayHandler = (arr: any[], size: number) => {
    let from = 0;
    let to = size;
    const result = [];
    for (let i = 0; i < Math.round(arr.length / size); i++) {
      const arrSection = arr.slice(from, to);
      result.push(arrSection);
      from += size;
      to += size;
    }
    return result;
  };

  const ingredients = sliderArrayHandler(
    Ingredients,
    breakpoint === "MOBILE" ? Ingredients.length : 15
  );
  const recipes = sliderArrayHandler(
    Recipes,
    breakpoint === "MOBILE" ? Recipes.length : 15
  );

  console.log(ingredients);

  return (
    <Wrapper>
      <BagItems
        breakpoint={breakpoint}
        ingredients={ingredients}
        recipes={recipes}
        index={index}
        setIndex={setIndex}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <BagItemDetail
        breakpoint={breakpoint}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Wrapper>
  );
};

export default Bag;

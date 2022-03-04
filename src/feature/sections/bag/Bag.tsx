import { useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import { Wrapper } from "./BagStyles";
import { BagItemDetail } from "./partials/BagItemDetail";
import { BagItems } from "./partials/BagItems";

const Bag: React.FC = () => {
  const { breakpoint } = useWindowSize();

  // Mobile modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [index, setIndex] = useState<number | null>(null);

  const list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <Wrapper>
      <BagItems
        breakpoint={breakpoint}
        list={list}
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

import { useEffect, useState } from "react";
import SliderBox from "../../../components/sliderBox/SliderBox";
import { Icon } from "../../../components/ui/icon/Icon";
import { IconType } from "../../../components/ui/icon/IconType";
import useOutsideClickRef from "../../../hooks/useOutsideClick";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  BagMenu,
  BagSlider,
  BagWrapper,
  DetailWrapperDesktop,
  DetailWrapperMobile,
  Slider,
  Wrapper,
} from "./BagStyles";

const Bag: React.FC = () => {
  const { breakpoint } = useWindowSize();

  const [index, setIndex] = useState<number | null>(null);

  const list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <Wrapper>
      <BagWrapper device={breakpoint}>
        <BagMenu>Menu</BagMenu>
        <BagSlider>
          <Icon name={IconType.PREV_ICON} width={64} height={64} />
          <Slider>
            {list.map((el: number, i: number) => {
              return (
                <SliderBox
                  onClick={() => setIndex(i)}
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
      {breakpoint === "DESKTOP" ? (
        <DetailWrapperDesktop>Detail</DetailWrapperDesktop>
      ) : (
        <DetailWrapperMobile>Detail</DetailWrapperMobile>
      )}
    </Wrapper>
  );
};

export default Bag;

import { useState } from "react";
import SliderBox from "../../../components/sliderBox/SliderBox";
import { Icon } from "../../../components/ui/icon/Icon";
import { IconType } from "../../../components/ui/icon/IconType";
import { TextType } from "../../../components/ui/text/IText";
import Text from "../../../components/ui/text/Text";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  BagMenu,
  BagSlider,
  BagWrapper,
  BoxWrapper,
  BoxWrapperBorder,
  DescriptionWrapper,
  DetailModal,
  DetailWrapperDesktop,
  Heart,
  Img,
  ImgWrapper,
  Slider,
  Wrapper,
} from "./BagStyles";

const Bag: React.FC = () => {
  const { breakpoint } = useWindowSize();

  // Mobile modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [index, setIndex] = useState<number | null>(null);

  const list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <Wrapper>
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
      {breakpoint === "DESKTOP" ? (
        <DetailWrapperDesktop>
          <ImgWrapper>
            <Img />
          </ImgWrapper>
          <BoxWrapperBorder>
            <BoxWrapper>
              <DescriptionWrapper>
                <Text textType={TextType.HEADING} text="Mela" />
                <Heart />
                <Heart />
                <Heart />
                <Heart />
                <Heart />
                <Text
                  textType={TextType.TEXT}
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam minus porro magni debitis nam, perferendis, voluptatibus in optio odio ab tempora. Porro iste labore placeat in quaerat, reiciendis incidunt? Perferendis?"
                />
              </DescriptionWrapper>
            </BoxWrapper>
          </BoxWrapperBorder>
        </DetailWrapperDesktop>
      ) : (
        <DetailModal device={breakpoint} isOpen={isModalOpen}>
          <Icon
            name={IconType.CLOSE}
            height={32}
            width={32}
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
          <ImgWrapper>
            <Img />
          </ImgWrapper>
          <BoxWrapperBorder>
            <BoxWrapper>
              <DescriptionWrapper>
                <Text textType={TextType.HEADING} text="Mela" />
                <Heart />
                <Heart />
                <Heart />
                <Heart />
                <Heart />
                <Text
                  textType={TextType.TEXT}
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam minus porro magni debitis nam, perferendis, voluptatibus in optio odio ab tempora. Porro iste labore placeat in quaerat, reiciendis incidunt? Perferendis?"
                />
              </DescriptionWrapper>
            </BoxWrapper>
          </BoxWrapperBorder>
        </DetailModal>
      )}
    </Wrapper>
  );
};

export default Bag;

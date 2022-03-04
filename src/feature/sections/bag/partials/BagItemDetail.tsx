import React, { useMemo } from "react";
import { Icon } from "../../../../components/ui/icon/Icon";
import { IconType } from "../../../../components/ui/icon/IconType";
import { TextType } from "../../../../components/ui/text/IText";
import Text from "../../../../components/ui/text/Text";
import { IBreakpoint } from "../../../../hooks/useWindowSize";
import {
  BoxWrapper,
  BoxWrapperBorder,
  DescriptionWrapper,
  DetailModal,
  DetailWrapperDesktop,
  Heart,
  Img,
  ImgWrapper,
} from "../BagStyles";

export const BagItemDetail: React.FC<{
  breakpoint: IBreakpoint;
  isModalOpen: boolean;
  setIsModalOpen: any;
}> = ({ breakpoint, isModalOpen, setIsModalOpen }) => {
  const BagItemDetailMemo = useMemo(() => {
    return breakpoint === "DESKTOP" ? (
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
    );
  }, [breakpoint, isModalOpen, setIsModalOpen]);

  return BagItemDetailMemo;
};

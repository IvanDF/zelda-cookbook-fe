import { Icon } from "../../components/ui/icon/Icon";
import { IconType } from "../../components/ui/icon/IconType";
import {
  BagMenu,
  BagSlider,
  BagWrapper,
  DetailWrapper,
  Slider,
  Wrapper,
} from "./BagStyles";

export const Bag: React.FC = () => {
  return (
    <Wrapper>
      <BagWrapper>
        <BagMenu>Menu</BagMenu>
        <BagSlider>
          <Icon name={IconType.SEARCH} />
          <Slider></Slider>
          <Icon name={IconType.SEARCH} />
        </BagSlider>
      </BagWrapper>
      <DetailWrapper>Detail</DetailWrapper>
    </Wrapper>
  );
};

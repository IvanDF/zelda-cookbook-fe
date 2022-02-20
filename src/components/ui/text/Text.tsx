import React from "react";
import styled from "styled-components";
import { Theme } from "../../../costants/Theme";
import { IGeneralStyles, IText, TextType } from "./IText";

export const commonStyles = (p: IGeneralStyles) => `
  color: ${p.color ? p.color : Theme.color.light};
  font-size: ${p.fontSize ? p.fontSize : Theme.font.size.s24};
  font-weight: ${p.fontWeight ? p.fontWeight : Theme.font.weight.bold};
  ${p.uppercase && "text-transform: uppercase;"}
`;

const Heading = styled.h2<IGeneralStyles>`
  ${(p) => commonStyles(p)};
`;

const Paragraph = styled.p<IGeneralStyles>`
  ${(p) => commonStyles(p)};
`;

const Text: React.FC<IText> = (props) => {
  const { textType = TextType.TEXT, text } = props;

  switch (textType) {
    case TextType.HEADING:
      return <Heading {...props} children={text} />;
    case TextType.TEXT:
      return <Paragraph {...props} children={text} />;
    default:
      return <Paragraph {...props} children={text} />;
  }
};

export default Text;

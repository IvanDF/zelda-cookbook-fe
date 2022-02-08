import React from "react";
import { TextType } from "../../components/text/IText";
import Text from "../../components/text/Text";

const Demo: React.FC = () => {
  return (
    <>
      <Text color="red" textType={TextType.HEADING} text="CIAO" />
    </>
  );
};

export default Demo;

import { JsxElement } from "typescript";

//  Iterface for component
export interface IText extends IGeneralStyles {
  text: string | JsxElement;
}

// Interface for texts general styles
export interface IGeneralStyles {
  // Name
  textType: TextType;
  color?: string;
  // Font properties
  fontSize?: string;
  fontWeight?: number;
  uppercase?: boolean;
}

// Type of text
export enum TextType {
  HEADING = "HEADING",
  TEXT = "TEXT",
}

import { JsxElement } from "typescript";

//  Iterface for component
export interface IText {
  // Name
  textType: string;
  // Font properties
  fontSize?: number;
  fontWeight?: number;
  // Text styles
  color: string;
  text: string | JsxElement;
}

// Interface for texts general styles
export interface IGeneralStyles {
  color: string;
  // Font properties
  fontSize?: number;
  fontWeight?: number;
}

// Type of text
export enum TextType {
  HEADING = "HEADING",
  TEXT = "TEXT",
}

import { ChangeEvent } from "react";

// Enum for input type
export enum IInputType {
  SEARCH = "SEARCH_INPUT",
  SELECT = "SELECT_INPUT",
}

// Input common types
export interface IInput {
  name: string;
  type: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  ariaLabel: string;
  placeholder: string;
}

// Interface for searchbar
export interface IInputSearch {
  InputType: IInputType.SEARCH;
  name: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  ariaLabel: string;
  placeholder?: string;
  setFocus: (e: boolean) => void;
}

// Interface for select
export interface IInputSelect {
  InputType: IInputType.SELECT;
  name: string;
  ariaLabel: string;
  setFocus: (e: boolean) => void;
  setHideBottom?: (e: boolean) => void;
  optionsList: IOptionList[];
}

// Interface for options list
export interface IOptionList {
  label: string;
  value: string;
}

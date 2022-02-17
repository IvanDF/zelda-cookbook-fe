import { ChangeEvent } from "react";

export interface IInputElement {
  name: string;
  type: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  ariaLabel: string;
  placeholder: string;
}

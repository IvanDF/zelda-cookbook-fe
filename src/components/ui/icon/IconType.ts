export enum IconType {
  /************************
   * UI ICON ENUMs
   ************************/
  SEARCH = "SEARCH",
}

export interface IIcon {
  name: IconType;
  width?: number;
  height?: number;
  color?: string;
}

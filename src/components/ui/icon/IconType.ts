export enum IconType {
  /************************
   * UI ICON ENUMs
   ************************/
  SEARCH = "SEARCH",
  FILTERS = "FILTERS",
}

export interface IIcon {
  name: IconType;
  width?: number;
  height?: number;
  color?: string;
}

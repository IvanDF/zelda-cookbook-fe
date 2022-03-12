export enum IconType {
  /************************
   * UI ICON ENUMs
   ************************/
  SEARCH = "SEARCH",
  FILTERS = "FILTERS",
  NEXT_ICON = "NEXT_ICON",
  PREV_ICON = "PREV_ICON",
  CLOSE = "CLOSE",
  RECEPES = "RECEPES",
  INGREDIENTS = "INGREDIENTS",
}

export interface IIcon {
  name: IconType;
  width?: number;
  height?: number;
  color?: string;
  onClick?: () => void;
}

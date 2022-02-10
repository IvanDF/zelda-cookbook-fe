import React from "react";
import { Theme } from "../../../costants/Theme";
import { IconType, IIcon } from "./IconType";

export const Icon: React.FC<IIcon> = ({
  name,
  width = 24,
  height = 24,
  color = Theme.color.light,
}) => {
  switch (name) {
    /************************
     * UI ICONS
     ************************/
    case IconType.SEARCH:
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5.29412C15 7.55174 12.8827 9.58823 10 9.58823C7.11728 9.58823 5 7.55174 5 5.29412C5 3.03649 7.11728 1 10 1C12.8827 1 15 3.03649 15 5.29412Z"
            stroke={color}
            stroke-width="2"
          />
          <path
            d="M4 11.4706L1 15"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      );
  }
};

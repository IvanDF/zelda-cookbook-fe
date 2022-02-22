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
            strokeWidth="2"
          />
          <path
            d="M4 11.4706L1 15"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case IconType.FILTERS:
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="6.39026"
            y1="5.84849"
            x2="6.39026"
            y2="18.3939"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M21.779 13.9603C22.1253 13.5301 22.0572 12.9006 21.627 12.5543C21.1968 12.208 20.5673 12.2761 20.221 12.7063L21.779 13.9603ZM12.5107 14.5245C12.1644 14.0943 11.5349 14.0262 11.1047 14.3725C10.6745 14.7188 10.6064 15.3483 10.9527 15.7785L12.5107 14.5245ZM20.221 12.7063L16.4132 17.4373L17.9712 18.6913L21.779 13.9603L20.221 12.7063ZM14.8551 17.4373L12.5107 14.5245L10.9527 15.7785L13.2971 18.6913L14.8551 17.4373ZM16.4132 17.4373C16.0129 17.9346 15.2554 17.9346 14.8551 17.4373L13.2971 18.6913C14.498 20.1832 16.7703 20.1832 17.9712 18.6913L16.4132 17.4373Z"
            fill="white"
          />
          <path
            d="M0.220988 6.64572C-0.125299 7.07596 -0.0572457 7.70545 0.372991 8.05174C0.803227 8.39803 1.43272 8.32998 1.77901 7.89974L0.220988 6.64572ZM9.48928 6.08156C9.83557 6.51179 10.4651 6.57985 10.8953 6.23356C11.3255 5.88727 11.3936 5.25777 11.0473 4.82754L9.48928 6.08156ZM1.77901 7.89974L5.58684 3.1688L4.02882 1.91478L0.220988 6.64572L1.77901 7.89974ZM7.14487 3.1688L9.48928 6.08156L11.0473 4.82754L8.70289 1.91478L7.14487 3.1688ZM5.58684 3.1688C5.98712 2.67148 6.74458 2.67148 7.14487 3.1688L8.70289 1.91478C7.50204 0.422818 5.22967 0.422819 4.02882 1.91478L5.58684 3.1688Z"
            fill="white"
          />
          <line
            x1="15.6097"
            y1="13.5455"
            x2="15.6097"
            y2="1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case IconType.PREV_ICON:
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 53 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.5 26L37 52L16 26L37 0L27.5 26Z"
            fill={color}
            fillOpacity="0.65"
          />
        </svg>
      );
    case IconType.NEXT_ICON:
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 53 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5 26L16 0L37 26L16 52L25.5 26Z"
            fill={color}
            fillOpacity="0.65"
          />
        </svg>
      );
  }
};

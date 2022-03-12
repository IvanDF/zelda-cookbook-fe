import React from "react";
import { Theme } from "../../../costants/Theme";
import { IconType, IIcon } from "./IconType";

export const Icon: React.FC<IIcon> = ({
  name,
  width = 24,
  height = 24,
  color = Theme.color.light,
  onClick,
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
          onClick={onClick}
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
          onClick={onClick}
        >
          <path
            d="M25.5 26L16 0L37 26L16 52L25.5 26Z"
            fill={color}
            fillOpacity="0.65"
          />
        </svg>
      );
    case IconType.CLOSE:
      return (
        <svg
          onClick={onClick}
          width={width}
          height={height}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M3 17L17.1421 2.85786"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M3 3L17.1421 17.1421"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      );
    case IconType.RECEPES:
      return (
        <svg width={width} height={height} viewBox="0 0 39 39" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.6944 20.2592H6.0235V32.0726C6.0235 33.6913 7.33784 35.0052 8.95615 35.0052H29.7297C31.3658 35.0052 32.6944 33.6767 32.6944 32.0405V20.2592Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.7179 17.9568C38.7179 16.9461 37.8974 16.1256 36.8867 16.1256H1.83118C0.820458 16.1256 0 16.9461 0 17.9568V18.9143C0 19.925 0.820458 20.7455 1.83118 20.7455H36.8867C37.8974 20.7455 38.7179 19.925 38.7179 18.9143V17.9568Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.7829 20.7374C36.7829 20.7374 32.6853 20.9463 32.6853 24.835V20.5676L36.7829 20.7374Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.9303 20.7403C1.9303 20.7403 6.02785 20.9492 6.02785 24.8379V20.5705L1.9303 20.7403Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.9186 3.94702C22.554 4.17227 23.7269 5.55149 23.3683 6.89061C23.0096 8.22937 24.2146 8.34892 24.2146 8.34892L28.3628 9.4606C30.3238 9.98582 30.8701 11.6985 30.8701 11.6985C32.5741 15.0657 30.0989 14.5765 30.0989 14.5765L8.12911 8.68971C8.12911 8.68971 5.70637 8.06717 8.90036 5.81173C9.54404 5.35722 10.2213 4.59945 12.1822 5.12504L16.3308 6.23636C16.3308 6.23636 17.4341 6.73534 17.7927 5.39658C18.1514 4.05746 19.8568 3.4495 21.3858 4.07204"
            fill={color}
          />
        </svg>
      );
    case IconType.INGREDIENTS:
      return (
        <svg width={width} height={height} viewBox="0 0 25 24" fill="none">
          <path
            d="M4.1957 2.74224C-0.0501215 4.7685 -0.20513 9.24678 0.0984764 12.4989C0.238333 14.9515 0.9551 17.3697 2.62726 19.2578C7.88122 25.1901 19.4806 24.5109 23.2101 17.4049C25.3502 13.3274 26.6646 4.29962 20.5852 2.74224C17.573 1.97079 15.0034 2.90374 12.0035 3.11917C10.433 3.23213 9.5799 2.6236 8.13093 2.40136C6.99575 2.22737 5.25803 2.2356 4.1957 2.74224Z"
            fill={color}
          />
          <path
            d="M16.9355 4.7184C15.5349 6.79891 9.5586 6.93784 8.06451 4.7184"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7097 5.64516C13.7097 5.64516 13.3265 1.13129 12.4654 0.181612C12.0393 -0.288212 11.2903 0.301923 11.2903 0.301923L11.8696 5.64516L12.9032 5.64516H13.7097Z"
            fill={color}
          />
        </svg>
      );
  }
};

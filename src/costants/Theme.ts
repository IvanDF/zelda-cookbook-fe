export const Theme = {
  color: {
    // Basic Colors
    black: "#000000",
    white: "#FFFFFF",
    // Basic Colors
    dark: "#121212",
    light: "#DDDDDD",
    red: "#dd0000",

    active: "#E5FCFC", // Active color
  },

  // Font settings
  font: {
    //  Sizes
    size: {
      s14: "14px",
      s18: "18px",
      s24: "24px",
    },

    // Weight
    weight: {
      regular: 400,
      bold: 700,
    },
  },

  // Opacity
  opacity: {
    hide: 0,
    o1: 0.1,
    o2: 0.2,
    o3: 0.3,
    o4: 0.4,
    o5: 0.5,
    o6: 0.6,
    o7: 0.7,
    o8: 0.8,
    o9: 0.9,
  },
};

// Covert hex colors to rgba
export const hexToRgba = (hex: string, opacity: number) => {
  let r: string = "0";
  let g: string = "0";
  let b: string = "0";

  // 3 digits
  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];

    // 6 digits
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }

  return `rgba(${+r}, ${+g}, ${+b}, ${opacity})`;
};

// Extra themes
export const ThemeExtra = {
  // Blur
  blur: {
    b10: "blur(10px)",
    b15: "blur(15px)",
  },

  // Shadow
  shadow: {},

  // Transition
  transition: {},

  // Background
  background: {
    bgBlack02: `${hexToRgba(Theme.color.black, Theme.opacity.o2)}`,
    bgBlack05: `${hexToRgba(Theme.color.black, Theme.opacity.o5)}`,
    bgDark06: `${hexToRgba(Theme.color.dark, Theme.opacity.o6)}`,
    gradient: {
      darkToNone: `linear-gradient(
        90deg,
        ${hexToRgba(Theme.color.dark, Theme.opacity.o7)} 0%,
        ${hexToRgba(Theme.color.dark, Theme.opacity.hide)} 100%
      )`,
    },
  },
};

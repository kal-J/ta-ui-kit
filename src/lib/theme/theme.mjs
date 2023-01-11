// Extend default Tailwind Theme
import defaultTheme from "tailwindcss/defaultTheme";
import defaultColors from "tailwindcss/colors";

const palette = {
  orange: defaultColors.orange,
  green: defaultColors.green,
  red: defaultColors.red,
  black: defaultColors.black,
  white: defaultColors.white,
  gray: defaultColors.gray,
};
const colors = {
  background: palette.white,
  foreground: palette.black,
  primary: palette.orange,
  success: palette.green,
  danger: palette.red,
  failure: palette.red,
  active: palette.green["700"],
};

const spacing = {
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "40px",
};

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    ...colors,
  },
  spacing: {
    ...defaultTheme.spacing,
    ...spacing,
  },
};

export default theme;

/// <reference types="react-scripts" />

/* ====================================
  Theme
==================================== */
type ColourFragment = {
  light: string
  main: string
  dark: string
}

type CommonColours = {
  black: string
  white: string
  blackPearl: string
}

type ColourPalette = {
  primary: ColourFragment
  secondary: ColourFragment
  accent: ColourFragment
  success: ColourFragment
  danger: ColourFragment
  warning: ColourFragment
  common: CommonColours
}

type Typography = {
  fontFamily: {
    primary: string
    secondary: string
  }
}

type Borders = {
  seperator: string
}

type ThemeType = {
  typography: Typography
  palette: ColourPalette
  borders: Borders
}

type WithTheme = {
  theme: ThemeType
}

/* ====================================
  Game
==================================== */

type TurnsType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

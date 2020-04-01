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

type ThemeType = {
  typography: {
    fontFamily: {
      primary: string
      secondary: string
    }
  }
  palette: ColourPalette
}

type WithTheme = {
  theme: ThemeType
}

/* ====================================
  Game
==================================== */

type XOType = 'X' | 'O'

type TurnsType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

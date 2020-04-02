import { lighten, darken, rgba } from 'polished'

const palette = {
  primary: '#0fbcf9',
  secondary: '#fd79a8',
  accent: '#4bcffa',
  success: '#05c46b',
  danger: '#f53b57',
  warning: '#ffa801',
  blackPearl: '#1e272e',
  black: '#2d3436',
  white: '#ecf0f1',
}

export const theme: ThemeType = {
  typography: {
    fontFamily: {
      primary: '"Raleway", Arial, sans-serif',
      secondary: 'Liu Jian Mao Cao',
    },
  },
  palette: {
    primary: {
      light: lighten(0.25, palette.primary),
      main: palette.primary,
      dark: darken(0.5, palette.primary),
    },
    secondary: {
      light: lighten(0.25, palette.secondary),
      main: palette.secondary,
      dark: darken(0.5, palette.secondary),
    },
    accent: {
      light: lighten(0.25, palette.accent),
      main: palette.accent,
      dark: darken(0.5, palette.accent),
    },
    success: {
      light: lighten(0.25, palette.success),
      main: palette.success,
      dark: darken(0.5, palette.success),
    },
    danger: {
      light: lighten(0.25, palette.danger),
      main: palette.danger,
      dark: darken(0.5, palette.danger),
    },
    warning: {
      light: lighten(0.25, palette.warning),
      main: palette.warning,
      dark: darken(0.5, palette.warning),
    },
    common: {
      black: palette.black,
      white: palette.white,
      blackPearl: palette.blackPearl,
    },
  },
  borders: {
    seperator: `2px solid ${rgba(palette.blackPearl, 0.7)}`,
  },
}

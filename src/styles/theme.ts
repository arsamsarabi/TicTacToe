import { lighten, darken } from 'polished'

const PRIMARY_COLOUR = '#81ecec'
const SECONDARY_COLOUR = '#fd79a8'
const ACCENT_COLOUR = '#bbbbbe'
const SUCCESS_COLOUR = '#27ae60'
const DANGER_COLOUR = '#e74c3c'
const WARNING_COLOUR = '#e67e22'

export const theme: ThemeType = {
  typography: {
    fontFamily: {
      primary: '"Nunito", Arial, sans-serif',
      secondary: 'Sen',
    },
  },
  palette: {
    primary: {
      light: lighten(0.1, PRIMARY_COLOUR),
      main: PRIMARY_COLOUR,
      dark: darken(0.1, PRIMARY_COLOUR),
    },
    secondary: {
      light: lighten(0.1, SECONDARY_COLOUR),
      main: SECONDARY_COLOUR,
      dark: darken(0.1, SECONDARY_COLOUR),
    },
    accent: {
      light: lighten(0.1, ACCENT_COLOUR),
      main: ACCENT_COLOUR,
      dark: darken(0.1, ACCENT_COLOUR),
    },
    success: {
      light: lighten(0.1, SUCCESS_COLOUR),
      main: SUCCESS_COLOUR,
      dark: darken(0.1, SUCCESS_COLOUR),
    },
    danger: {
      light: lighten(0.1, DANGER_COLOUR),
      main: DANGER_COLOUR,
      dark: darken(0.1, DANGER_COLOUR),
    },
    warning: {
      light: lighten(0.1, WARNING_COLOUR),
      main: WARNING_COLOUR,
      dark: darken(0.1, WARNING_COLOUR),
    },
    common: {
      black: '#2d3436',
      white: '#ecf0f1',
    },
  },
}

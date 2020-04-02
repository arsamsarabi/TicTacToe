import { lighten, darken } from 'polished'

const PRIMARY_COLOUR = '#0fbcf9'
const SECONDARY_COLOUR = '#fd79a8'
const ACCENT_COLOUR = '#4bcffa'
const SUCCESS_COLOUR = '#05c46b'
const DANGER_COLOUR = '#f53b57'
const WARNING_COLOUR = '#ffa801'

export const theme: ThemeType = {
  typography: {
    fontFamily: {
      primary: '"Raleway", Arial, sans-serif',
      secondary: 'Liu Jian Mao Cao',
    },
  },
  palette: {
    primary: {
      light: lighten(0.25, PRIMARY_COLOUR),
      main: PRIMARY_COLOUR,
      dark: darken(0.5, PRIMARY_COLOUR),
    },
    secondary: {
      light: lighten(0.25, SECONDARY_COLOUR),
      main: SECONDARY_COLOUR,
      dark: darken(0.5, SECONDARY_COLOUR),
    },
    accent: {
      light: lighten(0.25, ACCENT_COLOUR),
      main: ACCENT_COLOUR,
      dark: darken(0.5, ACCENT_COLOUR),
    },
    success: {
      light: lighten(0.25, SUCCESS_COLOUR),
      main: SUCCESS_COLOUR,
      dark: darken(0.5, SUCCESS_COLOUR),
    },
    danger: {
      light: lighten(0.25, DANGER_COLOUR),
      main: DANGER_COLOUR,
      dark: darken(0.5, DANGER_COLOUR),
    },
    warning: {
      light: lighten(0.25, WARNING_COLOUR),
      main: WARNING_COLOUR,
      dark: darken(0.5, WARNING_COLOUR),
    },
    common: {
      black: '#2d3436',
      white: '#ecf0f1',
      blackPearl: '#1e272e',
    },
  },
}

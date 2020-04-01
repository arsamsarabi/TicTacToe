import { createGlobalStyle, css } from 'styled-components'
import { resetCss } from './reset'

interface GlobalStyleProps {
  theme: ThemeType
}

export const GlobalStyles = createGlobalStyle<GlobalStyleProps>(({ theme }) => {
  return css`
    ${resetCss}

    body {
      font-family: ${theme.typography.fontFamily.primary};
      font-size: 18px;
      color: ${theme.palette.common.white};
    }

    #root {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    code {
      font-family: 'source-code-pro', Consolas, Menlo, Monaco, 'Courier New', monospace;
    }
  `
})

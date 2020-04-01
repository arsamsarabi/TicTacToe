import React, { ReactElement, FC } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import { theme, GlobalStyles } from '../styles'

const LayoutWrapper = styled.main<WithTheme>(({ theme }) => {
  return css`
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    background-color: ${theme.palette.common.black};
  `
})

interface LayoutProps {
  children: ReactElement | ReactElement[]
}

const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutWrapper>{children}</LayoutWrapper>
    </ThemeProvider>
  )
}

export default Layout

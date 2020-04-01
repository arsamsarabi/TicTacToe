import React, { ReactElement, FC } from 'react'
import styled, { css } from 'styled-components'

import { resetButton } from '../styles'

type CellWrapperProps = WithTheme & {
  content: XOType | ''
}

const CellWrapper = styled.div<CellWrapperProps>(({ theme, content }) => {
  return css`
    width: 200px;
    height: 200px;
    border: 1px solid ${theme.palette.common.white};
    box-sizing: border-box;
    font-family: ${theme.typography.fontFamily.primary};
    font-size: 5rem;
    font-weight: 700;
    color: ${content === 'X' ? theme.palette.primary.main : theme.palette.secondary.main};

    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3) {
      border-top: none;
    }
    &:nth-of-type(3),
    &:nth-of-type(6),
    &:nth-of-type(9) {
      border-right: none;
    }
    &:nth-of-type(7),
    &:nth-of-type(8),
    &:nth-of-type(9) {
      border-bottom: none;
    }
    &:nth-of-type(1),
    &:nth-of-type(4),
    &:nth-of-type(7) {
      border-left: none;
    }

    & > button {
      ${resetButton}
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
})

interface CellProps {
  content: XOType | ''
  handleClick(): void
}

const Cell: FC<CellProps> = ({ content, handleClick }): ReactElement => {
  return (
    <CellWrapper content={content}>
      <button onClick={handleClick}>{content}</button>
    </CellWrapper>
  )
}

export default Cell

import React, { ReactElement, FC } from 'react'
import styled, { css } from 'styled-components'

import { resetButton } from '../styles'
import { useStores } from '../stores'

type CellWrapperProps = WithTheme & {
  color: string
}

const CellWrapper = styled.div<CellWrapperProps>(({ theme, color }) => {
  return css`
    width: 200px;
    height: 200px;
    border: 1px solid ${theme.palette.common.white};
    box-sizing: border-box;
    font-family: ${theme.typography.fontFamily.secondary};
    font-size: 6rem;
    font-weight: 600;
    color: ${color};

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
      cursor: pointer;
      &:disabled {
        pointer-events: none;
      }
    }
  `
})

interface CellProps {
  content: string
  handleClick(): void
}

const Cell: FC<CellProps> = ({ content, handleClick }): ReactElement => {
  const {
    TicTacToeStore: { player1, player2 },
  } = useStores()

  const color = content === player1.symbol ? player1.color : player2.color

  return (
    <CellWrapper color={color}>
      <button onClick={handleClick} disabled={content !== ''}>
        {content}
      </button>
    </CellWrapper>
  )
}

export default Cell

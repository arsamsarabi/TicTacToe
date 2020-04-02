import React, { ReactElement, FC } from 'react'
import styled, { css } from 'styled-components'
import { observer } from 'mobx-react-lite'
import { rgba } from 'polished'

import { useStores } from '../stores'
import Button from './Button'
import PlayersPanel from './PlayersPanel'

const InfoWrapper = styled.section(({ theme }) => {
  return css`
    border-right: 3px solid ${rgba(theme.palette.common.blackPearl, 0.7)};
    flex: 1;
    align-self: stretch;
    padding: 16px;
  `
})

const GameName = styled.h1(({ theme }) => {
  return css`
    font-family: ${theme.typography.fontFamily.secondary};
    font-size: 2.5rem;
    display: block;
    text-align: center;
  `
})

const Info: FC = (): ReactElement => {
  const {
    TicTacToeStore: { restart },
  } = useStores()

  return (
    <InfoWrapper>
      <GameName>Tic Tac Toe</GameName>
      <PlayersPanel />
      <Button onClick={restart} variant="outlined" color="secondary">
        Restart Game
      </Button>
    </InfoWrapper>
  )
}

export default observer(Info)

import React, { ReactElement, FC } from 'react'
import styled, { css } from 'styled-components'
import { observer } from 'mobx-react-lite'

import { useStores } from '../stores'
import Button from './Button'
import PlayersPanel from './PlayersPanel'

const InfoWrapper = styled.section(({ theme }) => {
  return css`
    border-right: ${theme.borders.seperator};
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
    margin-bottom: 16px;
  `
})

const Info: FC = (): ReactElement => {
  const {
    TicTacToeStore: { restart, gameCount },
  } = useStores()

  return (
    <InfoWrapper>
      <GameName>Tic Tac Toe</GameName>
      <p>{`Game number ${gameCount}`}</p>
      <PlayersPanel />
      <Button onClick={restart} variant="outlined" color="secondary">
        Restart Game
      </Button>
    </InfoWrapper>
  )
}

export default observer(Info)

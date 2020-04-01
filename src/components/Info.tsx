import React, { ReactElement, FC } from 'react'
import styled, { css } from 'styled-components'
import { observer } from 'mobx-react-lite'

import { useStores } from '../stores'

const InfoWrapper = styled.section(() => {
  return css`
    border-right: 3px solid white;
    flex: 1;
    align-self: stretch;
  `
})

const Info: FC = (): ReactElement => {
  const {
    TicTacToeStore: {
      game: { turn, nextTurn, isGameOver },
      restart,
    },
  } = useStores()

  return (
    <InfoWrapper>
      {isGameOver ? 'Game Over!' : 'Game on'}
      <p>{turn}</p>
      <button onClick={nextTurn} disabled={isGameOver}>
        Next Turn
      </button>
      <button onClick={restart}>Restart Game</button>
    </InfoWrapper>
  )
}

export default observer(Info)

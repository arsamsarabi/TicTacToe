import React, { ReactElement, FC } from 'react'
import styled, { css } from 'styled-components'

import Board from './Board'
import Info from './Info'
import GameOverModal from './GameOverModal'

const GameWrapper = styled.section(() => {
  return css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: stretch;
  `
})

const GameArea = styled.section(() => {
  return css`
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  `
})

const Game: FC = (): ReactElement => {
  return (
    <GameWrapper>
      <Info />
      <GameArea>
        <Board />
        <GameOverModal />
      </GameArea>
    </GameWrapper>
  )
}

export default Game

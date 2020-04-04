import React, { ReactElement } from 'react'
import { observer } from 'mobx-react-lite'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import Button from './Button'
import { useStores } from '../stores'

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalTitle = styled.h2(({ theme }) => {
  return css`
    font-family: ${theme.typography.fontFamily.secondary};
    color: ${theme.palette.accent.main};
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
    line-height: 1;
    margin-bottom: 24px;
  `
})

const ModalContent = styled.main(({ theme }) => {
  return css`
    background-color: ${rgba(theme.palette.common.black, 0.6)};
    padding: 16px 48px;
    display: flex;
    flex-direction: column;
    &:focus {
      outline: none;
    }

    & > p {
      margin-bottom: 24px;
    }
  `
})

const GameOverModal = (): ReactElement => {
  const {
    TicTacToeStore,
    TicTacToeStore: { game },
  } = useStores()

  return (
    <StyledModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={game.isGameOver}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={game.isGameOver}>
        <ModalContent>
          <ModalTitle id="transition-modal-title">Game Over!</ModalTitle>
          <p id="transition-modal-description">{game.gameOverMessage}</p>
          <Button onClick={TicTacToeStore.restart} variant="outlined" color="secondary">
            New Game
          </Button>
        </ModalContent>
      </Fade>
    </StyledModal>
  )
}

export default observer(GameOverModal)

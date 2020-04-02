import React, { FC, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { observer } from 'mobx-react-lite'

import { useStores } from '../stores'
import PlayerInfo from './PlayerInfo'

const PlayersPanelWrapper = styled.div<WithTheme>(({ theme }) => {
  return css`
    border-top: 1px solid ${theme.palette.primary.light};
    border-bottom: 1px solid ${theme.palette.primary.light};
    margin: 16px 0;
    padding: 8px 0;
  `
})

const PlayersPanel: FC = (): ReactElement => {
  const {
    TicTacToeStore: { player1, player2 },
  } = useStores()
  return (
    <PlayersPanelWrapper>
      <PlayerInfo player={player1} />
      <PlayerInfo player={player2} />
    </PlayersPanelWrapper>
  )
}

export default observer(PlayersPanel)

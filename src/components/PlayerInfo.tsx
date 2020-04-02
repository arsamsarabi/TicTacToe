import React, { FC, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { observer } from 'mobx-react-lite'

import { PlayerStoreType } from '../stores/Player.store'

type PlayerInFoWrapperProps = WithTheme & {
  isActive: boolean
  color: string
}

const PlayerIntoWrapper = styled.p<PlayerInFoWrapperProps>(({ theme, isActive, color }) => {
  return css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    opacity: ${isActive ? 1 : 0.25};

    & > span:nth-of-type(1) {
      font-family: ${theme.typography.fontFamily.secondary};
      font-size: 2rem;
      font-weight: 700;
      width: 35px;
      line-height: 1;
      color: ${color};
    }

    & > span:nth-of-type(2) {
      width: 125px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `
})

interface PlayerInfoProps {
  player: PlayerStoreType
}

const PlayerInfo: FC<PlayerInfoProps> = ({
  player: { myTurn, symbol, name, wins, color },
}): ReactElement => {
  return (
    <PlayerIntoWrapper isActive={myTurn} color={color}>
      <span>{symbol}</span>
      <span>{name}</span>
      <span>{`Wins: ${wins}`}</span>
    </PlayerIntoWrapper>
  )
}

export default observer(PlayerInfo)

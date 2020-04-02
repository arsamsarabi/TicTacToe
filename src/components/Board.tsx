import React, { ReactElement, FC } from 'react'
import styled, { css } from 'styled-components'
import { observer } from 'mobx-react-lite'

import { useStores } from '../stores'
import { CellStoreType } from '../stores/Cell.store'
import Cell from './Cell'

const BoardWrapper = styled.div(() => {
  return css`
    width: 600px;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
  `
})

const Board: FC = (): ReactElement => {
  const {
    TicTacToeStore: {
      game: { board },
      play,
    },
  } = useStores()

  return (
    <BoardWrapper>
      {board.cells.map(
        (cellStore: CellStoreType): ReactElement => (
          <Cell
            key={cellStore.position}
            content={cellStore.content}
            handleClick={(): void => play(cellStore.position)}
          />
        ),
      )}
    </BoardWrapper>
  )
}

export default observer(Board)
